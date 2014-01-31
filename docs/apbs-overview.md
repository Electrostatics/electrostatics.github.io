---
layout: docs
title: APBS input files
prev_section: usage
next_section: pdb2pqr-overview
permalink: /docs/apbs-overview/
---

## Input Files

APBS input files are loosely-formatted files which contain information about the input, parameters, and output for each calculation. These files are whitespace- or linefeed-delimited. Comments can be added to the input files via the # character; all text between the # and the end of the line is not parsed by APBS. Specific examples of APBS input are described in the Examples section.

#####Please note that there are several tools which help prepare APBS input files based on molecular structures, memory constraints, etc. These tools are described in more detail in the Problem setup section.

APBS input files contain three basic sections which can be repeated any number of times:

<ul>
	<li><a href="#read">READ</a> section for specifying input.</li>
	<li><a href="#elec">ELEC</a> section for specifying polar solvation (electrostatics) calculation parameters.</li>
	<li><a href="#apolar">APOLAR<a/> section for specifying apolar solvation calculation parameters.</li>
	<li><a href="print">PRINT</a> section for specifying summary output.</li>
</ul>

<p>The APBS input file is constructed from these sections in the following format:</p>

{% highlight bash %}
READ
 ...
 END

 ELEC
 ...
 END

 APOLAR
 ...
 END

 PRINT
 ...
 END

 QUIT
 {% endhighlight %}

<div>
<p>
 These sections can occur in any order and can be repeated any number of times. However, the sections are interdependent. For example, PRINT requires ELEC and/or APOLAR while ELEC requires one or more READ sections. Sections can also be repeated; several READ statements may be used to load molecules and multiple ELEC or APOLAR sections would specify various electrostatics calculations on one or more molecules.
</p>

 <p>NOTE: There are a number of places in the APBS input files where pathnames can be specified. If the pathname contains spaces, then the entire pathname must be enclosed in quotes. For example, if you wanted to refer to the file "foo" which resides in a directory with spaces in its name, then you should refer to foo as "/path with spaces/foo".</p>

<p> Each section of the APBS input file has its own syntax.</p>
</div>