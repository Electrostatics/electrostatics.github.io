---
layout: examples
title: Potentials of Mean Force
permalink: /examples/potentials_of_mean_force/
---

<a id="topcall"></a>


* <a data-scroll href="#PB">Poisson–Boltzmann profile for an ion channel</a>
* <a data-scroll href="#Amino">The polar solvation potential of mean force for a helix in a dielectric slab membrane</a>
	* <a data-scroll href="#Overview">Overview</a>
	* <a data-scroll href="#Software">Software requirements</a>
	* <a data-scroll href="#Basic">The basic steps</a>
		* <a data-scroll href="#Gen">Generating the peptide dielectric map</a>
		* <a data-scroll href="#Adding">Adding the membrane environment</a>
		* <a data-scroll href="#Perform">Performing the electrostatic calculation</a>
		* <a data-scroll href="#Visual">Visualizing the result</a>
		* <a data-scroll href="#Putting">Putting it all together into a PMF</a>
	* <a data-scroll href="#Auto">Automating the PMF calculation</a>
	* <a data-scroll href="#Caveats">Caveats and comments</a>

<a id="PB"></a>
<h3>Poisson–Boltzmann profile for an ion channel</h3>
This example is hosted off-site <a href="http://en.wikiversity.org/wiki/Poisson%E2%80%93Boltzmann_profile_for_an_ion_channel">here</a>

<a id="Amino"></a>
<h3>The polar solvation potential of mean force for a helix in a dielectric slab membrane</h3>

<a data-scroll href="#topcall">top</a>


<a id="Overview"></a>
<h3>Overview</h3>

This example will examine the differing polar solvation free energies of an alpha helix as it translates through a low-dielectric slab, a model membrane-like environment. The low dielectric slab is intended to crudely represent the nonpolar membrane environment. Note that the peptide used in this example is largely nonpolar (glycine, alanine, and leucine) with a centrally-located arginine.
The starting configuration of this example has the peptide nearly completely buried in the membrane environment:

<img src="{{site.baseurl}}/img/helix_membrane1.png">

<sub>The helix (arginine in blue, nonpolar residues in white, glycine in green) in the membrane environment (gray planes)</sub>

The final configuration of this example has the peptide significantly exposed to solvent:

<img src="{{site.baseurl}}/img/helix_membrane_2.png">

<sub>The helix (arginine in blue, nonpolar residues in white, glycine in green) in the membrane environment (gray planes)</sub>

This example will use APBS to solve the Poisson equation for these different configurations to determine the polar solvation energy. The resulting polar solvation energy profile (as a function of helix position) is called a "potential of mean force" for the solvation of this helix through this low dielectric slab membrane mimic.

<a data-scroll href="#topcall">top</a>


<a id="Software"></a>
<h3>Software requirements</h3>
In addition to APBS, you will also need the draw_membrane2 program written by Michael Grabe. The source code for this program is attached below and can be compiled very easily by
	
	gcc draw_membrane2.c -lm -o draw_membrane2

<a data-scroll href="#topcall">top</a>


<a id="Basic"></a>
<h3>The basic steps</h3>

We will illustrate the basic steps of the polar solvation calculation with the peptide in its membrane-immersed started configuration. The PQR file for this starting configuration is attached below as Membrane-helix-0.pqr.

<a data-scroll href="#topcall">top</a>


<a id="Gen"></a>
<h3>Generating the peptide dielectric map</h3>

The system will have three dielectric regions:
* The high dielectric solvent exterior (usually 80 for water)
* The low dielectric interior of the protein (10 for this example)
* The low dielectric interior of the membrane (2 for this example)

and two regions of ion-accessibility:

* The ion-accessible solvent exterior
* The ion-inaccessible interior of the protein and the membrane

We will model these regions in APBS using OpenDX-format coefficient maps read into APBS through a <a href="{{site.baseurl}}/docs/apbs-overview/#read" target="BLANK">READ statement</a>.

