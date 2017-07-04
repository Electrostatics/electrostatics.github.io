---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.1.0 (2006-04)
permalink: /news/Version_1.1.0_(2006-04)/
---

<h5>New features</h5>
<ul>
<li>Structural data files have been moved to XML format.  This should make it easier for users and developers to contribute to the project.</li>
<li>Added an extensions directory for small scripts.  Scripts in this directory will be automatically loaded into PDB2PQR has command line options for post-processing, and can be easily customized.</li>
<li>Code has been greatly cleaned so as to minimize values hard-coded into functions and to allow greater customizability via external XML files.  This includes a more object-oriented hierarchy of structures.</li>
<li>Improved detection of the termini of chains.</li>
<li>Assign-only now does just that - only assigns parameters to atoms without additions, debumping, or optimizations.</li>
<li>Added a --clean command line option which does no additions, optimizations, or forcefield assignment, but simply aligns the PDB columns on output.  Useful for using post-processing scripts like those in the extensions directory without modifying the original input file.</li>
<li>The --userff flag has been replaced by opening up the --ff option to user-defined files.</li>
<li>Pydoc documentation is now included in html/pydoc.</li>
<li>A programmer's guide has been included to explain programming decisions and ease future development.</li>
<li>A --ffout flag has been added to allow users to output a PQR file in the naming scheme of the desired forcefield.</li>
<li>User guide FAQ updated.</li>
<li>The efficiency of the hydrogen bonding detection script (--hbond) has been greatly improved.</li>
<li>Increased the number of options available to users via the PDB2PQR web server.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Updated psize.py to use centers and radii when calculating grid sizes (thanks to John Mongan) </li>
<li>Fixed bug where PDB2PQR could not read PropKa results from chains with more than 1000 residues (thanks to Michael Widmann)</li>
</ul>


