---
layout: news_item
date: 2005-12-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.4.0 (2005-12)
permalink: /news/apbs_Version 0.4.0 (2005-12)/
---


<h5>New features</h5>
<ul>
    <li>New version of the 'acc' program available.</li>
    <li>Added additional verbosity to APBS output.</li>
    <li>Added tools/python/vgrid to the autoconf script. The directory compiles with the rest of the Python utilities and is used for manipulating dx files.</li>
    <li>Modified the tools/python/noinput.py example to show the ability to get and print energy and force vectors directly into Python arrays.</li>
    <li>Added dx2uhbd tool to tools/mesh for converting from dx format to UHBD format (Thanks to Robert Konecny)</li>
    <li>Added ability of tools/manip/inputgen.py to split a single mg-para APBS input file into multiple asynchronous input files.</li>
    <li>Modified inputgen.py to be more flexible for developers wishing to directly interface with APBS.</li>
    <li>Added Vclist cell list class to replace internal hash table in Vacc</li>
    <li>Modified Vacc class to use Vclist, including changes to the Vacc interface (and required changes throughout the code)</li>
    <li>Consolidated Vpmg_ctor and Vpmg_ctorFocus into Vpmg_ctor</li>
    <li>Consolidated vpmg.c, vpmg-force.c, vpmg-energy.c, vpmg-setup.c</li>
    <li>Added autoconf support for compilation on the MinGW32 Windows Environment</li>
    <li>Added autoconf support (with Python) for Mac OS 10.4 (Tiger)</li>
    <li>Added the function Vpmg_solveLaplace to solve homogeneous versions of Poisson's equation using Laplacian eigenfunctions.</li>
    <li>Modified the dielectric smoothing algorithm (srfm smol) to a 9 point method based on Bruccoleri, et al.  J Comput Chem 18 268-276 (1997).  NOTE:  This is a faster and more flexible smoothing method.  However, when combined with the the molecular surface bugfixes listed below, this change has the potential to make the srfm smol method give very different results from what was calculated in APBS 0.3.2.  Users who need backwards compatibility are encouraged to use the spline based smoothing method (srfm spl2) or the molecular surface without smoothing (srfm mol).</li>
    <li>Added new 'sdens' input keyword to allow user to control the sphere density used in Vacc.  This became necessary due to the Vacc_molAcc bug fix listed below.  Only applies to srfm mol and srfm smol.</li>
    <li>Made the examples directory documentation much more streamlined.</li>
    <li>Added tests for examples directory.  Users can now issue a "make test" in the desired directory to compare local results with expected results. Also includes timing results for tests for comparison between installations.</li>
</ul>
<h5>Bug fixes</h5>
<ul>
    <li>Fixed a bug in Vpmg_qmEnergy to remove a spurious coefficient of z_i^2 from the energy calculation.  This generated incorrect results for multivalent ions (but then again, the validity of the NPBE is questionable for multivalents...)  (Big thanks to Vincent Chu)</li>
    <li>Fixed a bug in vacc.c where atoms with radii less than 1A were not considered instead of atoms with no radii.</li>
    <li>Fixed error in tools/mesh/dx2mol.c (Thanks to Fred Damberger)</li>
    <li>Fixed floating point error which resulted in improper grid spacings for some cases.</li>
    <li>Fixed a bug in Vacc_molAcc which generates spurious regions of high internal dielectric for molecular surface-based dielectric definitions.  These regions were very small and apparently affected energies by 1-2% (when used with the 'srfm mol'; the 'srfm smol' can potentially give larger deviations).  The new version of the molecular surface is actually faster (requires 50-70% of the time for most cases) but we should all be using the spline surface anyway -- right? (Thanks to John Mongan and Jessica Swanson for finding this bug).</li>
    <li>Fixed a bug in vpmg.c that caused an assertion error when writing out laplacian maps (Thanks to Vincent Chu).</li>
    <li>Ensured Vpmg::ccf was always re-initialized (in the case where the Vpmg object is being re-used).</li>
    <li>Removed a spurious error estimation in finite element calculations.</li>
    <li>Clarified the role of ccf and other variables in mypde.f and vpmg.c by expanding/revising the inline comments.</li>
</ul>
