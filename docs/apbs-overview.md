---
layout: docs
title: Input Files
prev_section: usage
next_section: apbs-invocation
permalink: /docs/apbs-overview/
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



<style>.section-nav {display:none;}</style>



APBS input files are loosely-formatted files which contain information about the input, parameters, and output for each calculation. These files are whitespace- or linefeed-delimited. Comments can be added to the input files via the # character; all text between the # and the end of the line is not parsed by APBS. Specific examples of APBS input are described in the Examples section.

<div class="note">
	<h5>Note</h5>
	<p>There are several tools which help prepare APBS input files based on molecular structures, memory constraints, etc. These tools are described in more detail in the Problem setup section.</p>
</div>


APBS input files contain three basic sections which can be repeated any number of times:

<div>
	<ul>
		<li><a href="#read">READ</a> section for specifying input.</li>
		<li><a href="#elec">ELEC</a> section for specifying polar solvation (electrostatics) calculation parameters.</li>
		<li><a href="#apolar">APOLAR</a> section for specifying apolar solvation calculation parameters.</li>
		<li><a href="#print">PRINT</a> section for specifying summary output.</li>
	</ul>
</div>

The APBS input file is constructed from these sections in the following format:

{% highlight bash %}
READ
 ...
 END

 ELEC
 ...
 END

 APOLAR
 ...
 END

 PRINT
 ...
 END

 QUIT
 {% endhighlight %}

 These sections can occur in any order and can be repeated any number of times. However, the sections are interdependent. For example, PRINT requires ELEC and/or APOLAR while ELEC requires one or more READ sections. Sections can also be repeated; several READ statements may be used to load molecules and multiple ELEC or APOLAR sections would specify various electrostatics calculations on one or more molecules.

<div class="note">
	<h5>Note</h5>
	<p>There are a number of places in the APBS input files where pathnames can be specified. If the pathname contains spaces, then the entire pathname must be enclosed in quotes. For example, if you wanted to refer to the file "foo" which resides in a directory with spaces in its name, then you should refer to foo as "/path with spaces/foo".</p>
</div>

Each section of the APBS input file has its own syntax, described in more detail in the following sections:

###Category List

<ul>
	<li><a href="#apolar">APOLAR input file section</a></li>
	<li><a href="#elec">ELEC input file section</a></li>
	<li><a href="#print">PRINT input file section</a></li>
	<li><a href="#read">READ input file section</a></li>
</ul>

<h3 id="apolar">APOLAR</h3>

This section is the main component for apolar solvation calculations in APBS runs. There may be several APOLAR sections, operating on different molecules or using different parameters for multiple runs on the same molecule. The syntax of this section is:

{% highlight bash %}
APOLAR [name id]
        {keywords...}
    END
{% endhighlight %}

The first (optional) argument is:

{% highlight bash %}
name {id}
{% endhighlight %}

