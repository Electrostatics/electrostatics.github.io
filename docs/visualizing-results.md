---
layout: docs
title: Visualizing Results
prev_section: calculating
next_section: pdb2pqr-installation
permalink: /docs/visualizing-results/
---

There are several programs available for visualizing your results.  If
you have used the web server for your calculations, the java jmol plugin may
be the easiest method, described directly below.  However, if you need more options, there are
several external programs, such as [pymol](.#pymol), for your to use.


<!-- VMD -->


# The web server:

The most straightforward way to visualize results is through the web server.  If 
you've used the web server to [get your structures ready]( {{ site.baseurl }}../../docs/structures-ready )
and [calculate the electrostatics]({{ site.baseurl }}../../docs/calculating), you will 
see a link to "click here to visualize your results."

<p><img src="https://raw.githubusercontent.com/Electrostatics/apbs-pdb2pqr/gh-pages/img/web_jmol_screenshot.png" /></p>

The web site uses a java plugin to run jmol in the web browser.  If you have trouble 
using the viewer on OSX, make sure to check your java security settings.

# Standalone applications:

## PyMOL

The [PyMOL](www.pymol.org) molecular graphics software package
provides support for both the execution of APBS and the visualization of
the resulting electrostatic potentials. We will provide a basic
demonstration of how to visualize a potential in PyMOL from APBS.  To
calculate electrostatics in PyMol see the [calculate
electrostatics]( {{site.baseurl}}../../docs/calculating) page

### Visualize the electrostatic potential

Before proceeding with the remaining steps, you must load the
electrostatic potential data into PyMOL. Under the "Visualization" tab of
the PyMOL APBS Tools window, hit the Update button.

#### Electrostatic isocontours

PyMOL makes this step very easy: adjust the positive and negative
"Contour" fields to the desired values (usually ±1, ±5, or ±10 kT/e)
<!-- TODO: add this: [kT/e]( {{site.baseurl}}../../apbs-faq/#units-potential) -->
and hit the Positive Isosurface and
Negative Isosurface and Show buttons.

At this point, you probably have a figure that looks something like:

<p><img src="https://raw.githubusercontent.com/Electrostatics/apbs-pdb2pqr/gh-pages/img/fas2-iso-pymol.png" /></p>

±1 kT/e electrostatic potential isocontours of FAS2 in PyMOL

If the colors are not as you expect, you can change the colors of the
objects iso_neg and iso_pos in the main menu. By convention (for
electrostatics in chemistry), red is negative (think oxygen atoms in
carboxyl groups) and blue positive (think nitrogen atoms in amines).

#### Surface potentials

If you haven't already, hide the isocontours by hitting Positive
Isosurface and Negative Isosurface and Hide buttons.  The surface
potential is also straightforward to visualize. Set the "Low" and "High"
values to the desired values (usually ±1, ±5, or ±10 kT/e) at which the
surface colors are clamped at red (-) or blue (+). Check the "Solvent
accessible surface" and "Color by potential on sol. acc. surf." buttons
to plot the potential on the solvent-accessible (probe-inflated or
Lee-Richards) surface. Hit the "Molecular Surface" Show button to load
the surface potential.


<p><img
src="https://raw.githubusercontent.com/Electrostatics/apbs-pdb2pqr/gh-pages/img/fas2-surf-pymol.png" /></p>

±5 kT/e electrostatic potential of FAS2 in PyMOL plotted on the solvent-accessible surface.

The solvent-accessible surface tends to reveal more global
features of the surface potential. Tighter surfaces (e.g., van der Waals
and molecular or Connolly surfaces) provides more information about the
shape of the biomolecule but otherwise tend to simply map atomic surface
charges onto the biomolecular surface. Thankfully, PyMOL provides an
excellent solution to the conflicting need to obtain geometric
information from the molecular surface together with useful electrostatic
potential information from the solvent-accessible surface. To visualize
the molecule in this way, simply uncheck the "Solvent accessible surface"
box and check the "Color by potential on sol. acc. surf." box on the
"Visualization tab".


<!--
VMD
http://www.poissonboltzmann.org/file-formats/mesh-and-data-formats/opendx-
scalar-data
-->
