---
layout: news_item
date: 2009-12-15 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.2.1 (2009-12)
permalink: /news/Version_1.2.1_(2009-12)/
---


<h6>Bug fixes</h6>
<ul>
<li>Added in warning into focusFillBound if there is a large value detected in setting the boundary conditions during a focusing calculation</li>
<li>Added in a check and abort in Vpmg_qmEnergy if chopped values are detected. This occurs under certain conditions for NPBE calculations where focusing cuts into a low-dielectric regions.</li>
<li>Fixed a bug in Vpmg_MolIon that causes npbe based calculations to return very large energies.  This occurs under certain conditions for NPBE calculations where focusing cuts into a low-dielectric regions.</li>
</ul>
