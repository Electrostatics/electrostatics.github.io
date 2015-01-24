---
layout: news_item
date: 2014-12-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: PDB2PQR Release History
permalink: /news/comp_pdb2pqr_release_history/
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

<a href="javascript:ReverseDisplay('Version 1.9 (2014-03)')">Version 1.9 (2014-03)</a>

<div id="Version 1.9 (2014-03)" style="display:none;">


<h4>Notable New Features:</h4>
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

PDB2PQR can now be compiled and run on Windows using MinGW32. See http://mingw.org/ for details.

<h5>Compilation with Scons</h5>
<p>
PDB2PQR now uses Scons for compilations. With this comes improved automated testing.
</p>
<p>
Please see http://www.poissonboltzmann.org/pdb2pqr/release-history for the complete release history
</p>
<h5>Compilation with Scons</h5>
<p>
PDB2PQR now uses Scons for compilations. With this comes improved automated testing.
</p>
<p>
Please see http://www.poissonboltzmann.org/pdb2pqr/release-history for the complete release history
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
<li>Updated web links to refer to http://www.poissonboltzmann.org where appropriate.</li>
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

<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.8 (2012-01)')">Version 1.8 (2012-01)</a>

<div id="Version 1.8 (2012-01)" style="display:none;">


<h5>New Features</h5>

<ul>

<li>Updated PROPKA to version 3.0</li>
<li>Added residue interaction energy extension</li>
<li>Added protein summary extension</li>
<li>Combined hbond and hbondwhatit into one extension (hbond) with new command line parameters</li>
<li>Combined rama, phi, psi into one extension (rama) with new command line parameters.</li>
<li>Extensions may now add their own command line arguments. Extensions with their own command line arguments will be grouped separately.</li>
<li>Improved interface for extensions</li>
<li>Added Opal configuration file.</li>

</ul>

<h5>Bug Fixes</h5>

<ul>
<li>Cleaned up white space in several files and some pydev warnings</li>
<li>Creating print output no longer clears the chain id data from atoms in the data. (Affected resinter plugin)</li>
<li>Removed possibility of one plug-in affecting the output of another</li>
<li>Fixed --protonation=new option for propka30</li>
<li>Improved time reporting for apbs jobs</li>
<li>Fixed opal runtime reporting</li>
<li>Fixed misspelled command line options that prevented the use of PEOEPB and TYL06</li>
<li>Fixed error handling when certain data files are missing</li>
<li>Fixed LDFLAGS environment variable not being used along with python specific linker flags to link Algorithms.o and _pMC_mult.so</li>
<li>Fixed possible Attribute error when applying naming scheme.</li>
</ul>

<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.7.1a (2011-09-13)')">Version 1.7.1a (2011-09-13)</a>

<div id="Version 1.7.1a (2011-09-13)" style="display:none;">


<h5>New features</h5>

<ul>
<li>Added force field example.</li>
</ul>
    
<h5>Bug fixes</h5>

<ul>
<li>Fixed ligand command line option.</li>
<li>Fixed capitalization of force field in PQR header.</li>
<li>Fixed error handling for opal errors.</li>
<li>Fixed web logging error when using ligand files, user force fields, and name files.</li>
<li>Fixed extension template in documentation.</li>
<li>Fixed 1a1p example README to reflect command line changes.</li>
</ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.7.1 (2011-08)')">Version 1.7.1 (2011-08)</a>

<div id="Version 1.7.1 (2011-08)" style="display:none;">
    


<h5>New features</h5>

<ul>
<li>Switched Opal service urls from sccne.wustl.edu to NBCR.</li>
<li>Added more JMol controls for visualization, JMol code and applets provided by Bob Hanson.</li>
<li>F Changed default forcefield to PARSE in web interface.</li>

</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed crash when opal returns an error.</li>
<li>Fixed specific combinations of command-line arguments causing pdb2pqr.py to crash.</li>
<li>Fixed opal job failing when filenames have spaces or dashs.</li>
<li>Fixed gap in backbone causing irrationally placed hydrogens.</li>
<li>Fixed crash when too many fixes are needed when setting termini.</li>
<li>Corrected web and command line error handling in many cases.</li>
<li>Fixed --username command line option.</li>
<li>Fixed ambiguous user created forcefield and name handling. Now --username is required if --userff is used. </li>
<li>Fixed querystatus.py not redirecting to generated error page.</li>

</ul>  
<hr />

</div>  

<a href="javascript:ReverseDisplay('Version 1.7 (2010-10)')">Version 1.7 (2010-10)</a>

