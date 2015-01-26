---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.5 (2009-10)
permalink: /news/Version_1.5_(2009-10)/
---

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

