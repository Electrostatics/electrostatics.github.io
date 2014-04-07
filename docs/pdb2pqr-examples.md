---
layout: docs
title: FAQ
prev_section: pdb2pqr-faq
next_section: viz-overview
permalink: /docs/pdb2pqr-examples/
---

## Assigning titration states with PROPKA

#### Introduction

<p>Interested users should read <a href="http://onlinelibrary.wiley.com/doi/10.1002/prot.20660/abstract">Li H, Robertson AD, Jensen JH. Very Fast Empirical Prediction and Rationalization of Protein pKa Values. Proteins, 61, 704-721 (2005)</a>. for a much more complete description and analysis of titration state assignment usingPROPKA. The examples here are taken from this paper. Nearly all of these examples can be reproduced using PDB2PQR/PROPKA, we give a single example here for demonstration purposes.</p>

#### HIV-1 protease (1HPX)

<p>The PDB structure 1HPX includes HIV-1 protease complexed with an inhibitor at 2.0 Å resolution. HIV-1 protease has two chains; residue D25 is anionic on one chain and neutral on the other -- these titration states are important in the role of D25 as an acid in the catalytic mechanism.

From the PDB2PQR server web page, enter 1HPX into the PDB ID field.
Choose whichever forcefield and naming schemes you prefer.
Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms", "Optimize the hydrogen bonding network", and "Use PROPKA to assign protonation states at pH" options are selected. Choose pH 7 for your initial calculations. You can select other options as well, if interested.
Hit the "Submit" button.
Once the calculations are complete, you should see a web page with a link to the PROPKA output, a new PQR file, and warnings about the ligand KNI (since we didn't choose to parameterize it in this calculation -- see below). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., VMD, PyMOL, or PMV). For comparison, you might download the the original PDB file and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed.</p>