---
layout: examples
title: Parallel Execution for Large Problems
permalink: /examples/parallel_execution_for_large_problems/
---

<a id="topcall"></a>


<h3>Contents</h3>
* <a data-scroll href="#Parallel"> Why Parallel?</a>
* <a data-scroll href="#Syn">Synchronous Parallel Calculations</a>
* <a data-scroll href="#Asy">Asynchronous Parallel Calculations</a>

<a id="Parallel"></a>
<h3>Why Parallel?</h3>

APBS requires approximately 200 B memory per grid point. Memory usage can be predicted before performing the calculations using the <a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/master/apbs/tools/manip/psize.py">Python script</a> provided with APBS.
If it appears your calculation is going to require more memory than is currently available on your system, you have a few options:

* APBS calculations can be performed in parallel across multiple processors (hopefully, sharing distributed memory!). This functionality is provided by the mg-para keyword which is described in more detail in the <a href="{{site.baseurl}}/docs/apbs-overview/#elec">APBS user guide</a> and below.
* APBS calculations can be broken into a series of smaller, asynchronous runs which (individually) require less memory. This functionality is provided by the mg-para async keyword which is described in more detail in the <a href="{{site.baseurl}}/docs/apbs-overview/#elec" target="BLANK">APBS user guide</a> and below.
* Submit your calculations through the <a href="{{site.baseurl}}/docs/usage/">APBS Opal client</a> as described in the <a href="{{site.baseurl}}/docs/apbs-overview/#elec">APBS user guide</a> to use external computational resources.
* Submit your calculations through a <a href="{{site.baseurl}}/examples/running_apbs_through_pdb2pqr_web_portal/">web interface</a> to use external computational resources as described in the <a href="{{site.baseurl}}/examples/running_apbs_through_pdb2pqr_web_portal/">"How do I run my calculation on someone else's computer?"</a> section.

<a data-scroll href="#topcall">top</a>

<a id="Syn"></a>
<h3>Synchronous Parallel Calculations</h3>

The actin dimer example provided with the APBS distribution 
<a href="http://apbs.svn.sourceforge.net/viewvc/apbs/trunk/examples/actin-dimer/" target="BLANK">(examples/actin-dimer/complex.pqr)</a> is a fairly large system that can often require too much memory for some systems. As such, it is a good example for parallel focusing calculations. This example will use the actin dimer complex PQR file <a href="http://apbs.svn.sourceforge.net/viewvc/apbs/trunk/examples/actin-dimer/complex.pqr?view=markup" target="BLANK">complex.pqr</a>.

We're going to use an 8-processor parallel calculation to write out the electrostatic potential map for this complex. Each processor will solve a portion of the overall problem using the parallel focusing method on a 973 mesh with 20% overlap between meshes for neighboring processors. An example input file for this calculation might look like:
{% highlight bash %}
read
	mol pqr complex.pqr
end
elec name complex
	mg-para
	ofrac 0.1
	pdime 2 2 2
	dime 97 97 97
	fglen 150 115 160
	cglen 156 121 162
	cgcent mol 1
	fgcent mol 1
	mol 1
	npbe
	bcfl sdh
	ion 1 0.150 2.0
	ion -1 0.150 2.0 
	pdie 2.0
	sdie 78.54
	srfm mol
	chgm spl0
	srad 1.4
	swin 0.3
	sdens 10.0
	temp 298.15
	calcenergy total
	calcforce no
	write pot dx pot
end
quit
{% endhighlight %}
where the <a href="{{site.baseurl}}/docs/apbs-overview/">pdime</a> 2 2 2 specifies the 8-processor array dimensions, the <a href="{{site.baseurl}}/docs/apbs-overview/">ofrac</a> 0.1 specifies the 20% overlap between processor calculations, and the <a href="{{site.baseurl}}/docs/apbs-overview/" >dime</a> 97 97 97 specifies the size of each processor's calculation. The <a href="{{site.baseurl}}/docs/apbs-overview/">write</a> pot dx pot instructs APBS to write out OpenDX-format maps of the potential to 8 files pot#.dx, where # is the number of the particular processor.

