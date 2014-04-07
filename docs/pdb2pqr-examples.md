---
layout: docs
title: Examples
prev_section: pdb2pqr-faq
next_section: viz-overview
permalink: /docs/pdb2pqr-examples/
---

## Assigning titration states with PROPKA

#### Introduction

<p>Interested users should read <a target="_blank" href="http://onlinelibrary.wiley.com/doi/10.1002/prot.20660/abstract">Li H, Robertson AD, Jensen JH. Very Fast Empirical Prediction and Rationalization of Protein pKa Values. Proteins, 61, 704-721 (2005)</a>. for a much more complete description and analysis of titration state assignment usingPROPKA. The examples here are taken from this paper. Nearly all of these examples can be reproduced using PDB2PQR/PROPKA, we give a single example here for demonstration purposes.</p>

#### HIV-1 protease (1HPX)

The PDB structure 1HPX includes HIV-1 protease complexed with an inhibitor at 2.0 Å resolution. HIV-1 protease has two chains; residue D25 is anionic on one chain and neutral on the other -- these titration states are important in the role of D25 as an acid in the catalytic mechanism.

1.) From the PDB2PQR server web page, enter 1HPX into the PDB ID field.
2.) Choose whichever forcefield and naming schemes you prefer.
3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms", "Optimize the hydrogen bonding network", and "Use PROPKA to assign protonation states at pH" options are selected. Choose pH 7 for your initial calculations. You can select other options as well, if interested.
4.) Hit the "Submit" button.

<p>Once the calculations are complete, you should see a web page with a link to the PROPKA output, a new PQR file, and warnings about the ligand KNI (since we didn't choose to parameterize it in this calculation -- <a href="http://pdb2pqr.sourceforge.net/examples/#hiv1lig">see here</a>). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., <a href="http://www.ks.uiuc.edu/Research/vmd/%22" target="_blank">VMD</a>, <a target="_blank" href="http://www.pymol.org/">PyMOL</a>, or <a target="_blank" href="http://www.scripps.edu/sanner/python/pmv/index.html">PMV</a>). For comparison, you might download the the <a href="http://www.pdb.org/pdb/explore.do?structureId=1HPX" target="_blank">original PDB file</a> and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed.</p>

## Basic PDB file operations

#### Fasciculin-1 (1FAS)

This 3-finger toxin structure is available at high resolution (1.9 Å) and has all its heavy atoms present in the PDB file. We'll use one of the PDB2PQR servers to add hydrogens to this protein and optimize their positions.

1.) From the PDB2PQR server web page, enter `1FAS` into the PDB ID field.
2.) Choose whichever forcefield and naming schemes you prefer.
3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms" and "Optimize the hydrogen bonding network" options are selected. You can select other options as well, if interested.
4.) Hit the "Submit" button.

<p>Once the calculations are complete, you should see a web page with a link to the PROPKA output, a new PQR file, and warnings about the ligand KNI (since we didn't choose to parameterize it in this calculation -- <a href="http://pdb2pqr.sourceforge.net/examples/#hiv1lig">see here</a>). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., <a href="http://www.ks.uiuc.edu/Research/vmd/%22" target="_blank">VMD</a>, <a target="_blank" href="http://www.pymol.org/">PyMOL</a>, or <a target="_blank" href="http://www.scripps.edu/sanner/python/pmv/index.html">PMV</a>). For comparison, you might download the the <a href="http://www.pdb.org/pdb/explore.do?structureId=1HPX" target="_blank">original PDB file</a> and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed.</p>

#### Calmodulin-dependent protein kinase (1A06)

This kinase structure is <a href="http://www.pdb.org/pdb/explore.do?structureId=1A06" target="_blank">available</a> at somewhat lower (2.5 Å) resolution and is missing several sidechain atoms as well as portions of its sequence. We'll use this example to demonstrate how PDB2PQR can add missing sidechain atoms to an imcomplete structure but cannot fill in missing regions of the backbone. In particular, we'll use PDB2PQR to add/optimize hydrogens, reconstruct sidechains K53, N65, R140, E154, Q192, Y195, E221, N222, K225, E228, K232, and Q272 from model geometries, and assign parameters.


1.) From the PDB2PQR server web page, enter `1A06` into the PDB ID field.
2.) Choose whichever forcefield and naming schemes you prefer.
3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms" and "Optimize the hydrogen bonding network" options are selected. You can select other options as well, if interested.
4.) Hit the "Submit" button.


<p>Once the calculations are complete, you should see a web page with a link to the PROPKA output, a new PQR file, and warnings about the ligand KNI (since we didn't choose to parameterize it in this calculation -- <a href="http://pdb2pqr.sourceforge.net/examples/#hiv1lig">see here</a>). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., <a href="http://www.ks.uiuc.edu/Research/vmd/%22" target="_blank">VMD</a>, <a target="_blank" href="http://www.pymol.org/">PyMOL</a>, or <a target="_blank" href="http://www.scripps.edu/sanner/python/pmv/index.html">PMV</a>). For comparison, you might download the the <a href="http://www.pdb.org/pdb/explore.do?structureId=1HPX" target="_blank">original PDB file</a> and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed.</p>