---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.7.1 (2011-08)
permalink: /news/Version_1.7.1_(2011-08)/
---


<h5>New features</h5>

<ul>
<li>Switched Opal service urls from sccne.wustl.edu to NBCR.</li>
<li>Added more JMol controls for visualization, JMol code and applets provided by Bob Hanson.</li>
<li>F Changed default forcefield to PARSE in web interface.</li>

</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed crash when opal returns an error.</li>
<li>Fixed specific combinations of command-line arguments causing pdb2pqr.py to crash.</li>
<li>Fixed opal job failing when filenames have spaces or dashs.</li>
<li>Fixed gap in backbone causing irrationally placed hydrogens.</li>
<li>Fixed crash when too many fixes are needed when setting termini.</li>
<li>Corrected web and command line error handling in many cases.</li>
<li>Fixed --username command line option.</li>
<li>Fixed ambiguous user created forcefield and name handling. Now --username is required if --userff is used. </li>
<li>Fixed querystatus.py not redirecting to generated error page.</li>

</ul>  
