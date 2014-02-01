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

<div>
	<ul>
		<li><a href="#read">READ</a> section for specifying input.</li>
		<li><a href="#elec">ELEC</a> section for specifying polar solvation (electrostatics) calculation parameters.</li>
		<li><a href="#apolar">APOLAR</a> section for specifying apolar solvation calculation parameters.</li>
		<li><a href="#print">PRINT</a> section for specifying summary output.</li>
	</ul>
</div>

The APBS input file is constructed from these sections in the following format:

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

 These sections can occur in any order and can be repeated any number of times. However, the sections are interdependent. For example, PRINT requires ELEC and/or APOLAR while ELEC requires one or more READ sections. Sections can also be repeated; several READ statements may be used to load molecules and multiple ELEC or APOLAR sections would specify various electrostatics calculations on one or more molecules.

 <h5>NOTE: There are a number of places in the APBS input files where pathnames can be specified. If the pathname contains spaces, then the entire pathname must be enclosed in quotes. For example, if you wanted to refer to the file "foo" which resides in a directory with spaces in its name, then you should refer to foo as "/path with spaces/foo".</h5>

 Each section of the APBS input file has its own syntax, described in more detail in the following sections:

###Category List

<ul>
	<li><a href="#apolar">APOLAR input file section</a>
		<ul>
			<li><a href="#apolarkeywords">APOLAR keywords</a></li>
			<li><a href="#apolacalcs">Basic APOLAR calculations</a></li>
		</ul>
	</li>
	<li><a href="#elec">ELEC input file section</a>
		<ul>
			<li><a href="#elecblocknaming">ELEC block naming</a></li>
			<li><a href="#eleckeywords">ELEC keywords</a></li>
			<li><a href="#eleccalcs">Types of ELEC calculations</a></li>
		</ul>
	</li>
	<li><a href="#print">PRINT input file section</a></li>
	<li><a href="#read">READ input file section</a>
		<ul>
			<li><a href="#readexamples">READ examples</a></li>
			<li><a href="#readkeywords">READ keywords</a></li>
		</ul>
	</li>
</ul>

<h3 id="apolar">APOLAR</h3>

This section is the main component for apolar solvation calculations in APBS runs. There may be several APOLAR sections, operating on different molecules or using different parameters for multiple runs on the same molecule. The syntax of this section is:

{% highlight bash %}
APOLAR [name id]
        {keywords...}
    END
{% endhighlight %}

The first (optional) argument is:

{% highlight bash %}
name {id}
{% endhighlight %}

where id is a unique string which can be assigned to the calculation to facilitate later operations (particularly in the [PRINT]({site.url}/apbs-overview/#print) statements). The keywords... describing the parameters of the apolar calculation are discussed in more detail in the section [APOLAR keywords]({site.url}/apbs-overview/#apolarkeywords).  Basic APOLAR calculations are described in this section.

- [bconc]({ site.url}/docs/apolar-keywords)	
- [calcenergy]
- [calcforce]
- [dpos]
- [gamma]
- [grid]
- [mol]
- [press]
- [sdens]
- [srad]
- [srfm]
- [swin]
- [temp]

<h3 id="elec">ELEC</h3>
<h3 id="print">PRINT</h3>
<h3 id="read">READ</h3>