---
layout: news_item
date: 2002-10-25 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 0.2.3 (2002-10)
permalink: /news/apbs_Version_0.2.3_(2002-10)/
---

<ul>
<li>Fixed bugs in salt-dependent Helmholtz/nonlinear term of PBE affecting both LPBE and NPBE calculations.  While this bug fix only changes most energies by < 2 kJ/mol, it is recommended that all users upgrade.  Many thanks to Michael Grabe for finding and carefully documenting this bug!</li>
<li>A parameter (chgm) has been added which controls the charge discretization method used.  Therefore, this version contains substantial changes in both the API and input file syntax.  Specifically:</li>
    <ul>
    <li>PBEparm has two new members (chgm, setchgm)</li>
    <li>Vpmg_fillco requires another argument</li>
    <li>Vpmg_*Force functions require additional arguments</li>
    <li>Input files must now contain the keyword "chgm #" where # is an integer</li>
    <li>Please see the documentation for more information.</li>
    </ul>
<li>Fixed problems with "slicing" off chunks of the mesh during I/O of focused calculations</li>
<li>Updated authors list</li>
<li>New CHARMM parameters -- Robert Konecny</li>
<li>Created enumerations for common surface and charge discretization methods</li>
<li>Added Vmgrid class to support easy manipulation of nested grid data</li>
<li>Added more verbosity to error with NPBE forces</li>
<li>Added working Python wrappers -- Todd Dolinksy</li>
<li>Modified VMD scripts read_dx and loadstuff.vmd</li>
</ul>
