---
layout: news_item
date: 2009-03-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.1.0 (2009-03)
permalink: /news/apbs_Version_1.1.0_(2009-03)/
---



<h5>New features</h5>

<ul>
Moved APBS user guide and tutorial to MediaWiki
Added in support for OpenMPI for parallel calculations
Added in command line support for Opal job submissions (Code by Samir Unni)
Allowed pathname containing spaces in input file, as long as the whole pathname is in quotes ("")
Documented 'make test' and related features
</ul>

<h5>Modifications</h5>

<ul>
    <li>Modified the function bcCalc to march through the data array linearly when setting boundary conditions. This removes duplication of grid points on the edge of the array and corners.</li>
    <li>Clarified documentation on the IDs assigned to input maps, PQRs, parameter files, etc.</li>
    <li>pdated tutorial to warn against spaces in APBS working directory path in VMD; updated user guide to warn against spaces in APBS installation path on Windows</li>
    <li>'make test' has been reconfigured to run before issuing make install (can be run from top directory)</li>
    <li>Removed tools/visualization/vmd from tools directory in lieu of built-in support in VMD</li>
    <li>Path lengths can now be larger than 80 characters</li>
    <li>Expanded authorship list</li>
    <li>Added in 'make test-opal' as a post install test (run from the examples install directory)</li>
    <li>Added additional concentrations to protein-rna test case to better encompass experimental conditions used by Garcia-Garcia and Draper; this improves agreement with the published data</li>
</ul>

Bug fixes
<ul>
    <li>Fixed typos in User Guide (ion keyword) and clarified SMPBE keyword usage</li>
    <li>Fixed typo in User Guide (writemat: poission -> poisson)</li>
    <li>Updated psize.py with Robert's patch to fix inconsistent assignment of fine grid numbers in some (very) rare cases</li>
    <li>Fixed bug with boundary condition assignment.  This could potentially affect all calculations; however, probably has limited impact:  many test cases gave identical results after the bug fix; the largest change in value was < 0.07%.</li>
</ul>  
 