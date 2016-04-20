---
layout: docs
title: FAQ
prev_section: apbs-programmers
next_section: apbs-utilities
permalink: /docs/apbs-faq/
---

<script type="text/javascript" language="JavaScript"><!--
function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}
//--></script>

{% include no-prev-next.html %}

<img src="/images/apbs-icons/APBS_128_v2.png" class="apbs-icon" />


This tutorial is designed as a "how to" document to get users acquainted with computational electrostatics calculations using APBS. In order to perform the provided examples, you will need the latest version of APBS. Other requirements are listed in the individual sections.
Note that many of the examples in this tutorial can also be run through Opal web-based services. More information is available in the APBS user guide.

This document is under continual construction and revision to provide up-to-date and timely examples. Many of the topics covered in the incomplete sections are also demonstrated in the examples/ directory provided with the APBS distribution.  If you have a question that isn't answered here, please visit the APBS-users mailing list. After you've looked for the answer to your question in the archive, please post it to the mailing list.

<h3>Frequently Asked Questions</h3>

<a id="support APBS and PDB2PQR" href="javascript:ReverseDisplay('How do I support APBS and PDB2PQR?')">How do I support APBS and PDB2PQR?</a>
<div id="How do I support APBS and PDB2PQR?" style="display:none;">

You can support APBS and PDB2PQR by <a target="_blank" href="http://eepurl.com/by4eQr">registering your use of the software</a>!

<hr />

</div>


<a id="calculate a binding energy" href="javascript:ReverseDisplay('How do I calculate a binding energy?')">How do I calculate a binding energy?</a>
<div id="How do I calculate a binding energy?" style="display:none;">
This topic is discussed in detail in the <a href="{{site.baseurl}}/examples/binding_energies/">Binding energies</a> section.
<hr />
</div>

<a id="calculate a pKa" href="javascript:ReverseDisplay('How do I calculate a pKa?')">How do I calculate a pKa?</a>

<div id="How do I calculate a pKa?" style="display:none;">

Please see the <a href="{{site.baseurl}}/examples/pKa_Calculations/">pKa calculations</a> section.

<hr />

</div>


<a id="calculate solvation energy" href="javascript:ReverseDisplay('How do I calculate a solvation energy?')">How do I calculate a solvation energy?</a>

<div id="How do I calculate a solvation energy?" style="display:none;">

<p>APBS provides force calculations for both polar and nonpolar solvation following the same procedures used in the "<a href="{{site.baseurl}}/apbs/frequently-asked-questions/how-do-i-calculate-a-solvation-energy">How do I calculate a solvation energy?</a>" section. In general, forces can be obtained by modifying input files used for solvation energy calculations to include calcforce total (for total forces on the entire solute) or calcforce comps to obtain detailed force information for each atom. See the polar <a href="{{site.baseurl}}/apbs/user-guide/running-apbs/input-files/elec-input-file-section/elec-keywords/cac">calcforce</a> and apolar <a href="{{site.baseurl}}/apbs/user-guide/running-apbs/input-files/apolar-input-file-section/apolar-keywords/calcforce">calcforce</a> documentation.  For polar solvation forces, it is important to note that, like solvation energy calculations, "self-interaction" terms must be removed. </p>


<hr />

</div>


<a id ="structures ready electrostatics calculations?" href="javascript:ReverseDisplay('How do I get my structures ready for electrostatics calculations?')">How do I get my structures ready for electrostatics calculations?</a>

<div id="How do I get my structures ready for electrostatics calculations?" style="display:none;">

<p>In order to perform electrostatics calculations on your biomolecular structure of interest, you need to provide atomic charge and radius information to APBS. Charges are used to form the biomolecular charge distribution for the Poisson-Boltzmann (PB) equation while the radii are used to construct the dielectric and ionic accessibility functions. This charge and radius information can be provided to APBS in a few different formats which are described in more detail below. The section "Biomolecular structure formats" describes these formats in more detail.</p>

<h3>PQR format</h3>

<p>The PQR format provides a very simple way to include parameter information by by replacing the occupancy and temperature columns of a PDB-format structure file with charge ("Q") and radius ("R") information. Unfortunately, the simplicity of this format also limits its extensibility: it can be very difficult to add new atom types and parameters in a generic format without the use of external software such as PDB2PQR. The XML parameter format described below is much easier to modify.</p>

<h3>XML format</h3>

