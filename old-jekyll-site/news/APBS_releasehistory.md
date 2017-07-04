---
layout: news_item
date: 2016-03-23 11:28:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: APBS Release History
permalink: /news/APBS_releasehistory/
---

<script type="text/javascript" language="JavaScript"><!--
function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}
//--></script>

<h3>Releases</h3>

<a href="javascript:ReverseDisplay('Version 1.4.2.1 (2016-01)')">Version 1.4.2.1 (2016-01)</a>
<div id="Version 1.4.2.1 (2016-01)" style="display:none;">

<h5>Binary Builds</h5>
<p>Binary releases may be found on <a href="https://gitgub.com/Electrostatics/apbs-pdb2pqr/releases/">GitHub</a> and on <a href="https://sourceforge.net/projects/apbs/files/apbs/">SourceForge</a>.
</p>

<h5>Changes from 1.4.2</h5>
<ul>
	<li>Actually included PB-AM binary, examples, and documentation -- note that this is Linux and OS X only!</li>
	<li>Fixed Windows build so that it is not a Debug build and ensured that no DLLs are missing.</li>
</ul>

<h5>NEW FEATURES</h5>
<ul>
	<li>Poisson-Boltzmann Semi-Analytical Method (PB-SAM) packaged and build with APBS.</li>
	<li>New Geometric flow API and improvements in speed (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/235">#235</a>).</li>
	<li>Support for BinaryDX file format (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/216">#216</a>)</li>
	<li>SOR solver added for mg-auto input file option.</li>
	<li>DXMath improvements (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/168">#168</a>, <a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/216">#216</a>).</li>
	<li>Test suite improvements:
		<ul>
			<li>APBS build in Travis-CI</li>
			<li>Geometric Flow test added.</li>
			<li>Protein RNA test enabled.(<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/149">#149</a>).</li>
			<li>Intermediate result testing (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/64">#64</a>).</li>
		</ul>
	</li>
	<li>Example READMEs onverted to markdown and updated with latest results.</li>
</ul>

<h5>BUG FIXES</h5>
<ul>
<li>OpenMPI (mg-para) functionality restored (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/190">#190</a>).</li>
<li>Fized parsing PQR files that contained records other than ATOM and HETATM (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/77">#77</a>, <a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/214">#214</a>).</li>
<li>Geometrix Flow boundary indexing bug fixed.</li>
<li>Build fixes:
<ul>
<li>Out of source CMake build are again working.</li>
<li>Python library may be built (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/372">#372</a>).</li>
<li>CentOS 5 binary builds for glibc compability.</li>
<li>Pull requests merged.</li>
</ul>
</li>
<li> Removed irrelevant warning messages (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/378">#378</a>).</li>
</ul>

<h5>NOTES</h5>
<ul>
<li>The following packages are treated as submodules in APBS:
<ul>
<li>Geometric Flow has been moved to its own <a href="https://github.com/Electrostatics/geoflow_c/">repository</a>.</li>
<li>FETk has been <a href="https://github.com/Electrostatics/FETK/">cloned</a>.</li>
<li>PB-SAM lives <a href="https://github.com/Electrostatics/PB-SAM/">here</a>.</li>
</ul>
</li>
<li>Added <a href="https://gitter.im/Electrostatics/help/">chat feature</a> for users. This can also be found from the support tab on <a href="http://www.poissonboltzmann.org/">http://www.poissonboltzmann.org</a>.</li>
</ul>

<h5>KNOWN BUGS</h5>
<ul>
<li>Travis-CI Linux builds are breaking because Geometric Flow relies on C++11 and Travis boxen have an old GCC that does not support C++11. This is also an issue for CentOS 5.</li>
<li>BEM is temporarily disabled due to build issues.</li>
<li> Geometric Flow build is currently broken on Windows using Visual Studio.</li>
</ul>

<hr />
</div>

<a href="javascript:ReverseDisplay('Version 1.4.2 (2016-01)')">Version 1.4.2 (2016-01)</a>
<div id="Version 1.4.2 (2016-01)" style="display:none;">

<h5>Binary Builds</h5>
<p>Binary releases may be found on <a href="https://gitgub.com/Electrostatics/apbs-pdb2pqr/releases/">GitHub</a> and on <a href="https://sourceforge.net/projects/apbs/files/apbs/">SourceForge</a>.
</p>

<h5>NEW FEATURES</h5>
<ul>
<li>Poisson-Boltzmann Semi-Analytical Method (PB-SAM) packaged and build with APBS.</li>
<li>New Geometric flow API and improvements in speed (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/235">#235</a>).</li>
<li>Support for BinaryDX file format (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/216">#216</a>).</li>
<li>SOR solver added for mg-auot input file option.</li>
<li>DXMath improvements (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/168">#168</a>, <a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/216">#216</a>).</li>
<li>Test suite improvements:
	<ul>
		<li>APBS build in Travis-CI</li>
		<li>Geometric Flow test added.</li>
		<li>Protein RNA test enabled.(<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/149">#149</a>).</li>
		<li>Intermediate result testing (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/64">#64</a>).</li>
	</ul>
</li>
<li>Example READMEs onverted to markdown and updated with latest results.</li>
</ul>

<h5>BUG FIXES</h5>
<ul>
<li>OpenMPI (mg-para) functionality restored (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/190">#190</a>).</li>
<li>Fized parsing PQR files that contained records other than ATOM and HETATM (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/77">#77</a>, <a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/214">#214</a>).</li>
<li>Geometrix Flow boundary indexing bug fixed.</li>
<li>Build fixes:
<ul>
<li>Out of source CMake build are again working.</li>
<li>Python library may be built (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/372">#372</a>).</li>
<li>CentOS 5 binary builds for glibc compability.</li>
<li>Pull requests merged.</li>
</ul>
</li>
<li> Removed irrelevant warning messages (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/378">#378</a>).</li>
</ul>

<h5>NOTES</h5>
<ul>
<li>The following packages are treated as submodules in APBS:
<ul>
<li>Geometric Flow has been moved to its own <a href="https://github.com/Electrostatics/geoflow_c/">repository</a>.</li>
<li>FETk has been <a href="https://github.com/Electrostatics/FETK/">cloned</a>.</li>
<li>PB-SAM lives <a href="https://github.com/Electrostatics/PB-SAM/">here</a>.</li>
</ul>
</li>
<li>Added <a href="https://gitter.im/Electrostatics/help/">chat feature</a> for users. This can also be found from the support tab on <a href="http://www.poissonboltzmann.org/">http://www.poissonboltzmann.org</a>.</li>
</ul>

<h5>KNOWN BUGS</h5>
<ul>
<li>Travis-CI Linux builds are breaking because Geometric Flow relies on C++11 and Travis boxen have an old GCC that does not support C++11. This is also an issue for CentOS 5.</li>
<li>BEM is temporarily disabled due to build issues.</li>
<li> Geometric Flow build is currently broken on Windows using Visual Studio.</li>
</ul>

<hr />
</div>

<a href="javascript:ReverseDisplay('Version 1.4.1 (2014-08)')">Version 1.4.1 (2014-08)</a>
<div id="Version 1.4.1 (2014-08)" style="display:none;">

<h5>Summary</h5>

<p>We are pleased to announced the release of APBS 1.4.1. This was primarily a bug fix release; however, we have added a few features we'd like to hightlight below.</p>
<p>We would like to also highlight our new website, still located at: <a href="http://www.poissonboltzmann.org/">http://www.poissonboltzmann.org</a>. This site is also hosted at GitHub and we hope that the new organization will make it easier for people to find the content they need. While we are still in the process of migrating some remaining content, we have added links to the previous page when needed.</p>
<p> Thank you for your continuing support of APBS. As always, please use our mailing list to send up questions or comments about our software.</p>

Detailed changes

<ul>
<li>Multigrid bug fix for volumes with large problem domain.</li>
<li>We have added a preliminary implementation of geometric flow.</li>
<li>Finite element method support has been re-enabled.</li>
<li>Migration of the APBS source tree to GitHub (<a href="http://github.com/Electrostatics/apbs-pdb2pqr/">http://github.com/Electrostatics/apbs-pdb2pqr</a>) for better collaboration, issue tracking, and source code management.</li>
<li>Improved test suite.</li>
</ul>

<hr />
</div>

<a href="javascript:ReverseDisplay('Version 1.4.0 (2012-07)')">Version 1.4.0 (2012-07)</a>
<div id="Version 1.4.0 (2012-07)" style="display:none;">


<h5>Summary</h5>

<p>We are pleased to announce the release of APBS 1.4.0. This version of APBS includes a massive rewrite to eliminate FORTRAN from the software code base to improve portability and facilitate planned optimization and parallelization activities. A more detailed list of changes is provided below.</p>
<p>Starting with this release, we have created separate installation packages for the APBS binaries, examples, and programming documentation. This change is in response to user requests and recognition of the large size of the examples and documentation directories.</p>

Detailed changes

<ul>
<li>Removed FORTRAN dependency from APBS</li>
<li>Direct line by line translation of all source from contrib/pmgZ</li>
<li>Functions replaced and tested incrementally to ensure code congruence</li>
<li>Created new subfolder src/pmgC for translated pmg library</li>
<li>Created new macros for 2d, 3d matrix access</li>
<li>In src/generic/apbs/vmatrix.h</li>
<li>Simulate native FORTRAN 2 and 3 dimensional arrays</li>
<li>Use 1-indexed, column-major ordering</li>
<li>Allowed direct 1-1 translation from FORTRAN to ensurre code congruence</li>
<li>Added additional debugging and output macros to src/generic/apbs/vhal.h</li>
<li>Added message, error message, assertion, warning, and abort macros</li>
<li>Macro behavior modified by the --enable-debug flag for configure</li>
<li>Non-error messages directed to stderr in debug, io.mc otherwise</li>
<li>All error messages are directed to stdout</li>
 <li>In debug mode, verbose location information is provided</li>
<li>Added additional flags to configure</li>
<li>--with-fetk replaces FETK_INCLUDE, FETK_LIBRARY environment flags</li>
<li>--with-efence enables compiling with electric fence library</li>
<li>--enable-debug eliminates compiling optimization and includes line no info</li>
<li>---enable-profiling adds profiling information and sets --enable-debug</li>
<li>--enable-verbose-debug prints lots of function specific information</li>
</ul>

<hr />
</div>

<a href="javascript:ReverseDisplay('Version 1.3 (2010-10)')">Version 1.3 (2010-10)</a>
<div id="Version 1.3 (2010-10)" style="display:none;">


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

<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.2.1 (2009-12)')">Version 1.2.1 (2009-12)</a>

<div id="Version 1.2.1 (2009-12)" style="display:none;">


<h5>Bug fixes</h5>

<ul>

<li>Added in warning into focusFillBound if there is a large value detected in setting the boundary conditions during a focusing calculation</li>
<li>Added in a check and abort in Vpmg_qmEnergy if chopped values are detected. This occurs under certain conditions for NPBE calculations where focusing cuts into a low-dielectric regions.</li>
<li>Fixed a bug in Vpmg_MolIon that causes npbe based calculations to return very large energies.  This occurs under certain conditions for NPBE calculations where focusing cuts into a low-dielectric regions.</li>

</ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.2.0 (2009-10)')">Version 1.2.0 (2009-10)</a>

<div id="Version 1.2.0 (2009-10)" style="display:none;">


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
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.1.0 (2009-03)')">Version 1.1.0 (2009-03)</a>

<div id="Version 1.1.0 (2009-03)" style="display:none;">
    


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
<hr />

</div>  

<a href="javascript:ReverseDisplay('Version 1.0.0 (2008-04)')">Version 1.0.0 (2008-04)</a>

<div id="Version 1.0.0 (2008-04)" style="display:none;">



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
<hr />

</div>  
  
    
<h3> Beta releases </h3>

<a href="javascript:ReverseDisplay('Version 0.5.1 (2007-07)')">Version 0.5.1 (2007-07)</a>

<div id="Version 0.5.1 (2007-07)" style="display:none;">


<h5>New features</h5>
<ul>
    <li>Replaced APOLAR->glen and APOLAR->dime keywords with APOLAR->grid</li>
    <li>Deprecated mergedx. Added mergedx2</li>
        <ul>
        <li>mergedx2 takes the bounding box that a user wishes to calculate a map for, as well as a resolution of the output map. An output map meeting those specifications is calculated and store.</li>
        </ul>
    <li>Added pKa tutorial</li>
    <li>Added warning about strange grid settings (MGparm)</li>
    <li>Fixed a bug in vpmg.c that occured when a user supplied a dielectric map with the ionic strength set to zero, causing the map to not be used.</li>
    <li>Removed deprecated (as of 0.5.0) tools/manip/acc in lieu of new APOLAR APBS features</li>
    <li>Added enumerations for return codes, new PBE solver (SMPBE) and linear/ nonlinear types</li>
    <li>Added in code for Size-Modified PBE (SMPBE)</li>
</ul>


<h5>Bug fixes and API changes</h5>
<ul>
<li>Fixed buffer over-run problem</li>
<li>Fixed case inconsistency with inputgen.py and psize.py scripts which caused problems with some versions of Python</li>
<li>Fixed bug wherein 'bcfl sdh' behaved essentially like 'bcfl zero'.  Now we have the correct behavior:  'bcfl sdh' behaves like 'bcfl mdh' thanks to the multipole code added by Mike Schnieders.  Interestingly, this bug didn't have a major on the large-molecule test cases/examples provided by APBS but did affect the small molecule solvation energies.  Thanks to Bradley Scott Perrin for reporting this bug.</li>
<li>Added support for chain IDs in noinput.py</li>
<li>Fixed bug in noinput.py where REMARK lines would cause the script to fail.</li>
</ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.5.0 (2007-01)')">Version 0.5.0 (2007-01)</a>

<div id="Version 0.5.0 (2007-01)" style="display:none;">
        


<h5>New features</h5>
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

<h5>Bug fixes and API changes</h5>
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
<hr />

</div>
    
<a href="javascript:ReverseDisplay('Version 0.4.0 (2005-12)')">Version 0.4.0 (2005-12)</a>

<div id="Version 0.4.0 (2005-12)" style="display:none;">



<h5>New features</h5>
<ul>
    <li>New version of the 'acc' program available.</li>
    <li>Added additional verbosity to APBS output.</li>
    <li>Added tools/python/vgrid to the autoconf script. The directory compiles with the rest of the Python utilities and is used for manipulating dx files.</li>
    <li>Modified the tools/python/noinput.py example to show the ability to get and print energy and force vectors directly into Python arrays.</li>
    <li>Added dx2uhbd tool to tools/mesh for converting from dx format to UHBD format (Thanks to Robert Konecny)</li>
    <li>Added ability of tools/manip/inputgen.py to split a single mg-para APBS input file into multiple asynchronous input files.</li>
    <li>Modified inputgen.py to be more flexible for developers wishing to directly interface with APBS.</li>
    <li>Added Vclist cell list class to replace internal hash table in Vacc</li>
    <li>Modified Vacc class to use Vclist, including changes to the Vacc interface (and required changes throughout the code)</li>
    <li>Consolidated Vpmg_ctor and Vpmg_ctorFocus into Vpmg_ctor</li>
    <li>Consolidated vpmg.c, vpmg-force.c, vpmg-energy.c, vpmg-setup.c</li>
    <li>Added autoconf support for compilation on the MinGW32 Windows Environment</li>
    <li>Added autoconf support (with Python) for Mac OS 10.4 (Tiger)</li>
    <li>Added the function Vpmg_solveLaplace to solve homogeneous versions of Poisson's equation using Laplacian eigenfunctions.</li>
    <li>Modified the dielectric smoothing algorithm (srfm smol) to a 9 point method based on Bruccoleri, et al.  J Comput Chem 18 268-276 (1997).  NOTE:  This is a faster and more flexible smoothing method.  However, when combined with the the molecular surface bugfixes listed below, this change has the potential to make the srfm smol method give very different results from what was calculated in APBS 0.3.2.  Users who need backwards compatibility are encouraged to use the spline based smoothing method (srfm spl2) or the molecular surface without smoothing (srfm mol).</li>
    <li>Added new 'sdens' input keyword to allow user to control the sphere density used in Vacc.  This became necessary due to the Vacc_molAcc bug fix listed below.  Only applies to srfm mol and srfm smol.</li>
    <li>Made the examples directory documentation much more streamlined.</li>
    <li>Added tests for examples directory.  Users can now issue a "make test" in the desired directory to compare local results with expected results. Also includes timing results for tests for comparison between installations.</li>
</ul>
<h5>Bug fixes</h5>
<ul>
    <li>Fixed a bug in Vpmg_qmEnergy to remove a spurious coefficient of z_i^2 from the energy calculation.  This generated incorrect results for multivalent ions (but then again, the validity of the NPBE is questionable for multivalents...)  (Big thanks to Vincent Chu)</li>
    <li>Fixed a bug in vacc.c where atoms with radii less than 1A were not considered instead of atoms with no radii.</li>
    <li>Fixed error in tools/mesh/dx2mol.c (Thanks to Fred Damberger)</li>
    <li>Fixed floating point error which resulted in improper grid spacings for some cases.</li>
    <li>Fixed a bug in Vacc_molAcc which generates spurious regions of high internal dielectric for molecular surface-based dielectric definitions.  These regions were very small and apparently affected energies by 1-2% (when used with the 'srfm mol'; the 'srfm smol' can potentially give larger deviations).  The new version of the molecular surface is actually faster (requires 50-70% of the time for most cases) but we should all be using the spline surface anyway -- right? (Thanks to John Mongan and Jessica Swanson for finding this bug).</li>
    <li>Fixed a bug in vpmg.c that caused an assertion error when writing out laplacian maps (Thanks to Vincent Chu).</li>
    <li>Ensured Vpmg::ccf was always re-initialized (in the case where the Vpmg object is being re-used).</li>
    <li>Removed a spurious error estimation in finite element calculations.</li>
    <li>Clarified the role of ccf and other variables in mypde.f and vpmg.c by expanding/revising the inline comments.</li>
</ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.3.2 (2004-11)')">Version 0.3.2 (2004-11)</a>

<div id="Version 0.3.2 (2004-11)" style="display:none;">


<h5>New features</h5>

<ul>
    <li>Updated tutorial with more mg-auto examples</li>
    <li>Updated apbs.spec file for generating RPMs on more platforms.</li>
    <li>Added new Python wrapper to tools/python directory showing how to run APBS without PQR and .in inputs.</li>
    <li>Python wrappers are now configured to compile on more architectures/ from more compilers.</li>
    <li>Updated tools/conversion/pdb2pqr to a new version (0.1.0) of PDB2PQR, which now can handle nucleic acids, rebuild missing heavy atoms, add hydrogens, and perform some optimization.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
    <li>The dimensions of the fine grids in the pka-lig example calculations were increased to give more reliable results (albeit ones which don't agree with the reported UHBD values as well).</li>
    <li>hz in mgparse.c causes name clash with AIX environmental variable; fixed.</li>
    <li>Fixed documentation to state that using a kappa map does not ignore ELEC ION statements.</li>
    <li>Added a stability fix for printing charge densities for LPBE-type calculations.</li>
    <li>Fixed a bug in NPBE calculations which led to incorrect charge densities and slightly modified total energies.</li>
    <li>Modified the origin when creating UHBD grids to match standard UHBD format.</li>
    <li>Fixed VASSERT error caused by rounding error when reading in dx grid files.</li>
</ul>
 <hr />

</div>   
    
<a href="javascript:ReverseDisplay('Version 0.3.1 (2004-04)')">Version 0.3.1 (2004-04)</a>

<div id="Version 0.3.1 (2004-04)" style="display:none;">


<h5>New features</h5>
<ul>
    <li>New APBS tutorial</li>
    <li>New tools/python/vgrid/mergedx.py script to merge dx files generated from parallel APBS runs back into a single dx file.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
    <li>Fixed bug in parallel calculations where atoms or points on a border between two processors were not included.  Modified setup algorithm for  parallel calculations to allow partitions in order to obtain grid points and spacing from the global grid information.</li>
    <li>Modified extEnergy function to work with parallel calculations, giving better accuracy.</li>
</ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.3.0 (2004-02)')">Version 0.3.0 (2004-02)</a>

<div id="Version 0.3.0 (2004-02)" style="display:none;">



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
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.2.6 (2003-01)')">Version 0.2.6 (2003-01)</a>

<div id="Version 0.2.6 (2003-01)" style="display:none;">


    <ul>
    <li>Changed license to GPL</li>
    <li>Made a few routines compliant with ANSI X3.159-1989 by removing snprintf (compliant with ISO/IEC 9899:1999).  This is basically for the sake of OSF support.</li>
    </ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.2.5 (2002-11)')">Version 0.2.5 (2002-11)</a>

<div id="Version 0.2.5 (2002-11)" style="display:none;">


    <ul>
    <li>Improved consistency between energies evaluated with "chgm 0" and "chgm 1"</li>
    <li>Made charge-field energy evaluation consistent for user-supplied charge maps</li>
    <li>Added new psize.py script courtesy of Todd Dolinsky.</li>
    <li>Updated list of APBS-related tools in User Guide.</li>
    <li>Added RPM capabilities courtesy of Steve Bond.</li>
    <li>Removed annoying excess verbosity from Vgrid.</li>
    <li>Updated Blue Horizon compilation instructions (thanks to Robert Konecny and Giri Chukkapalli)</li>
    <li>Updated autoconf/automake/libtool setup and added --disable-tools option</li>
    </ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.2.4 (2002-10)')">Version 0.2.4 (2002-10)</a>

<div id="Version 0.2.4 (2002-10)" style="display:none;">


    <ul>    
    <li>Fixed bug which set one of the  z-boundaries to zero for "bcfl 1".  This can perturb results for systems where the grid boundaries are particularly close to the biomolecule.  While this is an embarassing bug, most systems using settings suggested by the psize script appear largely unaffected (see examples/README.html).  Thanks to Michael Grabe for finding this bug (Michael, you can stop finding bugs now...)</li>
    <li>Updated VMD scripts to agree with the current OpenDX output format</li>
    <li>A COMMENT:  As far as I can tell, the current version of OpenDX-formatted output (same as version 0.2.3) is fully compliant with the OpenDX standards (see, for example,  http://opendx.npaci.edu/docs/html/pages/usrgu065.htm#HDRXMPLES).   However, I realize this is different than the format for previous versions and would encourage all users to update their APBS-based applications to accomodate these changes.  The best solution would be for all downstream applications to use the APBS Vgrid class (see http://agave.wustl.edu/apbs/doc/api/html/group__Vgrid.html) to manipulate the data since this class should remain internally consistent between releases.  Finally, I would love to have some OpenDX guru who uses APBS to contact me so I can solidfy the data ouput format of APBS.  I'm about ready to permanently switch to another format if I can't reach a consensus withOpenDX...</li>
    </ul>        
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.2.3 (2002-10)')">Version 0.2.3 (2002-10)</a>

<div id="Version 0.2.3 (2002-10)" style="display:none;">


    <ul>
    <li>Fixed bugs in salt-dependent Helmholtz/nonlinear term of PBE affecting both LPBE and NPBE calculations.  While this bug fix only changes most energies by < 2 kJ/mol, it is recommended that all users upgrade.  Many thanks to Michael Grabe for finding and carefully documenting this bug!</li>
    <li>A parameter (chgm) has been added which controls the charge discretization method used.  Therefore, this version contains substantial changes in both the API and input file syntax.  Specifically:</li>
        <ul>
        <li>PBEparm has two new members (chgm, setchgm)</li>
        <li>Vpmg_fillco requires another argument</li>
        <li>Vpmg_*Force functions require additional arguments</li>
        <li>Input files must now contain the keyword "chgm #" where # is an integer</li>
        <li>Please see the documentation for more information.</li>
        </ul>
    <li>Fixed problems with "slicing" off chunks of the mesh during I/O of focused calculations</li>
    <li>Updated authors list</li>
    <li>New CHARMM parameters -- Robert Konecny</li>
    <li>Created enumerations for common surface and charge discretization methods</li>
    <li>Added Vmgrid class to support easy manipulation of nested grid data</li>
    <li>Added more verbosity to error with NPBE forces</li>
    <li>Added working Python wrappers -- Todd Dolinksy</li>
    <li>Modified VMD scripts read_dx and loadstuff.vmd</li>
    </ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.2.2 (2002-08)')">Version 0.2.2 (2002-08)</a>

<div id="Version 0.2.2 (2002-08)" style="display:none;">
    

    <ul>
    <li>There were several other changes along the way... I lost track.</li>
    <li>Changed coordinate indexing in some energy calculations</li>
    <li>Updated documentation to reflect recent changes on Blue Horizon</li>
    <li>Improved speed of problem setup BUT NOW RESTRICT use of input coefficient maps (see documentation)</li>
    <li>Updated documentation, placing particular emphasis on use of Intel compilers and vendor BLAS on Intel Linux systems</li>
    <li>Fixed bug for nonpolar force evaluation in Vpmg_dbnpForce</li>
    <li>Removed MG test scripts -- use bin/*.c for templates/testing</li>
    <li>Made main driver code completely memory-leak free (i.e., if you wanted to wrap it and call it repeatedly -- Thanks to Robert Konecny)</li>
    <li>Fixed main driver code for compatibility with SGI compilers (Thanks to Fabrice Leclerc)</li>
    <li>Made focused evaluation of forces more sensible.</li>
    <li>Added 'print force' statement</li>
    <li>Fixed bug in OpenDX input/output (OpenDX documentation is lousy!)</li>
    </ul>    
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.2.1 (2002-04)')">Version 0.2.1 (2002-04)</a>

<div id="Version 0.2.1 (2002-04)" style="display:none;">


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
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.2.0 (2002-03)')">Version 0.2.0 (2002-03)</a>

<div id="Version 0.2.0 (2002-03)" style="display:none;">    



<p>This version is a public (beta) release candidate and includes:</p>

    <ul>
    <li>Slight modification of the user and programmer's guides</li>
    <li>Scripts for visualization of potential results in VMD (Contributed by Dave Sept)</li>
    <li>Corrections to some of the example input files</li>
    <li>A few additional API features</li>
    </ul>   

<p>This release requires a new version of MALOC. </p>
<hr />

</div>

<h3>Alpha releases</h3>


<a href="javascript:ReverseDisplay('Version 0.1.8 (2002-01)')">Version 0.1.8 (2002-01)</a>

<div id="Version 0.1.8 (2002-01)" style="display:none;"> 
    

<p>This version is a public (beta) release candidate and includes the following bug-fixes:</p>

    <ul>
    <li>Added warning to parallel focusing </li>
    <li>Added several test cases and validated the current version of the code for all but one (see examples/README.html)</li>
    <li>Fixed atom partitioning bug and external energy evaluation during focusing</li>
    <li>Added new program for converting OpenDX format files to MOLMOL (by Jung-Hsin Lin)</li>
    </ul>

<p>You should definitely upgrade, the previous versions may produce unreliable results.</p>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.1.7 (2001-12)')">Version 0.1.7 (2001-12)</a>

<div id="Version 0.1.7 (2001-12)" style="display:none;">


<p>This version is a public (beta) release candidate and includes the following bug-fixes:</p>

    <ul>
    <li>Fixed I/O for potential in UHBD format (thanks, Richard!)</li>
    <li>Re-arranged garbage collection routines in driver code</li>
    <li>Improved FORTRAN/C interfaces</li>
    <li>Re-configured autoconf/libtool setup for more accurate library version number reporting</li>
    </ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.1.6 (2001-11)')">Version 0.1.6 (2001-11)</a>

<div id="Version 0.1.6 (2001-11)" style="display:none;">
    

<p>This version is a public (beta) release candidate and includes the following bug-fixes and features:</p>
    
    <ul>
    <li>Fixed printf formatting in UHBD potential output</li>
    <li>Added input file support for parallel focusing</li>
    <li>Fixed small bug in parsing writeacc syntax (thanks, Dave)</li>
    <li>Added output file support for parallel focusing</li>
    <li>Changed some documentation</li>
    </ul>

<p>You need to download a new version of MALOC for this release.</p>   
<hr />

</div> 
 
<a href="javascript:ReverseDisplay('Version 0.1.5 (2001-10)')">Version 0.1.5 (2001-10)</a>

<div id="Version 0.1.5 (2001-10)" style="display:none;">   
    

<p>This version features minor bug fixes and several new features:</p>

    <ul>
    <li>Fixed shift in center of geometry for OpenDX I/O</li>
    <li>Made energy evaluation more robust when using NPBE</li>
    <li>Rearrangments of files and modified compilation behavior</li>
    <li>Input file support for ion species of varying valency and concentration</li>
    <li>Input file support incorrect nlev/dime combinations; APBS now finds acceptable settings near to the user's requested values</li>
    <li>"Automatic focusing".  Users now simply specify the physical parameters (temperature, dielectric, etc.), the coarse and fine grid lengths and centers, and APBS calculates the rest</li>
    </ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.1.4 (2001-09)')">Version 0.1.4 (2001-09)</a>

<div id="Version 0.1.4 (2001-09)" style="display:none;">  
    


<p>This version features major bug fixes introduced in the 0.1.3 release:</p>

    <ul>
    <li>Chain ID support has been **removed** from the PDB/PQR parser (if anyone has a nice, flexible PDB parser they'd like to contribute to the code, I'd appreciate it)</li>
    <li>Configure script has been made compatible with OSF</li>
    <li>Bug fix in disabling FEtk-specific header files</li>
    </ul>
<hr />

</div>


<a href="javascript:ReverseDisplay('Version 0.1.3 (2001-09)')">Version 0.1.3 (2001-09)</a>

<div id="Version 0.1.3 (2001-09)" style="display:none;">  
    

<p>This version features a few improvements in scripts, PDB parsing flexibility, and portability, including:</p>

    <ul>
    <li>Dave Sept upgraded the psize and shift scripts to allow more flexibility in PDB formats.</li>
    <li>Chain ID support has been added to the PDB/PQR parser</li>
    <li>Removed -g from compiler flags during linking of C and FORTAN under OSF (thanks to Dagmar Floeck and Julie Mitchell for help debugging this problem)</li>
    </ul>    
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.1.2 (2001-09)')">Version 0.1.2 (2001-09)</a>

<div id="Version 0.1.2 (2001-09)" style="display:none;">  



<p>This version is mainly designed to increase portability by switching to libtool for library creation and linking.  Of course, it also contains a few bug fixes.  Highlights include:</p>

    <ul>
    <li>Changes to the User Manual</li>
    <li>Addition of a Programmer's Manual</li>
    <li>Various FEtk-related things (no particular impact to the user)</li>
    <li>Improvements to the test systems</li>
    <li>Change in the format for printing energies</li>
    <li>Change in directory structure</li>
    <li>Fixed centering bug in main driver (only impacted I/o)</li>
    <li>Fixed error message bug in VPMG class</li>
    <li>Fixed grid length bug (popped up during sanity checks) in VPMG class</li>
    <li>Switched to libtool for linking</li>
    <li>Note that Compaq Tru64 Alpha users may still experience problems while compiling due to some strangess with linking C and FORTRAN objects.</li>
    </ul>    
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.1.1 (2001-08)')">Version 0.1.1 (2001-08)</a>

<div id="Version 0.1.1 (2001-08)" style="display:none;">  



<p>I am slightly less pleased to announce the first bug-fix for APBS, version 0.1.1.  This fixes compilation problems that popped up for several folks,
including:</p>
    <ul>
    <li>Syntax errors with non-GNU compilers</li>
    <li>Errors in the installation instructions</li>
    <li>Installation of binary in machine-specific directory</li>   
    </ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 0.1.0 (2001-08)')">Version 0.1.0 (2001-08)</a>

<div id="Version 0.1.0 (2001-08)" style="display:none;">  


<p>I am pleased to announce the availability of a pre-beta version of the Adaptive Poisson-Boltzmann Solver (APBS) code to selected research groups.  APBS is new software designed to solve the Poisson-Boltzmann equation for very large biomolecular systems.  For more information, please visit the APBS web site at http://mccammon.ucsd.edu/apbs.</p>

<p>This release is designed to allow interested users to get familiar with the code.  It is not currently fully functional; it only provides for the sequential multigrid (Cartesian mesh) solution of the linearized and nonlinear Poisson-Boltzmann equation.  User-friendly parallel support will be incorporated into the next release.  Other limitations that may impact its immediate usefulness are:</p>
    <ul>
    <li>No finite element support.  This is awaiting the public release of the Holst group's FEtk library.</li>
    <li>Somewhat inefficient coefficient evaluation (i.e., problem setup).  This should be fixed in the next release or two.</li>
    </ul>
<p>Rather than serving as a production code, this release represents a request for help in breaking the software and finding its deficiencies
before a public beta.</p>

<p>If you are interested in testing this early release, please go to http://wasabi.ucsd.edu/~nbaker/apbs/download/.  Since this is not a public release of APBS, you will need to enter the user-name "apbs-beta" and the password "q94p$fa!" for access to this site.  Once there, please follow the instructions to download and install APBS.</p>

<p>If you are not interested in trying out this early release, but would like to stay informed about subsequent versions of APBS, please consider subscribing to the APBS announcements mailing list by sending the message "subscribe apbs-announce" to majordomo@mccammon.ucsd.edu.</p>

<p>Thank you for your time and interest in the APBS software.</p>
    
<hr />

</div>
    
    
    
    
    
    
