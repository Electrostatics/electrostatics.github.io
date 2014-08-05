---
layout: examples
title: Ligand Parameterization
permalink: /examples/ligand_parameterization/
---


<style>.section-nav {display:none;}</style>



#### Introduction

This section outlines the parameterization of ligands using the PEOE_PB methods (see Czodrowski P, Dramburg I, Sotriffer CA, Klebe G. Development, validation, and application of adapted peoe charges to estimate pka values of functional groups in protein-ligand complexes. Proteins. 65 (2), 424-37, 2006 for more information).

As described in the PDB2PQR user guide and on the PDB2PQR server page, ligand parameterization currently requires a MOL2-format representation of the ligand to provide the necessary bonding information. MOL2-format files can be obtained through the freePRODRG web server or some molecular modeling software packages. Please note that PRODRG provides documentation as well as several examples on ligand preparation on its web page; please refer to the PRODRG documentation for questions about ligand MOL2 file preparation.

#### HIV-1 protease (1HPX)

Mixing things up a little bit from above, we're now ready to look at the 1HPV crystal structure (HIV-1 protease) and parameterize its ligand, KNI-272. We're going to

- 1.) From the PDB2PQR server web page, enter `1HPX` into the PDB ID field.
- 2.) Choose whichever forcefield and naming schemes you prefer.
- 3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms", "Optimize the hydrogen bonding network", and "Assign charges to the ligand specified in a MOL2 file" options are selected. The necessary MOL2 file can be downloaded here. You can select other options as well, if interested.
- 4.) Hit the "Submit" button.

Once the calculations are complete, you should see a web page with a link to the new PQR file with a warning about debumping P81 (but no warnings about ligand parameterization!). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., VMD, PyMOL, or PMV). For comparison, you might download the the original PDB file and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed and how the ligand is bound to the active site.

#### L-Arabinose binding protein (1ABF)

Our next example uses PDB structure 1ABF of L-arabinose binding protein in complex with a sugar ligand at 1.90 Å resolution. To parameterize both this protein and its ligand:

- 1.) From the PDB2PQR server web page, enter `1ABF` into the PDB ID field.
- 2.) Choose whichever forcefield and naming schemes you prefer.
- 3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms", "Optimize the hydrogen bonding network", and "Assign charges to the ligand specified in a MOL2 file" options are selected. The necessary MOL2 file can be downloaded here. You can select other options as well, if interested.
- 4.) Hit the "Submit" button.

Once the calculations are complete, you should see a web page with a link to the new PQR file with a warning about debumping P66, K295, and K306 (but no warnings about ligand parameterization!). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., VMD, PyMOL, or PMV). For comparison, you might download the the original PDB fileand compare the PDB2PQR-generated structure with the original to see where hydrogens were placed and how the ligand is bound to the active site.
