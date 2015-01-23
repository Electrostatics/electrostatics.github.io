---
layout: news_item
date: 2004-04-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.3.1 (2004-04)
permalink: /news/apbs_Version _0.3.1_(2004-04)/
---



<h5>New features</h5>
<ul>
    <li>New APBS tutorial</li>
    <li>New tools/python/vgrid/mergedx.py script to merge dx files generated from parallel APBS runs back into a single dx file.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
    <li>Fixed bug in parallel calculations where atoms or points on a border between two processors were not included.  Modified setup algorithm for  parallel calculations to allow partitions in order to obtain grid points and spacing from the global grid information.</li>
    <li>Modified extEnergy function to work with parallel calculations, giving better accuracy.</li>
</ul>
