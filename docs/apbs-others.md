---
layout: docs
title: Using with other programs
prev_section: apbs-invocation
next_section: APBS_package_overview
permalink: /docs/apbs-others/
---


{% include no-prev-next.html %}

<img src="{{site.baseurl}}/images/apbs-icons/APBS_128_v2.png" class="apbs-icon" />


### Overview

APBS was designed to facilitate use with other programs. This section outlines some of the programs with which APBS is known to work. However, it is likely that applications which use APBS have been inadvertently omitted from this list. If you know of a software that uses APBS and is not listed here, please <a href="/support/home/">contact us</a>.

## Web Interfaces

* __PDB2PQR__ - The [PDB2PQR web server](../structures-ready/) provides the ability to configure, run, and visualize APBS calculations.

<!--* __Gemstone__ - [The Gemstone extension](http://gemstone.mozdev.org/) for the Firefox web browser used to provide a very easy-to-use interface to older versions of APBS (0.4.0) with all of the functionality of the command-line interface. However, this extension was created by external developers and is no longer actively maintained. Please <a href="/support/home/">contact us</a> to let us know if this extension was important to your research.-->

## Graphical User Interfaces

* [__PyMOL__](http://pymol.sourceforge.net/) -
molecular visualization and animation package which provides an interface to APBS. The APBS plugin to PyMOL (developed by Michael George Lerner) permits isocontour and surface map visualization of APBS results. More information about using PyMOL with APBS is provided in the FAQs.
<p><img src="{{site.baseurl}}/img/1fas_with_pymol.png" /><sub><sub>PDB ID 1FAS with PyMOL</sub></sub></p>


* [__VMD__](http://www.ks.uiuc.edu/Research/vmd/) -
molecular visualization and animation package which provides an interface
to APBS. It permits visualization of APBS results as isocontours,
electric field lines, or on biomolecular surfaces. VMD also has graphical
plugin to setup APBS calculations and execute them either locally or
remotely via BioCoRE. More information is available
[here](http://www.ks.uiuc.edu/Research/vmd/plugins/apbsrun/) and in the FAQs.
<p><img src="{{site.baseurl}}/img/left_dialog_boxes_horizontal.png" /><sub><sub>PDB ID 1FAS with VMD</sub></sub></p>


* [__PMV__](http://www.scripps.edu/~sanner/python) -
Python-based molecular visualization package which provides an interface
to APBS. It not only permits visualization of APBS results but it also
integrates setup and executation of APBS calculations. The [PMV/APBS
interface](http://mccammon.ucsd.edu/pmv_apbs/) is under active
development and future versions will offer even more setup,
visualization, and analysis functionality.  The APBS interface is
distributed with recent [beta versions of PMV](http://www.scripps.edu/~sanner/python).
Additional documention for using APBS with PMV is provided [here](http://mgltools.scripps.edu/api/Pmv/Pmv.APBSCommands-module.html).
<p><img src="{{site.baseurl}}/img/1fas_PMV_potential.png" /><sub><sub>PDB ID 1FAS with PMV</sub></sub></p>


* [__Chimera__](http://www.cgl.ucsf.edu/chimera/) -
molecular visualization package which provides an interface
to APBS.The APBS plugin integrated in Chimera allows the user to run a protein through both PDB2PQR and APBS to optimize the protein and view the electrostatic potential.  
Additional documention for using APBS with PMV is provided [here](http://www.cgl.ucsf.edu/chimera/docs/ContributedSoftware/apbs/apbs.html).
<p><img src="{{site.baseurl}}/img/1fas_chimera_apbs.png" /><sub><sub>PDB ID 1FAS with Chimera</sub></sub></p>


## Simulation Software

* __iAPBS__ - Robert Konecny (McCammon Group) has developed
[iAPBS](http://mccammon.ucsd.edu/iapbs/), an interface between APBS and
the simulation packages AMBER, CHARMM, and NAMD. More information is
available from the [iAPBS homepage](http://mccammon.ucsd.edu/iapbs/).

* __TINKER__ - APBS 1.3 is available with TINKER; please visit the <a href="http://dasher.wustl.edu/tinker/" >TINKER homepage</a> for more information.

## Visualization Software

Electrostatic potentials are commonly visualized in the context of biomolecular structure to better understand functional aspects of biological systems. This section describes molecular graphics software which can display potentials and other data output from APBS. Note that the graphical user interfaces discussed above can also be used to visualize APBS output.

* [__Off-Target Pipeline__](https://sites.google.com/site/offtargetpipeline/) - implements APBS to estimate ligand binding energies and compare electrostatic potential distributions within binding cavities.

* [__Dino3D__](http://www.dino3d.org/) -
molecular graphics program which can read UHBD-format electrostatic data. APBS can write multigrid results in UHBD format (see the write ELEC command) and therefore can be used with Dino3D.

<!--* [__MOLMOL__](http://www.mol.biol.ethz.ch/wuthrich/software/molmol/) -
 molecular graphics package with an emphasis on NMR-generated structural data. A program is provided with APBS (see tools/mesh directory in the APBS distribution and the Data conversion tools in this manual) which converts OpenDX format data to MOLMOL format.-->

* [__OpenDX__](http://www.opendx.org) - 
 general data visualization package which can read APBS output using the scripts provided in tools/visualization/opendx (see the discussion of Data visualization tools in this manual). However, as there is no straightforward way to visualizate the potential in the context of the atomic structure, OpenDX should not a first choice for APBS visualization.


