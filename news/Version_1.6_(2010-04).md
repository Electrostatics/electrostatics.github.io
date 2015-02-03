---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.6 (2010-04)
permalink: /news/Version_1.6_(2010-04)/
---

<p>April 7, 2010</p>
<p>
Dear PDB2PQR users --
</p>
<p>
We are pleased to announce the release of PDB2PQR 1.6.  This version has several new features as well minor fixes to reported bugs.  A complete list of changes is provided below.  For more information about the new release, to download binaries, or access the PDB2PQR web servers, please visit {{site.baseurl}}/docs/downloads/
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

