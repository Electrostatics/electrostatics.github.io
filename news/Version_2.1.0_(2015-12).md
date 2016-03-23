---
layout: news_item
date: 2016-03-22 11:52:13 -0800
author: kozlac
version: compiled
categories: [release]
title: Version 2.1.0 (2015-12)
permalink: /news/Version_2.1.0_(2015-12)/
---

<h5>Notable New Features</h5>
<p>The old Monte Carlo Method has been replaced with Graph Cut. See <a href="http://arxiv.org/abs/1507.07021">http://arxiv.org/abs/1507.07021</a> for more details.
</p>
<p>
Please see <a href="{{site.baseurl}}/news/comp_pdb2pqr_release_history/">here</a> for the complete release history
</p>
<h5>NEW FEATURES</h5>
<ul>
<li>Added alternate method to do visualization using 3dmol.</li>
<li>Replaced the Monte Carlo Methos for generating titration curves with Graph Cut. See <a href="http://arxiv.org/abs/1507.07021">http://arxiv.org/abs/1507.07021</a>.(If you prefer the Monte Carlo Method, please use <a href="http://nbcr-222.ucsd.edu/pdb2pqr_2.0.0/">http://nbcr-222.ucsd.edu/pdb2pqr_2.0.0</a>)
<li>Added compile options to allow for arbitrary flags to be added. Helps work around some platforms where scons does not detect the needed settings correctly.</li>
</ul>

<h5>BUG FIXES</h5>
<ul>
<li>Fixed broken links on APBS submission page.</li>
<li>Added some missing files to query status page results.</li>
<li>Fixed some pages to use the proper CSS file.</li>
<li>Better error message for --assign-only and HIS residues.</li>
<li>Fixed PROPKA crash for unrecognized residue.</li>
<li>Debumping routines are now more consistent accross platforms. This fixes pdb2pka not giving the same results on different platforms.</li>
</ul>

<h5>CHANGES</h5>
<ul>
<li>Added fabric script used to build and test releases.</li>
<li>The newtworkx library is now required for pdb2pka.</li>
</ul>

<h5>KNOWN BUGS</h5>
<ul>
<li>If more than one extension is run from the command line and one of the extensions modifies the protein data structure it could affect the output of the other extension. The only included extensions that exhibit this problem are resinter and newresinter.</li>
<li>Running ligands and PDB2PKA at the same time is not currently supported.</li>
<li>PDB2PKA currently leaks memory slowly. Small jobs will use about twice the normally required RAM (i.e. ~14 titratable residues will use 140MB). Big jobs will use about 5 times the normally required RAM (60 titratable residues will use 480MB). We are working on this.</li>
</ul>

