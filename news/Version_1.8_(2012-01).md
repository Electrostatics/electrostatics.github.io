---
layout: news_item
date: 2012-01-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.8 (2012-01)
permalink: /news/Version_1.8_(2012-01)/
---


<h5>New Features</h5>

<ul>

<li>Updated PROPKA to version 3.0</li>
<li>Added residue interaction energy extension</li>
<li>Added protein summary extension</li>
<li>Combined hbond and hbondwhatit into one extension (hbond) with new command line parameters</li>
<li>Combined rama, phi, psi into one extension (rama) with new command line parameters.</li>
<li>Extensions may now add their own command line arguments. Extensions with their own command line arguments will be grouped separately.</li>
<li>Improved interface for extensions</li>
<li>Added Opal configuration file.</li>

</ul>

<h5>Bug Fixes</h5>

<ul>
<li>Cleaned up white space in several files and some pydev warnings</li>
<li>Creating print output no longer clears the chain id data from atoms in the data. (Affected resinter plugin)</li>
<li>Removed possibility of one plug-in affecting the output of another</li>
<li>Fixed --protonation=new option for propka30</li>
<li>Improved time reporting for apbs jobs</li>
<li>Fixed opal runtime reporting</li>
<li>Fixed misspelled command line options that prevented the use of PEOEPB and TYL06</li>
<li>Fixed error handling when certain data files are missing</li>
<li>Fixed LDFLAGS environment variable not being used along with python specific linker flags to link Algorithms.o and _pMC_mult.so</li>
<li>Fixed possible Attribute error when applying naming scheme.</li>
</ul>

