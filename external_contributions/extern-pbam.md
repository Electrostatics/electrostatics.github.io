---
layout: external_contributions
title: PB-AM, the Poisson-Boltzmann Analytical Method
permalink: /external_contributions/extern-pbam/
---

{% include no-prev-next.html %}

<script type="text/javascript" language="JavaScript"><!--
function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") {document.getElementById(d).style.display = "block";}
else {document.getElementById(d).style.display = "none";}
}
function Open(d) {
document.getElementById(d).style.display = "block";
}
//-->
window.onload = function() {
  // Check if hash exists
  if(window.location.hash) {
    // Remove the "#" from the hash
    hash = window.location.hash.substr(1);
    // Display element with id == hash
    document.getElementById(hash).style.display = "block";
 }
}
</script>

<!---
--->


PB-AM is an analytical solution to the linearized Poisson-Boltzmann equation for multiple spherical objects of arbitrary charge distribution in an ionic solution. The solution can be reduced to a simple system of equations as follows:

\\[ A = \Gamma \cdot (\Delta \cdot T \cdot A + E) \\]

Where $A^{(i)}$ represents the effective multipole expansion of the charge distributions of molecule $i$. $E^{(i)}$ is the free charge distribution of molecule $i$. $\Gamma$ is a dielectric boundary-crossing operator, $\Delta$ is a cavity polarization operator, $T$ an operator that transforms the multipole expansion to a local coordinate frame.  More details on the method are available in <a href="http://pubs.acs.org/doi/full/10.1021/ct050263p">Lotan, Head-Gordon (2006)</a>. Once $A^{(i)}$ has been solved, through an iterative SCF method, physical properties of the system can be computed, as detailed in the next section.

### Physical calculations

#### Interactions energies

From the above formulation, computation of the interaction energy ($\Omega^{(i)}$) for molecule i, is given as follows:

\\[\Omega^{(i)}=\frac{1}{\epsilon_s} \left \langle \sum_{j \ne i}^N  T \cdot A^{(j)} ,  A^{(i)} \right \rangle \\]

Where $\langle  M, N \rangle$ denotes the inner product.

#### Forces and Torques

When energy is computed, forces follow as:

\\[ \textbf{F}^{(i)} = \nabla_i \Omega^{(i)}=\frac{1}{\epsilon_s} [ \langle \nabla_i \,T \cdot A^{(i)} ,  A^{(i)} \rangle +  \langle T \cdot A^{(i)} ,   \nabla_i \, A^{(i)} \rangle ]\\]

The method to calculate the torque $\boldsymbol{\tau}^{(i)}$ on molecule is outside the scope of this manual, but is discussed extensively in <a href="http://pubs.acs.org/doi/abs/10.1021/ct100145f">Lotan, Head-Gordon (2006).</a>


### APBS Implementation

The physical calculations of the previous section are used to perform various actions on a system of molecules. The current implementation includes:

 <ul>
	<li><a href="#energyforce">calculation of energies, forces and torques</a></li>
	<li><a href="#electrostatics">calculation of an electrostatic potential </a></li>
	<li><a href="#dynamics">a Brownian dynamics scheme</a></li>
</ul>

This fast method coarse-grains all molecules of the system into single spheres large enough to contain all molecule atoms. The basic information needed for running PB-AM is the type of run desired and the molecules of interest. The APBS sections required for a PB-AM run are ELEC and READ, as follows:

{% highlight bash %}
 READ
 ...
 END

 ELEC
 ...
 END

 QUIT
 {% endhighlight %}

 For details on each section, see:

 <ul>
	<li><a href="#read">READ input file section</a></li>
	<li><a href="#elec">ELEC input file section</a></li>
</ul>

<h3 id="read">READ</h3>

Within the read section, the user must list all molecules in the system with the flag:

<a href="javascript:ReverseDisplay('read-keyword-mol')">mol</a>

<div id="read-keyword-mol" style="display:none;">

<p><code>mol {format} {path}</code></p>

<p>This command specifies the molecular data to be read into APBS.</p>

<p>The required arguments are:</p>

<p><code>format</code>The format of the input data. Acceptable values include:</p>

<p style="margin-left:30px;"><code>pqr</code> Specify that molecular data is in PQR format.</p>

