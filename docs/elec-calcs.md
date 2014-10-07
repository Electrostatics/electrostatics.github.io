---
layout: docs
title: Types of ELEC Calculations
permalink: /docs/elec-calcs/
---

<h3 id="fe-maual"></h3>fe-maual: manually-configured adaptive finite element Poisson-Boltzmann calculations

This is a single-point PBE calculation performed by our adaptive finite element PBE solver. It requires that APBS be linked to the Michael Holst group FEtk finite element library http://www.fetk.org during compilation.

The finite element solver uses a "solve-estimate-refine" cycle. Specifically, starting from an initial mesh, it performs the following iteration:

<ol>
	<li>solve the problem with the current mesh</li>
	<li>estimate the error in the solution</li>
	<li>adaptively refine the mesh to reduce the error</li>
</ol>

...until a global error tolerance is reached.

<div class="note">
	<h5>Note</h5>
	<p>The finite element methods are currently most useful for a select set of problems which can benefit from adaptive refinement of the solution. Furthermore, this implementation is experimental. In general, the sequential and parallel focusing multigrid methods offer the most efficient solution of the PBE for most systems.</p>
</div>


All keywords for this type of calculation are required unless otherwise noted:

- [akeyPRE](/docs/elec-keywords/#akeypre)
- [akeySOLVE](/docs/elec-keywords/#akeysolve)
- [bcfl](/docs/elec-keywords/#bcfl)
- [calcenergy](/docs/elec-keywords/#calcenergy)
- [calcforce](/docs/elec-keywords/#calcforce)
- [chgm](/docs/elec-keywords/#chgm)
- [domainLength](/docs/elec-keywords/#domainlength)
- [ekey](/docs/elec-keywords/#ekey)
- [etol](/docs/elec-keywords/#etol)
- [ion](/docs/elec-keywords/#ion)
- [lpbe](/docs/elec-keywords/#lpbe)
- [lrpbe](/docs/elec-keywords/#lrpbe)
- [maxsolve](/docs/elec-keywords/#maxsolve)
- [maxvert](/docs/elec-keywords/#maxvert)
- [mol](/docs/elec-keywords/#mol)
- [npbe](/docs/elec-keywords/#npbe)
- [nrpbe](/docs/elec-keywords/#nrpbe)
- [pdie](/docs/elec-keywords/#pdie)
- [sdens](/docs/elec-keywords/#sdens)
- [sdie](/docs/elec-keywords/#sdie)
- [srad](/docs/elec-keywords/#srad)
- [srfm](/docs/elec-keywords/#srfm)
- [swin](/docs/elec-keywords/#swin)
- [temp](/docs/elec-keywords/#temp)
- [useaqua](/docs/elec-keywords/#useaqua)
- [usemap](/docs/elec-keywords/#usemap)
- [usemesh](/docs/elec-keywords/#usemesh)
- [write](/docs/elec-keywords/#write)
- [writemat](/docs/elec-keywords/#writemat)

<h3 id="mgauto">mg-auto: automatically-configured sequential focusing multigrid Posson-Boltzmann calculations</h3>

This multigrid calculation automatically sets up and performs a string of single-point PBE calculations to "focus" on a region of interest (binding site, etc.) in a system. It is basically an automated version of mg-manual designed for easier use. Most users should probably use this version of ELEC.

The following keywords are present in mg-auto ELEC blocks; all keywords are required unless otherwise noted:

- [bcfl](/docs/elec-keywords/#bcfl)
- [calcenergy](/docs/elec-keywords/#calcenergy)
- [calcforce](/docs/elec-keywords/#calcforce)
- [chgm](/docs/elec-keywords/#chgm)
- [dime](/docs/elec-keywords/#dime)
- [etol](/docs/elec-keywords/#etol)
- [fgcent](/docs/elec-keywords/#fgcent)
- [fglen](/docs/elec-keywords/#fglen)
- [ion optional](/docs/elec-keywords/#ion)
- [lpbe](/docs/elec-keywords/#lpbe)
- [mol](/docs/elec-keywords/#mol)
- [npbe](/docs/elec-keywords/#npbe)
- [pdie](/docs/elec-keywords/#pdie)
- [sdens](/docs/elec-keywords/#sdens)
- [sdie](/docs/elec-keywords/#sdie)
- [smpbe](/docs/elec-keywords/#smpbe)
- [srad](/docs/elec-keywords/#srad)
- [srfm](/docs/elec-keywords/#srfm)
- [swin](/docs/elec-keywords/#swin)
- [temp](/docs/elec-keywords/#temp)
- [useaqua](/docs/elec-keywords/#useaqua)
- [usemap](/docs/elec-keywords/#usemap)
- [write](/docs/elec-keywords/#write)
- [writemat](/docs/elec-keywords/#writemat)


<h3 id="mgdummy">mg-dummy: calculations of surface and charge distribution properties which do not require solution of the PBE</h3>

This type of calculation allows users to write out dielectric, ion-accessibility, and charge distribution, and other types of maps that depend solely on biomolecular geometry. Since these maps depend only on geometry, they can be written out without actually solving the PB equation. The syntax for this command is identical to mg-manual.

<h3 id="mgmanual">mg-manual: manually-configured multigrid Poisson-Boltzmann calculations</h3>

This is a standard single-point multigrid PBE calculation without focusing or additional refinement. The mg-manual calculation offers the most control of parameters to the user. Several of these calculations can be strung together to perform focusing calculations by judicious choice of the bcfl flag; however, the setup of the focusing is not automated as it is in mg-auto and mg-para calculations and therefore this command should primarily be used by more experienced users.

The keywords for this command are all required unless otherwise noted:

- [bcfl](/docs/elec-keywords/#bcfl)
- [calcenergy](/docs/elec-keywords/#calcenergy)
- [calcforce](/docs/elec-keywords/#calcforce)
- [chgm](/docs/elec-keywords/#chgm)
- [dime](/docs/elec-keywords/#dime)
- [etol](/docs/elec-keywords/#etol)
- [fgcent](/docs/elec-keywords/#fgcent)
- [fglen](/docs/elec-keywords/#fglen)
- [gcent](/docs/elec-keywords/#gcent)
- [glen](/docs/elec-keywords/#glen)
- [grid](/docs/elec-keywords/#grid)
- [ion optional](/docs/elec-keywords/#ion)
- [lpbe](/docs/elec-keywords/#lpbe)
- [mol](/docs/elec-keywords/#mol)
- [nlev](/docs/elec-keywords/#nlev)
- [npbe](/docs/elec-keywords/#npbe)
- [pdie](/docs/elec-keywords/#pdie)
- [sdens](/docs/elec-keywords/#sdens)
- [sdie](/docs/elec-keywords/#sdie)
- [smpbe](/docs/elec-keywords/#smpbe)
- [srad](/docs/elec-keywords/#srad)
- [srfm](/docs/elec-keywords/#srfm)
- [swin](/docs/elec-keywords/#swin)
- [temp](/docs/elec-keywords/#temp)
- [useaqua optional](/docs/elec-keywords/#useaqua)
- [usemap optional](/docs/elec-keywords/#usemap)
- [write](/docs/elec-keywords/#write)
- [writemat](/docs/elec-keywords/#writemat)

<h3 id="mgpara">mg-para: automatically-configured parallel focusing multigrid Poisson-Boltzman calculations</h3>

This calculation closely resembles mg-auto in syntax. However, it is designed to perform electrostatics calculations on systems in a parallel focusing fashion. The keywords for this type of calculation are all required unless otherwise noted:

- [async](/docs/elec-keywords/#async)
- [bcfl](/docs/elec-keywords/#bcfl)
- [calcenergy](/docs/elec-keywords/#calcenergy)
- [calcforce](/docs/elec-keywords/#calcforce)
- [cgcent](/docs/elec-keywords/#cgcent)
- [cglen](/docs/elec-keywords/#cglen)
- [dime](/docs/elec-keywords/#dime)
- [etol](/docs/elec-keywords/#etol)
- [fgcent](/docs/elec-keywords/#fgcent)
- [fglen](/docs/elec-keywords/#fglen)
- [ion optional](/docs/elec-keywords/#ion)
- [lpbe](/docs/elec-keywords/#lpbe)
- [mol](/docs/elec-keywords/#mol)
- [npbe](/docs/elec-keywords/#npbe)
- [pdie](/docs/elec-keywords/#pdie)
- [pdime](/docs/elec-keywords/#pdime)
- [sdens](/docs/elec-keywords/#sdens)
- [sdie](/docs/elec-keywords/#sdie)
- [smpbe](/docs/elec-keywords/#smpbe)
- [srad](/docs/elec-keywords/#srad)
- [srfm](/docs/elec-keywords/#srfm)
- [swin](/docs/elec-keywords/#swin)
- [temp](/docs/elec-keywords/#temp)
- [useaqua optional](/docs/elec-keywords/#useaqua)
- [usemap optional](/docs/elec-keywords/#usemap)
- [write](/docs/elec-keywords/#write)
- [writemat](/docs/elec-keywords/#writemat)
