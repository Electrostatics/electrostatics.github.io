---
layout: docs
title: APBS Invocation
prev_section: apbs-overview
next_section: pdb2pqr-overview
permalink: /docs/apbs-invocation/
---

##Invocation

In addition to using APBS through other programs, there are two ways to invoke APBS from the command line. The traditional approach uses the primary APBS binary to run APBS on local resources. However, in recent versions of APBS, we have added the ability to run APBS through a secondary Python-based program which can be invoked locally but uses Opal web services to run APBS on remote resources (with no expense to the user).

##APBS command-line binary

As mentioned in the [installation and availability section]({{site.url}}/apbs-pdb2pqr/docs/installation/), the main APBS binary is installed in ${APBS_PREFIX}/bin where ${APBS_PREFIX} is the top-level directory you chose for the installation. Of course, you can move the binary to any directory you choose. APBS is invoked with a very simple syntax:

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

input-file is an input file with a specific syntax described in the section [Input files]({{site.url}}/apbs-pdb2pqr/docs/installation/). Besides the output files specified from within input-file and the optional logs as specified by use of the --output-file command line option, APBS writes data to three additional places:

<ul>
<li>Standard output. This will appear on your screen (if you don't redirect it somewhere) and will contain all the basic information about the electrostatics calculation.</li>
<li>Standard error. This will also appear on your screen (if you don't redirect it somewhere) and will contain warnings and error messages.</li>
<li>The file io.mc (or io.mc_N for parallel runs, where N is the processor ID. This gives you detailed information about the progress of the run with a particular focus on the numerical solver.</li>
</ul>