---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.2.0 (2007-01)
permalink: /news/Version_1.2.0_(2007-01)/
---

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



 