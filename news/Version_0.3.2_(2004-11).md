---
layout: news_item
date: 2004-11-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.3.2 (2004-11)
permalink: /news/Version_0.3.2_(2004-11)/
---

<h5>Contents</h5>
<ul>
<li><a data-scroll href="#Newfeat04">New features</a></li>
<li><a data-scroll href="#Bugfixes04">Bug fixes </a></li>
</ul>
<a id="Newfeat04"></a>
<h6>New features</h6>

<ul>
<li>Updated tutorial with more mg-auto examples</li>
<li>Updated apbs.spec file for generating RPMs on more platforms.</li>
<li>Added new Python wrapper to tools/python directory showing how to run APBS without PQR and .in inputs.</li>
<li>Python wrappers are now configured to compile on more architectures/ from more compilers.</li>
<li>Updated tools/conversion/pdb2pqr to a new version (0.1.0) of PDB2PQR, which now can handle nucleic acids, rebuild missing heavy atoms, add hydrogens, and perform some optimization.</li>
</ul>

<a id="Bugfixes04"></a>
<h6>Bug fixes</h6>
<ul>
<li>The dimensions of the fine grids in the pka-lig example calculations were increased to give more reliable results (albeit ones which don't agree with the reported UHBD values as well).</li>
<li>hz in mgparse.c causes name clash with AIX environmental variable; fixed.</li>
<li>Fixed documentation to state that using a kappa map does not ignore ELEC ION statements.</li>
<li>Added a stability fix for printing charge densities for LPBE-type calculations.</li>
<li>Fixed a bug in NPBE calculations which led to incorrect charge densities and slightly modified total energies.</li>
<li>Modified the origin when creating UHBD grids to match standard UHBD format.</li>
<li>Fixed VASSERT error caused by rounding error when reading in dx grid files.</li>
</ul>
