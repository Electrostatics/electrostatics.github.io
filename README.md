# Why study electrostatics and solvation?

An understanding of electrostatic interactions is essential for the study of biomolecular processes. The structures of proteins and other biopolymers are being determined at an increasing rate through structural genomics and other efforts while specific linkages of these biopolymers in cellular pathways or supramolecular assemblages are being detected by genetic and proteomic studies. To integrate this information in physical models for drug discovery or other applications requires the ability to evaluate the energetic interactions within and between biopolymers. Among the various components of molecular energetics, solvation properties and electrostatic interactions are of special importance due to the long range of these interactions and the substantial charges of typical biopolymer components.

# What software is available here?

## APBS

APBS solves the equations of continuum electrostatics for large biomolecular assemblages. This software was designed “from the ground up” using modern design principles to ensure its ability to interface with other computational packages and evolve as methods and applications change over time. The APBS code is accompanied by extensive documentation for both users and programmers and is supported by a variety of utilities for preparing calculations and analyzing results. Finally, the free, open-source APBS license ensures its accessibility to the entire biomedical community.

## What PDB2PQR

The use of continuum solvation methods such as APBS requires accurate and complete structural data as well as force field parameters such as atomic charges and radii. Unfortunately, the limiting step in continuum electrostatics calculations is often the addition of missing atomic coordinates to molecular structures from the Protein Data Bank and the assignment of parameters to these structures. To address this problem, we have developed PDB2PQR. This software automates many of the common tasks of preparing structures for continuum solvation calculations as well as many other types of biomolecular structure modeling, analysis, and simulation. These tasks include:

Adding a limited number of missing heavy (non-hydrogen) atoms to biomolecular structures.
Estimating titration states and protonating biomolecules in a manner consistent with favorable hydrogen bonding.
Assigning charge and radius parameters from a variety of force fields.
Generating “PQR” output compatible with several popular computational modeling and analysis packages.
This service is intended to facilitate the setup and execution of electrostatics calculations for both experts and non-experts and thereby broaden the accessibility of biomolecular solvation and electrostatics analyses to the biomedical community.

# How do I get started?

1. Please [register your use of the software](http://eepurl.com/by4eQr) to increase the likelihood of its continued support and development.
2. Identify the molecule you want to analyze (e.g., from the [Protein Data Bank](https://www.rcsb.org/)).
3. Prepare the structure with [PDB2PQR](https://github.com/Electrostatics/pdb2pqr) using a local download or the [web server](http://server.poissonboltzmann.org). Learn more from the [PDB2PQR documentation](https://pdb2pqr.readthedocs.io).
4. Calculate electrostatic and solvation properties with [APBS](https://github.com/Electrostatics/apbs) using a local download or the [web server](http://server.poissonboltzmann.org).  Learn more from the [APBS documentation](https://apbs.readthedocs.io).
5. Visualize the results using PyMOL, VMD, Chimera, UnityMol, via the web server, or with many other software packages.

# Who paid for this?

This software is made possible by generous support from the US National Institutes of Health through grant [GM69702](https://pubmed.ncbi.nlm.nih.gov/?term=R01+GM069702%2FGM%2FNIGMS+NIH+HHS%2FUnited+States%5BGrant+Number%5D).

