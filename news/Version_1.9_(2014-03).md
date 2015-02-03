---
layout: news_item
date: 2014-03-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.9 (2014-03)
permalink: /news/Version_1.9_(2014-03)/
---


<h5>Binary Builds</h5>
<p>Binary builds do not require python or numpy be installed to use. Everything needed to run PDB2PQR is included. Just unpack and use.
</p>
<p>
OSX binaries require OSX 10.6 or newer. The OSX binary is 64-bit.
</p>
<p>
Linux binaries require CentOS 6 or newer and have been tested on Ubuntu 12.04 LTS and Linux Mint 13. If you are running 64-bit Linux use the 64-bit libraries. In some cases the needed 32-bit system libraries will not be installed on a 64-bit system.
</p>
<p>
Windows binaries are 32 bit and were built and tested on Windows 7 64-bit but should work on Windows XP, Vista, and 8 both 32 and 64-bit systems.</p>
</p>
<h5>Windows Support</h5>

PDB2PQR can now be compiled and run on Windows using MinGW32. See [http://mingw.org/](http://mingw.org/) for details.

<h5>Compilation with Scons</h5>
<p>
PDB2PQR now uses Scons for compilations. With this comes improved automated testing.
</p>
<p>
Please see [{{site.baseurl}}/news/comp_pdb2pqr_release_history/]({{site.baseurl}}/news/comp_pdb2pqr_release_history/) for the complete release history
</p>
<h5>Compilation with Scons</h5>
<p>
PDB2PQR now uses Scons for compilations. With this comes improved automated testing.
</p>
<p>
Please see [{{site.baseurl}}/news/comp_pdb2pqr_release_history/]({{site.baseurl}}/news/comp_pdb2pqr_release_history/) for the complete release history
</p>
<h5>NEW FEATURES</h5>
<ul>
<li>A ligand file with duplicate atoms will cause pdb2pqr to stop instead of issue a warning. Trust us, this is a feature, not a bug!</li>
<li>Improved error reporting.</li>
<li>Added support for reference command line option for PROPKA.</li>
<li>Added newresinter plugin to provide alternate methods for calculating interaction energies between residues.</li>
<li>Mol2 file handling is now case insensitive with atom names.</li>
<li>PROPKA with a pH of 7 is now specified by default on the web service.</li>
<li>Compilation is now done with scons.</li>
<li>Verbose output now includes information on all patches applied during a run.</li>
<li>Added stderr and stdout to web error page.</li>
<li>Added warning to water optimization when other water is ignored.</li>
<li>Command line used to generate a pqr is now duplicated in the comments of the output.</li>
<li>Added support for NUMMDL in parser.</li>
<li>Added complete commandline feature test. Use complete-test target.</li>
<li>Added propka support for phosphorous sp3. - Thanks to Dr. Stefan Henrich</li>
<li>Added a PyInstaller spec file. Standalone pdb2pqr builds are now possible.</li>
</ul>

<h5>BUG FIXES</h5>
<ul>
<li>Rolled back change that prevented plugins from interfering with each other. Large proteins would cause a stack overflow when trying to do a deep copy</li>
<li>Updated INSTALL file to reflect no more need for Fortran.</li>
<li>Fixed apbs input file to match what web interface produces.</li>
<li>Fixed user specified mobile ion species not being passed to apbs input file.</li>
<li>Removed ambiguous A, ADE, C, CYT, G, GUA, T, THY, U, URA as possible residue names.</li>
<li>Removed eval from pdb parsing routines.</li>
<li>Updated web links to refer to [{{site.baseurl}}]({{site.baseurl}}) where appropriate.</li>
<li>Fixed hbond extension output to include insertion code in residue name.</li>
<li>Fixed debumping routines not including water in their checks. Fixes bad debump of ASN B 20 in 1gm9 when run with pH 7.0.</li>
<li>Fixed debumping failing to use best angle for a specific dihedral angle when no tested angles are without conflict.</li>
<li>Fixed debumping using asymmetrical cutoffs and too large cutoffs in many checks involving hydrogen.</li>
<li>Fixed debumping accumulating rounding error while checking angles.</li>
<li>Fixed inconsistencies in pdb parsing. - Thanks to Dr. Stefan Henrich</li>
<li>Fixed problems with propka handling of aromatic carbon/nitrogen. - Thanks to Dr. Stefan Henrich</li>
<li>Fixed case where certain apbs compile options would break web visualization.</li>
<li>Fixed improper handling of paths with a '.' or filenames with more than one '.' in them.</li>
</ul>

<h5>CHANGES</h5>
<ul>
<li>Removed numpy from contrib. The user is expected to have numpy installed and available to python at configuration.</li>
<li>Support for numeric dropped.</li>
</ul>

<h5>KNOWN BUGS</h5>
<ul>
<li>If more than one extension is run from the command line and one of the extensions modifies the protein data structure it could affect the output of the other extension. The only included extensions that exhibit this problem are resinter and newresinter.</li>
</ul>


<h5>New features</h5>

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


<h5>Bug fixes</h5>

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

