---
layout: docs
title: Package Overview
prev_section: apbs-others
next_section: apbs-programmers
permalink: /docs/APBS_package_overview/
---

<img src="{{site.baseurl}}/images/apbs-icons/APBS_128_v2.png" class="apbs-icon" />

This page gives an overview of the binaries, tools, etc. distributed as part of the APBS software package. It is organized by directory; later chapters provide a more in-depth description on tools specific to particular applications.

<a id="topcall"></a>

* <a data-scroll href="#MAINAPBS">The main APBS executable</a>
* <a data-scroll href="#OTHER">Other tools distributed with the APBS package</a>
	* <a data-scroll href="#PARA">Parameterization</a>
	* <a data-scroll href="#PS">Problem setup</a>
	* <a data-scroll href="#ODP">Output data processing</a>
		* <a data-scroll href="#CONV"> Conversion</a>
		* <a data-scroll href="#MANIP">Manipulation</a>
	* <a data-scroll href="#DATAV"> Data visualization</a>
	* <a data-scroll href="#SA">Solvent accessibility</a>
	* <a data-scroll href="#COLANDGEN">Coulomb's Law and Generalized Born calculations</a>
		* <a data-scroll href="#COLLC">Coulomb's Law calculations</a>
		* <a data-scroll href="#GENBC">Generalized Born calculations</a>
	* <a data-scroll href="#EA"> Eigenvalue analysis</a>
	* <a data-scroll href="#PDT">Python development tools</a>
* <a data-scroll href="#EXANDTUT">Examples and tutorial</a>
* <a data-scroll href="#DOC">Documentation</a>
* <a data-scroll href="#SC">Source code</a>




<a id="MAINAPBS"></a>
<h3>The main APBS executable</h3>

As mentioned in the <a href="{{site.baseurl}}/docs/apbs-installation/" >Installation and availability section</a>, the <a href="{{site.baseurl}}/docs/apbs-invocation/" target="BLANK">main APBS binary</a>, as well as our new Opal client, is installed in `${APBS_PREFIX}/bin` where `${APBS_PREFIX}` is the top-level directory you chose for the installation. Of course, you can move the binary to any directory you choose.  APBS is invoked with a very simple syntax discussed in detail in the <a href="{{site.baseurl}}/examples/running_apbs_through_pdb2pqr_web_portal/" >Running APBS section</a>. 

<a data-scroll href="#topcall">top</a>
<a id="OTHER"></a>
<h3>Other tools distributed with the APBS package</h3> 

<a href="{{site.baseurl}}/docs/apbs-overview/" target="BLANK">APBS</a> contains a number of tools to facilitate the preparation of <a href="{{site.baseurl}}/docs/apbs-overview/" target="BLANK">APBS</a> runs and analysis of the results. 

<b>Note</b> In addition to the tools provided with <a href="{{site.baseurl}}/docs/apbs-overview/">APBS</a>, there are a number of other programs that are not distributed with APBS but which interoperate with our code. Please see the <a href="{{site.baseurl}}/examples/running_apbs_through_pdb2pqr_web_portal/" >Running APBS section</a> of this manual for more information.

<a data-scroll href="#topcall">top</a>
<a id="PARA"></a>
<h3>Parameterization</h3> 

Unfortunately, the majority of problems encountered during electrostatics calculations arise in process of taking a structure from the Protein Data Bank and transforming into a file that can be used by the APBS software. The <a href="{{site.baseurl}}/docs/pdb2pqr-license/" >PDB2PQR service</a> was developed to address these issues. Additionally, APBS provides the ability to read plain PDB-format files and assign charges and radii from user-supplied parameter files. These featers are described in the READ parm command description. 

APBS provides a few other miscellaneous tools for convertin and parameterizing structures:


`tools/conversion/qcd2pqr.awk`
&nbsp;Convert a QCD file (UHBD format for a molecule) to PQR format.

`tools/conversion/amber2charmm.sh`
&nbsp;A script which converts a PDB file with AMBER atom names to a PDB file with AMBER atom names.

`tools/conversion/WHATIF2AMBER.sed`
&nbsp;A sed script for converting a PDB file with WHATIF atom names to a PDB file with AMBER atom names. Written by Chiansan Ma. 


