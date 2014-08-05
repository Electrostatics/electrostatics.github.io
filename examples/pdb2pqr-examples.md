---
layout: docs
title: PDB2PQR Examples
prev_section:
next_section:
permalink: /docs/pdb2pqr-examples/
---


<style>div.section-nav {display:none;}</style>



## Assigning Titration States With PROPKA

#### Introduction

<p>Interested users should read <a target="_blank" href="http://onlinelibrary.wiley.com/doi/10.1002/prot.20660/abstract">Li H, Robertson AD, Jensen JH. Very Fast Empirical Prediction and Rationalization of Protein pKa Values. Proteins, 61, 704-721 (2005)</a>. for a much more complete description and analysis of titration state assignment using PROPKA. The examples here are taken from this paper. Nearly all of these examples can be reproduced using PDB2PQR/PROPKA, we give a single example here for demonstration purposes.</p>

#### HIV-1 protease (1HPX)

The PDB structure 1HPX includes HIV-1 protease complexed with an inhibitor at 2.0 Å resolution. HIV-1 protease has two chains; residue D25 is anionic on one chain and neutral on the other -- these titration states are important in the role of D25 as an acid in the catalytic mechanism.

- 1.) From the PDB2PQR server web page, enter 1HPX into the PDB ID field.
- 2.) Choose whichever forcefield and naming schemes you prefer.
- 3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms", "Optimize the hydrogen bonding network", and "Use PROPKA to assign protonation states at pH" options are selected. Choose pH 7 for your initial calculations. You can select other options as well, if interested.
- 4.) Hit the "Submit" button.

<p>Once the calculations are complete, you should see a web page with a link to the PROPKA output, a new PQR file, and warnings about the ligand KNI (since we didn't choose to parameterize it in this calculation -- <a href="http://pdb2pqr.sourceforge.net/examples/#hiv1lig">see here</a>). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., <a href="http://www.ks.uiuc.edu/Research/vmd/%22" target="_blank">VMD</a>, <a target="_blank" href="http://www.pymol.org/">PyMOL</a>, or <a target="_blank" href="http://www.scripps.edu/sanner/python/pmv/index.html">PMV</a>). For comparison, you might download the the <a href="http://www.pdb.org/pdb/explore.do?structureId=1HPX" target="_blank">original PDB file</a> and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed.</p>

## Basic PDB file operations

#### Fasciculin-1 (1FAS)

This 3-finger toxin structure is available at high resolution (1.9 Å) and has all its heavy atoms present in the PDB file. We'll use one of the PDB2PQR servers to add hydrogens to this protein and optimize their positions.

- 1.) From the PDB2PQR server web page, enter `1FAS` into the PDB ID field.
- 2.) Choose whichever forcefield and naming schemes you prefer.
- 3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms" and "Optimize the hydrogen bonding network" options are selected. You can select other options as well, if interested.
- 4.) Hit the "Submit" button.

<p>Once the calculations are complete, you should see a web page with a link to the PROPKA output, a new PQR file, and warnings about the ligand KNI (since we didn't choose to parameterize it in this calculation -- <a href="http://pdb2pqr.sourceforge.net/examples/#hiv1lig">see here</a>). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., <a href="http://www.ks.uiuc.edu/Research/vmd/%22" target="_blank">VMD</a>, <a target="_blank" href="http://www.pymol.org/">PyMOL</a>, or <a target="_blank" href="http://www.scripps.edu/sanner/python/pmv/index.html">PMV</a>). For comparison, you might download the the <a href="http://www.pdb.org/pdb/explore.do?structureId=1HPX" target="_blank">original PDB file</a> and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed.</p>

#### Calmodulin-dependent protein kinase (1A06)

This kinase structure is <a href="http://www.pdb.org/pdb/explore.do?structureId=1A06" target="_blank">available</a> at somewhat lower (2.5 Å) resolution and is missing several sidechain atoms as well as portions of its sequence. We'll use this example to demonstrate how PDB2PQR can add missing sidechain atoms to an imcomplete structure but cannot fill in missing regions of the backbone. In particular, we'll use PDB2PQR to add/optimize hydrogens, reconstruct sidechains K53, N65, R140, E154, Q192, Y195, E221, N222, K225, E228, K232, and Q272 from model geometries, and assign parameters.


- 1.) From the PDB2PQR server web page, enter `1A06` into the PDB ID field.
- 2.) Choose whichever forcefield and naming schemes you prefer.
- 3.) Under options, be sure the "Ensure that new atoms are not rebuilt too close to existing atoms" and "Optimize the hydrogen bonding network" options are selected. You can select other options as well, if interested.
- 4.) Hit the "Submit" button.


