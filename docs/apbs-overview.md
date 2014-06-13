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




## Input Files

APBS input files are loosely-formatted files which contain information about the input, parameters, and output for each calculation. These files are whitespace- or linefeed-delimited. Comments can be added to the input files via the # character; all text between the # and the end of the line is not parsed by APBS. Specific examples of APBS input are described in the Examples section.

#####Please note that there are several tools which help prepare APBS input files based on molecular structures, memory constraints, etc. These tools are described in more detail in the Problem setup section.

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

 <h5>NOTE: There are a number of places in the APBS input files where pathnames can be specified. If the pathname contains spaces, then the entire pathname must be enclosed in quotes. For example, if you wanted to refer to the file "foo" which resides in a directory with spaces in its name, then you should refer to foo as "/path with spaces/foo".</h5>

 Each section of the APBS input file has its own syntax, described in more detail in the following sections:

###Category List

<ul>
	<li><a href="#apolar">APOLAR input file section</a>
		<ul>
			<li><a href="#apolarkeywords">APOLAR keywords</a></li>
			<li><a href="#apolacalcs">Basic APOLAR calculations</a></li>
		</ul>
	</li>
	<li><a href="#elec">ELEC input file section</a>
		<ul>
			<li><a href="#elecblocknaming">ELEC block naming</a></li>
			<li><a href="#eleckeywords">ELEC keywords</a></li>
			<li><a href="#eleccalcs">Types of ELEC calculations</a></li>
		</ul>
	</li>
	<li><a href="#print">PRINT input file section</a></li>
	<li><a href="#read">READ input file section</a>
		<ul>
			<li><a href="#readexamples">READ examples</a></li>
			<li><a href="#readkeywords">READ keywords</a></li>
		</ul>
	</li>
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

