---
layout: external_contributions
title: PB-SAM, the Poisson-Boltzmann Semi-Analytical Method
permalink: /external_contributions/extern-pbsam/
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


PB-SAM is a semi-analytical solution to the linearized Poisson-Boltzmann 
equation for multiple molecules of arbitrary charge distribution 
in an ionic solution. The solution is an extension of the analytical method,
leveraging Fast-Multipole methods as well as boundary elements. Each molecule is
coarse-grained as a system of overlapping spheres, whose surface charges are represented
by the multipole expansions \\(H^{(i)}\\) and \\(F^{(i)}\\). To solve for the potential,
the following interactions are considered:

 - Intra-molecular interactions between overlapping spheres are treated numerically
 - Intra-molecular interactions between non-overlapping spheres are treated analytically
 - Inter-molecular interactions between spheres on different molecules

With these interactions, the multipole expansions are solved with an iterative 
SCF method, briefly given as

\\[ H^{(i,k)} = I_{E}^{(i,k)} \cdot \left ( H^{(i,k)} + F^{(i,k)} + T \cdot H^{(j,l)} \right ) \\]
\\[ F^{(i,k)} = I_{E}^{(i,k)} \cdot \left ( H^{(i,k)} + F^{(i,k)} + T \cdot F^{(j,l)} \right ) \\]

Where \\(H^{(i)}\\) and \\(F^{(i)}\\) are multipole expansions, \\(I_{E}^{(i,k)}\\) is the 
exposed surface integral matrix for sphere \\(k\\) of molecule \\(i\\), and \\(T\\) is an
operator that transforms the multipole expansion to a local coordinate frame. For details on the method, 
please see <a href="http://pubs.acs.org/doi/abs/10.1021/ct100145f">Yap, Head-Gordon (2010)
</a> and <a href="http://pubs.acs.org/doi/abs/10.1021/ct400048q">Yap, Head-Gordon (2013)</a>.


### Physical calculations

#### Interactions energies

From the above formulation, computation of the interaction energy 
(\\(\Omega^{(i)}\\)) for molecule i, is given as a sum of all the interactions
of spheres \\(k\\) within it with all external spheres (in a simplified form) as follows:

\\[\Omega^{(i)}=\frac{1}{\epsilon_s} \left \langle \sum_{k \, in\, i} \sum_{j \ne i}^N \sum_{l\, in \, j}  T \cdot H^{(j,l)} ,  H^{(i,k)} \right \rangle \\]

Where \\(\langle  M, N \rangle\\) denotes the inner product.

#### Forces and Torques

When energy is computed, forces follow as:

\\[ \textbf{F}^{(i)} = \nabla_i \Omega^{(i)}=\frac{1}{\epsilon_s} [ \langle \nabla_i \,T \cdot H^{(j,l)} ,  H^{(i,k)} \rangle +  \langle T \cdot H^{(j,l)} ,   \nabla_i \, H^{(i,k)} \rangle ]\\]

The method to calculate the torque $\boldsymbol{\tau}^{(i)}$ on molecule is outside the 
scope of this manual, but is discussed extensively in 
<a href="http://pubs.acs.org/doi/abs/10.1021/ct400048q">Yap, Head-Gordon (2013).</a>


### APBS Implementation

The physical calculations of the previous section are used to perform various actions 
on a system of molecules. The current implementation includes:

 <ul>
	<li><a href="#energyforce">calculation of energies, forces and torques</a></li>
	<li><a href="#electrostatics">calculation of an electrostatic potential </a></li>
	<li><a href="#dynamics">a Brownian dynamics scheme</a></li>
</ul>

This method coarse-grains all molecules of the system using the definition of 
a solvent-excluded molecular surface. The basic information needed for running PB-SAM 
is the type of run desired and the molecules of interest. 


<div class="note info">
<h5>Note</h5>
<p>It should be noted that some program intermediates are computationally expensive to compute
and are therefore printed out if they are not specified by keyword in the input file.
A description of each of these files is in the <a href="#intermediates">Intermediates section</a>.</p>
</div>

The APBS sections required for a PB-SAM run are ELEC and READ, as follows:

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

<p style="margin-left:30px;"><code>pdb</code> Specify that molecular data is in 
pseudo-PDB format.  If this type of structure file is used, then a parameter 
file must also be specified to provide charge and radius parameters for the biomolecule's atoms.</p>

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

The ELEC block of an APBS input file is used in a PB-SAM calculation
to read in various system parameters. It has the following syntax:

{% highlight bash %}
ELEC [ name {id} ]
        pbsam-auto
        {keywords...}
END
{% endhighlight %}

