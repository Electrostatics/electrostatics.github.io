---
layout: news_item
date: 2007-07-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.5.1 (2007-07)
permalink: /news/Version_0.5.1_(2007-07)/
---


<h6>New features</h6>

<ul>
<li>Replaced APOLAR->glen and APOLAR->dime keywords with APOLAR->grid</li>
<li>Deprecated mergedx. Added mergedx2</li>
	<ul></li>mergedx2 takes the bounding box that a user wishes to calculate a map for, as well as a resolution of the output map. An output map meeting those specifications is calculated and store.</li></ul>
<li>Added pKa tutorial</li>
<li>Added warning about strange grid settings (MGparm)</li>
<li>Fixed a bug in vpmg.c that occured when a user supplied a dielectric map with the ionic strength set to zero, causing the map to not be used.</li>
<li>Removed deprecated (as of 0.5.0) tools/manip/acc in lieu of new APOLAR APBS features</li>
<li>Added enumerations for return codes, new PBE solver (SMPBE) and linear/ nonlinear types</li>
<li>Added in code for Size-Modified PBE (SMPBE)</li>
</ul>


<h6>Bug fixes</h6>
<ul>
<li>Fixed buffer over-run problem</li>
<li>Fixed case inconsistency with inputgen.py and psize.py scripts which caused problems with some versions of Python</li>
<li>Fixed bug wherein 'bcfl sdh' behaved essentially like 'bcfl zero'.  Now we have the correct behavior:  'bcfl sdh' behaves like 'bcfl mdh' thanks to the multipole code added by Mike Schnieders.  Interestingly, this bug didn't have a major on the large-molecule test cases/examples provided by APBS but did affect the small molecule solvation energies.  Thanks to Bradley Scott Perrin for reporting this bug.</li>
<li>Added support for chain IDs in noinput.py</li>
<li>Fixed bug in noinput.py where REMARK lines would cause the script to fail.</li>

</ul>