where id is a unique string which can be assigned to the calculation to facilitate later operations (particularly in the [PRINT]({site.url}/apbs-overview/#print) statements). The keywords... describing the parameters of the apolar calculation are discussed in more detail in the section [APOLAR keywords]({site.url}/apbs-overview/#apolarkeywords).  Basic APOLAR calculations are described in this section.

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






<!---- [bconc](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#bconc)
- [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#calcenergy)
- [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#calcforce)
- [dpos](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#dpos)
- [gamma](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#gamma)
- [grid](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#grid)
- [mol](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#mol)
- [press](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#press)
- [sdens](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#sdens)
- [srad](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#srad)
- [srfm](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#srfm)
- [swin](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#swin)
- [temp](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#temp)--->

###Basic APOLAR calculations

APBS apolar calculations follow the very generic framework described in Wagoner JA, Baker NA. Assessing implicit models for nonpolar mean solvation forces: the importance of dispersion and volume terms. Proc Natl Acad Sci USA, 103, 8331-8336, 2006.(doi:10.1073/pnas.0600118103).

In particular, nonpolar solvation potentials of mean force (energies) are calculated according to:

<img src="{{site.url}}/img/graphic-18.gif" />

and mean nonpolar solvation forces are calculated according to:

<img src="{{site.url}}/img/graphic-19.gif" />

In these equations, gamma is the repulsive (hard sphere) solvent surface tension, A is the conformation-dependent solute surface area (see srad and srfm keywords), p (see press keyword) is the repulsive (hard sphere) solvent pressure, V is the conformation-dependent solute volume (see srad and srfm keywords), rho (see bconc keywords) is the bulk solvent density, and the integral involves the attractive portion (defined in a Weeks-Chandler-Andersen sense) of the Lennard-Jones interactions between the solute and the solvent integrated over the region of the problem domain outside the solute volume V. Lennard-Jones parameters are taken from APBS parameter files as read in through an APBS input file READ statement.

Note that the above expressions can easily be reduced to simpler apolar solvation formalisms by setting one or more of the coefficients to zero through the keywords.

<div class="note info">
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

where the indentation and linefeeds are included for clarity; only whitespace is needed in the input file.  The {id} tag allows the user to name ELEC blocks, as described in the [ELEC block naming]({site.url}/apbs-overview/#elecblocknaming) section.  The {type} command defines the Types of [ELEC calculation]({site.url}/apbs-overview/#eleccalcs) to be performed.  Finally, the {keywords} are calculation-specific commands that customize the particular type of calculation.
This section is the main component for polar solvation calculations in APBS runs. There may be several ELEC sections, operating on different molecules or using different parameters for multiple runs on the same molecule. The order of the ELEC statement can matter since certain types of boundary conditions [(bcfl)]({site.url}/elec-keywords/#bcfl) can require information about previous calculations.

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





<!---
- [akeyPRE](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#akeypre)
- [akeySOLVE](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#akeysolve)
- [async](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#async)
- [bcfl](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#bcfl)
- [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcenergy)
- [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcforce)
- [cgcent](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#cgcent)
- [cglen](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#cglen)
- [chgm](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#chgm)--->
- [dime](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#dime)
- [domainLength](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#domainlength)
- [ekey](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#ekey)
- [etol](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#etol)
- [fgcent](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#fgcent)
- [fglen](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#fglen)
- [gcent](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#gcent)
- [glen](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#glen)
- [grid](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#grid)
- [ion](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#ion)
- [lpbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#lpbe)
- [lrpbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#lrpbe)
- [maxsolve](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#maxsolve)
- [maxvert](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#maxvert)
- [mol](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#mol)
- [nlev](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#nlev)
- [npbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#npbe)
- [nrpbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#nrpbe)
- [ofrac](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#ofrac)
- [pdie](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#pdie)
- [pdime](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#pdime)
- [sdens](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#sdens)
- [sdie](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#sdie)
- [smpbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#smpbe)
- [srad](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#srad)
- [srfm](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#srfm)
- [swin](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#swin)
- [targetNum](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#targetnum)
- [targetRes](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#targetres)
- [temp](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#temp)
- [useaqua](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#useaqua)
- [usemap](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#usemap)
- [usemesh](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#usemesh)
- [write](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#write)
- [writemat](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#writemat)

###Types of ELEC calculations

- [fe-maual: manually-configured adaptive finite element Poisson-Boltzmann calculations](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calcs/#femanual)
- [mg-auto: automatically-configured sequential focusing multigrid Posson-Boltzmann calculations](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calcs/#mgauto)
- [mg-dummy: calculations of surface and charge distribution properties which do not require solution of the PBE](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calculations/#mgdummy)
- [mg-manual: manually-configured multigrid Poisson-Boltzmann calculations](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calcs/#mgmanual)
- [mg-para: automatically-configured paralle focusing multigrid Poisson-Boltzman calculations](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calcs/#mgpara)

<h3 id="print">PRINT</h3>
This is a very simple section that allows linear combinations of calculated properties to be written to standard output.

The syntax of this section is:

{% highlight bash %}
PRINT {what} [id op id op...] END 
{% endhighlight %}

The first mandatory argument is what, the quantity to manipulate or print. This variable is a string that can assume the following values:

- energy Print energies as calculated with an earlier [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcenergy) ELEC command. Warning: this keyword is deprecated and will be removed soon. Please use elecEnergy or apolEnergy as appropriate to obtain the desired energy output. For now, use of this keyword will return the old results of elecEnergy.
- force Print forces as calculated with an earlier [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcforce) ELEC command. Warning: this keyword is deprecated and will be removed soon. Please use elecForce or apolForce as appropriate to obtain the desired energy output.
- elecEnergy Print electrostatic energies as calculated with an earlier [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcenergy) ELEC command.
- elecForce Print forces as calculated with an earlier [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcforce) ELEC command.
- apolEnergy Print energies as calculated with an earlier [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcenergy) APOLAR command.
- apolForce Print forces as calculated with an earlier [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcforce) APOLAR command.

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

####Note: One of these sections must be present for every molecule involved in the APBS calculation. Molecule and "map" IDs are assigned implicitly assigned for each molecule/map read, based on order and starting at 1 and incremented independently for each input type. In other words, each input PQR file is assigned an ID 1, 2, 3, ...; each input dielectric map is assigned an independent ID 1, 2, 3, ...; etc.

###READ keywords

- [charge](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#charge)
- [diel](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#diel)
- [kappa](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#kappa)
- [mesh](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#mesh)
- [mol](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#mol)
- [parm](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#parm)
- [pot](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#pot)

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