The keywords currently implemented in APBS-PB-SAM are as follows:

<a href="javascript:ReverseDisplay('pbsam-keyword-pbsam-auto')">pbsam-auto</a>
<div id="pbsam-keyword-pbsam-auto" style="display:none;">
<p>Indicate that you will be running APBS with the PB-SAM model.</p>

The syntax is:
{% highlight bash %}
pbsam-auto
{% endhighlight %}

<div class="note info">
<h5>Note</h5>
<p>This may be self-explanatory, but this keyword is REQUIRED.</p>
</div>
<hr />
</div>


<a href="javascript:ReverseDisplay('pbsam-keyword-runtype')">runtype</a>
<div id="pbsam-keyword-runtype" style="display:none;">
<p>Indicate what type of calculation you would like to run with the PB-SAM model.</p>

The syntax is:
{% highlight bash %}
runtype {type}
{% endhighlight %}

<p>where <code>type</code> is the type of calculation to be perfomed with the PB-SAM method.</p>

<p>
<code>energyforce</code> Compute and print out the interaction energies, forces and torques on each molecule. See the <a href="#energyforce">Energyforce section</a> for more details.<br />
<code>electrostatics</code> Print the electrostatic potential of points in the system. A few different print options are available, see the <a href="#electrostatics">Electrostatics section</a> for more details.<br />
<code>dynamics</code> Perform a Brownian Dynamics simulation, using forces and torques generated from the PB-SAM model. See the <a href="#dynamics">Dynamics section</a> for more details.<br />
</p>

<div class="note info">
<h5>Note</h5>
<p>The current available options are limited to the options above.</p>
</div>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbsam-keyword-msms')">msms</a>
<div id="pbsam-keyword-msms" style="display:none;">
<p>Use this flag to invoke the call of the MSMS program within APBS. Its output, a .vert file is necessary for the coarse-graining process.</p>

The syntax is:
{% highlight bash %}
msms
{% endhighlight %}

<hr />
</div>

<a href="javascript:ReverseDisplay('pbsam-keyword-pbc')">pbc</a>
<div id="pbsam-keyword-pbc" style="display:none;">
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


<a href="javascript:ReverseDisplay('pbsam-keyword-pdie')">pdie</a>
<div id="pbsam-keyword-pdie" style="display:none;">
<p>Specify the dielectric constant of the biomolecule. This is usually a value between 2 to 20, where lower values consider only electronic polarization and higher values consider additional polarization due to intramolecular motion.</p>

The syntax is:
{% highlight bash %}
pdie {diel}
{% endhighlight %}

<p>where <code>diel</code> is the floating point value of the unitless biomolecular dielectric constant.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbsam-keyword-randorient')">randorient</a>
<div id="pbsam-keyword-randorient" style="display:none;">
<p>Flag add-in to indicate that the molecules should have a random orientation.</p>
The syntax is:
{% highlight bash %}
randorient
{% endhighlight %}
<hr />
</div>

<a href="javascript:ReverseDisplay('pbsam-keyword-runname')">runname</a>
<div id="pbsam-keyword-runname" style="display:none;">
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


<a href="javascript:ReverseDisplay('pbsam-keyword-salt')">salt</a>
<div id="pbsam-keyword-salt" style="display:none;">
<p>Specify the monovalent salt concentration of the system, in Molar. This is usually a value between 0.00 to 0.15.</p>

The syntax is:
{% highlight bash %}
salt {saltConc}
{% endhighlight %}

<p>where <code>saltConc</code> is the floating point value of the monovalent salt concentration in Moles/Liter.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbsam-keyword-sdie')">sdie</a>
<div id="pbsam-keyword-sdie" style="display:none;">
<p>Specify the dielectric constant of the solvent. Bulk water at biologically-relevant temperatures is usually modeled with a dielectric constant of 78-80.</p>

The syntax is:
{% highlight bash %}
sdie {diel}
{% endhighlight %}

<p>where <code>diel</code> is a floating point number representing the solvent dielectric constant (unitless).</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbsam-keyword-temp')">temp</a>
<div id="pbsam-keyword-temp" style="display:none;">
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

<a href="javascript:ReverseDisplay('pbsam-keyword-units')">units</a>
<div id="pbsam-keyword-units" style="display:none;">
<p>Specify the units for information (energyforce or electrostatics) to be printed in.</p>

The syntax is: 
{% highlight bash %}
units {unit flag}
{% endhighlight %}

<p>where <code>unit flag</code> is the value for the given units. For energy units of kCal/mole, use the value <code>kcalmol</code>. For energy units of Joules/mole, use the value <code>jmol</code>. For energy units of kT/e, use the value <code>kT</code>. Force units will be energy units/\(\AA\).</p>
<hr />
</div>

