---
layout: news_item
date: 2010-10-15 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.3 (2010-10)
permalink: /news/Version_1.3_(2010-10)/
---



<h5>Contents</h5>
<ul>
<li>New features</li>
<li>Bug fixes</li>
</ul>

<h6>New features</h6>
<ul>
<li>Added in new read and write binary (gz) commands. Can read gzipped DX files directly.</li>
<li>Added new write format to output the atomic potentials to a flat file (see atompot)</li>
<li>Added new functionality for using a previously calculated potential map for a new calculation.</li>
<li>Added a new program for converting delphi potential maps to OpenDX format. tools/mesh/del2dx</li>
<li>Updated Doxygen manual with call/caller graphs.  Replaced HTML with PDF.</li>
<li>Added tools/matlab/solver with simple Matlab LPBE solver for prototyping, teaching, etc.</li>
<li>Deprecated APBS XML output format.</li>
<li>Deprecated nlev keyword.</li>
<li>Added etol keyword, which allows user-defined error tolerance in LPBE and NPBE calculations (default errtol value is 1.0e-6).</li>
<li>Added more explanatory error messages for the case in which parm keyword is missing from APBS input file for apolar calculations.</li>
<li>Added a polar and apolor forces calculation example to examples/born/ .</li>
<li>Added warning messages for users who try to compile APBS with --enable-tinker flag and run APBS stand-alone execution.</li>
<li>Switched default Opal service urls from sccne.wustl.edu to NBCR.</li>
<li>Added a sanity check in routines.c: 'bcfl map' in the input file requires 'usemap pot' statement in the input file as well.</li>
<li>Introduced Vpmgp_size() routine to replace F77MGSZ call in vpmg.c</li>
<li>Updated test results for APBS-1.3 release.</li>
</ul>


<h6>Bug fixes</h6>
<ul>

<li>Modified Vpmg_dbForce with some grid checking code provided by Matteo Rotter.</li>
<li>Fixed a bug in psize.py per Michael Lerner's suggestion. The old version of psize.py gives wrong cglen and fglen results in special cases (e.g., all y coordinates are negative values).</li>
<li>Fixed a bug in examples/scripts/checkforces.sh: the condition for "Passed with rounding error" is abs(difference) < errortol, not the other way around.</li>
<li>Fixed the help string in ApbsClient.py .</li>
<li>Fixed a bug in Vacc_atomdSASA(): the atom SASA needs to be reset to zero displacement after finite melement methods.</li>
<li>Fixed a bug in Vpmg_dbForce(): the initialization of rtot should appear before it is used.</li>
<li>Fixed a bug in initAPOL(): center should be initialized before used.</li>
<li>Fixed a bug in routines.c: eliminated spurious "Invalid data type for writing!" and "Invalid format for writing!" from outputs with "write atompot" statement in the input file.</li>
<li>Fixed a bug in vpmg.c: fixed zero potential value problem on eges and corners in non-focusing calculations.</li>
</ul>