<div id="Version 1.7 (2010-10)" style="display:none;">

Dear APBS and PDB2PQR users --
<p>
 I am happy to announce the release of PDB2PQR 1.7 which includes two major updates:
</p>
<ul>
<li>For PDB2PQR web interface users:  the JMol web interface for APBS calculation visualization has been substantially improved, thanks to help from Bob Hanson.  Those performing APBS calculations via the PDB2PQR web interface now have a much wider range of options for visualizing the output online -- as well as downloading for offline analysis.</li>
<li>For PDB2PQR command-line and custom web interface users:  the Opal service URLs have changed to new NBCR addresses.  Old services hosted at *.wustl.edu addresses have been decommissioned.  Please upgrade ASAP to use the new web service.  Thank you as always to the staff at NBCR for their continuing support of APBS/PDB2PQR web servers and services.</li>
</ul>

<hr />

</div>  

<a href="javascript:ReverseDisplay('Version 1.6 (2010-04)">Version 1.6 (2010-04)</a>

<div id="Version 1.6 (2010-04)" style="display:none;">
<p>April 7, 2010</p>
<p>
Dear PDB2PQR users --
</p>
<p>
We are pleased to announce the release of PDB2PQR 1.6.  This version has several new features as well minor fixes to reported bugs.  A complete list of changes is provided below.  For more information about the new release, to download binaries, or access the PDB2PQR web servers, please visit http://www.poissonboltzmann.org/pdb2pqr
</p>
<p>
Thank you for your continuing support of the PDB2PQR software.
</p>
<p>
Sincerely,
</p>
<p>
Nathan Baker
</p>