<p>Once the calculations are complete, you should see a web page with a link to the PROPKA output, a new PQR file, and warnings about the ligand KNI (since we didn't choose to parameterize it in this calculation -- <a href="http://pdb2pqr.sourceforge.net/examples/#hiv1lig">see here</a>). You can download the resulting PQR file and view it in your favorite molecular visualization package (e.g., <a href="http://www.ks.uiuc.edu/Research/vmd/%22" target="_blank">VMD</a>, <a target="_blank" href="http://www.pymol.org/">PyMOL</a>, or <a target="_blank" href="http://www.scripps.edu/sanner/python/pmv/index.html">PMV</a>). For comparison, you might download the the <a href="http://www.pdb.org/pdb/explore.do?structureId=1HPX" target="_blank">original PDB file</a> and compare the PDB2PQR-generated structure with the original to see where hydrogens were placed.</p>

## Ligand parameterization

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

## Running APBS through the PDB2PQR web portal

#### Introduction

The PDB2PQR web portal provides support for the execution of PDB2PQR and APBS as well as the visualization of the resulting electrostatic potentials. We will provide a basic demonstration of how to go from a PDB entry to a plot of structure & potential through the PDB2PQR web portal.

#### Generating the PQR

We'll perform this example with Fusarium solani cutinase (PDB ID 1CUS) a lipolytic enzyme with a catalytic serine accessible to solvent.
First go to the PDB2PQR web portal, enter a PDB ID or upload a PDB file, choose your options for PDB2PQR, then click "Submit"

<p>
	<a href="https://raw.githubusercontent.com/Electrostatics/apbs-pdb2pqr/9eef3d85f154ec1434fc5a9e66d908c789c8735b/img/Picture1.png">
<img src="https://raw.githubusercontent.com/Electrostatics/apbs-pdb2pqr/9eef3d85f154ec1434fc5a9e66d908c789c8735b/img/Picture1.png" />
</a>
</p>

On the PDB2PQR result page, click bottom link to run APBS with your results.

<p>
	<a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/Picture2.png?raw=true">
		<img src="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/Picture2.png?raw=true" />
	</a></p>

#### Performing the electrostatics calculation

On the APBS web solver page, click "Launch" to use default parameters for APBS calculation; or, if you prefer to run APBS with custom parameters, check the check box and make your own selections.

<p>
<a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/APBS_options.png?raw=true">
<img src="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/APBS_options.png?raw=true" />
</a></p>

Wait until the calculation is complete, click the bottom link to visualize your results.

<p><a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/Picture5.png?raw=true">
	<img src="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/Picture5.png?raw=true" />
</a></p>

#### Visualizing the electrostatic potential

Configure your visualization, then click "Submit"

<p><a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/Visualization_configuration.png?raw=true">
	<img src="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/Visualization_configuration.png?raw=true" />
</a></p>

Please be patient and wait until the visualization applet is fully loaded.

<p><a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/Picture7.png?raw=true">
	<img src="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/Picture7.png?raw=true" />
</a></p>

±5 kT/e electrostatic potential of 1CUS rendered on the molecular surface. Figure made through Jmol.

#### Offline rendering with POV-Ray

Jmol also has the ability to generate scenes for higher-quality offline rendering with POV-Ray. This is particularly useful for transforming the images you generate with Jmol via the PDB2PQR web server into high-resolution figures for publication.  These instructions assume that you have POV-Ray installed.

Set up the scene in Jmol to look the way you would like the rendered image to appear.

Right click on the Jmol window and select File -> Export POV-Ray Image.

<p><a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/jmol-povray1.png?raw=true">
	<img src="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/jmol-povray1.png?raw=true" />
</a></p>

Save the resulting `*.pov` and `*.pov.ini` file in the same directory.

Run POV-Ray and load up the `*.pov.ini` file.  You may wish to edit some of the options in the file (particularly "Width" and "Height" to change resolution) to customize the rendering.

<p><a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/povray.png?raw=true">
	<img src="https://github.com/Electrostatics/apbs-pdb2pqr/blob/gh-pages/img/povray.png?raw=true" />
</a></p>