where id is a unique string which can be assigned to the calculation to facilitate later operations (particularly in the [PRINT](#print) statements). The keywords... describing the parameters of the apolar calculation are discussed in more detail in the section [APOLAR keywords](#apolarkeywords).  Basic APOLAR calculations are described in this section.

###APOLAR Keywords

<a href="javascript:ReverseDisplay('bconc')">bconc</a>

<div id="bconc" style="display:none;">

This keyword specifies the bulk solvent density in Å<sup>-3</sup>. This coefficient multiplies the integral term of the apolar model discussed above and can be set to zero to eliminate integral contributions to the apolar solvation calculation. The syntax is:

{% highlight bash %}
bconc {density}
{% endhighlight %}

where <code>density</code> is a floating point number giving the bulk solvent density in Å<sup>-3</sup>

<hr />

</div>





<a href="javascript:ReverseDisplay('calcenergy')">calcenergy</a>

<div id="calcenergy" style="display:none;">

<p>This optional keyword controls energy output from an apolar solvation calculation. The syntax is:

{% highlight bash %}
calcenergy {flag}
{% endhighlight %}

where is a string denoting what type of energy to calculate:<br />
<code>no</code> (Deprecated) Don't calculate any energies.<br />
<code>total</code> Calculate and return total apolar energy for the entire molecule.<br />
<code>comps</code> Calculate and return total apolar energy for the entire molecule as well as the energy components for each atom.
</p>

<div class="note info">

<h5>Note</h5>
<p>This option must be used consistently for all calculations that will appear in subsequent <code>PRINT</code> statements. For example, if the statement</p>
{% highlight bash %}
print energy 1 - 2 end
{% endhighlight %}
<p>appears in the input file, then both calculations 1 and 2 must have calcenergy keywords present with the same values for <code>flag</code>.</p>

</div>

<hr />

</div>




<a href="javascript:ReverseDisplay('calcforce')">calcforce</a>

<div id="calcforce" style="display:none;">

<p>This optional keyword controls energy output from an apolar solvation calculation. The syntax is:
{% highlight bash %}
calcforce {flag}
{% endhighlight %}

where <code>flag</code> is a string that specifies the types of force values to be returned:
<code>no</code> (Deprecated) Don't calculate any forces.<br />
<code>total</code>     Calculate and return total apolar forces for the entire molecule.<br />
<code>comps</code>     Calculate and return total apolar forces for the entire molecule as well as force components for each atom.
</p>

<div class="note info">

<h5>Note</h5>
<p>This option must be used consistently for all calculations that will appear in subsequent <code>PRINT</code> statements. For example, if the statement</p>
{% highlight bash %}
print force 1 - 2 end
{% endhighlight %}
<p>appears in the input file, then both calculations 1 and 2 must have calcenergy keywords present with the same values for <code>flag</code>.</p>

</div>

<hr />

</div>






<a href="javascript:ReverseDisplay('dpos')">dpos</a>

<div id="dpos" style="display:none;">

<p>This is the displacement used for finite-difference-based calculations of surface area derivatives. I know, this is a terrible way to calculate surface area derivatives -- we're working on replacing it with an analytic version. In the meantime, please use this parameter with caution. If anyone has code for a better method, please share!</p>

The syntax is:
{% highlight bash %}
dpos {displacement}
{% endhighlight %}

where displacement is a floating point number indicating the finite difference displacement for force (surface area derivative) calculations in units of Å.

<div class="note warning">

<h5>Important</h5>
</p>This parameter is very dependent on sdens; e.g., smaller values of dpos require larger values of sdens.</p>

</div>

<hr />

</div>







<a href="javascript:ReverseDisplay('gamma')">gamma</a>

<div id="gamma" style="display:none;">

<p>This keyword specifies the surface tension coefficient for apolar solvation models.</p>

The syntax is:
{% highlight bash %}
gamma { value }
{% endhighlight %}

where <code>value</code> is a floating point number designating the surface tension in units of kJ mol-1 Å<sup>-1</sup>. This term can be set to zero to eliminate SASA contributions to the apolar solvation calculations

<hr />

</div>





<a href="javascript:ReverseDisplay('grid')">grid</a>

<div id="grid" style="display:none;">

This keyword specifies the quadrature grid spacing for volume integral calculations in apolar models.

The syntax is:
{% highlight bash %}
grid {hx hy hz}
{% endhighlight %}

where <code>hx</code> <code>hy</code> <code>hz</code> are the quadrature spacings in the x-, y-, and z-directions in Å.

</div>




<a href="javascript:ReverseDisplay('mol')">mol</a>

<div id="mol" style="display:none;">

This term specifies the molecule for which the apolar calculation is to be performed.

The syntax is:
{% highlight bash %}
mol {id}
{% endhighlight %}

where <code>id</code> is the integer ID of the molecule for which the apolar calculation is to be performed. The molecule IDs are based on the order in which molecules are read by read mol statements, starting from 1.

<hr />

</div>




<a href="javascript:ReverseDisplay('press')">press</a>

<div id="press" style="display:none;">

This term specifies the solvent pressure p in kJ mol-1 Å<sup>-3</sup>. This coefficient multiplies the volume term of the apolar model discussed here and can be set to zero to eliminate volume contributions to the apolar solvation calculation.

The syntax is:
{% highlight bash %}
press {value}
{% endhighlight %}

where <code>value</code> is the floating point value of the pressure coefficient in kJ mol-1 Å<sup>-3</sup>.

<hr />

</div>







<a href="javascript:ReverseDisplay('sdens')">sdens</a>

<div id="sdens" style="display:none;">

This keyword specifies the number of quadrature points per Å<sup>2</sup> to use in surface terms (e.g., molecular surface, solvent accessible surface) for apolar calculations. The keyword is ignored when srad is 0.0 (e.g., for van der Waals surfaces) or when srfm is spl2 (e.g., for spline surfaces). The syntax is:

The syntax is:
{% highlight bash %}
sdens {density}
{% endhighlight %}

where <code>density</code> is a floating point number indicating the number of grid points per Å<sup>-2</sup>.

<div class="note warning">

<h5>Important</h5>
</p>there is a direct correlation between the value used for the sphere density, the accuracy of the results, and the APBS calculation time.</p>

</div>

<hr />

</div>






<a href="javascript:ReverseDisplay('srad')">srad</a>

<div id="srad" style="display:none;">

This keyword specifies the radius of the solvent molecules; this parameter is used to define various solvent-related surfaces and volumes (see srfm). This value is usually set to 1.4 Å for a water-like molecular surface and set to 0 Å for a van der Waals surface.

The syntax is:
{% highlight bash %}
srad {radius}
{% endhighlight %}

where <code>radius</code> is the floating point value of the solvent radius (in Å). This keyword is ignored for srfm spl2.

<hr />

</div>




<a href="javascript:ReverseDisplay('srfm')">srfm</a>

<div id="srfm" style="display:none;">

This keyword specifies the model used to construct the solvent-related surface and volume.

The syntax is:
{% highlight bash %}
srfm {flag}
{% endhighlight %}

where <code>flag</code> is a string that specifies the model used for surface and volume.

<p><code>sacc</code> Solvent-accessible (also called "probe-inflated") surface and volume.</p>


<div class="note info">

<h5>Note</h5>
<p>This keyword is under construction: we're in the process of adding additional surface definitions (e.g., spl2).</p>

</div>

<hr />

</div>




<a href="javascript:ReverseDisplay('swin')">swin</a>

<div id="swin" style="display:none;">

This keyword specifies the size of the support (i.e., the rate of change) for spline-based surface definitions (see srfm spl2). The value is usually set to 0.3 Å.

The syntax is:
{% highlight bash %}
swin {win}
{% endhighlight %}

where <code>win</code> is the floating point value of the spline window (in Å).

<hr />

</div>




<a href="javascript:ReverseDisplay('temp')">temp</a>

<div id="temp" style="display:none;">

This keyword specifies the temperature for the calculation.

The syntax is:
{% highlight bash %}
temp {T}
{% endhighlight %}

where <code>T</code> is the floating point value of the temperature for calculation.

<hr />

</div>






<!---- [bconc](apolar-keywords/#bconc)
- [calcenergy](apolar-keywords/#calcenergy)
- [calcforce](apolar-keywords/#calcforce)
- [dpos](apolar-keywords/#dpos)
- [gamma](apolar-keywords/#gamma)
- [grid](apolar-keywords/#grid)
- [mol](apolar-keywords/#mol)
- [press](apolar-keywords/#press)
- [sdens](apolar-keywords/#sdens)
- [srad](apolar-keywords/#srad)
- [srfm](apolar-keywords/#srfm)
- [swin](apolar-keywords/#swin)
- [temp](apolar-keywords/#temp)--->

###Basic APOLAR calculations

APBS apolar calculations follow the very generic framework described in Wagoner JA, Baker NA. Assessing implicit models for nonpolar mean solvation forces: the importance of dispersion and volume terms. Proc Natl Acad Sci USA, 103, 8331-8336, 2006.(doi:10.1073/pnas.0600118103).

In particular, nonpolar solvation potentials of mean force (energies) are calculated according to:

\\[ \mathbf{W}^{(\mathrm{np})}(x) = \gamma A(x) + pV(x) + \bar \rho \sum^N_{i=1} \int _{\Omega} u_i^{(\mathrm{att})} (x_i, y) \theta (x,y) \, \mathrm{d}y \\]

and mean nonpolar solvation forces are calculated according to:

\\[ \mathbf{F}_i^{(\mathrm{np})}(x) = -\gamma \frac{\partial A (x)}{\partial x_i} - p \int _{\Gamma _i (x)} \frac{y-x_i}{\lVert y - x_i \rVert} \, \mathrm{d}y \\]
\\[ -\, \bar \rho \sum _{i=1}^N \int _{\Omega} \frac{\partial u_i^{(\mathrm{att})}(x_i,y)}{\partial x_i} \theta (x,y) \, \mathrm{d}y \\]

In these equations, $\gamma$ is the repulsive (hard sphere) solvent surface tension, $A$ is the conformation-dependent solute surface area (see srad and srfm keywords), $p$ (see press keyword) is the repulsive (hard sphere) solvent pressure, $V$ is the conformation-dependent solute volume (see srad and srfm keywords), $\rho$ (see bconc keywords) is the bulk solvent density, and the integral involves the attractive portion (defined in a Weeks-Chandler-Andersen sense) of the Lennard-Jones interactions between the solute and the solvent integrated over the region of the problem domain outside the solute volume $V$. Lennard-Jones parameters are taken from APBS parameter files as read in through an APBS input file READ statement.


<div class="note">
	<h5>Note</h5>
	<p>The above expressions can easily be reduced to simpler apolar solvation formalisms by setting one or more of the coefficients to zero through the keywords.</p>
</div>

<div class="note warning">
	<h5>Important</h5>
	<p>All APOLAR calculations require a parameter file which contains Lennard-Jones radius and well-depth parameters for all the atoms in the solute PDB. This parameter file must also contain radius and well-depth parameters for water (specifically: residue "WAT" and atom "OW").  Complete parameter files for protein and nucleic acid parameters are not currently available and are actively under development as a research project.  Please contact Nathan Baker for additional information about the state of this research, particularly if you are interested in helping.</p>
</div>

<h3 id="elec">ELEC</h3>

The ELEC block of an APBS input file is used for polar solvation (electrostatics) calculations and has the following syntax:

{% highlight bash %}
  ELEC [ name {id} ]
        {type}
        {keywords...}
    END
{% endhighlight %}

where the indentation and linefeeds are included for clarity; only whitespace is needed in the input file.  The <code>{id}</code> tag allows the user to name ELEC blocks.  The <code>{type}</code> command defines the Types of ELEC calculation to be performed.  Finally, the <code>{keywords}</code> are calculation-specific commands that customize the particular type of calculation.
This section is the main component for polar solvation calculations in APBS runs. There may be several ELEC sections, operating on different molecules or using different parameters for multiple runs on the same molecule. The order of the ELEC statement can matter since certain types of boundary conditions (bcfl) can require information about previous calculations.

###ELEC block naming

Since numerous ELEC blocks may appear in an APBS input file, it can be difficult to keep track of them all. It is possible to assign an optional name to each ELEC block to simplify the organizational process. This syntax has the form

{% highlight bash %}
ELEC name {id}
    ...
{% endhighlight %}

where ELEC is the start of the ELEC block and {id} is an alphanumeric string denoting the "name" of the calculation block.












###Elec keywords

<a href="javascript:ReverseDisplay('elec-keyword-akeypre')">akeypre</a>

<div id="elec-keyword-akeypre" style="display:none;">

<p>Specifies how the initial finite element mesh should be constructed (from refinement of a very coarse 8-tetrahedron mesh prior to the solve-estimate-refine iteration in fe-manual finite element calculations.</p>

The syntax is:
{% highlight bash %}
akeyPRE {key}
{% endhighlight %}

<p>where <code>key</code> is a text string that specifies the method used to guide initial refinement and takes one of the values:<br />
<code>unif</code> Uniform refinement<br />
<code>geom</code> Geometry-based refinement at molecular surfaces and charges</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-akeySOLVE')">akeySOLVE</a>

<div id="elec-keyword-akeySOLVE" style="display:none;">

<p>Specifies how the the finite element mesh should be adaptively subdivided during the solve-estimate-refine iterations of a fe-manual finite element calculation. This allows for various a posteriori refinement schemes.</p>

The syntax is:
{% highlight bash %}
akeySOLVE {key}
{% endhighlight %}

<p>where <code>key</code> is a text string that specifies the method used to guide adaptive refinement:</p>

<p><code>resi</code> Residual-based a *posteriori* refinement.</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-async')">async</a>

<div id="elec-keyword-async" style="display:none;">

<p>This optional keyword allows users to perform the different tasks in a mg-para parallel run asynchronously. Specifically, a processor masquerades as process rank in a parallel focusing run and provides output (data files and energies/forces) appropriate to that processor's local partition. The user must then assemble the results after all processes complete. First, this option is useful for scheduling on-demand resources: this makes it easy for users to backfill into the available processes in a queue. Second, this option is useful for running on limited resources: this enables users without access to large parallel machines to still perform the same calculations.</p>

The syntax is:
{% highlight bash %}
async { rank }
{% endhighlight %}

<p>where <code>rank</code> is the integer ID of the particular processor to masquerade as. Processor IDs range from 0 to N-1, where N is the total number of processors in the run (see pdime). Processor IDs are related to their position in the overall grid by p = n<sub>x</sub> n<sub>y</sub> k + n<sub>x</sub> j + i &nbsp;where n<sub>x</sub> is the number of processors in the x-direction, n<sub>y</sub> is the number of processors in the y-direction, n<sub>z</sub> is the number of processors in the z-direction, i is the index of the processor in the x-direction, j is the index of the processor in the y-direction, k is the index of the processor in the z-direction, and p is the overall rank of the processor.</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-bcfl')">bcfl</a>

<div id="elec-keyword-bcfl" style="display:none;">

<p>Specifies the type of boundary conditions used to solve the Poisson-Boltzmann equation.</p>

The syntax is:
{% highlight bash %}
bcfl {flag}
{% endhighlight %}

<p>where <code>flag</code> is a text string that identifies the type of conditions to be used.</p>

<p>
<code>zero</code> "Zero" boundary condition. Dirichlet conditions where the potential at the boundary is set to zero. This condition is not commonly used and can result in large errors if used inappropriately.<br />
<code>sdh</code> "Single Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a single sphere with a point charge, dipole, and quadrupole. The sphere radius in this model is set to the radius of the biomolecule and the sphere charge, dipole, and quadrupole are set to the total moments of the protein. This condition works best when the boundary is sufficiently far from the biomolecule.<br />
<code>mdh</code> "Multiple Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a multiple, non-interacting spheres with a point charges. The radii of the non-interacting spheres are set to the atomic radii of and the sphere charges are set to the atomic charges. This condition works better than sdh for closer boundaries but can be very slow for large biomolecules.<br />
<code>focus</code> "Focusing" boundary condition. Dirichlet condition where the potential at the boundary is set to the values computed by the previous (usually lower-resolution) PB calculation. This is used in sequential focusing performed manually in mg-manual calculations. All of the boundary points should lie within the domain of the previous calculation for best accuracy; if any boundary points lie outside, their values are computed using single Debye-Hückel boundary conditions (see above).<br />
<code>map</code> Specifying map allows a previously calculated potential map to be used in a new focusing calculation. A typical scenario is using the same coarse grid for multiple focusing calculations. A potential map can be written once from a coarse grid calculation, then used in subsequent runs to bypass the need to recalculate the coarse grid. See the READ keyword pot and the attached example files for its use.
</p>

<div class="note info">

<h5>Note</h5>
<p>This functionality is only available in the current developmental release of APBS.</p>

</div>

<!--- TO DO: ADD DOWNLOAD OPTIONS FROM http://www.poissonboltzmann.org/apbs/user-guide/running-apbs/input-files/elec-input-file-section/elec-keywords/bcfl -->

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-calcenergy')">calcenergy</a>

<div id="elec-keyword-calcenergy" style="display:none;">

<p>This optional keyword controls electrostatic energy output from a Poisson-Boltzmann calculation.</p>

<div class="note info">

<h5>Note</h5>
<p>This option must be used consistently for all calculations that will appear in subsequent PRINT statements. For example, if the statement <tt><code>print energy 1 - 2 end</code></tt> appears in the input file, then both calculations 1 and 2 must have <code>calcenergy</code> keywords present with the same values for <tt><code>flag</code></tt>.</p>

</div>

The syntax is:
{% highlight bash %}
calcenergy { flag }
{% endhighlight %}

<p>where <code>flag</code> is a text string that specifies the types of energy values to be returned:</p>

<p>
<code>no</code> (Deprecated) don't calculate any energies.  This is the same as not including the calcenergy command in the input file.<br />
<code>total</code> Calculate and return total electrostatic energy for the entire molecule.  For the nonlinear PB equation, this energy is:<br />
<img src="/apbs-pdb2pqr/img/NPBE-energy.png" /><br />
where epsilon is the dielectric function, rho is the charge distribution, phi is the electrostatic potential, c_i is the concentration of each mobile ionic species i, q_i is the charge of each species, V is the steric solute-ion exclusion potential.  For the linearized PB equation, this energy is calculated by the integral<br />
<img src="/apbs-pdb2pqr/img/LPBE-energy.png" /><br />
<code>comps</code> Calculate and return total electrostatic energy for the entire molecule as well as electrostatic energy components for each atom.
</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-calcforce')">calcforce</a>

<div id="elec-keyword-calcforce" style="display:none;">

<p>This optional keyword controls electrostatic force output from a multigrid (mg-manual, mg-auto, or mg-para) Poisson-Boltzmann calculation.</p>

<div class="note info">

<h5>Note</h5>
<p>This option must be used consistently for all calculations that will appear in subsequent PRINT statements. For example, if the statement <code>print force 1 - 2</code> end appears in the input file, then both calculations 1 and 2 must have <code>calcforce</code> keywords present with the same values for <code>flag</code>.</p>

</div>

The syntax is:
{% highlight bash %}
calcforce { flag }
{% endhighlight %}

<p>where <code>flag</code> is a text string that specifies the types of force values to be returned:
<code>no</code> (Deprecated) don't calculate any forces.<br />
<code>total</code> Calculate and return total electrostatic and apolar forces for the entire molecule.<br />
<code>comps</code> Calculate and return total electrostatic and apolar forces for the entire molecule as well as force components for each atom.<br />
</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-cgcent')">cgcent</a>

<div id="elec-keyword-cgcent" style="display:none;">

<p>This optional keyword controls electrostatic energy output from a Poisson-Boltzmann calculation.</p>

The syntax is:
{% highlight bash %}
cgcent { mol id | xcent ycent zcent }
{% endhighlight %}

<p>
The arguments for this keyword are <strong>either</strong>:<br />
<code>mol id</code> Center the grid on molecule with integer ID id; as assigned in the READ section with a READ mol command.<br />
<strong>or</strong><br />
<code>xcent ycent zcent</code> Center the grid on the (floating point) coordinates (in Å) at which the grid is centered. Based on the PDB coordinate frame.
</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-cglen')">cglen</a>

<div id="elec-keyword-cglen" style="display:none;">

<p>Specify the length of the coarse grid (in a focusing calculation) for an automatic multigrid (mg-auto, mg-para) Poisson-Boltzmann calculation.  This may be different in each direction.</p>

The syntax is:
{% highlight bash %}
cglen {xlen ylen zlen}
{% endhighlight %}

<p>This is the starting mesh, so it should be large enough to complete enclose the biomolecule and ensure that the chosen boundary condition (see bcfl) is appropriate.</p>

<p>
<code>xlen ylen zlen</code> Grid lengths (floating point numbers) in the x-, y-, and z-directions in Å.
</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-chgm')">chgm</a>

<div id="elec-keyword-chgm" style="display:none;">

<p>Specify the method by which the biomolecular point charges (i.e., Dirac delta functions) by which charges are mapped to the grid for a multigrid (mg-manual, mg-auto, mg-para) Poisson-Boltzmann calculation.  As we are attempting to model delta functions, the support (domain) of these discretized charge distributions is always a function of the grid spacing.</p>

The syntax is:
{% highlight bash %}
chgm {flag}
{% endhighlight %}

<p>where <code>flag</code> is a text string that specifies the type of discretization:<br />
<code>spl0</code>Traditional trilinear interpolation (linear splines). The charge is mapped onto the nearest-neighbor grid points. Resulting potentials are very sensitive to grid spacing, length, and position.<br />
<code>spl2</code>Cubic B-spline discretization. The charge is mapped onto the nearest- and next-nearest-neighbor grid points. Resulting potentials are somewhat less sensitive (than spl0) to grid spacing, length, and position.<br />
<code>spl4</code>Quintic B-spline discretization. Similar to spl2, except the charge/multipole is additionally mapped to include next-next-nearest neighbors (125 grid points receive charge density)
</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-dime')">dime</a>

<div id="elec-keyword-dime" style="display:none;">

<p>Specifies the number of grid points per processor for grid-based discretization.</p>

The syntax is:
{% highlight bash %}
dime {nx ny nz}
{% endhighlight %}

<p>For mg-manual calculations, the arguments are dependent on the choice of nlev by the formula:<br />
n = c 2<sup>l + 1</sup> + 1<br />
where n is the dime argument, c is a non-zero integer, l is the nlev value. The most common values for grid dimensions are 65, 97, 129, and 161 (they can be different in each direction); these are all compatible with a nlev value of 4. If you happen to pick a "bad" value for the dimensions (i.e., mismatch with nlev), the APBS code will adjust the specified dime downwards to more appropriate values. This means that "bad" values will typically result in lower resolution/accuracy calculations! The arguments for this keyword are:
<code> nx ny nz</code><br />
The (integer) number of grid points in the x-, y-, and z-directions, respectively.
</p>

<div class="note info">

<h5>Note</h5>
<p>dime should be interpreted as the number of grid points per processor for all calculations, including mg-para. This interpretation helps manage the amount of memory per-processor - generally the limiting resource for most calculations.</p>

</div>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-domainLength')">domainLength</a>

<div id="elec-keyword-domainLength" style="display:none;">

<p>Specify the rectangular finite element mesh domain lengths for fe-manual finite element calculations.  This length may be different in each direction. If the usemesh keyword is included, then this command is ignored.</p>

The syntax is:
{% highlight bash %}
domainLength {xlen ylen zlen}
{% endhighlight %}

<p>where the parameters <code>xlen</code>, <code>ylen</code>, <code>zlen</code> are floating point numbers that specify the mesh lengths in the x-, y-, and z-directions (respectively) in units of Å.</p>

<hr />

</div>







<a href="javascript:ReverseDisplay('elec-keyword-ekey')">ekey</a>

<div id="elec-keyword-ekey" style="display:none;">

<p>Specify the method used to determine the error tolerance in the solve-estimate-refine iterations of the finite element solver (fe-manual).</p>

The syntax is:
{% highlight bash %}
ekey { flag }
{% endhighlight %}

<p>where <code>flag</code> is a text string that determines the method for error calculation.<br />
<code>simp</code> Per-simplex error limit<br />
<code>global</code> Global (whole domain) error limit<br />
<code>frac</code> Fraction of simplices you'd like to see refined at each iteration
</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-etol')">etol</a>

<div id="elec-keyword-etol" style="display:none;">

<h4>Finite difference multigrid methods</h4>

<p>Current developmental releases of APBS provide support for the optional etol keyword to specify the tolerance for iterations of the PMG partial differential equation solver.</p>

The syntax is:
{% highlight bash %}
etol { tol }
{% endhighlight %}

<p>where <code>tol</code> is the (floating point) numerical value for the error tolerance.<br />
This keyword is optional and is intended for mg-manual, mg-auto, and mg-para calculation types.</p>


<h4>Finite element methods</h4>

<p>Specify the tolerance for error-based adaptive refinement during the solve-estimate-refine iterations of the finite element solver (fe-manual).</p>

The syntax is:
{% highlight bash %}
etol { tol }
{% endhighlight %}
<p>where <code>tol</code> is the (floating point) numerical value for the error tolerance.</p>

<hr />

</div>







<a href="javascript:ReverseDisplay('elec-keyword-fgcent')">fgcent</a>

<div id="elec-keyword-fgcent" style="display:none;">

<p>Specify the center of the fine grid (in a focusing calculation) based on a molecule's center or absolute coordinates for mg-para and mg-auto multigrid calculations.</p>

The syntax is:
{% highlight bash %}
fgcent { mol id | xcent ycent zcent }
{% endhighlight %}

<p>where a user can specify <strong>either</strong>:<br />
<code>mol {id}</code> Center the grid on molecule with integer ID id; as assigned in the READ section of the input file. Molecule IDs are assigned in the order they are read, starting at 1.<br />
<strong>or the user can specify</strong> <br />
<code>xcent ycent zcent</code> Center the grids on the coordinates (floating point numbers in Å) at which the grid is centered. Based on the input molecule PDB coordinate frame.
</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-fglen')">fglen</a>

<div id="elec-keyword-fglen" style="display:none;">

<p>Specifies the fine mesh domain lengths in a multigrid focusing calculation (mg-para or mg-auto); this may be different in each direction.</p>

The syntax is:
{% highlight bash %}
fglen {xlen ylen zlen}
{% endhighlight %}

<p>This should enclose the region of interest in the molecule. The arguments to this command are:<br />
<code>xlen ylen zlen</code> Grid lengths (floating point numbers) in the x-, y-, and z-directions in Å.<br />
</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-gcent')">gcent</a>

<div id="elec-keyword-gcent" style="display:none;">

<p>Specify the center of the grid based on a molecule's center or absolute coordinates for a mg-manual multigrid calculation.</p>

The syntax is:
{% highlight bash %}
gcent { mol id | xcent ycent zcent }
{% endhighlight %}

<p>where the user can specify <strong>either</strong>:<br />
<code>mol {id}</code> Center the grid on molecule with integer ID id; as assigned in the READ section. Molecule IDs are assigned in the order they are read, starting at 1.<br />
<strong>or the user can specify</strong><br />
<code>xcent ycent zcent</code> The floating point coordinates (in Å) at which the grid is centered. Based on the PDB coordinate frame.
</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-glen')">glen</a>

<div id="elec-keyword-glen" style="display:none;">

<p>Specify the mesh domain lengths for multigrid mg-manual calculations.  These lengths may be different in each direction.</p>

The syntax is:
{% highlight bash %}
glen {xlen ylen zlen}
{% endhighlight %}

<p>where <code>xlen</code> <code>ylen</code> <code>zlen</code> are the (floating point) grid lengths in the x-, y-, and z-directions (respectively) in Å.</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-grid')">grid</a>

<div id="elec-keyword-grid" style="display:none;">

<p>Specify the mesh grid spacings for multigrid mg-manual calculations.  This value may be different in each direction.</p>

The syntax is:
{% highlight bash %}
grid {hx hy hz}
{% endhighlight %}

<p>where <code>hx</code> <code>hy</code> <code>hz</code> are the (floating point) grid spacings in the x-, y-, and z-directions (respectively) in Å.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-ion')">ion</a>

<div id="elec-keyword-ion" style="display:none;">

<p>Specify the bulk concentrations of mobile ion species present in the system. This command can be repeated as necessary to specify multiple types of ions; however, only the largest ionic radius is used to determine the ion-accessibility function. The total bulk system of ions must be electroneutral which means the charge densities/concentrations of positive and negative ions must be equal.</p>

The syntax is:
{% highlight bash %}
ion charge {charge} conc {conc} radius {radius}
{% endhighlight %}

<p>where<br />
<code>charge</code> Mobile ion species charge (floating point number in e<sub>c</sub>)<br />
<code>conc</code> Mobile ion species concentration (floating point number in M)<br />
<code>radius</code> Mobile ion species radius (floating point number in Å)
</p>

<hr />

</div>







<a href="javascript:ReverseDisplay('elec-keyword-lpbe')">lpbe</a>

<div id="elec-keyword-lpbe" style="display:none;">

<p>Specifies that the linearized Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
lpbe
{% endhighlight %}

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-lrpbe')">lrpbe</a>

<div id="elec-keyword-lrpbe" style="display:none;">

<p>Specifies that the linear form of the regularized Poisson-Boltzmann equation (RPBE) should be solved. The regularized PBE equation replaces the point charge distribution with the corresponding Green's function. As a result of this replacement, the solution corresponds to the reaction field instead of the total potential; the total potential can be recovered by adding the appropriate Coulombic terms to the solution. Likewise, this equation immediately yields the solvation energy without the need for reference calculations.</p>

The syntax is:
{% highlight bash %}
lrpbe
{% endhighlight %}

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-maxsolve')">maxsolve</a>

<div id="elec-keyword-maxsolve" style="display:none;">

<p>Specify the number of times to perform the solve-estimate-refine iteration of the finite element solver (fe-manual).</p>

The syntax is:
{% highlight bash %}
maxsolve { num }
{% endhighlight %}

<p>where <code>num</code> is an integer indicating the desired maximum number of iterations.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-maxvert')">maxvert</a>

<div id="elec-keyword-maxvert" style="display:none;">

<p>Specify the maximum number of vertices to allow during solve-estimate-refine cycle of finite element solver (fe-manual). This places a limit on the memory that can be used by the solver.</p>

The syntax is:
{% highlight bash %}
maxvert { num }
{% endhighlight %}

<p>where <code>num</code> is an integer indicating the maximum number of vertices.</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-mol')">mol</a>

<div id="elec-keyword-mol" style="display:none;">

<p>Specify the molecule for which the PBE is to be solved. IDs are based on the order in which molecules are read by <code>READ mol</code> statements, starting from 1.</p>

The syntax is:
{% highlight bash %}
mol {id}
{% endhighlight %}

<p>where <code>id</code> is the integer ID of the molecule for which the Poisson-Boltzmann equation is to be solved.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-nlev')">nlev</a>

<div id="elec-keyword-nlev" style="display:none;">

<p>Specify the depth of the multilevel hierarchy used in the mg-manual multigrid solver. See dime for a discussion of how nlev relates to grid dimensions.</p>

The syntax is:
{% highlight bash %}
nlev {lev}
{% endhighlight %}

<p>where <code>lev</code> is an integer indicating the desired depth of the multigrid hierarchy.</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-npbe')">npbe</a>

<div id="elec-keyword-npbe" style="display:none;">

<p>Specifies that the nonlinear (full) Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
npbe
{% endhighlight %}

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-nrpbe')">nrpbe</a>

<div id="elec-keyword-nrpbe" style="display:none;">

<p>Specifies that the nonlinear form of the regularized Poisson-Boltzmann equation (RPBE) should be solved. The regularized PBE equation replaces the point charge distribution with the corresponding Green's function. As a result of this replacement, the solution corresponds to the reaction field instead of the total potential; the total potential can be recovered by adding the appropriate Coulombic terms to the solution. Likewise, this equation immediately yields the solvation energy without the need for reference calculations.</p>

The syntax is:
{% highlight bash %}
nrpbe
{% endhighlight %}

<div class="note info">

<h5>Note</h5>
<p>this functionality is only available with FEM-based solvers.</p>

</div>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-ofrac')">ofrac</a>

<div id="elec-keyword-ofrac" style="display:none;">

<p>Specify the amount of overlap to include between the individual processors meshes in a parallel focusing calculation (mg-para). This should be a value between 0 and 1.</p>

The syntax is:
{% highlight bash %}
ofrac {frac}
{% endhighlight %}

<p>where <code>frac</code> is a floating point value between 0.0 and 1.0 denoting the amount of overlap between processors.</p>
<p>Empirical evidence suggests that an <code>ofrac</code> value of 0.1 is sufficient to generate stable energies. However, this value may not be sufficient to generate stable forces and/or good quality isocontours. For example, the following table illustrates the change in energies and visual artifacts in isocontours as a function of ofrac values for a small peptide (2PHK:B).</p>

<p>Sensitivity of 2PHK:B solvation energy calculations to ofrac values.</p>


<table border="1" style="text-align:center">
<caption>Sensitivity of 2PHK:B solvation energy calculations to ofrac values.
</caption>
<tbody>
<tr>
<th> ofrac value </th>
<th> Energy (kJ/mol) </th>
<th> Visual artifact in &amp;pm;
</th>
</tr>
<tr>
<th> 0.05
</th>
<td> 342.79 </td>
<td> No
</td>
</tr>
<tr>
<th> 0.06
</th>
<td> 342.00 </td>
<td> No
</td>
</tr>
<tr>
<th> 0.07
</th>
<td> 341.12 </td>
<td> Yes
</td>
</tr>
<tr>
<th> 0.08
</th>
<td> 341.14 </td>
<td> Yes
</td>
</tr>
<tr>
<th> 0.09
</th>
<td> 342.02 </td>
<td> Yes
</td>
</tr>
<tr>
<th> 0.10
</th>
<td> 340.84 </td>
<td> Yes
</td>
</tr>
<tr>
<th> 0.11
</th>
<td> 339.67 </td>
<td> No
</td>
</tr>
<tr>
<th> 0.12
</th>
<td> 341.10 </td>
<td> No
</td>
</tr>
<tr>
<th> 0.13
</th>
<td> 341.10 </td>
<td> No
</td>
</tr>
<tr>
<th> 0.14
</th>
<td> 341.32 </td>
<td> No
</td>
</tr>
<tr>
<th> 0.15
</th>
<td> 341.54 </td>
<td> No
</td>
</tr>
</tbody>
</table>

<p>In general, larger <code>ofrac</code> values will reduce the parallel efficiency but will improve the accuracy.</p>

<p>For broad spatial support of the splines, every charge included in partition needs to be at least 1 grid space (chgm spl0), 2 grid spaces (chgm spl2), or 3 grid spaces (chgm spl4) away from the partition boundary.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-pdie')">pdie</a>

<div id="elec-keyword-pdie" style="display:none;">

<p>Specify the dielectric constant of the biomolecule. This is usually a value between 2 to 20, where lower values consider only electronic polarization and higher values consider additional polarization due to intramolecular motion.</p>

The syntax is:
{% highlight bash %}
pdie {diel}
{% endhighlight %}

where <code>die1</code> is the floating point value of the unitless biomolecular dielectric constant.

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-pdime')">pdime</a>

<div id="elec-keyword-pdime" style="display:none;">

<p>Specify the processor array to be used in a parallel focusing (mg-para) calculation. The product npx × npy × npz should be less than or equal to the total number of processors with which APBS was invoked (usually via mpirun). If more processors are provided at invocation than actually used during the run, the extra processors are not used in the calculation. The processors are tiled across the domain in a Cartesian fashion with a specified amount of overlap (see ofrac) between each processor to ensure continuity of the solution. Each processor's subdomain will contain the number of grid points specified by the dime keyword.</p>

The syntax is:
{% highlight bash %}
pdime {npx npy npz}
{% endhighlight %}

<p>where <code>npx</code> <code>npy</code> <code>npz</code> are the integer number of processors to be used in the x-, y- and z-directions of the system.</p>

<p>For broad spatial support of the splines, every charge included in partition needs to be at least 1 grid space (chgm spl0), 2 grid spaces (chgm spl2), or 3 grid spaces (chgm spl4) away from the partition boundary.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-sdens')">sdens</a>

<div id="elec-keyword-sdens" style="display:none;">

<p>Specify the number of grid points per square-angstrom to use in discontinuous surface constructions (e.g., molecular surface and solvent-accessible surfaces). Ignored when srad is 0.0 or srfm is spl2. There is a direct correlation between this value used for the surface sphere density, the accuracy of the surface calculations, and the APBS calculation time. The APBS "suggested" value is 10.0.</p>

The syntax is:
{% highlight bash %}
sdens {density}
{% endhighlight %}

<p>where <code>density</code> is the floating point surface sphere density (in grid points/Å<sup>2</sup>).</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-sdie')">sdie</a>

<div id="elec-keyword-sdie" style="display:none;">

<p>Specify the dielectric constant of the solvent. Bulk water at biologically-relevant temperatures is usually modeled with a dielectric constant of 78-80.</p>

The syntax is:
{% highlight bash %}
sdie {diel}
{% endhighlight %}

<p>where <code>die1</code> is a floating point number representing the solvent dielectric constant (unitless).</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-smpbe')">smpbe</a>

<div id="elec-keyword-smpbe" style="display:none;">

<p>Specifies that the size-modified PBE should be solved as described by Chu V, et al Biophys J, <strong>93</strong>(9):3202-9, 2007 (doi:10.1529/biophysj.106.099168).</p>

The syntax is:
{% highlight bash %}
smpbe vol { spacing } size { num }
{% endhighlight %}

<p>The parameter <tt><code>spacing</code></tt> is a floating point number in Ångstroms used specify the lattice spacing such that each lattice site has a volume equal to <tt><code>spacing</code></tt><sup>3</sup>.  The parameter <tt><code>num</code></tt> controls the relative size of the ions (in Ångstroms) such that each lattice site can contain a single ion of volume <tt><code>spacing</code></tt><sup>3</sup> or <tt><code>num</code></tt> ions of volume <tt>spacing</tt><sup>3</sup>/<tt>size</tt>.</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-srad')">srad</a>

<div id="elec-keyword-srad" style="display:none;">

<p>Specify the radius of the solvent molecules; this parameter is used to define the dielectric function for probe-based dielectric definitions (see srfm). This value is usually set to 1.4 Å for water. This keyword is ignored when any of the spline-based surfaces are used (e.g., spl2, see srfm), since they are not probe-based.</p>

The syntax for this command is:
{% highlight bash %}
srad {radius}
{% endhighlight %}

<p>where <code>radius</code> is the floating point solvent radius (in Å).</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-srfm')">srfm</a>

<div id="elec-keyword-srfm" style="display:none;">

<p>Specify the model used to construct the dielectric and ion-accessibility coefficients.</p>

The syntax for this command is:
{% highlight bash %}
srfm {flag}
{% endhighlight %}

<p>where <code>flag</code> is a string describing the coefficient model.</p>
<p><code>mol</code>The dielectric coefficient is defined based on a molecular surface definition. The problem domain is divided into two spaces. The "free volume" space is defined by the union of solvent-sized spheres (see srad) which do not overlap with biomolecular atoms. This free volume is assigned bulk solvent dielectric values. The complement of this space is assigned biomolecular dielectric values. With a non-zero solvent radius (srad), this choice of coefficient corresponds to the traditional definition used for PB calculations. When the solvent radius is set to zero, this corresponds to a van der Waals surface definition. The ion-accessibility coefficient is defined by an "inflated" van der Waals model. Specifically, the radius of each biomolecular atom is increased by the radius of the ion species (as specified with the ion keyword). The problem domain is then divided into two spaces. The space inside the union of these inflated atomic spheres is assigned an ion-accessibility value of 0; the complement space is assigned bulk ion accessibility values.</p>
<p><code>smol</code>The dielectric and ion-accessibility coefficients are defined as for mol (see above). However, they are then "smoothed" by a 9-point harmonic averaging to somewhat reduce sensitivity to the grid setup as described by Bruccoleri et al. J Comput Chem 18 268-276, 1997 (journal web site).</p>
<p><code>spl2</code>The dielectric and ion-accessibility coefficients are defined by a cubic-spline surface as described by Im et al, Comp Phys Commun 111 (1-3) 59-75, 1998 (doi:[10.1016/S0010-4655(98)00016-2). The width of the dielectric interface is controlled by the swin parameter.  These spline-based surface definitions are very stable with respect to grid parameters and therefore ideal for calculating forces. However, they require substantial reparameterization of the force field; interested users should consult Nina et al, Biophys Chem 78 (1-2) 89-96, 1999 (doi:10.1016/S0301-4622(98)00236-1). Additionally, these surfaces can generate unphysical results with non-zero ionic strengths; this is an on-going area of development.</p>
<p><code>spl4</code>The dielectric and ion-accessibility coefficients are defined by a 7th order polynomial. This surface definition has characteristics similar to spl2, but provides higher order continuity necessary for stable force calculations with atomic multipole force fields (up to quadrupole).</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-swin')">swin</a>

<div id="elec-keyword-swin" style="display:none;">

<p>Specify the size of the support (i.e., the rate of change) for spline-based surface definitions (see srfm). Usually 0.3 Å.</p>

The syntax is:
{% highlight bash %}
swin {win}
{% endhighlight %}

<p>where <code>win</code> where win is a floating point number for the spline window width (in Å). Note that, per the analysis of Nina, Im, and Roux (doi:10.1016/S0301-4622(98)00236-1), the force field parameters (radii) generally need to be adjusted if the spline window is changed.</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-targetNum')">targetNum</a>

<div id="elec-keyword-targetNum" style="display:none;">

<p>Specify the target number of vertices in the initial finite element mesh for fe-manual calculations.  Initial refinement will continue until this number is reached or the the longest edge of every simplex is below targetNum.</p>

The syntax is:
{% highlight bash %}
targetNum { num }
{% endhighlight %}

<p>where <code>num</code> is an integer denoting the target number of vertices in initial mesh.</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-targetRes')">targetRes</a>

<div id="elec-keyword-targetRes" style="display:none;">

<p>Specify the target resolution of the simplices in a finite element mesh (fe-manual); refinement will continue until the longest edge of every simplex is below this value.</p>

The syntax is:
{% highlight bash %}
targetRes { res }
{% endhighlight %}

<p>where <code>res</code> is a floating point number denoting the target resolution for longest edges of simplices in mesh (in Å).</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-temp')">temp</a>

<div id="elec-keyword-temp" style="display:none;">

<p>Specify the temperature for the Poisson-Boltzmann calculation.</p>

The syntax is:
{% highlight bash %}
temp { T }
{% endhighlight %}

<p>where <code>T</code> is a floating point number indicating the temperature in K.</p>

<div class="note info">

<h5>Note</h5>
<p>The temperature term is used for adjusting the ion distribution and scaling electrostatic potentials.  It is not used to model the temperature dependence of any dielectric terms.</p>

</div>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-useaqua')">useaqua</a>

<div id="elec-keyword-useaqua" style="display:none;">

<p>This keyword enables experimental support for Aqua, a verison of the Michael Holst> group FEtk PMG multigrid library optimized by Patrice Koehl for improved memory usage and speed when solving the Poisson-Boltzmann equation. This keyword is temporary and will eventually disappear as Aqua becomes the default multigrid solver (mg-manual, mg-auto, mg-para) for APBS.</p>

The syntax is:
{% highlight bash %}
useaqua
{% endhighlight %}

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-usemap')">usemap</a>

<div id="elec-keyword-usemap" style="display:none;">

<p>Specify pre-calculated coefficient maps to be used in the Poisson-Boltzmann calculation. These must have been input via an earlier READ statement.</p>

The syntax for this command is:
{% highlight bash %}
usemap {type} {id}
{% endhighlight %}

<p>where the mandatory keywords are:</p>
<p><code>type</code></p>
<p>A string that specifies the type of pre-calculated map to be read in:</p>
<p style="margin-left:30px;"><code>diel</code>Dielectric function map (as read by read diel); this causes the pdie, sdie, srad, swin, and srfm parameters and the radii of the biomolecular atoms to be ignored when computing dielectric maps for the Poisson-Boltzmann equation. Note that the pdie and sdie values are still used for some boundary condition calculations as specified by bcfl.</p>
<p style="margin-left:30px;"><code>kappa</code>Mobile ion-accessibility function map (as read by read kappa); this causes the swin and srfm parameters and the radii of the biomolecular atoms to be ignored when computing mobile ion values for the Poisson-Boltzmann equation. The ion parameter is not ignored and will still be used.</p>
<p style="margin-left:30px;"><code>charge</code>Charge distribution map (as read by read charge); this causes the chgm parameter and the charges of the biomolecular atoms to be ignored when assembling the fixed charge distribution for the Poisson-Boltzmann equation.</p>
<p style="margin-left:30px;"><code>pot</code>Potential map (as read by read pot); this option requires setting bcfl to map.  Note: This functionality is only available in the current developmental release of APBS.</p>
<p><code>id</code>As described in the READ command documentation, this integer ID specifies the particular map read in with READ. These IDs are assigned sequentially, starting from 1, and incremented independently for each map type read by APBS. In other words, a calculation that uses two PQR files, one parameter file, three charge maps, and four dielectric maps would have PQR files with IDs 1-2, a parameter file with ID 1, charge maps with IDs 1-3, and dielectric maps with IDs 1-4.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-usemesh')">usemesh</a>

<div id="elec-keyword-usemesh" style="display:none;">

<p>Specify the external finite element mesh to be used in the finite element Poisson-Boltzmann calculation (fe-manual). These must have been input via an earlier <code>READ</code> mesh statement. </p>

The syntax is:
{% highlight bash %}
usemesh {id}
{% endhighlight %}

<p>where <code>id</code> is an integer ID specifying the particular map read in with <code>READ</code> mesh. These IDs are assigned sequentially, starting from 1, and incremented independently for each mesh read by APBS.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-write')">write</a>

<div id="elec-keyword-write" style="display:none;">

<p>This controls the output of scalar data calculated during the Poisson-Boltzmann run. This keyword can be repeated several times to provide various types of data output from APBS.</p>

The syntax is:
{% highlight bash %}
write {type} {format} {stem}
{% endhighlight %}

<p><code>type</code> A string indicating what type of data to output:</p>

<p style="margin-left:30px;"><code>charge</code> Write out the biomolecular charge distribution in units of e<sub>c</sub> (electron charge) per Å<sup>3</sup>. (multigrid only).</p>

<p style="margin-left:30px;"><code>pot</code> Write out the electrostatic potential in units of <a href="goog_1268499712685">k</a><sub><a href="goog_1268499712685">b</a></sub><a href="goog_1268499712685"> T e</a><sub><a href="goog_1268499712685">c</a></sub><sup><a href="http://www.poissonboltzmann.org/apbs/frequently-asked-questions/what-are-the-units-of-electrostatic-potential">-1</a></sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>atompot</code> Write out the electrostatic potential in units of <a href="goog_1268499712685">k</a><sub><a href="goog_1268499712685">b</a></sub><a href="goog_1268499712685"> T e</a><sub><a href="goog_1268499712685">c</a></sub><sup><a href="http://www.poissonboltzmann.org/apbs/frequently-asked-questions/what-are-the-units-of-electrostatic-potential">-1</a></sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>smol</code> Write out the solvent accessibility defined by the molecular surface definition (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>sspl</code> Write out the spline-based solvent accessibility (see srfm spl2). Values are unitless and range from 0 (inaccessible) to 1 (accessible) (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>vdw</code> Write out the van der Waals-based solvent accessibility (see srfm smol with srad 0.0). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>ivdw</code> Write out the inflated van der Waals-based ion accessibility (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>lap</code> Write out the Laplacian of the potential in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>edens</code> Write out the "energy density" in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>ndens</code>Write out the total mobile ion number density for all ion species in units of M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

<img src="/apbs-pdb2pqr/img/ndens.png" /></p>

<p style="margin-left:30px;">where M is the number of ionic species, c_i is the bulk concentration of each species, q_i is the charge of each species, \phi is the electrostatic potential, k_B is Boltzmann's constant, and T is the temperature.</p>


<p style="margin-left:30px;"><code>qdens</code>Write out the total mobile charge density for all ion species in units of ec M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

<img src="/apbs-pdb2pqr/img/qdens.png" /></p>

<p style="margin-left:30px;">where M is the number of ionic species, c_i is the bulk concentration of each species, q_i is the charge of each species, \phi is the electrostatic potential, k_B is Boltzmann's constant, and T is the temperature.</p>

<p style="margin-left:30px;"><code>dielx</code>Write out the dielectric map shifted by 1/2 grid spacing in the x-direction (see READ diel). The values are unitless. (multigrid only)</p>

<p style="margin-left:30px;"><code>diely</code>Write out the dielectric map shifted by 1/2 grid spacing in the y-direction (see READ diel). The values are unitless. (multigrid only)</p>

<p style="margin-left:30px;"><code>dielz</code>Write out the dielectric map shifted by 1/2 grid spacing in the z-direction (see READ diel). The values are unitless. (multigrid only)</p>

<p style="margin-left:30px;"><code>kappa</code> Write out the "energy density" in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>



<p><code>format</code> A string that specifies the format for writing out the data.</p>

<p style="margin-left:30px;"><code>dx</code>Write out data in OpenDX format. This is the preferred format for APBS I/O. (multigrid and finite element).</p>

<p style="margin-left:30px;"><code>avs</code>Write out data in AVS UCD format. (finite element only).</p>

<p style="margin-left:30px;"><code>uhbd</code>Write out data in UHBD format. (multigrid only).</p>

<p><code>gz</code>Write out OpenDX data in gzipped (zlib) compatible format. Appends .dx.gz to the filename.</p>

<p style="margin-left:30px;"><code>flat</code>Write out data as a plain text file. (multigrid and finite element).</p>

<p><code>stem</code>A string that specifies the path for the output; files are written to stem.XYZ, where XYZ is determined by the file format (and processor rank for parallel calculations). If the pathname contains spaces, then it must be surrounded by double quotes; e.g., "/path with spaces/foo.in".</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-writemat')">writemat</a>

<div id="elec-keyword-writemat" style="display:none;">

<p>This controls the output of the mathematical operators in the Poisson-Boltzmann equation as matrices in Harwell-Boeing matrix format (multigrid only).</p>

The syntax is:
{% highlight bash %}
writemat {type} {stem}
{% endhighlight %}

<p>where <code>type</code> A string that indicates what type of operator to output.</p>
<p style="margin-left:30px;"><code>poisson</code> Write out the Poisson operator -\nabla \cdot \epsilon \nabla.</p>
<p><code>stem</code> A string that specifies the path for...</p>

<hr />

</div>




<!---
- [akeyPRE](elec-keywords/#akeypre)
- [akeySOLVE](elec-keywords/#akeysolve)
- [async](elec-keywords/#async)
- [bcfl](elec-keywords/#bcfl)
- [calcenergy](elec-keywords/#calcenergy)
- [calcforce](elec-keywords/#calcforce)
- [cgcent](elec-keywords/#cgcent)
- [cglen](elec-keywords/#cglen)
- [chgm](elec-keywords/#chgm)
- [dime](elec-keywords/#dime)
- [domainLength](elec-keywords/#domainlength)
- [ekey](elec-keywords/#ekey)
- [etol](elec-keywords/#etol)
- [fgcent](elec-keywords/#fgcent)
- [fglen](elec-keywords/#fglen)
- [gcent](elec-keywords/#gcent)
- [glen](elec-keywords/#glen)
- [grid](elec-keywords/#grid)
- [ion](elec-keywords/#ion)
- [lpbe](elec-keywords/#lpbe)
- [lrpbe](elec-keywords/#lrpbe)
- [maxsolve](elec-keywords/#maxsolve)
- [maxvert](elec-keywords/#maxvert)
- [mol](elec-keywords/#mol)
- [nlev](elec-keywords/#nlev)
- [npbe](elec-keywords/#npbe)
- [nrpbe](elec-keywords/#nrpbe)
- [ofrac](elec-keywords/#ofrac)
- [pdie](elec-keywords/#pdie)
- [pdime](elec-keywords/#pdime)
- [sdens](elec-keywords/#sdens)
- [sdie](elec-keywords/#sdie)
- [smpbe](elec-keywords/#smpbe)
- [srad](elec-keywords/#srad)
- [srfm](elec-keywords/#srfm)
- [swin](elec-keywords/#swin)
- [targetNum](elec-keywords/#targetnum)
- [targetRes](elec-keywords/#targetres)
- [temp](elec-keywords/#temp)
- [useaqua](elec-keywords/#useaqua)
- [usemap](elec-keywords/#usemap)
- [usemesh](elec-keywords/#usemesh)
- [write](elec-keywords/#write)
- [writemat](elec-keywords/#writemat)--->

###Types of ELEC calculations

- [fe-maual: manually-configured adaptive finite element Poisson-Boltzmann calculations](../elec-calcs/#femanual)
- [mg-auto: automatically-configured sequential focusing multigrid Posson-Boltzmann calculations](../elec-calcs/#mgauto)
- [mg-dummy: calculations of surface and charge distribution properties which do not require solution of the PBE](../elec-calcs/#mgdummy)
- [mg-manual: manually-configured multigrid Poisson-Boltzmann calculations](../elec-calcs/#mgmanual)
- [mg-para: automatically-configured paralle focusing multigrid Poisson-Boltzman calculations](../elec-calcs/#mgpara)

<h3 id="print">PRINT</h3>
This is a very simple section that allows linear combinations of calculated properties to be written to standard output.

The syntax of this section is:

{% highlight bash %}
PRINT {what} [id op id op...] END
{% endhighlight %}

The first mandatory argument is what, the quantity to manipulate or print. This variable is a string that can assume the following values:

- energy Print energies as calculated with an earlier [calcenergy](elec-keywords/#calcenergy) ELEC command. Warning: this keyword is deprecated and will be removed soon. Please use elecEnergy or apolEnergy as appropriate to obtain the desired energy output. For now, use of this keyword will return the old results of elecEnergy.
- force Print forces as calculated with an earlier [calcforce](elec-keywords/#calcforce) ELEC command. Warning: this keyword is deprecated and will be removed soon. Please use elecForce or apolForce as appropriate to obtain the desired energy output.
- elecEnergy Print electrostatic energies as calculated with an earlier [calcenergy](elec-keywords/#calcenergy) ELEC command.
- elecForce Print forces as calculated with an earlier [calcforce](elec-keywords/#calcforce) ELEC command.
- apolEnergy Print energies as calculated with an earlier [calcenergy](elec-keywords/#calcenergy) APOLAR command.
- apolForce Print forces as calculated with an earlier [calcforce](elec-keywords/#calcforce) APOLAR command.

The next arguments are a series of id op id op id op ... id commands where every id is immediately followed by an op and another id. These options have the following form:

<ul>
<li>id  This is a variable string or integer denoting the ID of a particular ELEC or APOLAR calculation. String values of id are assume to correspond to the optional "names" that can be assigned to ELEC or APOLAR calculations. Integer values of id are assumed to corresponding to the sequentially-assigned integer IDs for ELEC or APOLAR calculations. These IDs start at 1 and are incremented independently for each new ELEC or AOPLAR calculation.</li>
<li>op  Specify the arithmetic operation to be performed on the calculated quantities:
<ul>
	<li>+ Addition</li>
	<li>- Subtraction</li>
</ul>
</li>
</ul>

Given these options, a typical PRINT declaration might look like:

{% highlight bash %}
# Energy change due to binding
print energy complex - ligand - protein end
# Energy change due to solvation
print energy solvated - reference end
# Solvation energy change due to binding
print energy complex_solv - complex_ref - ligand_solv + ligand_ref - protein_solv + protein_ref end
{% endhighlight %}

See the examples/ directory provided with the APBS distribution for more examples.

<h3 id="read">READ</h3>

The READ block of an APBS input file has the following general format:

{% highlight bash %}
READ
    [ keywords... ]
END
{% endhighlight %}

where keywords is or more of the keywords described in the Keyword section (the line breaks and indentation are for clarity; only whitespace is necessary).

<div class="note info">

<h5>Note</h5>
<p>One of these sections must be present for every molecule involved in the APBS calculation. Molecule and "map" IDs are assigned implicitly assigned for each molecule/map read, based on order and starting at 1 and incremented independently for each input type. In other words, each input PQR file is assigned an ID 1, 2, 3, ...; each input dielectric map is assigned an independent ID 1, 2, 3, ...; etc.</p>

</div>


###READ keywords

<a href="javascript:ReverseDisplay('read-keyword-charge')">charge</a>

<div id="read-keyword-charge" style="display:none;">

<p>This command allows <a href="http://www.poissonboltzmann.org/apbs" rel="nofollow" title="http://www.poissonboltzmann.org/apbs">APBS</a>
to read the fixed (molecular) charge density function mapped to a mesh.
The inputs are maps of charge densities; these values have units of e<sub>c</sub> Å<sup>-3</sup>, where e<sub>c</sub> is the electron charge. In general, this command will read charge-maps written by <a href="http://www.poissonboltzmann.org/apbs/user-guide/running-apbs/input-files/elec-input-file-section/elec-keywords/write" rel="nofollow" title="http://www.poissonboltzmann.org/apbs/user-guide/running-apbs/input-files/elec-input-file-section/elec-keywords/write">write</a> commands in earlier <a href="http://www.poissonboltzmann.org/apbs" rel="nofollow" title="http://www.poissonboltzmann.org/apbs">APBS</a> calculations. Arguments for this command are:</p>

<p>The format of the charge map. Acceptable values include:</p>

<p><code>format</code>The format of the charge map. Acceptable values include:</p>

<p style="margin-left:30px;"><code>dx</code>OpenDX format</p>

<p><code>gz</code>gzipped (zlib) compressed OpenDX format. Files can be read directly in compressed form.</p>

<p><code>path</code>The location of the charge map file.</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('read-keyword-diel')">diel</a>

<div id="read-keyword-diel" style="display:none;">

<p><code>diel {format} {path-x} {path-y} {path-z}</code></p>

<p>This command allows APBS to read the dielectric function mapped to 3 meshes shifted by one-half grid spacing in the x, y, and z directions. The inputs are maps of dielectric variables between the solvent and biomolecular dielectric constants; these values are unitless. In general, this command will read dielectric maps written by write commands in earlier APBS calculations.</p>

<div class="note info">

<h5>Note</h5>
<p>If you choose this option and have a non-zero ionic strength, you must also include a read kappa statement.</p>

</div>

<p>Required arguments for this command are:</p>

<p><code>format</code>The format of the dielectric map. Acceptable values include:</p>

<p style="margin-left:30px;"><code>dx</code> OpenDX format</p>

<p><code>gz</code>gzipped (zlib) compressed OpenDX format. Files can be read directly in compressed form.</p>

<p><code>path-x</code>The location of the x-shifted dielectric map file.</p>

<p><code>path-y</code>The location of the y-shifted dielectric map file.</p>

<p><code>path-z</code>The location of the z-shifted dielectric map file.</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('read-keyword-kappa')">kappa</a>

<div id="read-keyword-kappa" style="display:none;">

<p><code>kappa {format} {path}</code></p>

<p>This command allows APBS to read the ion-accessibility function mapped to a mesh. The inputs are maps of ion accessibility values which range between 0 and the build Debye-Hückel screening parameter; these values have units of Å-2. In general, this command will read kappa-maps written by write commands in earlier APBS calculations.</p>

<div class="note info">

<h5>Note</h5>

<p>If you choose this option, you must also include a read diel statement.</p>

</div>

<p>Arguments for this command are:</p>

<p><code>format</code>The format of the kappa map. Acceptable values include:</p>

<p style="margin-left:30px;"><code>dx</code> OpenDX format</p>

<p><code>gz</code>gzipped (zlib) compressed OpenDX format. Files can be read directly in compressed form.</p>

<p><code>path</code>The location of the kappa map file.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('read-keyword-mol')">mol</a>

<div id="read-keyword-mol" style="display:none;">

<p><code>mol {format} {path}</code></p>

<p>This command specifies the molecular data to be read into APBS.</p>

<p>The required arguments are:</p>

<p><code>format</code>The format of the input data. Acceptable values include:</p>

<p style="margin-left:30px;"><code>pqr</code> Specify that molecular data is in PQR format.</p>

<p style="margin-left:30px;"><code>pdb</code> Specify that molecular data is in pseudo-PDB format.  If this type of structure file is used, then a parameter file must also be specified to provide charge and radius parameters for the biomolecule's atoms.</p>

<p><code>path</code>The location of the molecular data file.</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('read-keyword-parm')">parm</a>

<div id="read-keyword-parm" style="display:none;">

<p><code>parm {format} {path}</code></p>

<p>This command specifies the charge and radius data to be used with pseudo-PDB-format molecule files.</p>

<p>The arguments are:</p>

<p><code>format</code>The format of the parameter file. Acceptable flags include:</p>

<p style="margin-left:30px;"><code>flat</code> Specify that the parameter file is in APBS Flat-file parameter format.</p>

<p style="margin-left:30px;"><code>xml</code> Specify that the parameter file is in APBS XML parameter format.</p>

<p><code>path</code>The location of the parameter data file.</p>

<div class="note info">

<h5>Note</h5>

<p>APBS provides a few example files as part of the source code distribution.  Currently, example files only contain the polar parameters that can also be assigned more easily through the PDB2PQR software.  Parameter files with apolar values are not currently available for protein and nucleic acid parameters and are actively under development as a research project.  Please contact Nathan Baker for additional information about the state of this research, particularly if you are interested in helping.</p>

</div>

<hr />

</div>




<a href="javascript:ReverseDisplay('read-keyword-pot')">pot</a>

<div id="read-keyword-pot" style="display:none;">

<p><code>pot {format} {path}</code></p>

<p>This command allows APBS to read the electrostatic potential mapped to a mesh. The inputs are maps of the electrostatic potential from a previous calculation. In general, this command will read potential-maps written by write commands in earlier APBS calculations.</p>

<div class="note info">

<h5>Note</h5>

<p>To use this functionality you must set the bcfl keyword to map. See also: usemap.</p>

</div>

<p>Arguments for this command are:</p>

<p><code>format</code>The format of the potential map. Acceptable values include:</p>

<p style="margin-left:30px;"><code>dx</code> OpenDX format.</p>

<p><code>gz</code>gzipped (zlib) compressed OpenDX format. Files can be read directly in compressed form.</p>

<p><code>path</code>The location of the potential map file.</p>

<hr />

</div>



<!---
- [diel](read-keywords/#diel)
- [kappa](read-keywords/#kappa)
- [mesh](read-keywords/#mesh)
- [mol](read-keywords/#mol)
- [parm](read-keywords/#parm)
- [pot](read-keywords/#pot)--->

###READ examples

The following is an example of a minimal READ section that only imports PQR format molecular structure files.

{% highlight bash %}
READ
   mol pqr ligand.pqr
   mol pqr receptor.pqr
   mol pqr complex.pqr
END
{% endhighlight %}

####Reading a PDB file with parameters

{% highlight bash %}
READ
   mol pdb molecule.pdb
   parm flat param.dat
END
{% endhighlight %}

####Reading external dielectric maps

{% highlight bash %}
READ
   mol pqr molecule.pqr
   diel dx dielx.dx diely.dx dielz.dx
END
{% endhighlight %}

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
  });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