<a data-scroll href="#topcall">top</a>
<a id="PS"></a>
<h3>Problem setup</h3> 

In addition to parametrization of the molecule, there are several common operations which are performed to setup the calculation. This section reviews some of the tools available for these operations. Please note that PDB2PQR service also prepares APBS input files. 

The following scripts help generate or transform APBS input files. 

`tools/manip/psize.py`
&nbsp;Get the dimensions and center of a molecule in PQR format. Very useful for setting up input files (i.e., grid dimensions, lengths, spacings, etc.) for APBS calculations. Written by Todd Dolinsky and Nathan Baker.

`apbs/tools/manip/inputgen.py`
&nbsp;Generate an APBS input file from PQR format data using "suggested" parameters. Also can decouple a parallel calculation into a series of sequential (asynchronous) calculations to be performed on a single processor. Written by Todd Dolinsky and Nathan Baker.

`tools/mesh/mgmesh`
&nbsp;List acceptable grid dimensions/multigrid levels combinations for mg-manual calculations. Written by Nathan Baker.


<a data-scroll href="#topcall">top</a>
<a id="ODP"></a>
<h3>Output data processing</h3> 

The following tools perform typical analyses of the output data, usually in OpenDX format. These scripts are not meant to be comprehensive; instead, they provide templates for users to generate their own tools.

<a data-scroll href="#topcall">top</a>
<a id="CONV"></a>
<h5>Conversion</h5>

The following utilities convert APBS grid output (e.g., potentials, accessibility functions, etc.) into a variety of other formats:

`tools/mesh/uhbd_asc2bin`
&nbsp;Converts UHBD format grid files from ASCII to binary. Contributed by David Sept.

`tools/mesh/dx2mol`
&nbsp;Converts OpenDX format data to <a href="http://www.mol.biol.ethz.ch/groups/wuthrich_group/software">MOLMOL</a> format. Contributed by Jung-Hsin Lin with bug fixes by Fred Damberger.

`tools/mesh/dx2uhbd`
&nbsp;Converts OpenDX format data to UHBD format. Contributed by Robert Konecny.


<a data-scroll href="#topcall">top</a>
<a id="MANIP"></a>
<h5>Manipulation</h5>

The following utilities process APBS grid output in a variety of ways:

`tools/mesh/mergedx and tools/mesh/mergedx2`
&nbsp;Merge OpenDX format data from several domains (e.g., from a mg-para calculation into a single file). mergedx2 is easier to use and will eventually replace mergedx. Contributed by Steve Bond and Dave Gohara.

`tools/mesh/smooth`
&nbsp;Apply a very inefficient Gaussian filter to OpenDX format data from APBS. Written by Nathan Baker.


<a data-scroll href="#topcall">top</a>
<a id="DATAV"></a>
<h3>Data visualization</h3>

This section describes the data visualization tools provided with APBS. A more complete discussion of the various ways to visualize APBS output is presented in the Visualization section of this manual. Old tools for VMD have been removed since they are now completely replaced by OpenDX and APBS functionality available within VMD. 

`tools/visualization/opendx`
&nbsp;This directory contains the <a href="http://www.opendx.org/">OpenDX</a> program files (*.net) required to visualize APBS data with OpenDX. In particular, one can visualize single-file potential isocontours (pot.*), single-file potential data mapped onto molecular surfaces (potacc.*), or multiple-file potential data (multipot.*).


<a data-scroll href="#topcall">top</a>
<a id="SA"></a>
<h3>Solvent accessibility</h3> 

The main APBS executable calculates molecular volumes, surface areas, and other surface-based properties from PQR-format structural data. Such calculations are often used to determine apolar solvation contributions to binding events, etc. See the new <a href="{{site.baseurl}}/docs/apbs-overview/" >APOLAR input file section</a> for more documentation on this APBS feature. With the introduction of this new feature, we have deprecated and removed the stand-alone tools which used to perform these functions.

<a data-scroll href="#topcall">top</a>
<a id="COLANDGEN"></a>
<h3>Coulomb's Law and Generalized Born calculations</h3> 

<a data-scroll href="#topcall">top</a>
<a id="COLLC"></a>
<h5>Coulomb's Law calculations</h5>

