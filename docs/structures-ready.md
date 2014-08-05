---
layout: docs
title: Getting Structures Ready
prev_section: downloads
next_section: calculating
permalink: /docs/structures-ready/
---

Below, is a quick start guide for getting structures ready for APBS using
two implementations for using PDB2PQR.  PDB2PQR is an automated pipeline
for the setup, execution, and analysis of Poisson-Boltzmann
electrostatics calculations.  This is a Python software package that
automates many of the common tasks of preparing structures for continuum
electrostatics calculations, providing a platform-independent utility for
converting protein files in PDB format to PQR format. 

These tasks include:

- Adding a limited number of missing heavy atoms to biomolecular structures
- Determining side-chain pKas
- Placing missing hydrogens
- Optimizing the protein for favorable hydrogen bonding
- Assigning charge and radius parameters from a variety of force fields

## PDB2PQR Basic workflow

The first method demonstrates how to use the pdb2pqr web server and the
next method calls pdb2pqr directly from the command line.  For a more
detailed explanation of how PDB2PQR runs, see [Basic Usage]({{ site.baseurl }}../../docs/pdb2pqr-usage ).

<div class="note warning">
	<h5>Before you begin!</h5>
	<p>PDB2PQR funding is dependent on your support for continued development and support. Please <a href="https://docs.google.com/forms/d/1CsftV09vLGIxeMHwevGy8SDVYKoihs8EWLNjsbjxIRw/viewform" target="_blank" >register</a> before using the PDB2PQR web server so we can accurately report the number of users to our funding agencies.</p>
</div>


## Web Server:

1. Go to [web server](http://nbcr-222.ucsd.edu/pdb2pqr_1.8/)

2. Identify your molecule:
  * Enter the protein data bank ID or...
  * Load the protein data bank file (examples [here](http://www.rcsb.org/pdb/home/home.do))
<p><img src="https://raw.githubusercontent.com/Electrostatics/apbs-pdb2pqr/gh-pages/img/pdb2pqr_web_server_screenshot.png" /></p>
* Press submit!

## Command Line:

Running PDB2PQR with the same options shown above can be performed with the following command:

`% pdb2pqr.py --ff=parse --apbs-input --nodebump 1FAS.pdb 1FAS.pqr`

### Notes on PDB2PQR
- PDB2PQR was ported to Python by Todd Dolinsky while working with Nathan Baker at Washington University in St. Louis. The PDB2PQR code is based on C++ design and algorithms by Jens Erik Nielsen. PDB2PQR was originally designed to facilitate structure preparation for APBS.
- PDB2PQR uses PROPKA to determine protein pKa values. PROPKA is developed by the Jensen Research Group at the University of Copenhagen. More information about PROPKA can be found at [http://propka.ki.ku.dk/](http://propka.ki.ku.dk/).
- PEOE_PB charges for ligand parameterization were developed by Paul Czodrowski in the Klebe Group at the Philipps University Marburg.
