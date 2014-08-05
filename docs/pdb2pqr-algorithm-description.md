---
layout: docs
title: Algorithm Description
prev_section: usage
next_section: pdb2pqr-overview
permalink: /docs/pdb2pqr-algorithm-description/
---

<style>.section-nav {display:none;}</style>


## Debumping algorithm

<a href="../../img/pdb2pqr-workflow.png" target="_blank"><img src="../../img/pdb2pqr-workflow.png" style="float:right;border:10px solid white;margin:10px;" width="300" heigh="534" /></a>

To determine if a residue needs to be debumped PDB2PQR compares its atoms to all nearby atoms. With the exception of donor/acceptor pairs and CYS residue SS bonded pairs, a residue needs to be debumped if any of its atoms are within a cutoff distance of any other atoms. The cut off is 1.5 angstrom for hydrogen and 2.0 otherwise. 

Considering the atoms that are conflicted PDB2PQR changes selected dihedral angle’s configurations in increments of 5.0 degrees looking for positions where the residue does not conflict with other atoms. If modifying a dihedral angle does not result in a debumped configuration then the dihedral angle is reset to its original setup and the next one is tried. If 10 angles are tried without success the algorithm reports failure. 

It should be noted that this is not an optimal solution. This method is not guaranteed to find a solution if it exists and will accept the first completely debumped state found and not the optimal state. 

This implementation also has the following known bugs: 

- The best configuration for a dihedral angle should be tracked and used. Resetting the configuration was not the intended behavior. 
- Only the first two possible dihedral angles are explored. Other possible angles are ignored. 
- In some cases if a more than one atom is conflicted in a residue PDB2PQR could declare a residue debumped after fixing only one bump. 
- Currently PDB2PQR does not consider water atoms when looking for conflicts.

## Hydrogen bonding network optimization

The hydrogen bonding network optimization seeks, as the name suggests, to optimize the hydrogen bonding network of the protein. Currently this entails manipulating the following residues:

- Flipping the side chains of HIS (including user defined HIS states), ASN, and GLN residues;
- Rotating the sidechain hydrogen on SER, THR, TYR, and CYS (if available);
- Determining the best placement for the sidechain hydrogen on neutral HIS, protonated GLU, and protonated ASP;
- Optimizing all water hydrogens.

## Titration state assignment

Protein residue titration states are assigned using pKa values determined by PROPKA.

## Ligand parameterization

The calculation of ligand charges necessitates detailed information on molecular structure and protonation states due to the large variation in the covalent structures of small-molecule protein ligands. The current version of PDB2PQR therefore requires the ligand structure, protonation state, and formal charge to be specified by the user in the popular MOL2 file format. Ligand structures in MOL2 format are readily available from popular molecular modeling software and free web services such as PRODRG.

The calculation of ligand charges in PDB2PQR is based on the partial equalization of orbital electronegativities (PEOE) procedure developed by Gasteiger and Marsili ([Gasteiger, 1980](http://dx.doi.org/10.1016/0040-4020%2880%2980168-2)). In the PEOE procedure, orbital electronegativities χ are linked to partial atomic charges q by a polynomial expansion ( \chi = a + b q + c q^2 + d q^3). The coefficients a, b, c, and d were optimized by Gasteiger and Marsili using gas phase data on ionization potentials and electron affinities. We utilize a PEOE algorithm, which has been optimized by [Czodrowski et al](http://dx.doi.org/10.1002/prot.21110). to obtain better agreement between theoretical and experimental solvation energies for a set of small molecules including the polar amino acids.