These utilities are provided for occasional use and are definitely not optimized for speed. 

The program `tools/manip/coulomb` calculates vacuum Coulomb law energies from a PQR file. It has a number of options which can be viewed by running the coulomb program with no arguments.

<a data-scroll href="#topcall">top</a>
<a id="GENBC"></a>
<h5>Generalized Born calculations</h5>

The program `tools/manip/born` is a crude, non-optimal, buggy program for calculating Generalized Born electrostatic energies. This is only intended for hacking and general comparison with Poisson-Boltzmann results. 

The Python-based program `tools/python/runGB.py` is a test program designed to calculate generalized Born radii from APBS Poisson-Boltzmann calculations following the general methods of
<DL>
<DD>Onufriev A, Case DA, Bashford D. Effective Born radii in the generalized Born approximation: The importance of being perfect. J Comput Chem, 23 (14), 1297-304, 2002. <a href="http://onlinelibrary.wiley.com/doi/10.1002/jcc.10126/abstract;jsessionid=5B8B0785282BCF00F0C1A883C034268F.f03t02">http://dx.doi.org/10.1002/jcc.10126</a></DD>
</DL>

More information on this program can be obtained by running it from the command line with the --help option.

The Python-based program `tools/python/readGB.py` is a test program designed to use radii calculated from runGB.py (see above) and print out solvation energies. More information on this program can be obtained by running it from the command line with the --help option.

Both of these Python-based programs were written by Justin Xiang.

<a data-scroll href="#topcall">top</a>
<a id="EA"></a>
<h3>Eigenvalue analysis</h3> 

If APBS is linked with ARPACK `(see ./configure --help)`, the `tools/arpack/driver` routine will perform eigenvalue analyses of Poisson or Poisson-Boltzmann matrices produced by APBS.

<a data-scroll href="#topcall">top</a>
<a id="PDT"></a>
<h3>Python development tools</h3> 

There are a number of example <a href="https://www.python.org/">Python</a> tools and wrappers provided in the `tools/python` directory. These tools all make use of the APBS <a href="http://www.swig.org/">SWIG</a> wrappers developed by Todd Dolinsky, Nathan Baker, Alex Gillet, and Michel Sanner. The SWIG wrappers are compiled by default during normal installation. The Python scripts which link to the wrappers (and thereby illustrate their use) include:

`tools/python/main.py`
&nbsp;Drop-in replacement for main APBS executable. Only permits sequential runs.

`tools/python/noinput.py`
&nbsp;Similar to main.py, but adds the ability to read input files and PQR files as Python strings and return energies and forces as Python lists. This makes it a very useful tool for working with APBS via Python without dealing with a great deal of file I/O.

`tools/python/vgrid/`
&nbsp;Python wrappers for Vgrid class to allow OpenDX format file I/O in Python scripts


<a data-scroll href="#topcall">top</a>
<a id="EXANDTUT"></a>
<h3>Examples and tutorial</h3>

The APBS sub-directory examples contains several test systems which show how to use APBS for binding energy, solvation energy, and force calculations. The file examples/README.html contains descriptions of the test cases and links to anticipated results. Examples can be run and compared to expected results by running `make test` in each example directory.

Additional examples are provided as part of the APBS tutorial `doc/html/tutorial/`, described in more detail in the <a href="{{site.baseurl}}/docs/home/" >Documentation section</a>.

<a data-scroll href="#topcall">top</a>
<a id="DOC"></a>
<h3>Documentation</h3> 

The APBS sub-directory doc contains guides for using APBS and developing code based on APBS libraries. The sub-directories include:

`doc/html/user-guide/index.html`
&nbsp;HTML-format User Guide

`doc/html/programmer/index.html`
&nbsp;HTML-format Programmer Guide

`doc/html/tutorial/index.html`
&nbsp;HTML-format APBS tutorial


<a data-scroll href="#topcall">top</a>
<a id="SC"></a>
<h3>Source code</h3>

The APBS sub-directory src contains the source code for the APBS libraries and main executable. These files are described in more detailed in the <a href="{{site.baseurl}}/docs/apbs-programmers/" >programming section</a>.

<a data-scroll href="#topcall">top</a>

<script>
smoothScroll.init({
});
</script>