<p>The XML structure format provides a somewhat more complicated format for including parameter information with increased flexibility in formatting, extension, and other modifications. As in the PQR format, atom coordinates are supplemented with charge and radius information. Please see the APBS user guide for complete format specifications.</p>

<h3>Generating PQR files from PDB files (PDB2PQR)</h3>


<p>The PDB2PQR web service and software will convert most PDB files into PQR format with some caveats.  Although PDB2PQR can fix some missing heavy atoms in sidechains, it does not currently have the (nontrivial) capability to model in large regions of missing backbone and sidechain coordinates. Be patient and make certain that the job you submitted to the PDB2PQR website has finished and you have downloaded the resulting PQR file correctly. It usually takes less than 10 minutes for the job to finish.</p>

<p>PDB2PQR will also perform hydrogen bond optimization, sidechain rotamer search, limited titration state assignment, ligand parameterization, and APBS input file preparation. Please see the PDB2PQR website for more details.
As mentioned above, PDB2PQR is discussed in more detailed on the PDB2PQR homepage. Therefore, we will review the minimal steps required to produce a PQR file from a PDB file here. To begin, choose a server from <a href="{{site.baseurl}}/docs/downloads/">Downloads and web servers</a></p>

<h5>Choose the PDB file to convert</h5>

<p>Start by choosing a PDB file to process. Either enter the 4-character PDB ID into PDB2PQR or accession number (e.g., 1FAS, 1MAH, 1LYS, etc.) or upload your own PDB file. Note that, if you choose to enter a 4-character PDB ID, PDB2PQR will process all recognizable chains of PDB file as it was deposited in the PDB (e.g., not the biological unit, any related transformations, etc.).</p>

<h5>Pick a forcefield</h5>

<p>For most applications, the choice is easy: PARSE. This forcefield has been optimized for implicit solvent calculation and is probably the best choice for visualization of protein electrostatics and many common types of energetic calculations for proteins. However, AMBER and CHARMM may be more appropriate if you are attempting to compare directly to simulations performed with those force fields, require nucleic acid support, are simulating ligands parameterized with those force fields, etc.</p>

<p>It is also possible to upload a user-defined forcefield (e.g., to define radii and charges for ligands or unusual residues). Please see the <a href="{{site.baseurl}}/docs/pdb2pqr-programmers/">PDB2PQR documentation</a> for more information.</p>

<h5>Output naming scheme</h5>

<p>This is largely irrelevant to electrostatics calculations but may be important for visualization. When in doubt, choose the "Internal naming scheme" which attempts to conform to IUPAC standards.</p>

<h5>Other options</h5>

<p>These options fall into two categories: how to build missing atoms (including hydrogens) onto the structure and additional output configuration. Please see the PDB2PQR User Guide for more details.</p>


<hr />

</div>

<a id="model inhomogeneous membrane" href="javascript:ReverseDisplay('How do I model the inhomogeneous environment of a membrane?')">How do I model the inhomogeneous environment of a membrane?</a>

<div id="How do I model the inhomogeneous environment of a membrane?" style="display:none;">

Please see <a href="{{site.baseurl}}/examples/potentials_of_mean_force/">The polar solvation potential of mean force for a helix in a dielectric slab membrane</a> and <a href="http://en.wikiversity.org/wiki/Poisson%E2%80%93Boltzmann_profile_for_an_ion_channel">Poisson–Boltzmann profile for an ion channel</a> for more information.

<hr />

</div>

<a id="calculation too big" href="javascript:ReverseDisplay('How do I run a calculation that’s too big for my computer?')">How do I run a calculation that’s too big for my computer?</a>

<div id="How do I run a calculation that’s too big for my computer?" style="display:none;">

Please see the discussion in the <a href="{{site.baseurl}}/examples/parallel_execution_for_large_problems/">Parallel execution for large problems</a> section.

<hr />

</div>



<a id="calculation someone computer" href="javascript:ReverseDisplay('How do I run my calculations on someone else’s computer?')">How do I run my calculations on someone else’s computer?</a>

<div id="How do I run my calculations on someone else’s computer?" style="display:none;">

<p>There are many cases where it is inconvenient to run calculations on your own computer: your calculation may require more resources (memory, etc.) than available on your system, you may have many calculations to run, etc. There are two primary mechanisms for running APBS on external resources: the <a href="{{site.baseurl}}/docs/usage/">APBS Opal client</a> and the <a href="{{site.baseurl}}/examples/running_apbs_through_pdb2pqr_web_portal/">PDB2PQR web interface</a>.</p>

<hr />

</div>

