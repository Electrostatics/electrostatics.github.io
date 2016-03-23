---
layout: news_item
date: 2016-03-22 10:38:13 -0800
author: kozlac
version: compiled
categories: [release]
title: Version 2.0.0 (2014-12)
permalink: /news/Version_2.0.0_(2014-12)/
---

<h5>Notable New Features</h5>
<p>PDB2PKA as an alternative to PROPKA for calculating pH values to protonate residues. This feature is EXPERIMENTAL. The libraries to make THis feature available are included in the binary releases. They are NOT included in the source code and are not compiled with the rest of PDB2PQR.
</p>
<p>
Improved web interface.
</p>
<p>
Please see <a href="{{site.baseurl}}/news/comp_pdb2pqr_release_history/">here</a> for the complete release history
</p>
<h5>NEW FEATURES</h5>
<ul>
<li>Improved look of web interface.</li>
<li>Option to automatically drop water from pdb file before processing.</li>
<li>Interation of PDB2PKA  into PDB2PQR as an alternative to PROPKA.</li>
<li>Support for compiling with VS2008 in Windows.</li>
<li>Option to build with debug headers.</li>
<li>PDB2PKA now detects and reports non Henderson-Hasselbalch behavior.</li>
<li>PDB2PKA can be instructed whether or not to start from scratch with --pdb2pka-resume.</li>
<li>Can now specify output directory for PDB2PKA.</li>
<li>Improved error regarding backbone in some cases.</li>
<li>Changed time format on query status page.</li>
<li>Improved error catching on web interface.</li>
</ul>

<h5>BUG FIXES</h5>
<ul>
<li>Fixed executable name when creating binaries for Unix based operating systems.</li>
<li>Fixed potential crash when using --clean with extensions.</li>
<li>Fixed MAXATOMS display on server home page.</li>
<li>PDB2PKA now mostly respects the --verbose setting.</li>
<li>Fixed how hydrogens are added by PDB2PKA for state changes in some cases.</li>
<li>Fixed psize error check.</li>
<li>Will now build properly without ligand support if numpy is not installed.</li>
<li>Removed old automake build files from all test ported to scons.</li>
<li>Fixed broken opal backend.</li>
</ul>

<h5>CHANGES</h5>
<ul>
<li>Command line interface to PROPKA changed to accommodate PDB2PKA. PROPKA is now used with --ph-calc-method=propka --with-ph now defaults to 7.0 and is only required if a different pH value is required.</li>
<li>--ph-calc-method to select optional method to calculate pH values used to protonate titratable residues. Possible options are "propka" and "pdb2pka".</li>
<li>Dropped support for compilation with mingw. Building on Windows now requires VS 2008 installed in the default location.</li>
<li>Updated included Scons to 2.3.3</li>
<li>PDB2PKA can now be run directly (not integrated in PDB2PQR) with pka.py. Arguments are PDBfile and Output directory.</li>
<li>No longer providing 32-bit binary build. PDB2PKA support is too memory intensive to make this practical in many cases.</li>
</ul>

<h5>KNOWN BUGS</h5>
<ul>
<li>If more than one extension is run from the command line and one of the extensions modifies the protein data structure it could affect the output of the other extension. The only included extensions that exhibit this problem are resinter and newresinter.</li>
<li>Running ligands and PDB2PKA at the same time is not currently supported.</li>
<li>PDB2PKA currently leaks memory slowly. Small jobs will use about twice the normally required RAM (i.e. ~14 titratable residues will use 140MB). Big jobs will use about 5 times the normally required RAM (60 titratable residues will use 480MB). We are working on this.</li>
</ul>

