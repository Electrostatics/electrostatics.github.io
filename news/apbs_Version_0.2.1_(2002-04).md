---
layout: news_item
date: 2002-04-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.2.1 (2002-04)
permalink: /news/apbs_Version_0.2.1_(2002-04)/
---


<p>This version requires the latest version of MALOC to work properly!</p>
<ul>
<li>Syntax changes</li>
    <ul>
    <li>The writepot and writeacc keywords have been generalized and new I/O features have been added.  The syntax is now:</li>
        <ul>
        <li>write pot dx potential</li>
        <li>write smol dx surface</li>
        <li>etc.  Please see the User's Manual for more information</li>
        </ul>
    <li>The read keywords has been generalized and new I/O features have been added which support the use of pre-calculated coefficient grids, etc.  The correct syntax for reading in a molecule is now "read mol pqr mol.pqr end"; please see the User's Manual for more information.</li>
    <li>The "mg" keyword is no longer supported; all input files should use "mg-manual" or one of the other alternatives instead.</li>
    </ul>
<li>A change in the behavior of the "calcenergy" keyword; passing an argument of 2 to this keyword now prints out per-atom energies in addition to the energy component information</li>
<li>A new option has been added to tools/manip/acc to give per-atom solvent-accessible surface area contributions</li>
<li>A new option has been added to tools/manip/coulomb to give per-atom electrostatic energies</li>
<li>Added tools/mesh/dxmath for performing arithmetic on grid-based data (i.e., adding potential results from two calculations, etc.)</li>
<li>Added tools/mesh/uhbd_asc2bin for converting UHBD-format grid files from ASCII to binary (contributed by Dave Sept)</li>
<li>Improvement of VMD visualization scripts (contributed by Dave Sept)</li>
<li>The API has changed significantly; please see the Programmer's Manual.</li>
<li>Working (but still experimental) Python wrappers for major APBS functions.</li>
<li>More flexible installation capabilities (pointed out by Steve Bond)</li>
<li>Added ability to use vendor-supplied BLAS</li>
<li>Brought up-to-date with new MALOC</li>
</ul>    