<a id="APBS external simulation" href="javascript:ReverseDisplay('How do I use APBS with my external simulation software?')">How do I use APBS with my external simulation software?</a>

<div id="How do I use APBS with my external simulation software?" style="display:none;">

<p>Robert Konecny (McCammon group) has developed the <a href="http://mccammon.ucsd.edu/iapbs/">iAPBS package</a> which provides a C/C++/FORTRAN interface to APBS for use with AMBER, NAMD, and CHARMM. More information is available from the <a href="http://mccammon.ucsd.edu/iapbs/">iAPBS homepage</a>.</p>


<p>APBS also links against developmental versions of the TINKER software package. Public versions of TINKER with APBS support should be available soon from http://dasher.wustl.edu/tinker/.</p>

<hr />

</div>


<a id="visualize potential" href="javascript:ReverseDisplay('How do I visualize the electrostatic potential?')">How do I visualize the electrostatic potential?</a>

<div id="How do I visualize the electrostatic potential?" style="display:none;">

<p>As <a href="{{site.baseurl}}/docs/apbs-others/">outlined in the user guide</a>, there are many different ways to visualize the electrostatic potential as calculated by APBS.  We provide <a href="{{site.baseurl}}/docs/visualizing-results/">detailed examples</a> for several ways to both calculate and visualize the potential in the same setting.</p>

<hr />

</div>

<a id="grid spacing" href="javascript:ReverseDisplay('What values should I use for my grid spacing?')">What values should I use for my grid spacing?</a>

<div id="What values should I use for my grid spacing?" style="display:none;">

<p>It is recommended to use the same grid for all three calculations: ligand, protein, and ligand-protein complex, and to use the grid settings for the ligand-protein complex for all calculations.</p>
<p>Energies are often very sensitive to grid parameters, thus it is best to use the largest possible grid lengths with the smallest possible grid spacing for your calculations. We usually recommend grid spacings of 0.5 Angstroms or smaller.</p>

<hr />

</div>


<a id="sources error calculation" href="javascript:ReverseDisplay('What are the sources of error in my calculation?')">What are the sources of error in my calculation?</a>

<div id="What are the sources of error in my calculation?" style="display:none;">

<h3>Model error</h3>

<p>When performing solvation calculations using APBS, it is important to keep in mind that you are using an approximate model for solvation. Therefore, your answers may contain errors related to approximations in the model. Many review articles have covered the nature of these approximations (see bibliography), we will stress the highlights below.</p>

<h5>Linear dielectric response</h5>

<p>The Poisson-Boltzmann equation models the solvent as a dielectric continuum that responds linearly to all applied fields. In particular, under this model, very strong fields can induce unrealistically strong polarization in the dielectric media representing the solvent and/or the solute interior. However, molecular solvents or solutes cannot support an infinite amount of polarization: they are limited by their density, their finite dipole moments, and their finite degree of electronic polarizability. Therefore, the continuum model assumption of linear dielectric response can break down in situations with strong electric fields; e.g., around nucleic acids or very highly-charged proteins.</p>

<h5>Local dielectric response</h5>

<p>The Poisson-Boltzmann equation models the solvent as a dielectric continuum that also responds locally to all applied fields. In other words, under this model, the local polarization at a point x is only dependent on the field at point x. However, molecular solvents and solutes clearly don't obey this assumption: the variety of covalent, steric, and other non-bonded intra- and inter-molecular interactions ensures that the polarization at point x is dependent on solute-field interactions in a non-vanishing neighborhood around x. One way to limit the impact of this flawed assumption, is to model solute response as "explicitly" as possible in your continuum electrostatics problems. In other words, rather than relying upon the continuum model to reproduce conformational relaxation or response in your solute, model such response in detail through molecular simulations or other conformational sampling.</p>

<h5>Ambiguity of dielectric interfaces and coefficient values</h5>

<p>Violation of the assumptions of linear and local dielectric response in real molecular systems leads to serious ambiguity in the definition of the dielectric coefficient in the Poisson-Boltzmann equation. In particular, while the values for bulk solvent (i.e., far away from the solute) response are well-defined, all other values of the dielectric coefficient are ambiguous. In general, continuum models assume a constant low-dielectric value inside the solute and the bulk solvent value outside the solute. This assumption creates tremendous sensitivity of calculation results on the placement of the dielectric interface (usually determined by solute atomic radii) and the specific value of the internal solute dielectric. In general, errors arising from this assumption can be minimized by using internal dielectric values that are consistent with the solute atomic radii parameterization.</p>

