---
layout: news_item
date: 2004-02-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.3.0 (2004-02)
permalink: /news/apbs_Version_0.3.0_(2004-02)/
---


<h5>News</h5>

<p>APBS is now supported by the NIH via NIGMS grant GM69702-01.</p>

<h5>Changes that affect users</h5>
<ul>
<li>New version of the documentation</li>
<li>New directory structure in tools/</li>
<li>Finished fe-manual mode for ELEC calculations -- this is the adaptive finite element solver</li>
<li>Added documetnation for fe-manual</li>
<li>New apbs/tools/manip/inputgen.py script to automatically generate input APBS files from PQR data</li>
<li>Added new asynchronous mode in mg-para parallel calculations to enable running on-demand and/or limited resources</li>
<li>Added new script (tools/manip/async.sh) to convert mg-para calculations in mg-async calculations</li>
<li>Added following aliases for some of the more obscure parameters in the input files:</li>
<ul>
<li>chgm 0 ==> chgm spl0</li>
<li>chgm 1 ==> chgm spl2</li>
<li>srfm 0 ==> srfm mol</li>
<li>srfm 1 ==> srfm smol</li>
<li>srfm 2 ==> srfm spl2</li>
<li>bcfl 0 ==> bcfl zero</li>
<li>bcfl 1 ==> bcfl sdh</li>
<li>bcfl 2 ==> bcfl mdh</li>
<li>bcfl 4 ==> bcfl focus</li>
<li>calcenergy 0 ==> calcenergy no</li>
<li>calcenergy 1 ==> calcenergy total</li>
<li>calcenergy 2 ==> calcenergy comps</li>
<li>calcforce 0 ==> calcforce no</li>
<li>calcforce 1 ==> calcforce total</li>
<li>calcforce 2 ==> calcforce comps</li>
</ul>
<li>Example input files have been updated to reflect this change. NOTE: the code is backward-compliant; i.e., old input files WILL still work.</li>
<li>Added new READ options "PARM" and "MOL PDB", see documentation for more information. These options allow users to use unparameterized PDB files together with a parameter database.</li>
<li>Updated the documentation</li>
<li>Now include support for chain IDs and other optional fields in PQR/PDB files</li>
<li>Added support for parsing PDB files</li>
<li>Renamed:</li>
<ul>
<li>amber2charmm -> amber2charmm.sh</li>
<li>pdb2pqr -> pdb2pqr.awk</li>
<li>qcd2pqr -> qcd2pqr.awk</li>
</ul>
<li>Added a new Python-based pdb2pqr (tools/conversion/pdb2pqr) script that allows users to choose parameters from different forcefields.</li>
<li>Updated Python wrappers (tools/python) and added the python directory to autoconf/automake.</li>
<li>Reformatted examples/README.html for readability.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed bug in PQR parsing that can cause PDB/PQR files to be mis-read when they contain residues with numbers in their names (Thanks to Robert Konecny and Joanna Trylska)</li>
<li>Fixed bug when writing out number/charge density: unrealistic densities reported inside iVdW surface.</li>
<li>Fixed bug in VMD read_dx utility</li>
<li>Invalid map IDs now result in an error message instead of a core dump (thanks to Marco Berrera)</li>
<li>Modified mechanism for cubic-spline output, fixing a bug associated with zero-radius atoms</li>
<li>Fixed omission of srfm in sections of documentation (thanks to Sameer Varma)</li>
<li>Made autoconf/automake configure setup more robust on Solaris 8 platforms (thanks to Ben Carrington)</li>
</ul>   
<h5>Changes that affect developers</h5>
<ul>
<li>New docuemtnation setup</li>
<li>New tools/ directory structure</li>
<li>Changed Vgreen interface and improved efficiency</li>
<li>Changed Vopot interface to support multiple grids</li>
<li>Added several norm and seminorm functions to Vgrid class</li>
<li>Altered --with-blas syntax in configure scripts and removed --disable-blas</li>
<li>Documented high-level frontend routines</li>
<li>Cool new class and header-file dependency graphs courtesy of Doxygen and Graphviz</li>
<li>Added substantial mypde.c-based functionality to Vfetk</li>
<li>Moved chgm from PBEparm to MGparm</li>
<li>Minor changes to Vfetk: removed genIcos and added genCube</li>
<li>FEM solution of RPBE working again (see test/reg-fem) and is probably more up-to-date than test/fem</li>
<li>Updated API documentation</li>
<li>Changed many NOsh, FEMparm, MGparm variables to enums</li>
<li>Changes to Valist and Vatom classes</li>
<li>Fixed minor bugs in documentation formatting</li>
<li>Made Vopot more robust</li>
<li>Created Vparam class for parameter file parsing</li>
<li>Added vparam* parameter database flat files to tools/conversion/param</li>
</ul>