Running this input file with an MPI-compiled version of APBS runs 8 parallel focusing calculations, with each calculation generating fine-scale solutions on a different region of the (fglen) problem domain. Note that 8 separate <a href="{{site.baseurl}}/docs/file-format-info/">OpenDX</a> files are written by the 8 processors used to perform the calculation. Writing separate <a href="{{site.baseurl}}/docs/file-format-info/">OpenDX</a> files allows us to avoid communication in the parallel run and keeps individual file sizes (relatively) small. Additionally, if a user is interested in a specific portion of the problem domain, only a few files are needed to get local potential information.

However, most users are interested in global potentials. For some programs (<a href="{{site.baseurl}}/docs/file-format-info/" >OpenDX</a>, <a href="http://www.visualdatatools.com/" >DataTank</a>), the individual potential files can simply be read into the program separately and the program will reconstruct the global map. Most other programs will require the user to reassemble the global map first; APBS provides the mergedx program for this purpose. mergedx is a simple program that allows users to combine several <a href="{{site.baseurl}}/docs/file-format-info/">OpenDX</a> files from a parallel focusing calculation into a single map. This map can be down-sampled from the original resolution to provide coarser datasets for fast visualization, etc. For example, the command
{% highlight bash %}	
$ mergedx 65 65 65 pot0.dx pot1.dx pot2.dx pot3.dx pot4.dx pot5.dx pot6.dx pot7.dx
{% endhighlight %}
will generate a file gridmerged.dx which has downsampled the much larger dataset contained in the 8 OpenDX files into a 653 file which would be suitable for rough visualization. An example of mergedx output visualization (see the How do I visualize the electrostatic potential around my biomolecule? section for more information about visualization) is shown in the attached figure.  Note that downsampling isn't necessary -- and often isn't desirable for high quality visualization or quantitative analysis.

<img src="{{site.baseurl}}/img/actin_dimer-iso_trans.jpg">

<a data-scroll href="#topcall">top</a>

<a id="Asy"></a>
<h3>Asynchronous Parallel Calculations</h3>

The steps described in the previous section can also be performed for systems or binaries which are not equipped for parallel calculations via MPI. In particular, you can add
{% highlight bash %}
async n
{% endhighlight %}

to the ELEC mg-para section of the APBS input file to make the single-processor calculation masquerade as processor n of a parallel calculation.

Scalar maps from asynchronous APBS calculations can be combined using the mergedx program as described above. Currently, energies and forces from asynchronous APBS calculations need to merged manually (e.g., summed) from the individual asynchronous calculation output. This can be accomplished by simple shell scripts.

As a specific example, we can modify the input file above to include an <a href="{{site.baseurl}}/docs/apbs-overview/">async</a>
 0 command in the ELEC statement and thus cause APBS to perform the operations of the first processor in the parallel focusing calculation. The modified input file should look like:

{% highlight bash %}
read
	mol pqr complex.pqr
end
elec name complex
	mg-para
	ofrac 0.1
	pdime 2 2 2
	async 0
	dime 97 97 97
	fglen 150 115 160
	cglen 156 121 162
	cgcent mol 1
	fgcent mol 1
	mol 1
	npbe
	bcfl sdh
	ion 1 0.150 2.0
	ion -1 0.150 2.0 
	pdie 2.0
	sdie 78.54
	srfm mol
	chgm spl0
	srad 1.4
	swin 0.3
	sdens 10.0
	temp 298.15
	calcenergy total
	calcforce no
	write pot dx pot
end
quit
{% endhighlight %}


This should create an <a href="{{site.baseurl}}/docs/file-format-info/">OpenDX-format</a> potential map called pot.dx, corresponding to the output from processor 0 in a parallel focusing calculation. Performing additional APBS calculations with async 1, async 2, ..., async 7 will generate the corresponding OpenDX maps for the remaining processors of the parallel focusing calculations. These can then be reassembled with mergedx as described above.

<a data-scroll href="#topcall">top</a>

