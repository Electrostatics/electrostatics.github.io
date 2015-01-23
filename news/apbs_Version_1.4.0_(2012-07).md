---
layout: news_item
date: 2012-07-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.4.0 (2012-07)
permalink: /news/apbs_Version_1.4.0_(2012-07)/
---


<h5>Summary</h5>

<p>We are pleased to announce the release of APBS 1.4.0. This version of APBS includes a massive rewrite to eliminate FORTRAN from the software code base to improve portability and facilitate planned optimization and parallelization activities. A more detailed list of changes is provided below.</p>
<p>Starting with this release, we have created separate installation packages for the APBS binaries, examples, and programming documentation. This change is in response to user requests and recognition of the large size of the examples and documentation directories.</p>

Detailed changes

<ul>
<li>Removed FORTRAN dependency from APBS</li>
<li>Direct line by line translation of all source from contrib/pmgZ</li>
<li>Functions replaced and tested incrementally to ensure code congruence</li>
<li>Created new subfolder src/pmgC for translated pmg library</li>
<li>Created new macros for 2d, 3d matrix access</li>
<li>In src/generic/apbs/vmatrix.h</li>
<li>Simulate native FORTRAN 2 and 3 dimensional arrays</li>
<li>Use 1-indexed, column-major ordering</li>
<li>Allowed direct 1-1 translation from FORTRAN to ensurre code congruence</li>
<li>Added additional debugging and output macros to src/generic/apbs/vhal.h</li>
<li>Added message, error message, assertion, warning, and abort macros</li>
<li>Macro behavior modified by the --enable-debug flag for configure</li>
<li>Non-error messages directed to stderr in debug, io.mc otherwise</li>
<li>All error messages are directed to stdout</li>
 <li>In debug mode, verbose location information is provided</li>
<li>Added additional flags to configure</li>
<li>--with-fetk replaces FETK_INCLUDE, FETK_LIBRARY environment flags</li>
<li>--with-efence enables compiling with electric fence library</li>
<li>--enable-debug eliminates compiling optimization and includes line no info</li>
<li>---enable-profiling adds profiling information and sets --enable-debug</li>
<li>--enable-verbose-debug prints lots of function specific information</li>
</ul>