The first step in such modeling is to construct the ion-accessibility and dielectric maps for the isolated peptide in the absence of the membrane environment. This can be accomplished through APBS <a href="{{site.baseurl}}/docs/elec-calcs/">mg-dummy</a> calculations. These calculations simply construct the coefficient input maps and write them out in the desired format without performing any numerical solutions of the Poisson-Boltzmann equation.

In the latter steps of this example, we'll be calculating solvation energies using sequential focusing to solve the Poisson-Boltzmann equation. We'll need three sets of maps for the focusing procedure:

* A large map of lengths 300 × 300 × 300 Å3.
* A medium map of lengths 200 × 200 × 200 Å3.
* A small map of lengths 100 × 100 × 100 Å3.

All of these maps will have 97 × 97 × 97 grid points. This coarse grid resolution is necessary for a relatively quick example; however, it is not recommended for calculations where quantitative accuracy is desired. The APBS mg-dummy input file for these calculations is available for download below (Apbs_dummy.in). Run APBS with this input file to generate the following dielectric maps:

* diel{x,y,z}_{S,M,L}.dx
The nine dielectric maps for the x-, y-, and z- components of the Poisson operator for the small (S), medium (M), and large (L) problem domains
* kappa_{S,M,L}.dx
The three ion accessibility coefficient maps for the small (S), medium (M), and large (L) problem domains
* charge_{S,M,L}.dx
The three peptide charge distribution maps for the small (S), medium (M), and large (L) problem domains

<a data-scroll href="#topcall">top</a>



<a id="Adding"></a>
<h3>Adding the membrane environment</h3>

The next step is to incorporate the membrane environment through the draw_membrane2 program described above. This program is invoked separately for the small, medium and large systems as follows:

	./draw_membrane2 dielx_S.dx zmem Lmem pdie 0.0 I R_top R_bottom
    ./draw_membrane2 dielx_M.dx zmem Lmem pdie 0.0 I R_top R_bottom
    ./draw_membrane2 dielx_L.dx zmem Lmem pdie 0.0 I R_top R_bottom

and assumes a common naming scheme for all dielectric, kappa, and charge maps. It also assumes that the membrane is oriented such that its plane is in the xy-plane and the bilayer normal is aligned along the z-axis. Finally, it sets the solvent dielectric to 80.0 and the membrane dielectric to 2.0. The parameters for this program are

* **zmem**
The location of the bottom of the membrane slab
* **Lmem**
The thickness of the membrane slab
* **pdie**
Internal dielectric of the protein
* **I**
Value of the symmetric ion concentration in molar
* **R_top**
Membrane exclusion radius in case your protein is a pore
* **R_bottom**
Membrane exclusion radius in case your protein is a pore


For the current example, we will invoke the draw_membrane2 program as

	./draw_membrane2 dielx_S.dx -20 40 10.0 0.0 0.1 0.0 0.0
    ./draw_membrane2 dielx_M.dx -20 40 10.0 0.0 0.1  0.0 0.0
    ./draw_membrane2 dielx_L.dx -20 40 10.0 0.0 0.1 0.0 0.0

This will produce a number of *m.dx files (e.g., dielx_Lm.dx) that are the modified coefficient maps incorporating the membrane environment.

<a data-scroll href="#topcall">top</a>


<a id="Perform"></a>
<h3>Performing the electrostatic calculation</h3>

Finally, we will use these input coefficient maps in an APBS calculation to solve the linearized Poisson-Boltzmann equation using sequential focusing. The APBS input file available for download below (Apbs-solv.in) performs six calculations:

* Three sequential focusing calculations for the problem with the peptide in solution ("solvated")
* Three sequential focusing calculations for the problem with the peptide in the membrane dielectric ("reference")

The difference between the finest "solvated" calculation and the finest "reference" calculation is an estimate of the polar solvation energy associated with transferring the peptide from solution into the membrane.

<a data-scroll href="#topcall">top</a>


<a id="Visual"></a>
<h3>Visualizing the result</h3>

The result of these electrostatic potential calculations can be visualized with VMD as described elsewhere in this documentation. Perhaps one of the most interesting VMD features to use with this example is the FieldLines representation of the electrostatic potential which demonstrates how the dielectric interface between the membrane and bulk solution significantly perturbs the electrostatic field:

