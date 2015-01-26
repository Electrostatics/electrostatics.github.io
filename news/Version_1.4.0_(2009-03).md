---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.4.0 (2009-03)
permalink: /news/Version_1.4.0_(2009-03)/
---


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
