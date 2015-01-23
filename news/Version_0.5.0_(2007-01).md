---
layout: news_item
date: 2007-01-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.5.0 (2007-01)
permalink: /news/Version_0.5.0_(2007-01)/
---

<h5>Contents</h5>

<ul>
<li><a data-scroll href="#Newfeat01">New features</a></li>
<li><a data-scroll href="#BugAPI01">Bug fixes and API changes</a></li>
</ul>

<a id="Newfeat01"></a>
<h6>New features</h6>

<ul>
<li>Significantly streamlined the configure/build/install procedure:</li>
	<ul>
	<li>Most common compiler/library options now detected by default</li>
	<li>MALOC is now included as a "plugin" to simplify installation and compatibility issue</li>
	</ul>
<li>Added new APOLAR section to input file and updated documentation -- this function renders tools/manip/acc obsolete.</li>
<li>Added support for standard one-character chain IDs in PQR files. </li>
<li>Added a new "spl4" charge method (chgm) option to support a quintic B-spline discretization (thanks to Michael Schnieders).</li>
<li>Updated psize.py</li>
<li>Added a new "spl4" ion-accessibility coefficient model (srfm) option that uses a 7th order polynomial. This option provides the higher order continuity necessary for stable force calculations with atomic multipole force fields (thanks to Michael Schnieders).</li>
<li>Modified the "sdh" boundary condition (bcfl) option to include dipoles and quadrupoles.  Well-converged APBS calculations won't change with the dipole and quadrupole molecular moments included in the boundary potential estimate, but calculations run with the boundary close to the solute should give an improved result (thanks to Michael Schnieders). </li>
<li>Updated documentation to reflect new iAPBS features (NAMD support)</li>
<li>Added Gemstone example to the tutorial</li>
<li>New example demonstrating salt dependence of protein-RNA interactions.</li>
<li>Added code to allow for an interface with TINKER (thanks to Michael Schnieders).</li>
<li>The Python wrappers are now disabled by default.  They can be compiled by passing the --enable-python flag to the configure script.  This will allow users to attempt to compile the wrappers on various systems as desired.</li>
<li>Added XML support for reading in parameter files when using PDB files as input.  New XML files can be found in tools/conversion/param/vparam.</li>
<li>Added XML support for reading "PQR" files in XML format.</li>
<li>Added support for command line --version and --help flags. </li>
<li>Added support for XML output options via the --output-file and  --output-format flags.</li>
<li>Updated runme script in ion-pmf example to use environmental variable for APBS path</li>
<li>Modified the license to allow exceptions for packaging APBS binaries with several visualization programs.  PMG license modifed as well.</li>
<li>Added a DONEUMANN macro to vfetk.c to test FEM problems with all Neumann boundary conditions (e.g., membranes).</li>
<li>Added Vpmg_splineSelect to select the correct Normalization method with either cubic or quintic (7th order polynomial) spline methods.</li>
<li>Modified the selection criteria in Vpmg_qfForce, Vpmg_ibForce and Vpmg_dbnpForce for use with the new spline based (spl4) method. </li>
<li>Added ion-pmf to the make test suite.</li>
<li>Updated splash screen to include new PMG acknowledgment</li>
<li>Added runGB.py and readGB.py to the Python utilities, which calculate solvation energy based on APBS parameterized Generalized Born model.</li>
<li>Updated authorship and tool documentation</li>
<li>Deprecated ELEC->gamma keyword in lieu of APOLAR->gamma</li>
</ul>

<a id="BugAPI01"></a>
<h6>Bug fixes and API changes</h6>
<ul>
<li>Cleanup of documentation, new Gemstone example</li>
<li>Clarified usage of dime in mg-para ELEC statements</li>
<li>Massive cleanup of NOsh, standardizing molecule and calculation IDs and making the serial focusing procedure more robust</li>
<li>Removed MGparm partOlap* data members; the parallel focusing centering is now done entirely within NOsh</li>
<li>Updated the user manual and tutorial</li>
<li>Updated psize.py to use centers and radii when calculating grid sizes (thanks to John Mongan)</li>
<li>Fixed problems with FEM-based NPBE, LPBE, and LRPBE calculations</li>
<li>Fixed a minor bug in the configure script that prevented MPI libraries from being found when using certain compilers.</li>
<li>Updated acinclude.m4, aclocal.m4, config/* for new version (1.9) of automake and compatibility with new MALOC</li>
<li>Fixed a bug where reading in a file in PDB format had atom IDs starting  at 1 rather than 0, leading to a segmentation fault.</li>
<li>Fixed a bug in mypde.f where double precision values were initialized with single precision number (causing multiplication errors).</li>
<li>Fixed a bug in the FEM code. Now calls the npbe solver works properly with FEtk 1.40</li>
<li>Modified the FEMParm struct to contain a new variable pkey, which is  required for selecting the correct path in AM_Refine</li>
</ul>
