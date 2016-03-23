---
layout: news_item
date: 2016-03-22 11:52:13 -0800
author: kozlac
version: compiled
categories: [release]
title: Version 2.1.1 (2016-03)
permalink: /news/Version_2.1.1_(2016-03)/
---

<h5>Changes From 2.1.0</h5>
<ul>
<li>This version is mainly a bug fixing release for the Graph Cut method in PDB2PKA.</li>
</ul>
<p>
Please see <a href="{{site.baseurl}}/news/comp_pdb2pqr_release_history/">here</a> for the complete release history
</p>
<h5>NEW FEATURES</h5>
<ul>
<li>Replaced the Monte Carlo method for generating titration curves with Graph Cut. See <a href="http://arxiv.org/1507.07021/">http://arxiv.org/1507.07021</a></li>
</ul>

<h5>BUG FIXES</h5>
<ul>
<li>Added a check before calculating pKa's for large interaction energies.</li>
</ul>

<h5>CHANGES</h5>
<ul>
<li>The networkx library is required for pdb2pka.</li>
</ul>

<h5>KNOWN BUGS</h5>
<ul>
<li>If more than one extension is run from the command line and one of the extensions modifies the protein data structure it could affect the output of the other extension. The only included extensions that exhibit this problem are resinter and newresinter.</li>
<li>Running ligands and PDB2PKA at the same time is not currently supported.</li>
<li>PDB2PKA currently leaks memory slowly. Small jobs will use about twice the normally required RAM (i.e. ~14 titratable residues will use 140MB). Big jobs will use about 5 times the normally required RAM (60 titratable residues will use 480MB). We are working on this.</li>
</ul>

