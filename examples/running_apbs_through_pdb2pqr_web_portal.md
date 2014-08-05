---
layout: examples
title: Running APBS through the PDB2PQR web portal
permalink: /examples/running_apbs_through_pdb2pqr_web_portal/
---


<style>.section-nav {display:none;}</style>



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