<h5>No specific ion-solvent or ion-solute interactions</h5>

<p>Most Poisson-Boltzmann models assume that ions do not interact directly with the solvent: they are charges embedded in the same dielectric material as the bulk solvent. This assumption implies that ions experience no "desolvation" penalty as they interact with the solute surface. Additionally, most Poisson-Boltzmann models assume that ions interaction with the solute only through electrostatic and hard-sphere steric potentials. However, this assumption neglects some of the subtlety of ion-protein interactions; in particular, dispersive interactions that can possibly lead to some degree of ion specificity.</p>

<h5>Mean field ion behavior</h5>

<p>Finally, the Poisson-Boltzmann model is a "mean field" description of ionic solutions. This means that ions only experience the average influence of other ions in the system; the model neglects fluctuations in the ionic atmosphere and correlations between the ions in solution. Such correlations and fluctuations can be very important at high ionic charge densities; e.g., for multivalent ions, high ion concentrations, or the high-density ionic regions near highly-charged biomolecules.</p>

<h3>Structure-based errors</h3>

<p>Electrostatics calculations can be very sensitive to errors in the structure, including:
<ul>
<li>Misplaced atoms or sidechains</li>
<li>Missing regions of biomolecular structure</li>
<li>Incorrect titration state assignments</li>
</ul>
Of these errors, incorrect titration states are the most common and, often, the most problematic. The software package PDB2PQR was created to minimize all of the above problems and we recommend its use to "pre-process" structures before electrostatics calculations.</p>

<h3>Parameter set errors</h3>

Under construction

<h3>Discretization error</h3>

<p>The Poisson-Boltzmann partial differential equation must be discretized in order to be solved on a computer. APBS discretizes the equation in spacing by evaluating the problem coefficients and solving for the electrostatic potential on a set of grid (finite difference) or mesh (finite element) points. However, this discretization is an approximation to the actual, continuously-specified problem coefficients. Coarser discretization of coefficients and the solution reduce the overall accuracy and introduce errors into the final potential and calculated energies.</p>