<h5>NEW FEATURES</h5>
<ul>
<li>Added Swanson force field based on Swanson et al paper (http://dx.doi.org/10.1021/ct600216k).</li>
<li>Modified printAtoms() method. Now "TER" is printed at the end of every chain.</li>
<li>Added Google Analytics code to get the statistics on the production server.</li>
<li>Modified APBS calculation page layout to hide parameters by default and display PDB ID</li>
<li>Added "make test-webserver", which tests a long list of PDBs (246 PDBs) on the production PDB2PQR web server.</li>
<li>Removed nlev from inputgen.py and inputgen_pKa.py as nlev keyword is now deprecated in APBS.</li>
<li>Added PARSE parameters for RNA, data from: Tang C. L., Alexov E, Pyle A. M., Honig B. Calculation of pKas in RNA: On the Structural Origins and Functional Roles of Protonated Nucleotides. Journal of Molecular Biology 366 (5) 1475-1496, 2007.
</li>
</ul>

<h5>BUG FIXES</h5>
<ul>
<li>Fixed a minor bug: when starting pka.py from pdb2pka directory using command like "python pka.py [options] inputfile", we need to make sure scriptpath does not end with "/".</li>
<li>Fixed a bug which caused "coercing to Unicode: need string or buffer, instance found" when submitting PDB2PQR jobs with user-defined force fields on Opal based web server. </li>
<li> Fixed a bug in main_cgi.py, now Opal-based PDB2PQR jobs should also be logged in usage.txt file.</li>
<li>Updated src/utilities.py with a bug fix provided by Greg Cipriano, which prevents infinite loops in analyzing connected atoms in certain cases.</li>
<li>Fixed a bug related to neutraln and/or neutralc selections on the web server.</li>
<li> Fixed a special case with --ffout and 1AIK, where the N-terminus is acetylated.</li>
<li> Fixed a bug in psize.py per Michael Lerner's suggestion. The old version of psize.py gives wrong cglen and fglen results in special cases (e.g., all y coordinates are negative values).</li>
<li> Fixed a bug in main_cgi.py, eliminated input/output file name confusions whether a PDB ID or a pdb file is provided on the web server.</li>
<li> Fixed a bug which causes run time error on the web server when user-defined force field and names files are provided.</li>
<li>Fixed a bug in apbs_cgi.py: pdb file names submitted by users are not always 4 characters long.</li>
</ul>

<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.5 (2009-10)')">Version 1.5 (2009-10)</a>

<div id="Version 1.5 (2009-10)" style="display:none;">

<h5>New features</h5>
<ul>
<li>APBS calculations can be executed through the PDB2PQR web interface in the production version of the server</li>
<li>APBS-calculated potentials can be visualized via the PDB2PQR web interface thanks to Jmol</li>
<li>Disabled Typemap output by default, added --typemap flag to create typemap output if needed.</li>
<li>Enabled "Create APBS Input File" by default on the web server, so that APBS calculation and visualization are more obvious to the users.</li>
<li>Added warnings to stderr and the REMARK field in the output PQR file regarding multiple occupancy entries in PDB file.</li>
<li>Added more informative messages in REMARK field, explaining why PDB2PQR was unable to assign charges to certain atoms.</li>
<li>Updated structures.py, now PDB2PQR keeps the insertion codes from PDB files.</li>
<li>Added "make test-long", which runs PDB2PQR on a long list (246) of PDBs by default, it is also possible to let it run on specified number of PDBs, e.g.,  export TESTNUM=50; make test-long </li>
<li>Updated NBCR opal service urls from http://ws.nbcr.net/opal/... to http://ws.nbcr.net/opal2/...</li>
<li>Compressed APBS OpenDX output files in zip format, so that users can download zip files from the web server.</li>
<li>Removed "EXPERIMENTAL" from APBS web solver interface and Jmol visualization interface.</li>
<li>Updated all APBS related urls from http://apbs.sourceforge.net/... to http:/apbs.wustl.edu/...</li>
<li>Merged PDB2PKA code, PDB2PKA is functional now.</li>
<li>Added two new options: --neutraln and --neutralc, so that users can manually make the N-termini or C-termini of their proteins neutral.    </li>
<li>Added a local-test, which addresses the issue of Debian-like Linux distros not allowing fetching PDBs from the web.</li>
<li>Added deprotonated Arginine form for post-PROPKA routines. This only works for PARSE forcefield as other forcefields lack deprotonated ARG parameters.</li>
<li>Updated inputgen.py with --potdx and --istrng options added, original modification code provided by Miguel Ortiz-Lombardía.</li>
<li>Changed default Opal service from http://ws.nbcr.net/opal2/services/pdb2pqr_1.4.0 to http://sccne.wustl.edu:8082/opal2/services/pdb2pqr-1.5</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Verbosity outputs should be stdouts, not stderrs in web server interface. Corrected this in src/routines.py.</li>
<li>Fixed a bug in psize.py: for a pqr file with no ATOM entries but only HETATM entries in it, inputgen.py should still create an APBS input file with reasonable grid lengths. </li>
<li>Added special handling for special mol2 formats (unwanted white spaces or blank lines in ATOM or BOND records).</li>
<li>Added template file to doc directory, which fixed a broken link in  programmer guide.</li>
</ul>

<hr />

</div>
  
    
<h3> Beta releases </h3>

<a href="javascript:ReverseDisplay('Version 1.4.0 (2009-03)')">Version 1.4.0 (2009-03)</a>

<div id="Version 1.4.0 (2009-03)" style="display:none;">


<h5>New features</h5>
<ul>
<li>Updated html/master-index.html, deleted html/index.php.</li>
<li>Updated pydoc by running genpydoc.sh.</li>
<li>Added a whitespace option by by putting whitespaces between atom name and residue name, between x and y, and between y and z.</li>
<li>Added radius for Chlorine in ligff.py.</li>
<li>Added PEOEPB forcefield, data provided by Paul Czodrowski.</li>
<li>Updated inputgen.py to write out the electrostatic potential for APBS input file. </li>
<li>Updated CHARMM.DAT with two sets of phosphoserine parameters.</li>
<li>Allowed amino acid chains with only one residue, using --assign-only option.</li>
<li>Updated server.py.in so that the ligand option is also recorded in usage.txt. </li>
<li>Updated HE21, HE22 coordinates in GLN according to the results from AMBER Leap program.</li>
<li>Updated Makefile.am with Manuel Prinz's patch (removed distclean2 and appended its contents to distclean-local).</li>
<li>Updated configure.ac, pdb2pqr-opal.py; added AppService_client.py and AppService_types.py with Samir Unni's changes, which fixed earlier problems in invoking Opal services.</li>
<li>Applied two patches from Manuel Prinz to pdb2pka/pMC_mult.h and pdb2pka/ligand_topology.py. </li>
<li>Updated PARSE.DAT with the source of parameters. </li>
<li>Created a contrib folder with numpy-1.1.0 package. PDB2PQR will install numpy by default unless any of the following conditions is met:</li>
<ul>
<li>Working version of NumPy dectected by autoconf.</li>
<li>User requests no installation with --disable-pdb2pka option.</li>
<li>User specifies external NumPy installation.  </li>
</ul>
<li>Merged Samir Unni's branch. Now PDB2PQR Opal and APBS Opal services are available (through --with-opal and/or --with-apbs, --with-apbs-opal options at configure stage).</li>
<li>Added error handling for residue name longer than 4 characters.</li>
<li>Updated hbond.py with Mike Bradley's definitions for ANGLE_CUTOFF and DIST_CUTOFF by default.</li>
<li>Removed PyXML-0.8.4, which is not required for ZSI installation.</li>
<li>Updated propka error message for make adv-test -- propka requires a version of Fortran compiler.</li>
<li>Updated na.py and PATCHES.xml so that PDB2PQR handles three lettered RNA residue names (ADE, CYT, GUA, THY, and URA) as well.</li>
<li>Updated NA.xml with HO2' added as an alternative name for H2'', and H5" added as an alternative name for H5''. </li>
<li>Updated version numbers in html/ and doc/pydoc/ .</li>
<li>Updated web server. When selecting user-defined forcefield file from the web server, users should also provide .names file.</li>
<li>Removed http://enzyme.ucd.ie/Services/pdb2pqr/ from web server list.</li>
<li>Eliminated the need for protein when processing other types (ligands,  nucleic acids).</li>
<li>Updated psize.py with Robert Konecny's patch to fix inconsistent assignment of fine grid numbers in some (very) rare cases.</li>
<li>Made whitespace option available for both command line and web server versions.</li>
<li>Updated inputgen_pKa.py with the latest version.</li>
</ul>


<h5>Bug fixes</h5>
<ul>
<li>Fixed a legacy bug with the web server (web server doesn't like ligand files generated on Windows or old Mac OS platforms).</li>
<li>Fixed a bug in configure.ac, so that PDB2PQR no longer checks for Numpy.pth at configure stage.</li>
<li>Updated pdb2pka/substruct/Makefile.am. </li>
<li>Fixed isBackbone bug in definitions.py.</li>
<li>Fixed a bug for Carboxylic residues in hydrogens.py.</li>
<li>Fixed a bug in routines.py, which caused hydrogens added in LEU and ILE in eclipsed conformation rather than staggered. </li>
<li>Fixed a bug in configure.ac, now it is OK to configure with double slashes in the prefix path, e.g.,  --prefix=/foo/bar//another/path </li>
<li>Fixed a bug in nucleic acid naming scheme. </li>
<li>Fixed a bug involving MET, GLY as NTERM, CTERM with --ffout option.</li>
<li>Fixed a bug for PRO as C-terminus with PARSE forcefield. </li>
<li>Fixed a bug for ND1 in HIS as hacceptor.</li>
<li>Fixed the --clean option bug.</li>
<li>Fixed a bug in CHARMM naming scheme.</li>
<li>Fixed a bug in test.cpp of the simple test (which is related to recent modifications of 1AFS in Protein Data Bank).</li>
</ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.3.0 (2008-01)')">Version 1.3.0 (2008-01)</a>

<div id="Version 1.3.0 (2008-01)" style="display:none;">
        


<h5>New features</h5>
<ul>
<li>Added "make test" and "make adv-test"</li>
<li>Fixed problems with "make dist"</li>
<li>Added integration with Opal for launching jobs as well as querying status</li>
<li>The user may use NUMPY to specify the location of NUMPY.</li>
<li>Both PDB2PKA and PROPKA are enabled by default.  PDB2PKA is enabled by default since ligand parameterization would fail without this option.</li>
<li>For a regular user, "make install" tells the user the exact command the system administrator will use to make the URL viewable.</li>
<li>The default value of 7.00 for the pH on the server form is removed due to a problem with browser refershing.</li>
<li>Updated warning messages for lines beginning with SITE, TURN, SSBOND and LINK.</li>
<li>Switched license from GPL to BSD.</li>
<li>Made a new tar ball pdb2pqr-1.3.0-1.tar.gz for Windows users who cannot create pdb2pqr.py through configure process.</li>
<li>configure now automatically detects SRCPATH, WEBSITE, and the location of pdb2pqr.cgi.  In version 1.2.1, LOCALPATH(SRCPATH) and WEBSITE were defined in src/server.py and the location of pdb2pqr.cgi was specified in html/server.html (index.html).  Configure now uses variable substitution with new files src/server.py.in and html/server.html.in to create src/server.py and html/server.html (index.html).</li>
<li>SRCPATH is automatically set to the current working directory. WEBSITE is automatically set to http://fully_qualified_domain_name/pdb2pqr. Path to CGI is automcailly set to http://fully_qualified_domain_name/pdb2pqr/pdb2pqr.cgi.  </li>
<li>In version 1.2.1, there were 3 variables that needed to be changed to set up a server at a location different from agave.wustl.edu.  LOCALPATH, WEBSITE, and the location of the CGI file.  In this version, LOCALPATH has been used to SRCPATH to avoid confusion, since LOCALPATH could be interpreted as the local path for source files or the localpath for the server.</li>
<li>Since configure now automatically sets the locations of files/directories based on the machine and configure options, the default  agave.wustl.edu locations are not used anymore.</li>
<li>A copy of pdb2pqr.css is included.</li>
<li>configure prints out information about parameters such as python flags, srcpath, localpath, website, etc.</li>
<li>configure now automatically creates tmp/ with r + w + x permissions.</li>
<li>configure now automatically copies pdb2pqr.py to pdb2pqr.cgi.</li>
<li>configure now automatically copies html/server.html to index.html after variable substitution.  In src/server.py.in (src/server.py), WEBNAME is changed to index.html. </li>
<li>${HOME}/pdb2pqr is the default prefix for a regular user</li>
<li>/var/www/html is the default prefix for root</li>
<li>http://FQDN/pdb2pqr as default website.  </li>
<li>"make install" runs "make" first, and the copies the approprite files to --prefix.</li>
<li>If root did not specify --prefix and /var/www/html/pdb2pqr already</li>
<li>exists, then a warning is issued, and the user may choose to quit or overwrite that directory.  </li>
<li>Similary, if a regular user did not specify --prefix and ${HOME}/pdb2pqr already exists, then a warning is issued, and the user may choose to quit or overwrite that directory. </li>
<li>If root does not specify --prefix to be a directory to be inside /var/www/html (for example, --prefix=/share/apps/pdb2pqr), then a symbolic link will be made to /var/www/html/pdb2pqr during "make install".</li>
<li>configure option --with-url can be specified either as something like http://sandstone.ucsd.edu/pdb2pqr-test or sandstone.ucsd.edu/pdb2pqr-test.  It also doesn't matter if there's a '/' at the end.</li>
<li>If user is root, and the last part of URL and prefix are different, for example, --with-url=athena.nbcr.net/test0 --prefix=/var/www/html/pdb2pqr-test, then a warning will be issued saying the server will be viewable from the URL specified, but not the URL based on pdb2pqr-test.  In other words, the server will be viewable from athena.abcr.net/test0, but not athena.nbcr.net/pdb2pqr-test.  During "make  install", a symbolic link is created to enable users to view the server from --with-url.</li>
<li>When making a symbolic link for root, if then link destination already exists as a directory or a symoblic link, then the user may choose to continue with creating the link and overwrite the original directory or quit.</li>
<li>If the user changes py_path when running configure for PDB2PQR, then the change also applies to PROPKA.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed the line feed bug. Now PDB2PQR handles different input files (.pdb and .mol2) created or saved on different platforms.</li>
<li>Fixed "hbondwhatif" warning at start up.</li>
</ul>

<h5>Known issues</h5>
<ul>
<li>The install directory name cannot contain dots.</li>
<li>For python 2.2, if PDB2PQR cannot find module sets, then sets needs to be copied from .../python2.2/site-packages/MYSQLdb/sets.py to .../lib/python2.2</li>
</ul>

<hr />

</div>
    
<a href="javascript:ReverseDisplay('Version 1.2.1 (2007-04)')">Version 1.2.1 (2007-04)</a>

<div id="Version 1.2.1 (2007-04)" style="display:none;">



<h5>New features</h5>
<ul>
<li>Updated documentation to include instructions for pdb2pka support, references, more pydoc documents.</li>
<li>Added ligand examples to examples/ directory</li>
<li>Added native support for the TYL06 forcefield.  For more information on this forcefield please see Tan C, Yang L, Luo R.  How well does Poisson-Boltzmann implicit solvent agree with explicit solvent? A quantitative analysis. Journal of Physical Chemistry B.  110 (37), 18680-7, 2006. </li>
<li>Added a new HTML output page which relays the different atom types between the AMBER and CHARMM forcefields for a generated PQR file (thanks to the anonymous reviewers of the latest PDB2PQR paper).</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed bug where a segmentation fault would occur in PropKa if the N atom was not the first atom listed in the residue</li>
<li>Fixed error message that occurred when a blank line was found in a parameter file.</li>
<li>Better error handling in MOL2 file parsing.</li>
<li>Fixed bug where ligands were not supported on PDB files with multiple MODEL fields.</li>
</ul>

<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.2.0 (2007-01)')">Version 1.2.0 (2007-01)</a>

<div id="Version 1.2.0 (2007-01)" style="display:none;">


<h5>New features</h5>

<ul>
<li>Added autoconf support for pdb2pka directory.</li>
<li>Added new support for passing in a single ligand residue in MOL2 format via the --ligand command.  Also available from the web server (with link to PRODRG for unsupported ligands).</li>
<li>Numerous additions to examples directory (see examples/index.html) and update to User Guide.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed charge assignment error when dealing with LYN in AMBER.</li>
<li>Fixed crash when a chain has a single amino acid residue.  The code now reports the offending chain and residue before exiting. </li>
<li>Fixed hydrogen optimization bug where waters with no nearby atoms at certain orientations caused missing hydrogens.</li>
</ul>
 <hr />

</div>   
    
<a href="javascript:ReverseDisplay('Version 1.1.2 (2006-06)')">Version 1.1.2 (2006-06)</a>

<div id="Version 1.1.2 (2006-06)" style="display:none;">



<h5>Bug fixes</h5>
<ul>
<li>Fixed a bug in the hydrogen bonding routines where PDB2PQR attempted to delete an atom that had already been deleted. (thanks to Rachel Burdge)</li>
<li>Fixed a bug in chain detection routines where PDB2PQR was unable to detect multiple chains inside a single unnamed chain (thanks to Rachel Burdge)</li>
<li>Fixed a second bug in chain detection routines where HETATM residues with names ending in "3" were improperly chosen for termini (thanks to Reut Abramovich)</li>
<li>Fixed a bug where chains were improperly detected when only containing one HETATM residue (thanks to Reut Abramovich)</li>
</ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.1.1 (2006-05)')">Version 1.1.1 (2006-05)</a>

<div id="Version 1.1.1 (2006-05)" style="display:none;">


<h5>Bug fixes</h5>
<ul>
<li>Fixed a bug which prevented PDB2PQR from recognizing atoms from nucleic acids with "*" in their atom names. (thanks to Jaichen Wang)</li>
<li>Fixed a bug in the hydrogen bonding routines where a misnamed object led to a crash for very specific cases. (thanks to Josh Swamidass) </li>
</ul>
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.1.0 (2006-04)')">Version 1.1.0 (2006-04)</a>

<div id="Version 1.1.0 (2006-04)" style="display:none;">

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

<a href="javascript:ReverseDisplay('Version 1.0.2 (2005-12)')">Version 1.0.2 (2005-12)</a>

<div id="Version 1.0.2 (2005-12)" style="display:none;">

<h5>New features</h5>
<ul>
<li>Added ability for users to add their own forcefield files.  This should be particularly useful for HETATMs.</li>
<li>Added sdens keyword to inputgen.py to make PDB2PQR compatibile with APBS 0.4.0. </li>
<li>Added a new examples directory with a basic runthrough on how to use the various features in PDB2PQR.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed a bug that was unable to handle N-Terminal PRO residues with hydrogens already present. </li>
<li>Fixed two instances in the PropKa routines where warnings were improperly handled due to a misspelling.</li>
<li>Fixed instance where chain IDs were unable to be assigned to proteins with more than 26 chains.</li>
</ul>
      
<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.0.1 (2005-10)')">Version 1.0.1 (2005-10)</a>

<div id="Version 1.0.1 (2005-10)" style="display:none;">

<h5>New features</h5>
<ul>
<li>Added citation information to PQR output.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed a bug during hydrogen optimization that left out H2 from water if the oxygen in question had already made 3 hydrogen bonds.</li>
</ul>

<hr />

</div>

<a href="javascript:ReverseDisplay('Version 1.0.0 (2005-08)')">Version 1.0.0 (2005-08)</a>

<div id="Version 1.0.0 (2005-08)" style="display:none;">
    
This is the initial version of the PDB2PQR conversion utility.  There are several changes to the various "non-official" versions previously available:
<ul>
<li>SourceForge has been chosen as a centralized location for all things related to PDB2PQR, including downloads, mailing lists, and bug reports.</li>
<li>Several additions to the code have been made, including pKa support via PropKa, a new hydrogen optimization algorithm which should increase both accuracy and speed, and general bug fixes.</li>
</ul>
We plan on continuing to improve PDB2PQR by refining the code, adding more advanced options, and encouraging collaborations with other utilities.
<p>Thank you for your time and interest in the PDB2PQR software.</p>
 
<hr />

</div>

