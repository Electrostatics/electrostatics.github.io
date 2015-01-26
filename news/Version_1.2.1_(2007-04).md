---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.2.1 (2007-04)
permalink: /news/Version_1.2.1_(2007-04)/
---

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