<p>It is very important to evaluate the sensitivity of your calculated energies to the grid spacings and lengths. In general, it is a good idea to scan a range of grid spacings and lengths before starting a problem and choose the largest problem domain with the smallest grid spacing that gives consistent results (e.g., results that don't change as you further reduce the grid spacing).</p>

<h3>Solver and round-off error</h3>

<p>APBS uses iterative solvers to solve the nonlinear algebraic equations resulting from the discretized Poisson-Boltzmann equation. In particular, we use the Holst group PMG software to solve equations resulting from finite difference discretizations of the PB equation and the Holst group MC software to solve equations resulting from finite element discretizations of the PB equation.</p>

<p>Iterative solvers obtain solutions to algebraic equations which are accurate within a specified error tolerance. Current versions of APBS use a fixed error tolerance of 10-6 which implies approximately 1 part per million root-mean-squared error in calculated potentials. Such error tolerances have been empirically observed to give good accuracy in the calculated energies obtained with APBS. Future versions of APBS will provide user control for error tolerance.</p>

<p>However, it is important to note that the error in potential does not necessarily directly relate to the error in the energies calculated by APBS. In particular, most meaningful energies are calculated as differences between energies from several calculations. While the accuracy of each separate energy can be related to the solver error tolerance, the energy difference can only be loosely bounded by the error tolerance.</p>

<p>This issue is illustrated in the protein kinase ligand binding example provided with APBS as pka-lig and analyzed below. This example demonstrates that, while the errors for each calculation remain small, the overall error in the computed energy can be very large; particularly when two different methods are compared.</p>

<div><div class="sites-embed-align-left-wrapping-off"><div class="sites-embed-border-on sites-embed sites-embed-full-width" style="width:100%;"><h4 class="sites-embed-title">APBS 1.2 pka-lig error sensitivity</h4><div class="sites-embed-object-title" style="display:none;">APBS 1.2 pka-lig error sensitivity</div><div class="sites-embed-content sites-embed-type-spreadsheet"><iframe src="https://spreadsheets.google.com/spreadsheet/loadredirect?chrome=false&amp;key=0Asy1jmCqCrVxdGdrQUU2cFhUdS1WaHlZVUxpbk1LZ3c&amp;output=html&amp;pubredirect=true&amp;widget=true" width="100%" height="600" title="APBS 1.2 pka-lig error sensitivity" frameborder="0" id="1799863917"></iframe></div></div></div><br /></div>

<hr />

</div>


<a id="units electrostatic" href="javascript:ReverseDisplay('What are the units of electrostatic potential?')">What are the units of electrostatic potential?</a>

<div id="What are the units of electrostatic potential?" style="display:none;">

APBS writes out the electrostatic potential in dimensionless units of kb T ec-1 where

* kb is Boltzmann's constant:  1.3806504 × 10−23 J K-1
* T is the temperature of your calculation in K
* ec is the charge of an electron:  1.60217646 × 10-19 C

As an example, if you ran your calculation at 300 K, then the potential would be written out as multiples of

<p> kb T ec-1 = (1.3806504 × 10−23 J K-1) × (300 K) × (1.60217646 × 10-19 C)-1</p>
<p> = (4.1419512 × 10-21 J) × (6.241509752 × 1018 C-1)</p>
<p>    = 2.585202 × 10-2 J C-1</p>
<p>  = 25.85202 mV</p>

<hr />

</div>

<a id="message WARNING" href="javascript:ReverseDisplay('What does the message WARNING! Unusually large potential values detected on the focusing boundary! mean?')">What does the message "WARNING! Unusually large potential values detected on the focusing boundary!" mean?</a>

<div id="What does the message WARNING! Unusually large potential values detected on the focusing boundary! mean?" style="display:none;">

<p>During focusing calculations, you may encounter the message "WARNING! Unusually large potential values detected on the focusing boundary!" for some highly charged systems based on location of the focusing boundary.</p>

<p>First, you should determine if you received any other warning or error messages as part of this calculation, particularly those referring to exceeded number of iterations or error tolerance (etol). If such messages are received, please contact the developers for support.</p>

<p>Next, you should check if the calculation converged to a reasonable answer. In particular, you should check sensitivity to the grid spacing by making small changes to the grid lengths (via the fglen parameter) and see if the changes in energies are correspondingly small. If so, then this warning can be safely ignored. If not, please contact the developers for support.</p>

<hr />

</div>

<a id="fetk" href="javascript:ReverseDisplay('What is FEtk?')">What is FEtk?</a>
<div id="What is FEtk?" style="display:none;">

FEtk is an adaptive multilevel finite element library developed by Michael Holst and used for the finite element features in APBS.  More information, as well as downloadable files, can be found <a href = "http://www.fetk.org">here</a>.


<hr />

</div>

<a id="focusing" href="javascript:ReverseDisplay('What is focusing?')">What is focusing?</a>

<div id="What is focusing?" style="display:none;">

<p>This is a method for solving the Poisson-Boltzmann equation in a finite difference setting. Some of the earliest references to this method are from Gilson and Honig (Gilson MK and Honig BH, Calculation of electrostatic potentials in an enzyme active site. Nature, 1987. 330(6143): p. 84-6.). The method starts by solving the equation on a coarse grid (i.e., few grid points) with large dimensions (i.e., grid lengths). The solution on this coarse grid is then used to set the Dirichlet boundary condition values for a smaller problem domain -- and therefore a finer grid -- surrounding the region of interest. The finer grid spacing in the smaller problem domain often provides greater accuracy in the solution.</p>

<p>This technique has been used to cover multiple regions of a large problem domain in the parallel focusing method.</p>

<hr />

</div>

<a id="maloc" href="javascript:ReverseDisplay('What is MALOC?')">What is MALOC?</a>

<div id="What is MALOC?" style="display:none;">

<p>MALOC is the hardware abstraction developed by Michael Holst and used by APBS to provide portability across platforms. More information can be found <a href = "http://www.fetk.org/codes/maloc/index.html">here</a></p>

<hr />

</div>

<a id="opal" href="javascript:ReverseDisplay('What is Opal?')">What is Opal?</a>

<div id="What is Opal?" style="display:none;">

<p>Opal is a web services toolkit developed by the NBCR and researchers at the San Diego Supercomputer Center. This software enables remote execution of APBS or PDB2PQR to reduce local system loads or run calculations that are too large for local resources. More information can be found <a href="http://nbcr-222.ucsd.edu/opal2/dashboard">here</a></p>

<hr />

</div>

<a id="pgm" href="javascript:ReverseDisplay('What is PMG?')">What is PMG?</a>

<div id="What is PMG?" style="display:none;">

<p>PMG is a multigrid library developed by Michael Holst. More information can be found <a href="http://www.fetk.org/codes/pmg/index.html">here</a></p>

<hr />

</div>





