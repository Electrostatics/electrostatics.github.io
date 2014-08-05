---
layout: examples
title: Assigning Titration States With Propka
permalink: /examples/assigning_titration_states_with_propka/
---


<style>.section-nav {display:none;}</style>



#### Introduction

<p>Interested users should read <a target="_blank" href="http://onlinelibrary.wiley.com/doi/10.1002/prot.20660/abstract">Li H, Robertson AD, Jensen JH. Very Fast Empirical Prediction and Rationalization of Protein pKa Values. Proteins, 61, 704-721 (2005)</a>. for a much more complete description and analysis of titration state assignment using PROPKA. The examples here are taken from this paper. Nearly all of these examples can be reproduced using PDB2PQR/PROPKA, we give a single example here for demonstration purposes.</p>

#### HIV-1 protease (1HPX)

The PDB structure 1HPX includes HIV-1 protease complexed with an inhibitor at 2.0 Å resolution. HIV-1 protease has two chains; residue D25 is anionic on one chain and neutral on the other -- these titration states are important in the role of D25 as an acid in the catalytic mechanism.

- 1.) From the PDB2PQR server web page, enter 1HPX into the PDB ID field.
- 2.) Choose whichever forcefield and naming schemes you prefer.
- 3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms", "Optimize the hydrogen bonding network", and "Use PROPKA to assign protonation states at pH" options are selected. Choose pH 7 for your initial calculations. You can select other options as well, if interested.
- 4.) Hit the "Submit" button.

<p>Once the calculations are complete, you should see a web page with a link to the PROPKA output, a new PQR file, and warnings about the ligand KNI (since we didn't choose to parameterize it in this calculation -- <a href="http://pdb2pqr.sourceforge.net/examples/#hiv1lig">see here</a>). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., <a href="http://www.ks.uiuc.edu/Research/vmd/%22" target="_blank">VMD</a>, <a target="_blank" href="http://www.pymol.org/">PyMOL</a>, or <a target="_blank" href="http://www.scripps.edu/sanner/python/pmv/index.html">PMV</a>). For comparison, you might download the the <a href="http://www.pdb.org/pdb/explore.do?structureId=1HPX" target="_blank">original PDB file</a> and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed.</p>
