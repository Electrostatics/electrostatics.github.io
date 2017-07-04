---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.1.2 (2006-06)
permalink: /news/Version_1.1.2_(2006-06)/
---


<h5>Bug fixes</h5>
<ul>
<li>Fixed a bug in the hydrogen bonding routines where PDB2PQR attempted to delete an atom that had already been deleted. (thanks to Rachel Burdge)</li>
<li>Fixed a bug in chain detection routines where PDB2PQR was unable to detect multiple chains inside a single unnamed chain (thanks to Rachel Burdge)</li>
<li>Fixed a second bug in chain detection routines where HETATM residues with names ending in "3" were improperly chosen for termini (thanks to Reut Abramovich)</li>
<li>Fixed a bug where chains were improperly detected when only containing one HETATM residue (thanks to Reut Abramovich)</li>
</ul>
