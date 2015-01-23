---
layout: news_item
date: 2002-08-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.2.2 (2002-08)
permalink: /news/apbs_Version_0.2.2_(2002-08)/
---
   

<ul>
<li>There were several other changes along the way... I lost track.</li>
<li>Changed coordinate indexing in some energy calculations</li>
<li>Updated documentation to reflect recent changes on Blue Horizon</li>
<li>Improved speed of problem setup BUT NOW RESTRICT use of input coefficient maps (see documentation)</li>
<li>Updated documentation, placing particular emphasis on use of Intel compilers and vendor BLAS on Intel Linux systems</li>
<li>Fixed bug for nonpolar force evaluation in Vpmg_dbnpForce</li>
<li>Removed MG test scripts -- use bin/*.c for templates/testing</li>
<li>Made main driver code completely memory-leak free (i.e., if you wanted to wrap it and call it repeatedly -- Thanks to Robert Konecny)</li>
<li>Fixed main driver code for compatibility with SGI compilers (Thanks to Fabrice Leclerc)</li>
<li>Made focused evaluation of forces more sensible.</li>
<li>Added 'print force' statement</li>
<li>Fixed bug in OpenDX input/output (OpenDX documentation is lousy!)</li>
</ul>    
