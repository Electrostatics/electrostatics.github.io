---
layout: news_item
date: 2008-04-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.0.0 (2008-04)
permalink: /news/apbs_Version_1.0.0_(2008-04)/
---


<h5>New features</h5>

<ul>
    <li>Changed license to New BSD style open source license (see http://www.opensource.org/licenses/bsd-license.php) for more information</li>
    <li>Added in a feature limited version of PMG (Aqua) that reduces the memory footprint of an APBS run by 2-fold</li>
    <li>Modified several routines to boost the speed of APBS calculations by approximately 10% when combined with the low memory version of APBS</li>
    <li>Simplified parameter input for ION and SMPBE keywords (key-value pairs) </li>
    <li>Examples and documentation for size-modified PBE code (Vincent Chu et al)</li>
    <li>Added in "fast" compile-time option that uses optimized parameters for multigrid calculations</li>
    <li>mg-dummy calculations can be run with any number (n>3) of grid points</li>
    <li>Updated PMG license to LGPL</li>
    <li>Added per-atom SASA information output from APOLAR calculations</li>
    <li>Added per-atom verbosity to APOLAR calculation outputs</li>
    <li>Ability to read-in MCSF-format finite element meshes (e.g., as produced by Holst group GAMER software)</li>
    <li>Updated installation instructions in user guide</li>
    <li>Updated inputgen.py to write out the electrostatic potential for APBS input file.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
    <li>Updated tools/python/apbslib* for new NOsh functionality</li>
    <li>Clarified ELEC/DIME and ELEC/PDIME documentation</li>
    <li>Added more transparent warnings/error messages about path lengths which exceed the 80-character limit</li>
    <li>Fixed small typo in user guide in installation instructions</li>
    <li>Fixed memory leaks throughout the APBS code</li>
    <li>Fixed NOsh_parseREAD errors for input files with \r line feeds.</li>
    <li>Fixed a variable setting error in the test examples</li>
    <li>Fixed a bug where memory usage is reported incorrectly for large allocations on 64-bit systems</li>
    <li>Added DTRSV to APBS-supplied BLAS to satisfy FEtk SuperLU dependency</li>
    <li>Fixed a small bug in routines.c to print out uncharged molecule id</li>
    <li>Limited calculation of forces when surface maps are read in </li>
</ul>

  
