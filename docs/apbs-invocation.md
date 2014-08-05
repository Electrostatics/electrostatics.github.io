---
layout: docs
title: Invocation
prev_section: apbs-overview
next_section: apbs-others
permalink: /docs/apbs-invocation/
---


<style>.section-nav {display:none;}</style>



##Invocation

In addition to using APBS through other programs, there are two ways to invoke APBS from the command line. The traditional approach uses the primary APBS binary to run APBS on local resources. However, in recent versions of APBS, we have added the ability to run APBS through a secondary Python-based program which can be invoked locally but uses Opal web services to run APBS on remote resources (with no expense to the user).

##APBS command-line binary

As mentioned in the [installation and availability section]({{site.baseurl}}/apbs-pdb2pqr/docs/installation/), the main APBS binary is installed in ${APBS_PREFIX}/bin where ${APBS_PREFIX} is the top-level directory you chose for the installation. Of course, you can move the binary to any directory you choose. APBS is invoked with a very simple syntax:

{% highlight bash %}
apbs [options] input-file
{% endhighlight %}

Command line options include:

<ul>
<li>--outputfile=name  Sets the output logging path (as described in the output logging section of the manual) to name, or name_N for parallel runs, where N is the processor ID. If --outputformat is not specified, a flat-file format will be used as the default.</li>
<li>--outputformat=type  Sets the output logging format. Accepted values are:
<ul>
	<li>flat  Flat-file format (default).</li>
	<li>xml  XML format</li>
</ul>
</li>
<li>--help  Displays command line usage</li>
<li>--version  Displays the current APBS version</li>
</ul>

input-file is an input file with a specific syntax described in the section [Input files]({{site.baseurl}}/apbs-pdb2pqr/docs/installation/). Besides the output files specified from within input-file and the optional logs as specified by use of the --output-file command line option, APBS writes data to three additional places:

<ul>
<li>Standard output. This will appear on your screen (if you don't redirect it somewhere) and will contain all the basic information about the electrostatics calculation.</li>
<li>Standard error. This will also appear on your screen (if you don't redirect it somewhere) and will contain warnings and error messages.</li>
<li>The file io.mc (or io.mc_N for parallel runs, where N is the processor ID. This gives you detailed information about the progress of the run with a particular focus on the numerical solver.</li>
</ul>

##APBS Opal client

The <a href="http://nbcr.ucsd.edu/data/docs/opal/" target="_blank">Opal Toolkit</a> is a set of software produced by the <a href="http://nbcr.ucsd.edu/" target="_blank">National Biomedical Computational Resource (NBCR)</a>. This toolkit allows for the computing load for processor intensive scientiﬁc applications to be shifted to a 3rd party and/or generic computing grid. This can be tremendously advantageous in situations where a large amount of computing power is not locally available, but is required, for the task at hand. In particular, many users have discovered that their local computational resources are insufficient for certain types of APBS calculations on large systems or at extremely high accuracy. This client removes this resource limitation by allowing users to run on clusters at NBCR.
Recent developmental versions APBS add optional support for the off-loading of APBS calculations to an Opal service. Currently, the client uses services hosted by the Baker group. Opal support has been integrated into APBS such that the end user will not be able to tell the difference between local and Opal runs of APBS: the APBS Opal client can be invoked in exactly the same way as the main APBS binary with identical output.
The APBS Opal support is in the form of a Python script ApbsClient.py and is installed by default when following the installation procedure outlined elsewhere. The script has been tested on Python 2.5; newer/older versions of Python may or may be functional.
As mentioned above, the basic invocation is the same as the main binary. The only difference is the executable, which is called ApbsClient.py, rather than apbs. This client should be [installed]({{site.baseurl}}/installation/) by default when APBS is installed. Users can run:

{% highlight bash %}
ApbsClient.py [options] {input}
{% endhighlight %}

where options are described below and input is an APBS input file. Options available with ApbsClient.py include:

<ul>
<li>--fetch={dir}  By default, the resulting ﬁles will be saved to the directory from which ApbsClient.py was launched. The --fetch switch can be used to change the directory (dir) to which the resulting ﬁles should be saved.</li>
<li>--help  This will cause a brief summary of the available options to be displayed.</li>
<li>--job-id={id}  This command can be used to automatically fetch the results of an APBS calculation run with the --non-blocking option. The --fetch switch must also be present if the --job-id switch is in use.</li>
<li>--local  This forces APBS to be run locally rather than on remote resources.</li>
<li>--no-fetch  One can prevent the automatic retrieval of APBS calculation results with this flag. If used, APBS will output a URL from which the resulting data can be retrieved later via a web browser. Use of this switch will also cause APBS to output a job ID which can be used to automatically retrieve all files using ApbsClient.py with the --job-id switch.</li>
<li>--non-blocking  By default, an Opal calculation will cause APBS to block (pause) until the remote calculation is complete. If you would instead like to manually retrieve the ﬁles, you can use the --non-blocking switch, which will cause APBS to output a URL from which the resulting data can be retrieved later via a web browser. Use of this switch will also cause APBS to output a job ID which can be used to automatically retrieve all files using ApbsClient.py with the --job-id switch.</li>
<li>--service-location={URL}  By default, the Opal support in APBS makes use of the NBCR's Opal web services. However, the user can easily substitute in any functional Opal APBS installation by specifying the URL for the remote service with this option.</li>
</ul>