<!---
- [pbsam-auto](pbsam-keywords/#pbsam-auto)
- [runtype](pbsam-keywords/#runtype)
- [msms](pbsam-keywords/#msms)
- [pbc](pbsam-keywords/#pbc)
- [pdie](pbsam-keywords/#pdie)
- [randorient](pbsam-keywords/#randorient)
- [runname](pbsam-keywords/#runname)
- [salt](pbsam-keywords/#salt)
- [sdie](pbsam-keywords/#sdie)
- [temp](pbsam-keywords/#temp)
- [units](pbsam-keywords/#units)--->

<h3 id="intermediates">PB-SAM intermediates and keywords</h3>

The intermediates generated during a PB-SAM run are as follows:

 <ul>
    <li><a href="#msms_surf">Vertex files</a></li>
    <li><a href="#cg_pqr">Coarse-grained PQR file</a></li>
    <li><a href="#imat">Integral matrix file</a></li>
    <li><a href="#exp">Expansion files</a></li>
</ul>


<h4 id="msms_surf"> Vertex/Surface File</h4>

As part of the coarse-graining process a definition of the molecular
surface is necessary. For this we have historically used the program
<a href="http://mgltools.scripps.edu/packages/MSMS">MSMS</a> by M. Sanner,
or on the <a href="http://mgl.scripps.edu/people/sanner/html/msms_server.html">online web server</a>.

If using the command line tool, after downloading it for the correct platform,
it can be run as follows on the command line. It requires an xyzr file as input, which
is the xyz coordinates of each atom of the system followed by the vDW radius. This
information can all be found in the PQR file.

{% highlight bash %}
./msms.system -if [filename].xyzr -of [outfile]
{% endhighlight %}

This will produce a *.face file and a *.vert file, of which the *.vert is needed.   
The vertex file is given as follows:

{% highlight bash %}
    1669      95  3.00  1.50
   2.965    12.871    -1.084    -0.751    -0.636    -0.175       0      81  2
   3.241    11.952    -0.817    -0.936    -0.024    -0.353       0      69  2
   3.026    11.791    -0.439    -0.792     0.084    -0.604       0      79  2
   4.481    14.391    -3.026    -0.879    -0.246    -0.409       0      73  2
   5.413    15.674    -0.948    -0.337     0.499     0.798       0      73  2
   4.478    15.093    -0.297     0.286     0.886     0.365       0      81  2
   4.930    15.004    -0.240    -0.015     0.945     0.326       0      71  2
   4.072    13.663     0.763    -0.465     0.242     0.852       0      71  2
{% endhighlight %}

Where the first line is the number of vertex points, followed by information
on the density of the surface, and the lines that follow indicate the cartesian
locations of each vertex point, followed by the unit norm of the surface.
This vertex file is used to coarse-grain the molecule. Once this has been
generated, it can be used again as input using the <code>surf</code> command.
See <a href="#intermed-use">Intermediate keywords</a> for more details.

<h4 id="cg_pqr">Coarse-Grained PQR file </h4>

After the coarse-grain process is complete, the PQR file for the
original PQR concatenated with the CG spherical centers will
be printed out to a PQR file, called <code>mol[#]_cg.pqr</code>,
the number being the order that the file is listed in the READ section.

<h4 id="imat"> IMAT: Surface Integral File</h4>


The surface integrals are computed for the boundary element part of
PB-SAM. They can be quite time consuming, so the first time they 
are computed for a system, they are printed to the working directory,
with the name <code>[pqr_prefix]_sph[#].bin</code>. Where 
<code>[pqr_prefix]</code> is the name of the pqr input file, with the 
last four characters removed (presumed
".pqr". For future computations, the <code>imat</code> keyword can be used, followed
by the <code>[pqr_prefix]</code> and the program will read in the IMAT files instead of
re-computing them.

See <a href="#intermed-use">Intermediate keywords</a> for more details.

<h4 id="exp"> Expansion files</h4>

Much like the IMAT files, the expansion files are files generated from
self-polarization that are useful and time-saving methods for running 
a system of full-mutual polarziation on many molecules. If no expansion
path is provided, the program will perform self polarization for each
type of molecule in the system and print out files prepended with the 
<code>[pqr_prefix]</code> read in with the PQR flag, followed by <code>.[sph #].H.exp</code>
or <code>.[sph #].F.exp</code>. Where <code>H</code> and <code>F</code> are the two key expansions
that the PB-SAM code computes during run time. In future program runs, the
<code>exp</code> flag can be used, and the <code>H</code> and <code>F</code> files will be read in.

See <a href="#intermed-use">Intermediate keywords</a> for more details.

<h4 id="intermed-use">Intermediate usage</h4>

<a href="javascript:ReverseDisplay('pbsam-interm-keywords')">imat</a>
<div id="pbsam-interim-imat" style="display:none;">
<p>This keyword can be used to load in the surface integral matrices previously
generated, which will be named <code>mol[#]sph[sph#].bin.</p>

The syntax is:
{% highlight bash %}
imat {imat prefix}
{% endhighlight %}

<p>where <code>imat prefix</code> is the filename prefix <code>mol[#]sph</code>. 
The <code>[sph#].bin</code> will be appended within the program run.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbsam-interm-keywords')">exp</a>
<div id="pbsam-interim-exp" style="display:none;">
<p>This keyword can be used to load in the expansion matrices from files. They will have been previously
generated, and will be named <code>mol[#].[H or F].[sph#].exp.</p>

The syntax is:
{% highlight bash %}
exp {exp prefix}
{% endhighlight %}

<p>where <code>exp prefix</code> is the filename prefix <code>mol[#]</code>. The <code>[H/F]</code> and 
the <code>[sph#].exp</code> will be appended within the program run.</p>
<hr />
</div>

<a href="javascript:ReverseDisplay('pbsam-interm-keywords')">surf</a>
<div id="pbsam-interim-surf" style="display:none;">
<p>This keyword can be used to load in the MSMS vertex file for coarse-graining.</p>

The syntax is:
{% highlight bash %}
surf {surf prefix}
{% endhighlight %}

<p>where <code>surf prefix</code> is the filename <code>[file].vert</code>.</p>
<hr />
</div>

<!---
- [exp](pbsam-interm-keywords/#exp)
- [imat](pbsam-interm-keywords/#imat)
- [surf](pbsam-interm-keywords/#surf)--->


<h3 id="energyforce">Energyforce keywords and examples</h3>

The energyforce example has no additional keywords from the previous section. An example input file is given below:

<div class="note info">
<h5>Note</h5>
<p>The energies and forces computed by this method are for inter-molecule interactions. Without multiple molecules in the system, the energies and forces will be zero.</p>
</div>

#### Energyforce example

{% highlight bash %}
read
    mol pqr gly.pqr
    mol pqr gly2.pqr
end
elec name comp_solv        # Gly
    pbsam-auto

    runtype energyforce     # Can be energyforce, electrostatics etc
    runname enfo_gly        # Output name for files created by program

    units kT
    ## info for molecule
    msms
    tolsp 2.5

   #imat imat/mol0sph # add in if program has already run
   #imat imat/mol1sph # add in if program has already run

   #exp exp/mol0 # add in if program has already run
   #exp exp/mol1 # add in if program has already run

    temp 298.15             # System temperature (K)
    pdie 4.0                # Solute dielectric
    sdie 80.0               # Solvent dielectric
    salt 0.05               # Monovalent salt conc in M

end

quit
{% endhighlight %}

#### Energyforce output

The output, for the test files in the examples/pbsam directory, filename <code>toy_energyforce.inp</code> is <code>test</code> and <code>test.pqr</code>.

<p><code>test</code> reads as follows:

{% highlight bash %}
My units are kT. Time: 0
Molecule #1
        POSITION: [0.000206897, -0.000413793, -0.000482759]
        ENERGY: 6.17661e-05
        FORCE: 0.00072349, [-0.000537635 -0.000423847 -0.000233967]
        TORQUE: 2.03503e-06, [-4.31343e-05 -0.000822915 0.00078854]
Molecule #2
        POSITION: [12.0002, 11.9996, 11.9995]
        ENERGY: 6.21059e-05
        FORCE: 0.000737173, [0.000535151 0.000445966 0.000241146]
        TORQUE: 8.2822e-06, [0.00196746 0.00132961 -0.00398844]
{% endhighlight %}

For each molecule in the system, the coarse-grain radius, center of geometry cartesian coordinates, the interaction energy, forces and torques are printed. </p>

<p><code>enfo_gly.pqr</code> is a PQR file of the entire system, with input atoms only identified by their charge and radii, the coarse-grained spheres identified by the CEN keyword in the fourth column.</p>



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
<p>Multiple 2D files can be printed out with 1 PB-SAM run. Just specify them with more grid2d flags.</p>
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
<p>Examples of how these outputs may be visualized are detailed in the PB-SAM manual. The source is also accompanied by a directory of <code>python_scripts</code>.</p>
</div>

#### Electrostatics example

{% highlight bash %}
read
    mol pqr gly.pqr
end
elec name comp_solv        # Gly 
    pbsam-auto

    runtype electrostatics  # Can be energyforce, electrostatics etc 
    runname elec_gly        # Output name for files created by program

    units jmol
    ## info for molecule
    msms
    tolsp 2.5 

    temp 298.15             # System temperature (K) 
    pdie 4.0                # Solute dielectric    
    sdie 78.0               # Solvent dielectric    
    salt 0.10               # Monovalent salt conc in M

    gridpts 20
    dx gly_0.1M.dx
    3dmap  gly_0.1M.map
    grid2d gly_0.1M.x0.dat x 0.0 

end

quit
{% endhighlight %}


#### Electrostatics output

The outputs of an electrostatics run will vary depending on the types of electrostatic keywords used in the infile, they are generally as follows:

<p><code>[runname].pqr</code> is the configuration of the system, including CG spheres.</p>
<p><code>[dxname].dx</code> is a dx formatted file that will be printed if the dx keyword is used. It is analagous to the APBS dx output. </p>
<p><code>[3dmapname]</code> is a file that prints out a list potential value for points on each of the molecules surfaces. The general format of the lines are <code>xcord ycord zcord potential</code>. Included in the <code>python_scripts</code> directory is a python script used for plotting a 3D heatmap of this file.</p>
<p><code>[grid2dfilename]</code> For each specified 2D grid keyword, a file is printed that contains a matrix of potential values for points in the system space at a given x/y/z location. Included in the <code>python_scripts</code> directory is a python script used for plotting a 2D heatmap of this file. </p>


<h3 id="dynamics">Dynamics keywords and examples</h3> 

The final option for PB-SAM is to run dynamics. The calculation of force and torque has been integrated into a Brownian dynamics scheme that is detailed in <a href="http://pubs.acs.org/doi/abs/10.1021/ct400048q">Yap EH, Head-Gordon TL (2013)</a>. This is the most involved type of simulation and may require some adjustments that are very system specific.
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
<p>Specify the number of Brownian Dynamic trajectories desired for the PB-SAM run.</p>

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

<p>where <code>filename</code> is a string for the contact file filename. The contact file has a list formatted as follows: <code>moltype1 at1 moltype2 at2 dist</code> where <code>moltype1</code>  and <code>moltype2</code>  are indices of the molecular types, <code>at1</code> is the index of an atom from the first molecular type, <code>at2</code> is the index of an atom from the second molecular type and <code>dist</code> is the maximum distance between the two atoms that defines the contact. <code>pad</code> is padding added distance criterion that will be checked in the case that the contact distance may not be fulfilled. When reading in contacts, the atom numbers are mapped to their CG spheres, and the proximity of these spheres are compared against <code>dist</code>.</p>
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
read
    mol pqr gly.pqr
    mol pqr gly2.pqr
end
elec name comp_solv        # Gly 
    pbsam-auto

    runtype dynamics        # Can be energyforce, electrostatics etc 
    runname dyn_gly         # Output name for files created by program

    units kT
    ## info for molecule
    msms
    tolsp 2.5 

   #imat imat/mol0sph # add in if program has already run 
   #imat imat/mol1sph # add in if program has already run 

   #exp exp/mol0 # add in if program has already run 
   #exp exp/mol1 # add in if program has already run 

    termcombine or
    term time 560.0
    ntraj 2

    diff 1 move 0.45 0.001
    diff 2 stat

    xyz 1 traj_1_1.xyz
    xyz 1 traj_1_2.xyz

    xyz 2 traj_2_1.xyz
    xyz 2 traj_2_2.xyz

    temp 298.15             # System temperature (K) 
    pdie 4.0                # Solute dielectric    
    sdie 80.0               # Solvent dielectric    
    salt 0.05               # Monovalent salt conc in M

end

quit

{% endhighlight %}


#### Dynamics output

The output, for the test files in the <code>examples/pbsam/gly</code> directory, filename <code>gly_dynamics.inp</code> are as follows:

<p><code>dyn_gly.pqr</code> is the starting configuration of the system for the first trajectory</p>
<p><code>dyn_gly.stat</code> is a file that prints how each trajectory was terminated and the time that this occurred at.</p> 
<p><code>dyn_gly_traj.xyz</code> is a VMD readable xyz file for the trajectory of <code>traj</code> that has positions written out every 200 steps (~400 picoseconds).</p>
<p><code>dyn_gly_traj.dat</code> is a file that prints out positions, forces and torques  for the system every 200 steps (~400 picoseconds).</p>


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    "HTML-CSS": {scale: 95, linebreaks: {automatic: true}},
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
 }); 
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
