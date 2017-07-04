---
layout: news_item
date: 2009-10-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.2.0 (2009-10)
permalink: /news/apbs_Version_1.2.0_(2009-10)/
---




<h5>New features</h5>

<ul>

    <li>Updated NBCR opal service urls from http://ws.nbcr.net/opal/... to http://ws.nbcr.net/opal2/... </li>
    <li>Increased the number of allowed write statements from 10 to 20</li>
    <li>Updated inputgen.py with --potdx and --istrng options added, original modification code provided by Miguel Ortiz-Lombardía</li>
    <li>Added more information on PQR file parsing failures</li>
    <li>Added in support for OpenMP calculations for multiprocessor machines.</li>
    <li>Changed default Opal service from http://ws.nbcr.net/opal2/services/APBS_1.1.0 to http://sccne.wustl.edu:8082/opal2/services/apbs-1.2</li>
</ul>

    
<h5>Modifications</h5>

<ul>
    <li>Applied Robert Konecny's patch to bin/routines.h (no need to include apbscfg.h in routines.h)</li>
</ul>
    
<h5>Bug fixes</h5>

<ul>
    <li>Added a remove_Valist function in Python wrapper files, to fix a memory leak problem in pdb2pka</li>
    <li>Fixed a bug in smooth.c: bandwidth iband, jband and kband (in grid units) should be positive integers</li>
    <li>Fixed a bug in psize.py: for a pqr file with no ATOM entries but only HETATM entries in it, inputgen.py should still create an APBS input file with reasonable grid lengths</li>
    <li>Fixed a bug in Vgrid_integrate: weight w should return to 1.0 after every i, j or k loop is finished</li>
    <li>Fixed a bug in routines.c, now runGB.py and main.py in tools/python/ should be working again instead of producing segfault</li>
    <li>Fixed a few bugs in ApbsClient.py.in related to custom-defined APBS Opal service urls, now it should be OK to use custom-defined APBS Opal service urls for PDB2PQR web server installations</li>
</ul>