<p style="margin-left:30px;"><code>pdb</code> Specify that molecular data is in pseudo-PDB format.  If this type of structure file is used, then a parameter file must also be specified to provide charge and radius parameters for the biomolecule's atoms.</p>

<p><code>path</code>The location of the molecular data file.</p>
</div>
<hr />

<!---
- [mol](read-keywords/#mol)--->

#### READ examples

The following is an example of a minimal READ section.

{% highlight bash %}
READ
   mol pqr pos_charge.pqr
   mol pqr neg_charge.pqr
END
{% endhighlight %}


<h3 id="elec">ELEC</h3>

The ELEC block of an APBS input file is used in a PB-AM calculation
to read in various system parameters. It has the following syntax:

{% highlight bash %}
ELEC [ name {id} ]
        pbam-auto
        {keywords...}
END
{% endhighlight %}

The keywords currently implemented in APBS-PB-AM are as follows:

<a href="javascript:ReverseDisplay('pbam-keyword-pbam-auto')">pbam-auto</a>
<div id="pbam-keyword-pbam-auto" style="display:none;">
<p>Indicate that you will be running APBS with the PBAM model.</p>

The syntax is:
{% highlight bash %}
pbam-auto
{% endhighlight %}

<div class="note info">
<h5>Note</h5>
<p>This may be self-explanatory, but this keyword is REQUIRED.</p>
</div>
<hr />
</div>


<a href="javascript:ReverseDisplay('pbam-keyword-runtype')">runtype</a>
<div id="pbam-keyword-runtype" style="display:none;">
<p>Indicate what type of calculation you would like to run with the PB-AM model.</p>

The syntax is:
{% highlight bash %}
runtype {type}
{% endhighlight %}

<p>where <code>type</code> is the type of calculation to be perfomed with the PB-AM method.</p>

<p>
<code>energyforce</code> Compute and print out the interaction energies, forces and torques on each molecule. See the <a href="#energyforce">Energyforce section</a> for more details.<br />
<code>electrostatics</code> Print the electrostatic potential of points in the system. A few different print options are available, see the <a href="#electrostatics">Electrostatics section</a> for more details.<br />
<code>dynamics</code> Perform a Brownian Dynamics simulation, using forces and torques generated from the PB-AM model. See the <a href="#dynamics">Dynamics section</a> for more details.<br />
</p>

<div class="note info">
<h5>Note</h5>
<p>The current available options are limited to the options above.</p>
</div>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbam-keyword-pbc')">pbc</a>
<div id="pbam-keyword-pbc" style="display:none;">
<p>This keyword is used to indicate if 3D periodic boundary conditions (PBCs) will be used. If used, a box length must also be specified, in Ångstroms.</p>

The syntax is:
{% highlight bash %}
pbc {boxlength}
{% endhighlight %}

<p>where <code>boxlength</code> is the floating point value of the box length in Ångstroms.</p>
<div class="note info">
<h5>Note</h5>
<p>The box is centered at the origin (0, 0, 0). The code assumes a minimum image
convention, so it only includes the closest image of
 the neighboring molecules. For this convention to always be preserved,
 the periodic box is assumed to be large enough such that the electrostatic forces
 are sufficiently attenuated beyond one boxlength. Generally, the program assumes a mutual polarization cutoff of 100 Å for the mutual polarization, so if the boxlength is shorter, the cutoff will be reduced to boxlength/2.</p>
</div>
<hr />
</div>


<a href="javascript:ReverseDisplay('pbam-keyword-pdie')">pdie</a>
<div id="pbam-keyword-pdie" style="display:none;">
<p>Specify the dielectric constant of the biomolecule. This is usually a value between 2 to 20, where lower values consider only electronic polarization and higher values consider additional polarization due to intramolecular motion.</p>

The syntax is:
{% highlight bash %}
pdie {diel}
{% endhighlight %}

<p>where <code>diel</code> is the floating point value of the unitless biomolecular dielectric constant.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbam-keyword-randorient')">randorient</a>
<div id="pbam-keyword-randorient" style="display:none;">
<p>Flag add-in to indicate that the molecules should have a random orientation.</p>
The syntax is:
{% highlight bash %}
randorient
{% endhighlight %}
<hr />
</div>

<a href="javascript:ReverseDisplay('pbam-keyword-runname')">runname</a>
<div id="pbam-keyword-runname" style="display:none;">
<p>Specify the temperature for the Poisson-Boltzmann calculation.</p>

The syntax is:
{% highlight bash %}
runname {name}
{% endhighlight %}

<p>where <code>name</code> is a string indicating prefix for all output files.</p>
<div class="note info">
<h5>Note</h5>
<p>If this keyword is not used, some information will be written to stdout, others files will be printed with prefix "test".</p>
</div>
<hr />
</div>


<a href="javascript:ReverseDisplay('pbam-keyword-salt')">salt</a>
<div id="pbam-keyword-salt" style="display:none;">
<p>Specify the monovalent salt concentration of the system, in Molar. This is usually a value between 0.00 to 0.15.</p>

The syntax is:
{% highlight bash %}
salt {saltConc}
{% endhighlight %}

<p>where <code>saltConc</code> is the floating point value of the monovalent salt concentration in Moles/Liter.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbam-keyword-sdie')">sdie</a>
<div id="pbam-keyword-sdie" style="display:none;">
<p>Specify the dielectric constant of the solvent. Bulk water at biologically-relevant temperatures is usually modeled with a dielectric constant of 78-80.</p>

The syntax is:
{% highlight bash %}
sdie {diel}
{% endhighlight %}

<p>where <code>diel</code> is a floating point number representing the solvent dielectric constant (unitless).</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbam-keyword-temp')">temp</a>
<div id="pbam-keyword-temp" style="display:none;">
<p>Specify the temperature for the Poisson-Boltzmann calculation.</p>

The syntax is:
{% highlight bash %}
temp {T}
{% endhighlight %}

<p>where <code>T</code> is a floating point number indicating the temperature in K.</p>
<div class="note info">
<h5>Note</h5>
<p>The temperature term is used for adjusting the ion distribution and scaling electrostatic potentials.  It is not used to model the temperature dependence of any dielectric terms.</p>
</div>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbam-keyword-units')">units</a>
<div id="pbam-keyword-units" style="display:none;">
<p>Specify the units for information (energyforce or electrostatics) to be printed in.</p>

The syntax is:
{% highlight bash %}
units {unit flag}
{% endhighlight %}

<p>where <code>unit flag</code> is the value for the given units. For energy units of kCal/mole, use the value <code>kcalmol</code>. For energy units of Joules/mole, use the value <code>jmol</code>. For energy units of kT/e, use the value <code>kT</code>. Force units will be energy units/$\AA$.</p>
<hr />
</div>

<!---
- [pbam-auto](pbam-keywords/#pbam-auto)
- [runtype](pbam-keywords/#runtype)
- [pbc](pbam-keywords/#pbc)
- [pdie](pbam-keywords/#pdie)
- [randorient](pbam-keywords/#randorient)
- [runname](pbam-keywords/#runname)
- [salt](pbam-keywords/#salt)
- [sdie](pbam-keywords/#sdie)
- [temp](pbam-keywords/#temp)
- [units](pbam-keywords/#units)--->


<h3 id="energyforce">Energyforce keywords and examples</h3>

The energyforce example has no additional keywords from the previous section. An example input file is given below:

<div class="note info">
<h5>Note</h5>
<p>The energies and forces computed by this method are for inter-molecule interactions. Without multiple molecules in the system, the energies and forces will be zero.</p>
</div>

#### Energyforce example

{% highlight bash %}
READ
   mol pqr pos_charge.pqr
   mol pqr neg_charge.pqr
END

ELEC name comp_solv    # Toy charges
    pbam-auto

    runtype energyforce
    temp 250.0         # System temperature (K)
    pdie 4.0           # Solute dielectric
    sdie 78.00         # Solvent dielectric
    salt 0.01          # Monovalent salt conc in M

    randorient

END

QUIT
{% endhighlight %}

#### Energyforce output

The output, for the test files in the examples/pbam directory, filename <code>toy_energyforce.inp</code> is <code>test</code> and <code>test.pqr</code>.

<p><code>test</code> reads as follows:

{% highlight bash %}
My units are kT. Time: 0
MOLECULE #1 radius: 1.37409
        POSITION: [0, 2.83333, 0]
        ENERGY: -48.2247
        FORCE: 10.0168, [0.512215 -10.0011 -0.226193]
        TORQUE: 0.780913, [0.744875 0.0765654 0.22164]
MOLECULE #2 radius: 1.37409
        POSITION: [0, -2.16667, 0]
        ENERGY: -48.2247
        FORCE: 10.0167, [-0.511726 10.001 0.226326]
        TORQUE: 2.17631, [0.30195 -0.0762617 2.15391]
{% endhighlight %}

For each molecule in the system, the coarse-grain radius, center of geometry cartesian coordinates, the interaction energy, forces and torques are printed. </p>

<p><code>test.pqr</code> is a PQR file of the entire system, with input atoms only identified by their charge and radii, the coarse-grained spheres identified by the CEN keyword in the fourth column.</p>



<h3 id="electrostatics">Electrostatics keywords and examples</h3>

#### Electrostatics keywords

Additional inputs for an electrostatic run specify the desired output format. The current options are:

<a href="javascript:ReverseDisplay('estat-keyword-3dmap')">3dmap</a>
<div id="estat-keyword-3dmap" style="display:none;">
<p>Specify the name of the file into which the potential surface on the coarse-grain molecule surface will be printed.</p>

The syntax is:
{% highlight bash %}
3dmap {filename}
{% endhighlight %}

<p>where <code>filename</code> is a string for the name of the file where a 3D grid will be printed out.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('estat-keyword-dx')">dx</a>
<div id="estat-keyword-dx" style="display:none;">
<p>Specify the name of the file into which a dx formatted file will be printed.</p>

The syntax is:
{% highlight bash %}
dx {filename}
{% endhighlight %}

<p>where <code>filename</code> is a string for the name of the file where a dx map will be printed out.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('estat-keyword-grid2d')">grid2d</a>
<div id="estat-keyword-grid2d" style="display:none;">
<p>Specify the filename and location of a 2D cross sectional potential to be written to.</p>

The syntax is:
{% highlight bash %}
grid2d {filename} {axis} {axis_value}
{% endhighlight %}

<p>where <code>filename</code> is a string for the name of the 2D grid to be printed out,
 <code>axis</code> is a string of either x, y, or z, for which cartesian axis the grid will be computed along, and <code>axis_value</code> is a floating point number of the position along <code>axis</code> that will be used.</p>
<div class="note info">
<h5>Note</h5>
<p>Multiple 2D files can be printed out with 1 PB-AM run. Just specify them with more grid2d flags.</p>
</div>
<hr />
</div>

<a href="javascript:ReverseDisplay('estat-keyword-gridpts')">gridpts</a>
<div id="estat-keyword-gridpts" style="display:none;">
<p>Specify the number of gridpoints in each cartesian dimension.</p>

The syntax is:
{% highlight bash %}
gridpts {pts}
{% endhighlight %}

<p>where <code>pts</code> is a integer number indicating the number of grid points.</p>
<hr />
</div>

<!---
- [3dmap](estat-keywords/#3dmap)
- [dx](estat-keywords/#dx)
- [grid2d](estat-keywords/#grid2d)
- [gridpts](estat-keywords/#gridpts)
--->

<div class="note info">
<h5>Note</h5>
<p>The potential within the bounds of the coarse-grain sphere is not computed. They are defaulted to the value <code>nan</code>.</p>
</div>

<div class="note info">
<h5>Note</h5>
<p>Examples of how these outputs may be visualized are detailed in the PB-AM manual. The source is also accompanied by a directory of <code>python_scripts</code>.</p>
</div>

#### Electrostatics example

{% highlight bash %}
READ
   mol pqr pos_charge.pqr
   mol pqr neg_charge.pqr
END

ELEC name comp_solv    # Toy charges
    pbam-auto

    runtype electrostatics
    runname elec_toy   # Output name for files
    temp 298.15        # System temperature (K)
    pdie 4.0           # Solute dielectric
    sdie 78.0          # Solvent dielectric
    salt 0.05          # Monovalent salt conc in M

    dx toy.dx
    3dmap  toy.map
    grid2d toy.x0.dat x 0.0
    grid2d toy.z1.dat z 1.0

END

QUIT
{% endhighlight %}


#### Electrostatics output

The outputs of an electrostatics run will vary depending on the types of electrostatic keywords used in the infile, they are generally as follows:

<p><code>[runname].pqr</code> is the configuration of the system, including CG spheres.</p>
<p><code>[dxname].dx</code> is a dx formatted file that will be printed if the dx keyword is used. It is analagous to the APBS dx output. </p>
<p><code>[3dmapname]</code> is a file that prints out a list potential value for points on each of the molecules surfaces. The general format of the lines are <code>xcord ycord zcord potential</code>. Included in the <code>python_scripts</code> directory is a python script used for plotting a 3D heatmap of this file.</p>
<p><code>[grid2dfilename]</code> For each specified 2D grid keyword, a file is printed that contains a matrix of potential values for points in the system space at a given x/y/z location. Included in the <code>python_scripts</code> directory is a python script used for plotting a 2D heatmap of this file. </p>


<h3 id="dynamics">Dynamics keywords and examples</h3> 

The final option for PB-AM is to run dynamics. The calculation of force and torque has been integrated into a Brownian dynamics scheme that is detailed in <a href="http://pubs.acs.org/doi/abs/10.1021/ct400048q">Yap EH, Head-Gordon TL (2013)</a>. This is the most involved type of simulation and may require some adjustments that are very system specific.
The outputs of an electrostatics run will vary depending on the types of electrostatic keywords used in the infile, they are generally as follows:

#### Dynamics keywords

The available options are as follows:

<a href="javascript:ReverseDisplay('dyn-keyword-diff')">diff</a>
<div id="dyn-keyword-diff" style="display:none;">
<p>Specify the diffusion coefficients for each molecule in the system. </p>

The syntax is:
{% highlight bash %}
diff {type} {dTrans} {dRot}
{% endhighlight %}

<p>where <code>type</code> is a string indicating the molecule type, which may be either stat (stationary), rot (object is fixed but rotates) or move (object moves and rotates). For the stat keyword, do not include any other keywords. For the rot keyword, a floating point number for the rotational diffusion coefficient, <code>dRot</code> is expected, and if the move keyword is specified, the rotational, <code>dRot</code>, and translational (in units of $Å^2/ps$), <code>dTrans</code>, diffusion coefficients are expected. </p>
<div class="note info">
<h5>Note</h5>
<p>The order of these keywords is expected to be identical to the order of the molecules in the READ section.</p>
</div>
<hr />
</div>


<a href="javascript:ReverseDisplay('dyn-keyword-ntraj')">ntraj</a>
<div id="dyn-keyword-ntraj" style="display:none;">
<p>Specify the number of Brownian Dynamic trajectories desired for the PB-AM run.</p>

The syntax is:
{% highlight bash %}
ntraj {traj}
{% endhighlight %}

<p>where <code>traj</code> is an integer of the number of desired trajectories.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('dyn-keyword-termcont')">term contact</a>
<div id="dyn-keyword-termcont" style="display:none;">
<p>Specify a contact termination condition</p>

The syntax is:
{% highlight bash %}
term contact {filename} {pad}
{% endhighlight %}

<p>where <code>filename</code> is a string for the contact file filename. The contact file has a list formatted as follows: <code>moltype1 at1 moltype2 at2 dist</code> where <code>moltype1</code>  and <code>moltype2</code>  are indices of the molecular types, <code>at1</code> is the index of an atom from the first molecular type, <code>at2</code> is the index of an atom from the second molecular type and <code>dist</code> is the maximum distance between the two atoms that defines the contact. <code>pad</code> is distance criterion that will be checked in the case that the true atom contact distance may not be fulfilled.</p>
<div class="note info">
<h5>Note</h5>
<p>Sometimes these distances cannot be reached due to the assumption in this model that the molecule is spherical. If this is the case, the atom positions are transformed to the molecule surface and surface points are compared to the pad distance.</p>
</div>
<hr />
</div>

<a href="javascript:ReverseDisplay('dyn-keyword-termpos')">term pos</a>
<div id="dyn-keyword-termpos" style="display:none;">
<p>Specify a position termination condition, for a given molecule. </p>

The syntax is:
{% highlight bash %}
term {pos} {val} {molecule}
{% endhighlight %}

<p>where <code>pos</code> is a string of one of the following options: x<=, y<=, z<=, r<= (also the >= options of these). <code>val</code> is the value along the given axis to check against.  <code>molecule</code> is the molecule index (1 based) according to the order of molecules listed in the READ section that this condition applies to. It can be understood as follows: "Terminate the simulation when molecule <code>molecule</code> fulfills the condition <code>pos</code> <code>val</code>" for example: Terminate the simulation when molecule 1 fulfills the condition x>= 23.4. </p>
<hr />
</div>

<a href="javascript:ReverseDisplay('dyn-keyword-termtime')">term time</a>
<div id="dyn-keyword-termtime" style="display:none;">
<p>Specify a time termination condition</p>

The syntax is:
{% highlight bash %}
term time {val}
{% endhighlight %}

<p>where <code>val</code> is a floating point number for the time in picoseconds that the
simulation is to be terminated at. </p>
<hr />
</div>

<a href="javascript:ReverseDisplay('dyn-keyword-termcombine')">termcombine</a>
<div id="dyn-keyword-termcombine" style="display:none;">
<p>Given multiple termination conditions, specify the logic operator for combining
them.</p>

The syntax is:
{% highlight bash %}
termcombine {andor}
{% endhighlight %}

<p>where <code>andor</code> is a string of the word or, and. If  <code>and</code> is selected, all listed termination conditions must be fulfilled before the simulation ends. If <code>or</code>, only one needs to be satisfied to complete the simulation. </p>
<hr />
</div>


<a href="javascript:ReverseDisplay('dyn-keyword-xyz')">xyz</a>
<div id="dyn-keyword-xyz" style="display:none;">
<p>For each molecule in the system and for each trajectory, specify a xyz file for the starting position of that molecule.</p>

The syntax is:
{% highlight bash %}
xyz {molecule_id} {filename}
{% endhighlight %}

<p>where <code>molecule_id</code> is a 1-based integer of the molecule index from the READ  section. <code>filename</code> is the name of the file for the xyz coordinates of the molecule center for a given trajectory. The trajectories for a given molecule should be ordered sequentially in the ELEC section. </p>
<hr />
</div>

<!---
- [diff](dyn-keywords/#diff)
- [ntraj](dyn-keywords/#ntraj)
- [termcont](dyn-keywords/#termcont)
- [termpos](dyn-keywords/#termpos)
- [termtime](dyn-keywords/#termtime)
- [termcombine](dyn-keywords/#termcombine)
- [xyz](dyn-keywords/#xyz)
--->

#### Dynamics example infile

 An example input file is given below:

{% highlight bash %}
READ
   mol pqr pos_charge.pqr  # This is molecule 1
   mol pqr neg_charge.pqr  # This is molecule 2
END

ELEC name comp_solv  # Toy charges
    pbam-auto

    runtype dynamics
    runname dyn_toy  # Output name for files
    temp 298.15      # System temperature (K)
    pdie 4.0         # Solute dielectric
    sdie 78.0        # Solvent dielectric
    salt 0.05        # Monovalent salt conc in M

    pbc 100.0

    termcombine or
    term time 550.0
    term r>= 81.8 1
    ntraj 3

    diff 1 move 0.01 0.001
    diff 2 stat

    xyz 1 pos_1.xyz   # Pos for mol 1 at traj = 1
    xyz 1 pos_2.xyz   # Pos for mol 1 at traj = 2
    xyz 1 pos_3.xyz   # Pos for mol 1 at traj = 3

    xyz 2 neg_1.xyz   # Pos for mol 2 at traj = 1
    xyz 2 neg_2.xyz   # Pos for mol 2 at traj = 2
    xyz 2 neg_3.xyz   # Pos for mol 2 at traj = 3

END

QUIT
{% endhighlight %}


#### Dynamics output

The output, for the test files in the <code>examples/pbam</code> directory, filename <code>toy_dynamics.inp</code> are as follows:

<p><code>dyn_toy.pqr</code> is the starting configuration of the system for the first trajectory</p>
<p><code>dyn_toy.stat</code> is a file that prints how each trajectory was terminated and the time that this occurred at.</p>
<p><code>dyn_toy_traj.xyz</code> is a VMD readable xyz file for the trajectory of <code>traj</code> that has positions written out every 5000 steps (~10,000 picoseconds).</p>
<p><code>dyn_toy_traj.dat</code> is a file that prints out positions, forces and torques  for the system every 5000 steps (~10,000 picoseconds).</p>


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    "HTML-CSS": {scale: 95, linebreaks: {automatic: true}},
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
 });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