<img src="https://sites.google.com/a/poissonboltzmann.org/software/_/rsrc/1276214511203/apbs/examples/potentials-of-mean-force/the-polar-solvation-potential-of-mean-force-for-a-helix-in-a-dielectric-slab-membrane/membrane_helix_iso_field.png?height=273&width=400" alt="Protein">

<sub>An arginine-containing alpha helix in a low dielectric (membrane) slab. The gray surfaces represent the surface of the membrane. The blue and red surfaces are +1 and -1 kT/e electrostatic isocontours, respectively. The lines show the direction of the electric field in the system.</sub>

This image was generated using VMD 1.8.6. The membrane was represented as an isocontour of the dielx_Sm.dx map with a value of 72. The field lines were colored by potential values from pot_S.dx and displayed with a GradientMag value of 1.61, a minimum length of 7.24, and a maximum length of 50.00. Finally, the isocontours were displayed from the pot_S.dx file with values of +1 kT/e (blue) and -1 kT/e (red).

<a data-scroll href="#topcall">top</a>


<a id="Putting"></a>
<h3>Putting it all together into a PMF</h3>

The steps above should be repeated for every structure in the potential of mean force (attached below):

* membrane-helix-0.pqr
* membrane-helix-4.pqr
* membrane-helix-8.pqr
* membrane-helix-12.pqr
* membrane-helix-16.pqr

and doing so demonstrates an interesting trend in solvation energies:

<div>
<table border="1" bordercolor="#888888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">
<tbody>
<tr>
<td style="width:100px;height:78px"> Displacement (A)</td>
<td style="width:91px;height:78px">Polar solvation energy (kJ/mol)</td>
<td style="width:109px;height:78px">Relative change in energy (kJ/mol)</td>
</tr>
<tr>
<td style="width:100px;height:19px">0</td>
<td style="width:91px;height:19px">127.1</td>
<td style="width:109px;height:19px">68.31 </td>
</tr>
<tr>
<td style="width:100px;height:19px">4 </td>
<td style="width:91px;height:19px">127.2</td>
<td style="width:109px;height:19px">68.39 </td>
</tr>
<tr>
<td style="width:100px;height:19px">8 </td>
<td style="width:91px;height:19px">119.9 </td>
<td style="width:109px;height:19px">61.16 </td>
</tr>
<tr>
<td style="width:100px;height:19px">12 </td>
<td style="width:91px;height:19px">85.74 </td>
<td style="width:109px;height:19px">26.96 </td>
</tr>
<tr>
<td>16 </td>
<td>58.78 </td>
<td>0.000 </td>
</tr>
</tbody>
</table>
</div>

What causes the shape of this curve?

<a data-scroll href="#topcall">top</a>


<a id="Auto"></a>
<h3>Automating the PMF calculation</h3>

Repeating the above calculations by hand can be very tedious; the bash script available below (Run_membrane-helix.sh) was designed to simplify the process. Note that, in addition to the software described above, this script requires:

* A template for the APBS coefficient map construction named apbs_dummy-TEMPLATE.in and available below.
* A template for the APBS coefficient map construction named apbs_solv-TEMPLATE.in and available below.
* All of the PQR files from above named as membrane-helix-0.pqr, membrane-helix-4.pqr, ...

You will also need to modify the bash script to specify the correct locations of your APBS and draw_membrane2 executables.

<a data-scroll href="#topcall">top</a>


<a id="Caveats"></a>
<h3>Caveats and comments</h3>

As mentioned above, this calculation was performed using a grid with 97 × 97 × 97 points for the sake of efficiency. However, this is almost certainly too coarse for quantitative work. For real applications, one should increase the number of grid points until the desired observable (e.g., solvation energy) stops changing with increasing grid points.

Additionally, this calculation in no way represents a real membrane. Instead, it is a model of the low dielectric environment commonly assumed for membrane systems. Of course, real membranes deform, include some water permeation, form defects of large and small scale, and have very inhomogeneous dielectric properties. Additionally, real peptides can also deform and rearrange sidechains to maximize solvent exposure of polar or charged groups.


<a data-scroll href="#topcall">top</a>
























