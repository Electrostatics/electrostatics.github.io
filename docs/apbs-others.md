---
layout: docs
title: Using with other programs
prev_section: apbs-invocation
next_section: apbs-programmers
permalink: /docs/apbs-others/
---


<style>.section-nav {display:none;}</style>



###Overview

APBS was designed to facilitate use with other programs. This section outlines some of the programs with which APBS is known to work. However, it is likely that applications which use APBS have been inadvertently omitted from this list. If you know of software that uses APBS and is not listed here, please <a href="/support/home/">contact us</a>.

##Web Interfaces

###PDB2PQR

The [PDB2PQR web server](../structures-ready/) provides the ability to configure, run, and visualize APBS calculations

###Gemstone

The Gemstone extension [http://gemstone.mozdev.org/](http://gemstone.mozdev.org/) for the Firefox web browser used to provide a very easy-to-use interface to older versions of APBS (0.4.0) with all of the functionality of the command-line interface. However, this extension was created by external developers and is no longer actively maintained. Please <a href="/support/home/">contact us</a> to let us know if this extension was important to your research.

##Graphical User Interfaces

###PyMOL

PyMOL [http://pymol.sourceforge.net/](http://pymol.sourceforge.net/) is a molecular visualization and animation package which provides an interface to APBS. The APBS plugin to PyMOL (developed by Michael George Lerner) permits isocontour and surface map visualization of APBS results. More information about using PyMOL with APBS is provided in the FAQs.

###VMD

VMD [http://www.ks.uiuc.edu/Research/vmd/](http://www.ks.uiuc.edu/Research/vmd/) is a molecular visualization and animation package which provides an interface to APBS. It permits visualization of APBS results as isocontours, electric field lines, or on biomolecular surfaces. VMD also a graphical plugin to setup APBS calculations and execute them either locally or remotely via BioCoRE. More information is available at http://www.ks.uiuc.edu/Research/vmd/plugins/apbsrun/ and in the FAQs.

###PMV

PMV [http://www.scripps.edu/~sanner/python](http://www.scripps.edu/~sanner/python) is a Python-based molecular visualization package which provides an interface to APBS. It not only permits visualization of APBS results but it also integrates setup and executation of APBS calculations. The PMV/APBS interface (http://mccammon.ucsd.edu/pmv_apbs/) is under active development and future versions will offer even more setup, visualization, and analysis functionality.  The APBS interface is distributed with recent beta versions of PMV, avalaible from [http://www.scripps.edu/~sanner/python](http://www.scripps.edu/~sanner/python). Additional documention for using APBS with PMV is provided at [http://mccammon.ucsd.edu/~jswanson/apbsDoc/command_doc2.html](http://mccammon.ucsd.edu/~jswanson/apbsDoc/command_doc2.html).

###Simulation Software

Robert Konecny (McCammon Group) has developed iAPBS [http://mccammon.ucsd.edu/iapbs/](http://mccammon.ucsd.edu/iapbs/), an interface between APBS and the simulation packages AMBER, CHARMM, and NAMD. More information is available from the iAPBS homepage: http://mccammon.ucsd.edu/iapbs/ .

APBS is also available with developmental versions of TINKER; please contact <a href="/support/home/">contact us</a> for more information.

###Visualization Software

Electrostatic potentials are commonly visualized in the context of biomolecular structure to better understand functional aspects of biological systems. This section describes molecular graphics software which can display potentials and other data output from APBS. Note that the graphical user interfaces discussed above can also be used to visualize APBS output.

###Off-Target Pipeline

The Off-Target Pipeline [http://personalpages.manchester.ac.uk/postgrad/Thomas.Evangelidis/ug/Contents.html](http://personalpages.manchester.ac.uk/postgrad/Thomas.Evangelidis/ug/Contents.html) implements APBS to estimate ligand binding energies and compare electrostatic potential distributions within binding cavities.

###Dino3D

Dino3D [http://www.dino3d.org/](http://www.dino3d.org/) is a molecular graphics program which can read UHBD-format electrostatic data. APBS can write multigrid results in UHBD format (see the write ELEC command) and therefore can be used with Dino3D.

###MOLMOL

MOLMOL [http://www.mol.biol.ethz.ch/wuthrich/software/molmol/](http://www.mol.biol.ethz.ch/wuthrich/software/molmol/) is a molecular graphics package with an emphasis on NMR-generated structural data. A program is provided with APBS (see tools/mesh directory in the APBS distribution and the Data conversion tools in this manual) which converts OpenDX format data to MOLMOL format.

###OpenDX

OpenDX [http://www.opendx.org](http://www.opendx.org) is a general data visualization package which can read APBS output using the scripts provided in tools/visualization/opendx (see the discussion of Data visualization tools in this manual). However, as there is no straightforward way to visualizate the potential in the context of the atomic structure, OpenDX should not a first choice for APBS visualization.