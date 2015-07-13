---
layout: docs
title: Types of ELEC Calculations
permalink: /docs/elec-calcs/
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
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}
//--></script>


<h3 id="fe-maual"></h3>fe-maual: manually-configured adaptive finite element Poisson-Boltzmann calculations

This is a single-point PBE calculation performed by our adaptive finite element PBE solver. It requires that APBS be linked to the Michael Holst group FEtk finite element library http://www.fetk.org during compilation.

The finite element solver uses a "solve-estimate-refine" cycle. Specifically, starting from an initial mesh, it performs the following iteration:

<ol>
	<li>solve the problem with the current mesh</li>
	<li>estimate the error in the solution</li>
	<li>adaptively refine the mesh to reduce the error</li>
</ol>

...until a global error tolerance is reached.

<div class="note">
	<h5>Note</h5>
	<p>The finite element methods are currently most useful for a select set of problems which can benefit from adaptive refinement of the solution. Furthermore, this implementation is experimental. In general, the sequential and parallel focusing multigrid methods offer the most efficient solution of the PBE for most systems.</p>
</div>


All keywords for this type of calculation are required unless otherwise noted:



<a href="javascript:ReverseDisplay('akeyPRE')">akeyPRE</a>

<div id="akeyPRE" style="display:none;">
	<p><code>akeyPRE {key}</code> where key is a text string that specifies the method used to guide initial refinement and takes one of the values:</p>
	<p style="margin-left:30px;"><code>unif</code> Uniform refinement<br />
		<code>geom</code> Geometry-based refinement at molecular surfaces and charges</p>
</div>


<a href="javascript:ReverseDisplay('akeySOLVE')">akeySOLVE</a>

<div id="akeySOLVE" style="display:none;">
	<p><code>akeySOLVE {key}</code>where key is a text string that specifies the method used to guide adaptive refinement:</p>
	<p style="margin-left:30px;"><code>resi</code> Residual-based a <em>posteriori</em> refinement<br /></p>
</div>


<a href="javascript:ReverseDisplay('bcfl')">bcfl</a>

<div id="bcfl" style="display:none;">
	<p><code>bcfl {flag}</code> where <code>flag</code> is a text string that identifies the type of conditions to be used:</p>
	<p style="margin-left:30px;"><code>zero</code> "Zero" boundary condition. Dirichlet conditions where the potential at the boundary is set to zero. This condition is not commonly used and can result in large errors if used inappropriately.<br />
		<code>sdh</code> "Single Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a single sphere with a point charge, dipole, and quadrupole. The sphere radius in this model is set to the radius of the biomolecule and the sphere charge, dipole, and quadrupole are set to the total moments of the protein. This condition works best when the boundary is sufficiently far from the biomolecule.<br />
		<code>mdh</code> "Multiple Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a multiple, non-interacting spheres with a point charges. The radii of the non-interacting spheres are set to the atomic radii of and the sphere charges are set to the atomic charges. This condition works better than sdh for closer boundaries but can be very slow for large biomolecules.<br />
		<code>focus</code> "Focusing" boundary condition. Dirichlet condition where the potential at the boundary is set to the values computed by the previous (usually lower-resolution) PB calculation. This is used in sequential focusing performed manually in mg-manual calculations. All of the boundary points should lie within the domain of the previous calculation for best accuracy; if any boundary points lie outside, their values are computed using single Debye-Hückel boundary conditions (see above).<br />
		<code>map</code> Specifying map allows a previously calculated potential map to be used in a new focusing calculation. A typical scenario is using the same coarse grid for multiple focusing calculations. A potential map can be written once from a coarse grid calculation, then used in subsequent runs to bypass the need to recalculate the coarse grid. See the READ keyword pot and the attached example files for its use.  NOTE:  this functionality is only available in the current developmental release of APBS.</p>
</div>



<a href="javascript:ReverseDisplay('elec-keyword-calcenergy')">calcenergy</a>

<div id="elec-keyword-calcenergy" style="display:none;">

<p>This optional keyword controls electrostatic energy output from a Poisson-Boltzmann calculation.</p>

<div class="note info">

<h5>Note</h5>
<p>This option must be used consistently for all calculations that will appear in subsequent PRINT statements. For example, if the statement <code>print energy 1 - 2 end</code> appears in the input file, then both calculations 1 and 2 must have <code>calcenergy</code> keywords present with the same values for <code>flag</code>.</p>

</div>

The syntax is:
{% highlight bash %}
calcenergy { flag }
{% endhighlight %}

<p>where <code>flag</code> is a text string that specifies the types of energy values to be returned:</p>

<p>
<code>no</code> (Deprecated) don't calculate any energies.  This is the same as not including the calcenergy command in the input file.<br />
<code>total</code> Calculate and return total electrostatic energy for the entire molecule.  For the nonlinear PB equation, this energy is:<br />
\[ G[\phi] = \int_\Omega {\biggl ({\frac{\epsilon(x)}{2}}(\nabla \phi(x))^2 + \rho(x) \phi(x) + \sum_i{c _i \bigl ( e^{-q _i \phi(x)-V(x)}-1} \bigr ) \biggr )}dx \]
where epsilon is the dielectric function, rho is the charge distribution, phi is the electrostatic potential, c_i is the concentration of each mobile ionic species i, q_i is the charge of each species, V is the steric solute-ion exclusion potential.  For the linearized PB equation, this energy is calculated by the integral<br />
\[ G[\phi] = \frac{1}{2} \int _\Omega \rho (x) \phi(x) {dx} \]  
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
The possible outputs from calcforce are:
{% highlight bash %}
tot n -- total force for atom n
qf  n -- fixed charge force for atom n
db  n -- dielectric boundary force for atom n
ib  n -- ionic boundary force for atom n
{% endhighlight %}
The values will be printed in three columns which correspond to the x, y, and z component of the force vector.
</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('chgm')">chgm</a>

<div id="chgm" style="display:none;">
	<p>Specify the method by which the biomolecular point charges (i.e., Dirac delta functions) by which charges are mapped to the grid for a multigrid (<code>mg-manual</code>), <code>mg-auto</code>), <code>mg-para</code>) Poisson-Boltzmann calculation.  As we are attempting to model delta functions, the support (domain) of these discretized charge distributions is always a function of the grid spacing. The syntax for this command is:</p>
	<p><code>chgm {flag}</code>where <code>flag</code> is a text string that specifies the type of discretization:</p>
	<p style="margin-left:30px;">
		<code>sp10</code> Traditional trilinear interpolation (linear splines). The charge is mapped onto the nearest-neighbor grid points. Resulting potentials are very sensitive to grid spacing, length, and position.<br />
		<code>sp12</code> Cubic B-spline discretization. The charge is mapped onto the nearest- and next-nearest-neighbor grid points. Resulting potentials are somewhat less sensitive (than spl0) to grid spacing, length, and position.<br />
		<code>sp14</code> Quintic B-spline discretization. Similar to spl2, except the charge/multipole is additionally mapped to include next-next-nearest neighbors (125 grid points receive charge density).
	</p>
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

<p style="margin-left:30px;"><code>pot</code> Write out the electrostatic potential in units of k<sub>b</sub>Te<sub>c</sub><sup>-1</sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>atompot</code> Write out the electrostatic potential in units of k<sub>b</sub> T e<sub>c</sub><sup>-1</sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>smol</code> Write out the solvent accessibility defined by the molecular surface definition (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>sspl</code> Write out the spline-based solvent accessibility (see srfm spl2). Values are unitless and range from 0 (inaccessible) to 1 (accessible) (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>vdw</code> Write out the van der Waals-based solvent accessibility (see srfm smol with srad 0.0). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>ivdw</code> Write out the inflated van der Waals-based ion accessibility (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>lap</code> Write out the Laplacian of the potential in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>edens</code> Write out the "energy density" in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>ndens</code>Write out the total mobile ion number density for all ion species in units of M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

\[ \rho(x) = \sum_i^N {\bar{\rho}_i e^{-q_i\phi(x) - V_i (x)}}  \]  </p>

<p style="margin-left:30px;">where M is the number of ionic species, c_i is the bulk concentration of each species, q_i is the charge of each species, \phi is the electrostatic potential, k_B is Boltzmann's constant, and T is the temperature.</p>


<p style="margin-left:30px;"><code>qdens</code>Write out the total mobile charge density for all ion species in units of ec M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

\[ \varrho(x) = \sum_i^N {q_i \bar{\rho}_i e^{-q_i\phi(x) - V_i (x)}}  \]    </p>

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







<h3 id="mgauto">mg-auto: automatically-configured sequential focusing multigrid Posson-Boltzmann calculations</h3>

This multigrid calculation automatically sets up and performs a string of single-point PBE calculations to "focus" on a region of interest (binding site, etc.) in a system. It is basically an automated version of mg-manual designed for easier use. Most users should probably use this version of ELEC.

The following keywords are present in mg-auto ELEC blocks; all keywords are required unless otherwise noted:

<a href="javascript:ReverseDisplay('bcfl2')">bcfl</a>

<div id="bcfl2" style="display:none;">
	<p><code>bcfl {flag}</code> where <code>flag</code> is a text string that identifies the type of conditions to be used:</p>
	<p style="margin-left:30px;"><code>zero</code> "Zero" boundary condition. Dirichlet conditions where the potential at the boundary is set to zero. This condition is not commonly used and can result in large errors if used inappropriately.<br />
		<code>sdh</code> "Single Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a single sphere with a point charge, dipole, and quadrupole. The sphere radius in this model is set to the radius of the biomolecule and the sphere charge, dipole, and quadrupole are set to the total moments of the protein. This condition works best when the boundary is sufficiently far from the biomolecule.<br />
		<code>mdh</code> "Multiple Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a multiple, non-interacting spheres with a point charges. The radii of the non-interacting spheres are set to the atomic radii of and the sphere charges are set to the atomic charges. This condition works better than sdh for closer boundaries but can be very slow for large biomolecules.<br />
		<code>focus</code> "Focusing" boundary condition. Dirichlet condition where the potential at the boundary is set to the values computed by the previous (usually lower-resolution) PB calculation. This is used in sequential focusing performed manually in mg-manual calculations. All of the boundary points should lie within the domain of the previous calculation for best accuracy; if any boundary points lie outside, their values are computed using single Debye-Hückel boundary conditions (see above).<br />
		<code>map</code> Specifying map allows a previously calculated potential map to be used in a new focusing calculation. A typical scenario is using the same coarse grid for multiple focusing calculations. A potential map can be written once from a coarse grid calculation, then used in subsequent runs to bypass the need to recalculate the coarse grid. See the READ keyword pot and the attached example files for its use.  NOTE:  this functionality is only available in the current developmental release of APBS.</p>
</div>


<a href="javascript:ReverseDisplay('elec-keyword-calcenergy2')">calcenergy</a>

<div id="elec-keyword-calcenergy2" style="display:none;">

<p>This optional keyword controls electrostatic energy output from a Poisson-Boltzmann calculation.</p>

<div class="note info">

<h5>Note</h5>
<p>This option must be used consistently for all calculations that will appear in subsequent PRINT statements. For example, if the statement <code>print energy 1 - 2 end</code> appears in the input file, then both calculations 1 and 2 must have <code>calcenergy</code> keywords present with the same values for <code>flag</code>.</p>

</div>

The syntax is:
{% highlight bash %}
calcenergy { flag }
{% endhighlight %}

<p>where <code>flag</code> is a text string that specifies the types of energy values to be returned:</p>

<p>
<code>no</code> (Deprecated) don't calculate any energies.  This is the same as not including the calcenergy command in the input file.<br />
<code>total</code> Calculate and return total electrostatic energy for the entire molecule.  For the nonlinear PB equation, this energy is:<br />
\[ G[\phi] = \int_\Omega {\biggl ({\frac{\epsilon(x)}{2}}(\nabla \phi(x))^2 + \rho(x) \phi(x) + \sum_i{c _i \bigl ( e^{-q _i \phi(x)-V(x)}-1} \bigr ) \biggr )}dx \]
where epsilon is the dielectric function, rho is the charge distribution, phi is the electrostatic potential, c_i is the concentration of each mobile ionic species i, q_i is the charge of each species, V is the steric solute-ion exclusion potential.  For the linearized PB equation, this energy is calculated by the integral<br />
\[ G[\phi] = \frac{1}{2} \int _\Omega \rho (x) \phi(x) {dx} \]  
<code>comps</code> Calculate and return total electrostatic energy for the entire molecule as well as electrostatic energy components for each atom.
</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-calcforce2')">calcforce</a>

<div id="elec-keyword-calcforce2" style="display:none;">

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
The possible outputs from calcforce are:
{% highlight bash %}
tot n -- total force for atom n
qf  n -- fixed charge force for atom n
db  n -- dielectric boundary force for atom n
ib  n -- ionic boundary force for atom n
{% endhighlight %}
The values will be printed in three columns which correspond to the x, y, and z component of the force vector.
</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('chg2m')">chgm</a>

<div id="chgm2" style="display:none;">
	<p>Specify the method by which the biomolecular point charges (i.e., Dirac delta functions) by which charges are mapped to the grid for a multigrid (<code>mg-manual</code>), <code>mg-auto</code>), <code>mg-para</code>) Poisson-Boltzmann calculation.  As we are attempting to model delta functions, the support (domain) of these discretized charge distributions is always a function of the grid spacing. The syntax for this command is:</p>
	<p><code>chgm {flag}</code>where <code>flag</code> is a text string that specifies the type of discretization:</p>
	<p style="margin-left:30px;">
		<code>sp10</code> Traditional trilinear interpolation (linear splines). The charge is mapped onto the nearest-neighbor grid points. Resulting potentials are very sensitive to grid spacing, length, and position.<br />
		<code>sp12</code> Cubic B-spline discretization. The charge is mapped onto the nearest- and next-nearest-neighbor grid points. Resulting potentials are somewhat less sensitive (than spl0) to grid spacing, length, and position.<br />
		<code>sp14</code> Quintic B-spline discretization. Similar to spl2, except the charge/multipole is additionally mapped to include next-next-nearest neighbors (125 grid points receive charge density).
	</p>
</div>



<a href="javascript:ReverseDisplay('dime')">dime</a>

<div id="dime" style="display:none;">
	<p>Specifies the number of grid points per processor for grid-based discretization. Its syntax is:</p>
	<p><code>dime {nx ny nz}</code></p>
	<p>For mg-manual calculations, the arguments are dependent on the choice of nlev by the formula: <code>n = c 2l + 1 + 1</code></p>
	<p>where n is the dime argument, c is a non-zero integer, l is the nlev value. The most common values for grid dimensions are 65, 97, 129, and 161 (they can be different in each direction); these are all compatible with a nlev value of 4. If you happen to pick a "bad" value for the dimensions (i.e., mismatch with nlev), the APBS code will adjust the specified dime downwards to more appropriate values. This means that "bad" values will typically result in lower resolution/accuracy calculations! The arguments for this keyword are:</p>
	<p><code>nx ny nz</code> the (integer) number of grid points in the x-, y-, and z-directions, respectively. NOTE: dime should be interpreted as the number of grid points per processor for all calculations, including mg-para. This interpretation helps manage the amount of memory per-processor -- generally the limiting resource for most calculations.</p>
</div>


<a href="javascript:ReverseDisplay('elec-keyword-etol2')">etol</a>

<div id="elec-keyword-etol2" style="display:none;">

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



<a href="javascript:ReverseDisplay('fgcent')">fgcent</a>

<div id="fgcent" style="display:none;">
	<p>Specify the center of the fine grid (in a focusing calculation) based on a molecule's center or absolute coordinates for mg-para and mg-auto multigrid calculations. The syntax is:</p>
	<p><code>fgcent { mol id | xcent ycent zcent }</code></p>
	<p>where a user can specify <em>either</em></p>
		<p style="margin-left:30px;"><code>mol {id}</code> Center the grid on molecule with integer ID id; as assigned in the READ section of the input file. Molecule IDs are assigned in the order they are read, starting at 1.</p>
	<p><em>or</em> the user can specify</p>
		<p style="margin-left:30px;"><code>xcent ycent zcent</code> Center the grids on the coordinates (floating point numbers in Å) at which the grid is centered. Based on the input molecule PDB coordinate frame.</p>
</div>



<a href="javascript:ReverseDisplay('fglen')">fglen</a>

<div id="fglen" style="display:none;">
	<p>Specifies the fine mesh domain lengths in a multigrid focusing calculation (mg-para or mg-auto); this may be different in each direction. The syntax is:</p>
	<p><code>fglen {xlen ylen zlen}</code></p>
	<p>This should enclose the region of interest in the molecule. The arguments to this command are:</p>
	<p style="margin-left:30px;><code>xlen ylen zlen</code> Grid lengths (floating point numbers) in the x-, y-, and z-directions in Å.</p>
</div>



<a href="javascript:ReverseDisplay('elec-keyword-ion2')">ion</a> (Optional)

<div id="elec-keyword-ion2" style="display:none;">

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






<a href="javascript:ReverseDisplay('elec-keyword-lpbe2')">lpbe</a>

<div id="elec-keyword-lpbe2" style="display:none;">

<p>Specifies that the linearized Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
lpbe
{% endhighlight %}

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-mol2')">mol</a>

<div id="elec-keyword-mol2" style="display:none;">

<p>Specify the molecule for which the PBE is to be solved. IDs are based on the order in which molecules are read by <code>READ mol</code> statements, starting from 1.</p>

The syntax is:
{% highlight bash %}
mol {id}
{% endhighlight %}

<p>where <code>id</code> is the integer ID of the molecule for which the Poisson-Boltzmann equation is to be solved.</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-npbe2')">npbe</a>

<div id="elec-keyword-npbe2" style="display:none;">

<p>Specifies that the nonlinear (full) Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
npbe
{% endhighlight %}

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-pdie2')">pdie</a>

<div id="elec-keyword-pdie2" style="display:none;">

<p>Specify the dielectric constant of the biomolecule. This is usually a value between 2 to 20, where lower values consider only electronic polarization and higher values consider additional polarization due to intramolecular motion.</p>

The syntax is:
{% highlight bash %}
pdie {diel}
{% endhighlight %}

where <code>die1</code> is the floating point value of the unitless biomolecular dielectric constant.

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-sdens2')">sdens</a>

<div id="elec-keyword-sdens2" style="display:none;">

<p>Specify the number of grid points per square-angstrom to use in discontinuous surface constructions (e.g., molecular surface and solvent-accessible surfaces). Ignored when srad is 0.0 or srfm is spl2. There is a direct correlation between this value used for the surface sphere density, the accuracy of the surface calculations, and the APBS calculation time. The APBS "suggested" value is 10.0.</p>

The syntax is:
{% highlight bash %}
sdens {density}
{% endhighlight %}

<p>where <code>density</code> is the floating point surface sphere density (in grid points/Å<sup>2</sup>).</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-sdie2')">sdie</a>

<div id="elec-keyword-sdie2" style="display:none;">

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

<p>Specifies that the size-modified PBE should be solved as described by Chu V, et al Biophys J, <strong>93</strong>(9):3202-9, 2007 (doi:10.1529/biophysj.106.099168). The syntax is:</p>

<p><code>smpbe vol { spacing } size { num }</code></p>

<p>The parameter <code>spacing</code> is a floating point number in Ångstroms used specify the lattice spacing such that each lattice site has a volume equal to <code>spacing</code><sup>3</sup>.  The parameter <code>num</code> controls the relative size of the ions (in Ångstroms) such that each lattice site can contain a single ion of volume <code>spacing</code><sup>3</sup> or <code>num</code> ions of volume spacing<sup>3</sup>/size.
</p>

<hr />

</div>







<a href="javascript:ReverseDisplay('elec-keyword-srad2')">srad</a>

<div id="elec-keyword-srad2" style="display:none;">

<p>Specify the radius of the solvent molecules; this parameter is used to define the dielectric function for probe-based dielectric definitions (see srfm). This value is usually set to 1.4 Å for water. This keyword is ignored when any of the spline-based surfaces are used (e.g., spl2, see srfm), since they are not probe-based.</p>

The syntax for this command is:
{% highlight bash %}
srad {radius}
{% endhighlight %}

<p>where <code>radius</code> is the floating point solvent radius (in Å).</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-srfm2')">srfm</a>

<div id="elec-keyword-srfm2" style="display:none;">

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





<a href="javascript:ReverseDisplay('elec-keyword-swin2')">swin</a>

<div id="elec-keyword-swin2" style="display:none;">

<p>Specify the size of the support (i.e., the rate of change) for spline-based surface definitions (see srfm). Usually 0.3 Å.</p>

The syntax is:
{% highlight bash %}
swin {win}
{% endhighlight %}

<p>where <code>win</code> where win is a floating point number for the spline window width (in Å). Note that, per the analysis of Nina, Im, and Roux (doi:10.1016/S0301-4622(98)00236-1), the force field parameters (radii) generally need to be adjusted if the spline window is changed.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-temp2')">temp</a>

<div id="elec-keyword-temp2" style="display:none;">

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



<a href="javascript:ReverseDisplay('elec-keyword-useaqua2')">useaqua</a>

<div id="elec-keyword-useaqua2" style="display:none;">

<p>This keyword enables experimental support for Aqua, a verison of the Michael Holst> group FEtk PMG multigrid library optimized by Patrice Koehl for improved memory usage and speed when solving the Poisson-Boltzmann equation. This keyword is temporary and will eventually disappear as Aqua becomes the default multigrid solver (mg-manual, mg-auto, mg-para) for APBS.</p>

The syntax is:
{% highlight bash %}
useaqua
{% endhighlight %}

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-usemap2')">usemap</a>

<div id="elec-keyword-usemap2" style="display:none;">

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






<a href="javascript:ReverseDisplay('elec-keyword-usemesh2')">usemesh</a>

<div id="elec-keyword-usemesh2" style="display:none;">

<p>Specify the external finite element mesh to be used in the finite element Poisson-Boltzmann calculation (fe-manual). These must have been input via an earlier <code>READ</code> mesh statement. </p>

The syntax is:
{% highlight bash %}
usemesh {id}
{% endhighlight %}

<p>where <code>id</code> is an integer ID specifying the particular map read in with <code>READ</code> mesh. These IDs are assigned sequentially, starting from 1, and incremented independently for each mesh read by APBS.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-write2')">write</a>

<div id="elec-keyword-write2" style="display:none;">

<p>This controls the output of scalar data calculated during the Poisson-Boltzmann run. This keyword can be repeated several times to provide various types of data output from APBS.</p>

The syntax is:
{% highlight bash %}
write {type} {format} {stem}
{% endhighlight %}

<p><code>type</code> A string indicating what type of data to output:</p>

<p style="margin-left:30px;"><code>charge</code> Write out the biomolecular charge distribution in units of e<sub>c</sub> (electron charge) per Å<sup>3</sup>. (multigrid only).</p>

<p style="margin-left:30px;"><code>pot</code> Write out the electrostatic potential in units of k<sub>b</sub>Te<sub>c</sub><sup>-1</sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>atompot</code> Write out the electrostatic potential in units of k<sub>b</sub> T e<sub>c</sub><sup>-1</sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>smol</code> Write out the solvent accessibility defined by the molecular surface definition (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>sspl</code> Write out the spline-based solvent accessibility (see srfm spl2). Values are unitless and range from 0 (inaccessible) to 1 (accessible) (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>vdw</code> Write out the van der Waals-based solvent accessibility (see srfm smol with srad 0.0). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>ivdw</code> Write out the inflated van der Waals-based ion accessibility (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>lap</code> Write out the Laplacian of the potential in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>edens</code> Write out the "energy density" in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>ndens</code>Write out the total mobile ion number density for all ion species in units of M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

\[ \rho(x) = \sum_i^N {\bar{\rho}_i e^{-q_i\phi(x) - V_i (x)}}  \]  </p>

<p style="margin-left:30px;">where M is the number of ionic species, c_i is the bulk concentration of each species, q_i is the charge of each species, \phi is the electrostatic potential, k_B is Boltzmann's constant, and T is the temperature.</p>


<p style="margin-left:30px;"><code>qdens</code>Write out the total mobile charge density for all ion species in units of ec M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

\[ \varrho(x) = \sum_i^N {q_i \bar{\rho}_i e^{-q_i\phi(x) - V_i (x)}}  \]  </p>

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




<a href="javascript:ReverseDisplay('elec-keyword-writemat2')">writemat</a>

<div id="elec-keyword-writemat2" style="display:none;">

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

















<h3 id="mgdummy">mg-dummy: calculations of surface and charge distribution properties which do not require solution of the PBE</h3>

This type of calculation allows users to write out dielectric, ion-accessibility, and charge distribution, and other types of maps that depend solely on biomolecular geometry. Since these maps depend only on geometry, they can be written out without actually solving the PB equation. The syntax for this command is identical to mg-manual.

<h3 id="mgmanual">mg-manual: manually-configured multigrid Poisson-Boltzmann calculations</h3>

This is a standard single-point multigrid PBE calculation without focusing or additional refinement. The mg-manual calculation offers the most control of parameters to the user. Several of these calculations can be strung together to perform focusing calculations by judicious choice of the bcfl flag; however, the setup of the focusing is not automated as it is in mg-auto and mg-para calculations and therefore this command should primarily be used by more experienced users.

The keywords for this command are all required unless otherwise noted:



<a href="javascript:ReverseDisplay('bcfl3')">bcfl</a>

<div id="bcfl3" style="display:none;">
	<p><code>bcfl {flag}</code> where <code>flag</code> is a text string that identifies the type of conditions to be used:</p>
	<p style="margin-left:30px;"><code>zero</code> "Zero" boundary condition. Dirichlet conditions where the potential at the boundary is set to zero. This condition is not commonly used and can result in large errors if used inappropriately.<br />
		<code>sdh</code> "Single Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a single sphere with a point charge, dipole, and quadrupole. The sphere radius in this model is set to the radius of the biomolecule and the sphere charge, dipole, and quadrupole are set to the total moments of the protein. This condition works best when the boundary is sufficiently far from the biomolecule.<br />
		<code>mdh</code> "Multiple Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a multiple, non-interacting spheres with a point charges. The radii of the non-interacting spheres are set to the atomic radii of and the sphere charges are set to the atomic charges. This condition works better than sdh for closer boundaries but can be very slow for large biomolecules.<br />
		<code>focus</code> "Focusing" boundary condition. Dirichlet condition where the potential at the boundary is set to the values computed by the previous (usually lower-resolution) PB calculation. This is used in sequential focusing performed manually in mg-manual calculations. All of the boundary points should lie within the domain of the previous calculation for best accuracy; if any boundary points lie outside, their values are computed using single Debye-Hückel boundary conditions (see above).<br />
		<code>map</code> Specifying map allows a previously calculated potential map to be used in a new focusing calculation. A typical scenario is using the same coarse grid for multiple focusing calculations. A potential map can be written once from a coarse grid calculation, then used in subsequent runs to bypass the need to recalculate the coarse grid. See the READ keyword pot and the attached example files for its use.  NOTE:  this functionality is only available in the current developmental release of APBS.</p>
</div>



<a href="javascript:ReverseDisplay('elec-keyword-calcenergy3')">calcenergy</a>

<div id="elec-keyword-calcenergy3" style="display:none;">

<p>This optional keyword controls electrostatic energy output from a Poisson-Boltzmann calculation.</p>

<div class="note info">

<h5>Note</h5>
<p>This option must be used consistently for all calculations that will appear in subsequent PRINT statements. For example, if the statement <code>print energy 1 - 2 end</code> appears in the input file, then both calculations 1 and 2 must have <code>calcenergy</code> keywords present with the same values for <code>flag</code>.</p>

</div>

The syntax is:
{% highlight bash %}
calcenergy { flag }
{% endhighlight %}

<p>where <code>flag</code> is a text string that specifies the types of energy values to be returned:</p>

<p>
<code>no</code> (Deprecated) don't calculate any energies.  This is the same as not including the calcenergy command in the input file.<br />
<code>total</code> Calculate and return total electrostatic energy for the entire molecule.  For the nonlinear PB equation, this energy is:<br />
\[ G[\phi] = \int_\Omega {\biggl ({\frac{\epsilon(x)}{2}}(\nabla \phi(x))^2 + \rho(x) \phi(x) + \sum_i{c _i \bigl ( e^{-q _i \phi(x)-V(x)}-1} \bigr ) \biggr )}dx \]
where epsilon is the dielectric function, rho is the charge distribution, phi is the electrostatic potential, c_i is the concentration of each mobile ionic species i, q_i is the charge of each species, V is the steric solute-ion exclusion potential.  For the linearized PB equation, this energy is calculated by the integral<br />
\[ G[\phi] = \frac{1}{2} \int _\Omega \rho (x) \phi(x) {dx} \]  
<code>comps</code> Calculate and return total electrostatic energy for the entire molecule as well as electrostatic energy components for each atom.
</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-calcforce3')">calcforce</a>

<div id="elec-keyword-calcforce3" style="display:none;">

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
The possible outputs from calcforce are:
{% highlight bash %}
tot n -- total force for atom n
qf  n -- fixed charge force for atom n
db  n -- dielectric boundary force for atom n
ib  n -- ionic boundary force for atom n
{% endhighlight %}
The values will be printed in three columns which correspond to the x, y, and z component of the force vector.
</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('chgm3')">chgm</a>

<div id="chgm3" style="display:none;">
	<p>Specify the method by which the biomolecular point charges (i.e., Dirac delta functions) by which charges are mapped to the grid for a multigrid (<code>mg-manual</code>), <code>mg-auto</code>), <code>mg-para</code>) Poisson-Boltzmann calculation.  As we are attempting to model delta functions, the support (domain) of these discretized charge distributions is always a function of the grid spacing. The syntax for this command is:</p>
	<p><code>chgm {flag}</code>where <code>flag</code> is a text string that specifies the type of discretization:</p>
	<p style="margin-left:30px;">
		<code>sp10</code> Traditional trilinear interpolation (linear splines). The charge is mapped onto the nearest-neighbor grid points. Resulting potentials are very sensitive to grid spacing, length, and position.<br />
		<code>sp12</code> Cubic B-spline discretization. The charge is mapped onto the nearest- and next-nearest-neighbor grid points. Resulting potentials are somewhat less sensitive (than spl0) to grid spacing, length, and position.<br />
		<code>sp14</code> Quintic B-spline discretization. Similar to spl2, except the charge/multipole is additionally mapped to include next-next-nearest neighbors (125 grid points receive charge density).
	</p>
</div>





<a href="javascript:ReverseDisplay('elec-keyword-etol3')">etol</a>

<div id="elec-keyword-etol3" style="display:none;">

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

<a href="javascript:ReverseDisplay('fgcent3')">fgcent</a>

<div id="fgcent3" style="display:none;">
	<p>Specify the center of the fine grid (in a focusing calculation) based on a molecule's center or absolute coordinates for mg-para and mg-auto multigrid calculations. The syntax is:</p>
	<p><code>fgcent { mol id | xcent ycent zcent }</code></p>
	<p>where a user can specify <em>either</em></p>
		<p style="margin-left:30px;"><code>mol {id}</code> Center the grid on molecule with integer ID id; as assigned in the READ section of the input file. Molecule IDs are assigned in the order they are read, starting at 1.</p>
	<p><em>or</em> the user can specify</p>
		<p style="margin-left:30px;"><code>xcent ycent zcent</code> Center the grids on the coordinates (floating point numbers in Å) at which the grid is centered. Based on the input molecule PDB coordinate frame.</p>
<hr />
</div>



<a href="javascript:ReverseDisplay('fglen3')">fglen</a>

<div id="fglen3" style="display:none;">
	<p>Specifies the fine mesh domain lengths in a multigrid focusing calculation (mg-para or mg-auto); this may be different in each direction. The syntax is:</p>
	<p><code>fglen {xlen ylen zlen}</code></p>
	<p>This should enclose the region of interest in the molecule. The arguments to this command are:</p>
	<p style="margin-left:30px;><code>xlen ylen zlen</code> Grid lengths (floating point numbers) in the x-, y-, and z-directions in Å.</p>
<hr />
</div>


<a href="javascript:ReverseDisplay('gcent')">gcent</a>

<div id="gcent" style="display:none;">
	<p>Specify the center of the grid based on a molecule's center or absolute coordinates for a mg-manual multigrid calculation. The syntax is:</p>
	<p><code>gcent { mol id | xcent ycent zcent }</code></p>
	<p>where the user can specify <em>either</em>:</p>
		<p style="margin-left:30px;><code>mol {id}</code> Center the grid on molecule with integer ID id; as assigned in the READ section. Molecule IDs are assigned in the order they are read, starting at 1.</p>
	<p><em>or</em> the user can specify:</p>
		<p style="margin-left:30px;><code>xcent ycent zcent</code> The floating point coordinates (in Å) at which the grid is centered. Based on the PDB coordinate frame.</p>
<hr />
</div>


<a href="javascript:ReverseDisplay('glen')">glen</a>

<div id="glen" style="display:none;">
	<p>Specify the mesh domain lengths for multigrid mg-manual calculations.  These lengths may be different in each direction. The syntax is:</p>
	<p><code>glen {xlen ylen zlen}</code></p>
	<p>where <code>xlen ylen zlen</code> are the (floating point) grid lengths in the x-, y-, and z-directions (respectively) in Å.</p>
<hr />
</div>


<a href="javascript:ReverseDisplay('grid')">grid</a>

<div id="grid" style="display:none;">
	<p>Specify the mesh grid spacings for multigrid mg-manual calculations.  This value may be different in each direction. The syntax is:</p>
	<p><code>grid {hx hy hz}</code></p>
	<p>where <code>hx hy hz</code> are the (floating point) grid spacings in the x-, y-, and z-directions (respectively) in Å.</p>
<hr />
</div>




<a href="javascript:ReverseDisplay('elec-keyword-ion3')">ion</a> (Optional)

<div id="elec-keyword-ion3" style="display:none;">

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




<a href="javascript:ReverseDisplay('elec-keyword-lpbe3')">lpbe</a>

<div id="elec-keyword-lpbe3" style="display:none;">

<p>Specifies that the linearized Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
lpbe
{% endhighlight %}

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-mol3')">mol</a>

<div id="elec-keyword-mol3" style="display:none;">

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

	<p>Specify the depth of the multilevel hierarchy used in the mg-manual multigrid solver. See dime for a discussion of how nlev relates to grid dimensions. The syntax is:</p>
	<p><code>nlev {lev}</code></p>
	<p>where <code>lev</code> is an integer indicating the desired depth of the multigrid hierarchy.</p>
	<hr />
</div>


<a href="javascript:ReverseDisplay('elec-keyword-npbe3')">npbe</a>

<div id="elec-keyword-npbe3" style="display:none;">

<p>Specifies that the nonlinear (full) Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
npbe
{% endhighlight %}

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-pdie3')">pdie</a>

<div id="elec-keyword-pdie3" style="display:none;">

<p>Specify the dielectric constant of the biomolecule. This is usually a value between 2 to 20, where lower values consider only electronic polarization and higher values consider additional polarization due to intramolecular motion.</p>

The syntax is:
{% highlight bash %}
pdie {diel}
{% endhighlight %}

where <code>die1</code> is the floating point value of the unitless biomolecular dielectric constant.

<hr />

</div>

<a href="javascript:ReverseDisplay('elec-keyword-sdens3')">sdens</a>

<div id="elec-keyword-sdens3" style="display:none;">

<p>Specify the number of grid points per square-angstrom to use in discontinuous surface constructions (e.g., molecular surface and solvent-accessible surfaces). Ignored when srad is 0.0 or srfm is spl2. There is a direct correlation between this value used for the surface sphere density, the accuracy of the surface calculations, and the APBS calculation time. The APBS "suggested" value is 10.0.</p>

The syntax is:
{% highlight bash %}
sdens {density}
{% endhighlight %}

<p>where <code>density</code> is the floating point surface sphere density (in grid points/Å<sup>2</sup>).</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-sdie3')">sdie</a>

<div id="elec-keyword-sdie3" style="display:none;">

<p>Specify the dielectric constant of the solvent. Bulk water at biologically-relevant temperatures is usually modeled with a dielectric constant of 78-80.</p>

The syntax is:
{% highlight bash %}
sdie {diel}
{% endhighlight %}

<p>where <code>die1</code> is a floating point number representing the solvent dielectric constant (unitless).</p>

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-smpbe3')">smpbe</a>

<div id="elec-keyword-smpbe3" style="display:none;">

<p>Specifies that the size-modified PBE should be solved as described by Chu V, et al Biophys J, <strong>93</strong>(9):3202-9, 2007 (doi:10.1529/biophysj.106.099168). The syntax is:</p>

<p><code>smpbe vol { spacing } size { num }</code></p>

<p>The parameter <code>spacing</code> is a floating point number in Ångstroms used specify the lattice spacing such that each lattice site has a volume equal to <code>spacing</code><sup>3</sup>.  The parameter <code>num</code> controls the relative size of the ions (in Ångstroms) such that each lattice site can contain a single ion of volume <code>spacing</code><sup>3</sup> or <code>num</code> ions of volume spacing<sup>3</sup>/size.
</p>

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-srad3')">srad</a>

<div id="elec-keyword-srad3" style="display:none;">

<p>Specify the radius of the solvent molecules; this parameter is used to define the dielectric function for probe-based dielectric definitions (see srfm). This value is usually set to 1.4 Å for water. This keyword is ignored when any of the spline-based surfaces are used (e.g., spl2, see srfm), since they are not probe-based.</p>

The syntax for this command is:
{% highlight bash %}
srad {radius}
{% endhighlight %}

<p>where <code>radius</code> is the floating point solvent radius (in Å).</p>

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-srfm3')">srfm</a>

<div id="elec-keyword-srfm3" style="display:none;">

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



<a href="javascript:ReverseDisplay('elec-keyword-swin3')">swin</a>

<div id="elec-keyword-swin3" style="display:none;">

<p>Specify the size of the support (i.e., the rate of change) for spline-based surface definitions (see srfm). Usually 0.3 Å.</p>

The syntax is:
{% highlight bash %}
swin {win}
{% endhighlight %}

<p>where <code>win</code> where win is a floating point number for the spline window width (in Å). Note that, per the analysis of Nina, Im, and Roux (doi:10.1016/S0301-4622(98)00236-1), the force field parameters (radii) generally need to be adjusted if the spline window is changed.</p>

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-temp3')">temp</a>

<div id="elec-keyword-temp3" style="display:none;">

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



<a href="javascript:ReverseDisplay('elec-keyword-useaqua3')">useaqua</a> (Optional)

<div id="elec-keyword-useaqua3" style="display:none;">

<p>This keyword enables experimental support for Aqua, a verison of the Michael Holst> group FEtk PMG multigrid library optimized by Patrice Koehl for improved memory usage and speed when solving the Poisson-Boltzmann equation. This keyword is temporary and will eventually disappear as Aqua becomes the default multigrid solver (mg-manual, mg-auto, mg-para) for APBS.</p>

The syntax is:
{% highlight bash %}
useaqua
{% endhighlight %}

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-usemap3')">usemap</a> (Optional)

<div id="elec-keyword-usemap3" style="display:none;">

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





<a href="javascript:ReverseDisplay('elec-keyword-write3')">write</a>

<div id="elec-keyword-write3" style="display:none;">

<p>This controls the output of scalar data calculated during the Poisson-Boltzmann run. This keyword can be repeated several times to provide various types of data output from APBS.</p>

The syntax is:
{% highlight bash %}
write {type} {format} {stem}
{% endhighlight %}

<p><code>type</code> A string indicating what type of data to output:</p>

<p style="margin-left:30px;"><code>charge</code> Write out the biomolecular charge distribution in units of e<sub>c</sub> (electron charge) per Å<sup>3</sup>. (multigrid only).</p>

<p style="margin-left:30px;"><code>pot</code> Write out the electrostatic potential in units of k<sub>b</sub>Te<sub>c</sub><sup>-1</sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>atompot</code> Write out the electrostatic potential in units of k<sub>b</sub> T e<sub>c</sub><sup>-1</sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>smol</code> Write out the solvent accessibility defined by the molecular surface definition (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>sspl</code> Write out the spline-based solvent accessibility (see srfm spl2). Values are unitless and range from 0 (inaccessible) to 1 (accessible) (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>vdw</code> Write out the van der Waals-based solvent accessibility (see srfm smol with srad 0.0). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>ivdw</code> Write out the inflated van der Waals-based ion accessibility (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>lap</code> Write out the Laplacian of the potential in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>edens</code> Write out the "energy density" in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>ndens</code>Write out the total mobile ion number density for all ion species in units of M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

\[ \rho(x) = \sum_i^N {\bar{\rho}_i e^{-q_i\phi(x) - V_i (x)}}  \]  </p>

<p style="margin-left:30px;">where M is the number of ionic species, c_i is the bulk concentration of each species, q_i is the charge of each species, \phi is the electrostatic potential, k_B is Boltzmann's constant, and T is the temperature.</p>


<p style="margin-left:30px;"><code>qdens</code>Write out the total mobile charge density for all ion species in units of ec M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

\[ \varrho(x) = \sum_i^N {q_i \bar{\rho}_i e^{-q_i\phi(x) - V_i (x)}}  \]   </p>

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




<a href="javascript:ReverseDisplay('elec-keyword-writemat3')">writemat</a>

<div id="elec-keyword-writemat3" style="display:none;">

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








<h3 id="mgpara">mg-para: automatically-configured parallel focusing multigrid Poisson-Boltzman calculations</h3>

This calculation closely resembles mg-auto in syntax. However, it is designed to perform electrostatics calculations on systems in a parallel focusing fashion. The keywords for this type of calculation are all required unless otherwise noted:




<a href="javascript:ReverseDisplay('elec-keyword-async')">async</a>

<div id="elec-keyword-async" style="display:none;">

<p>This optional keyword allows users to perform the different tasks in a mg-para parallel run asynchronously. Specifically, a processor masquerades as process rank in a parallel focusing run and provides output (data files and energies/forces) appropriate to that processor's local partition. The user must then assemble the results after all processes complete. First, this option is useful for scheduling on-demand resources: this makes it easy for users to backfill into the available processes in a queue. Second, this option is useful for running on limited resources: this enables users without access to large parallel machines to still perform the same calculations. The syntax is:</p>

<p><code>async { rank }</code></p>

<p>where <code>rank</code> is the integer ID of the particular processor to masquerade as. Processor IDs range from 0 to N-1, where N is the total number of processors in the run (see pdime). Processor IDs are related to their position in the overall grid by p = n<sub>x</sub> n<sub>y</sub> k + n<sub>x</sub> j + i &nbsp;where n<sub>x</sub> is the number of processors in the x-direction, n<sub>y</sub> is the number of processors in the y-direction, n<sub>z</sub> is the number of processors in the z-direction, i is the index of the processor in the x-direction, j is the index of the processor in the y-direction, k is the index of the processor in the z-direction, and p is the overall rank of the processor.</p>

<hr />

</div>



<a href="javascript:ReverseDisplay('bcfl4')">bcfl</a>

<div id="bcfl4" style="display:none;">
	<p><code>bcfl {flag}</code> where <code>flag</code> is a text string that identifies the type of conditions to be used:</p>
	<p style="margin-left:30px;"><code>zero</code> "Zero" boundary condition. Dirichlet conditions where the potential at the boundary is set to zero. This condition is not commonly used and can result in large errors if used inappropriately.<br />
		<code>sdh</code> "Single Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a single sphere with a point charge, dipole, and quadrupole. The sphere radius in this model is set to the radius of the biomolecule and the sphere charge, dipole, and quadrupole are set to the total moments of the protein. This condition works best when the boundary is sufficiently far from the biomolecule.<br />
		<code>mdh</code> "Multiple Debye-Hückel" boundary condition. Dirichlet condition where the potential at the boundary is set to the values prescribed by a Debye-Hückel model for a multiple, non-interacting spheres with a point charges. The radii of the non-interacting spheres are set to the atomic radii of and the sphere charges are set to the atomic charges. This condition works better than sdh for closer boundaries but can be very slow for large biomolecules.<br />
		<code>focus</code> "Focusing" boundary condition. Dirichlet condition where the potential at the boundary is set to the values computed by the previous (usually lower-resolution) PB calculation. This is used in sequential focusing performed manually in mg-manual calculations. All of the boundary points should lie within the domain of the previous calculation for best accuracy; if any boundary points lie outside, their values are computed using single Debye-Hückel boundary conditions (see above).<br />
		<code>map</code> Specifying map allows a previously calculated potential map to be used in a new focusing calculation. A typical scenario is using the same coarse grid for multiple focusing calculations. A potential map can be written once from a coarse grid calculation, then used in subsequent runs to bypass the need to recalculate the coarse grid. See the READ keyword pot and the attached example files for its use.  NOTE:  this functionality is only available in the current developmental release of APBS.</p>
</div>



<a href="javascript:ReverseDisplay('elec-keyword-calcenergy4')">calcenergy</a>

<div id="elec-keyword-calcenergy4" style="display:none;">

<p>This optional keyword controls electrostatic energy output from a Poisson-Boltzmann calculation.</p>

<div class="note info">

<h5>Note</h5>
<p>This option must be used consistently for all calculations that will appear in subsequent PRINT statements. For example, if the statement <code>print energy 1 - 2 end</code> appears in the input file, then both calculations 1 and 2 must have <code>calcenergy</code> keywords present with the same values for <code>flag</code>.</p>

</div>

The syntax is:
{% highlight bash %}
calcenergy { flag }
{% endhighlight %}

<p>where <code>flag</code> is a text string that specifies the types of energy values to be returned:</p>

<p>
<code>no</code> (Deprecated) don't calculate any energies.  This is the same as not including the calcenergy command in the input file.<br />
<code>total</code> Calculate and return total electrostatic energy for the entire molecule.  For the nonlinear PB equation, this energy is:<br />
\[ G[\phi] = \int_\Omega {\biggl ({\frac{\epsilon(x)}{2}}(\nabla \phi(x))^2 + \rho(x) \phi(x) + \sum_i{c _i \bigl ( e^{-q _i \phi(x)-V(x)}-1} \bigr ) \biggr )}dx \]
where epsilon is the dielectric function, rho is the charge distribution, phi is the electrostatic potential, c_i is the concentration of each mobile ionic species i, q_i is the charge of each species, V is the steric solute-ion exclusion potential.  For the linearized PB equation, this energy is calculated by the integral<br />
\[ G[\phi] = \frac{1}{2} \int _\Omega \rho (x) \phi(x) {dx} \]  
<code>comps</code> Calculate and return total electrostatic energy for the entire molecule as well as electrostatic energy components for each atom.
</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-calcforce4')">calcforce</a>

<div id="elec-keyword-calcforce4" style="display:none;">

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
The possible outputs from calcforce are:
{% highlight bash %}
tot n -- total force for atom n
qf  n -- fixed charge force for atom n
db  n -- dielectric boundary force for atom n
ib  n -- ionic boundary force for atom n
{% endhighlight %}
The values will be printed in three columns which correspond to the x, y, and z component of the force vector.
</p>

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-cgcent')">cgcent</a>

<div id="elec-keyword-cgcent" style="display:none;">

<p>Specify the center of the coarse grid (in a focusing calculation) based on a molecule's center or absolute coordinates for a multigrid (mg-manual, mg-auto, mg-para) Poisson-Boltzmann calculation. The syntax is:</p>

<p><code>cgcent { mol id | xcent ycent zcent }</code></p>

	<p>The arguments for this keyword are <em>either</em></p>
		<p style="margin-left:30px;"><code>mol id</code> Center the grid on molecule with integer ID id; as assigned in the READ section with a READ mol command.</p>
	<p><em>or</em></p>
		<p style="margin-left:30px;"><code>xcent ycent zcent</code> Center the grid on the (floating point) coordinates (in Å) at which the grid is centered. Based on the PDB coordinate frame.</p>

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-cglen')">cglen</a>

<div id="elec-keyword-cglen" style="display:none;">

<p>Specify the length of the coarse grid (in a focusing calculation) for an automatic multigrid (mg-auto, mg-para) Poisson-Boltzmann calculation.  This may be different in each direction. Its syntax is:</p>

<p><code>cglen {xlen ylen zlen}</code></p>

	<p>This is the starting mesh, so it should be large enough to complete enclose the biomolecule and ensure that the chosen boundary condition (see bcfl) is appropriate.</p>
	<p><code>xlen ylen zlen</code> Grid lengths (floating point numbers) in the x-, y-, and z-directions in Å.</p>
<hr />
</div>




















<a href="javascript:ReverseDisplay('dime4')">dime</a>

<div id="dime4" style="display:none;">
	<p>Specifies the number of grid points per processor for grid-based discretization. Its syntax is:</p>
	<p><code>dime {nx ny nz}</code></p>
	<p>For mg-manual calculations, the arguments are dependent on the choice of nlev by the formula: <code>n = c 2l + 1 + 1</code></p>
	<p>where n is the dime argument, c is a non-zero integer, l is the nlev value. The most common values for grid dimensions are 65, 97, 129, and 161 (they can be different in each direction); these are all compatible with a nlev value of 4. If you happen to pick a "bad" value for the dimensions (i.e., mismatch with nlev), the APBS code will adjust the specified dime downwards to more appropriate values. This means that "bad" values will typically result in lower resolution/accuracy calculations! The arguments for this keyword are:</p>
	<p><code>nx ny nz</code> the (integer) number of grid points in the x-, y-, and z-directions, respectively. NOTE: dime should be interpreted as the number of grid points per processor for all calculations, including mg-para. This interpretation helps manage the amount of memory per-processor -- generally the limiting resource for most calculations.</p>
</div>


<a href="javascript:ReverseDisplay('elec-keyword-etol4')">etol</a>

<div id="elec-keyword-etol4" style="display:none;">

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



<a href="javascript:ReverseDisplay('fgcent4')">fgcent</a>

<div id="fgcent4" style="display:none;">
	<p>Specify the center of the fine grid (in a focusing calculation) based on a molecule's center or absolute coordinates for mg-para and mg-auto multigrid calculations. The syntax is:</p>
	<p><code>fgcent { mol id | xcent ycent zcent }</code></p>
	<p>where a user can specify <em>either</em></p>
		<p style="margin-left:30px;"><code>mol {id}</code> Center the grid on molecule with integer ID id; as assigned in the READ section of the input file. Molecule IDs are assigned in the order they are read, starting at 1.</p>
	<p><em>or</em> the user can specify</p>
		<p style="margin-left:30px;"><code>xcent ycent zcent</code> Center the grids on the coordinates (floating point numbers in Å) at which the grid is centered. Based on the input molecule PDB coordinate frame.</p>
</div>



<a href="javascript:ReverseDisplay('fglen4')">fglen</a>

<div id="fglen4" style="display:none;">
	<p>Specifies the fine mesh domain lengths in a multigrid focusing calculation (mg-para or mg-auto); this may be different in each direction. The syntax is:</p>
	<p><code>fglen {xlen ylen zlen}</code></p>
	<p>This should enclose the region of interest in the molecule. The arguments to this command are:</p>
	<p style="margin-left:30px;><code>xlen ylen zlen</code> Grid lengths (floating point numbers) in the x-, y-, and z-directions in Å.</p>
</div>



<a href="javascript:ReverseDisplay('elec-keyword-ion4')">ion</a> (Optional)

<div id="elec-keyword-ion4" style="display:none;">

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






<a href="javascript:ReverseDisplay('elec-keyword-lpbe4')">lpbe</a>

<div id="elec-keyword-lpbe4" style="display:none;">

<p>Specifies that the linearized Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
lpbe
{% endhighlight %}

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-mol4')">mol</a>

<div id="elec-keyword-mol4" style="display:none;">

<p>Specify the molecule for which the PBE is to be solved. IDs are based on the order in which molecules are read by <code>READ mol</code> statements, starting from 1.</p>

The syntax is:
{% highlight bash %}
mol {id}
{% endhighlight %}

<p>where <code>id</code> is the integer ID of the molecule for which the Poisson-Boltzmann equation is to be solved.</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-npbe4')">npbe</a>

<div id="elec-keyword-npbe4" style="display:none;">

<p>Specifies that the nonlinear (full) Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
npbe
{% endhighlight %}

<hr />

</div>



<a href="javascript:ReverseDisplay('elec-keyword-pdie4')">pdie</a>

<div id="elec-keyword-pdie4" style="display:none;">

<p>Specify the dielectric constant of the biomolecule. This is usually a value between 2 to 20, where lower values consider only electronic polarization and higher values consider additional polarization due to intramolecular motion.</p>

The syntax is:
{% highlight bash %}
pdie {diel}
{% endhighlight %}

<p>where <code>die1</code> is the floating point value of the unitless biomolecular dielectric constant.</p>
<hr />
</div>




<a href="javascript:ReverseDisplay('elec-keyword-pdime')">pdime</a>

<div id="elec-keyword-pdime" style="display:none;">

<p>Specify the processor array to be used in a parallel focusing (mg-para) calculation. The product npx × npy × npz should be less than or equal to the total number of processors with which APBS was invoked (usually via mpirun). If more processors are provided at invocation than actually used during the run, the extra processors are not used in the calculation. The processors are tiled across the domain in a Cartesian fashion with a specified amount of overlap (see ofrac) between each processor to ensure continuity of the solution. Each processor's subdomain will contain the number of grid points specified by the dime keyword. The syntax is:</p>

<p><code>pdime {npx npy npz}</code></p>

<p>where <code>npx npy npz</code> are  the integer number of processors to be used in the x-, y- and z-directions of the system. For broad spatial support of the splines, every charge included in partition needs to be at least 1 grid space (chgm spl0), 2 grid spaces (chgm spl2), or 3 grid spaces (chgm spl4) away from the partition boundary.</p>
<hr />
</div>




<a href="javascript:ReverseDisplay('elec-keyword-sdens4')">sdens</a>

<div id="elec-keyword-sdens4" style="display:none;">

<p>Specify the number of grid points per square-angstrom to use in discontinuous surface constructions (e.g., molecular surface and solvent-accessible surfaces). Ignored when srad is 0.0 or srfm is spl2. There is a direct correlation between this value used for the surface sphere density, the accuracy of the surface calculations, and the APBS calculation time. The APBS "suggested" value is 10.0.</p>

The syntax is:
{% highlight bash %}
sdens {density}
{% endhighlight %}

<p>where <code>density</code> is the floating point surface sphere density (in grid points/Å<sup>2</sup>).</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('elec-keyword-sdie4')">sdie</a>

<div id="elec-keyword-sdie4" style="display:none;">

<p>Specify the dielectric constant of the solvent. Bulk water at biologically-relevant temperatures is usually modeled with a dielectric constant of 78-80.</p>

The syntax is:
{% highlight bash %}
sdie {diel}
{% endhighlight %}

<p>where <code>die1</code> is a floating point number representing the solvent dielectric constant (unitless).</p>

<hr />

</div>

















<a href="javascript:ReverseDisplay('elec-keyword-smpbe4')">smpbe</a>

<div id="elec-keyword-smpbe4" style="display:none;">

<p>Specifies that the size-modified PBE should be solved as described by Chu V, et al Biophys J, <strong>93</strong>(9):3202-9, 2007 (doi:10.1529/biophysj.106.099168). The syntax is:</p>

<p><code>smpbe vol { spacing } size { num }</code></p>

<p>The parameter <code>spacing</code> is a floating point number in Ångstroms used specify the lattice spacing such that each lattice site has a volume equal to <code>spacing</code><sup>3</sup>.  The parameter <code>num</code> controls the relative size of the ions (in Ångstroms) such that each lattice site can contain a single ion of volume <code>spacing</code><sup>3</sup> or <code>num</code> ions of volume spacing<sup>3</sup>/size.
</p>

<hr />

</div>







<a href="javascript:ReverseDisplay('elec-keyword-srad4')">srad</a>

<div id="elec-keyword-srad4" style="display:none;">

<p>Specify the radius of the solvent molecules; this parameter is used to define the dielectric function for probe-based dielectric definitions (see srfm). This value is usually set to 1.4 Å for water. This keyword is ignored when any of the spline-based surfaces are used (e.g., spl2, see srfm), since they are not probe-based.</p>

The syntax for this command is:
{% highlight bash %}
srad {radius}
{% endhighlight %}

<p>where <code>radius</code> is the floating point solvent radius (in Å).</p>

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-srfm4')">srfm</a>

<div id="elec-keyword-srfm4" style="display:none;">

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





<a href="javascript:ReverseDisplay('elec-keyword-swin4')">swin</a>

<div id="elec-keyword-swin4" style="display:none;">

<p>Specify the size of the support (i.e., the rate of change) for spline-based surface definitions (see srfm). Usually 0.3 Å.</p>

The syntax is:
{% highlight bash %}
swin {win}
{% endhighlight %}

<p>where <code>win</code> where win is a floating point number for the spline window width (in Å). Note that, per the analysis of Nina, Im, and Roux (doi:10.1016/S0301-4622(98)00236-1), the force field parameters (radii) generally need to be adjusted if the spline window is changed.</p>

<hr />

</div>






<a href="javascript:ReverseDisplay('elec-keyword-temp4')">temp</a>

<div id="elec-keyword-temp4" style="display:none;">

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



<a href="javascript:ReverseDisplay('elec-keyword-useaqua4')">useaqua</a> (Optional)

<div id="elec-keyword-useaqua4" style="display:none;">

<p>This keyword enables experimental support for Aqua, a verison of the Michael Holst> group FEtk PMG multigrid library optimized by Patrice Koehl for improved memory usage and speed when solving the Poisson-Boltzmann equation. This keyword is temporary and will eventually disappear as Aqua becomes the default multigrid solver (mg-manual, mg-auto, mg-para) for APBS.</p>

The syntax is:
{% highlight bash %}
useaqua
{% endhighlight %}

<hr />

</div>





<a href="javascript:ReverseDisplay('elec-keyword-usemap4')">usemap</a> (Optional)

<div id="elec-keyword-usemap4" style="display:none;">

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




<a href="javascript:ReverseDisplay('elec-keyword-write4')">write</a>

<div id="elec-keyword-write4" style="display:none;">

<p>This controls the output of scalar data calculated during the Poisson-Boltzmann run. This keyword can be repeated several times to provide various types of data output from APBS.</p>

The syntax is:
{% highlight bash %}
write {type} {format} {stem}
{% endhighlight %}

<p><code>type</code> A string indicating what type of data to output:</p>

<p style="margin-left:30px;"><code>charge</code> Write out the biomolecular charge distribution in units of e<sub>c</sub> (electron charge) per Å<sup>3</sup>. (multigrid only).</p>

<p style="margin-left:30px;"><code>pot</code> Write out the electrostatic potential in units of k<sub>b</sub>Te<sub>c</sub><sup>-1</sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>atompot</code> Write out the electrostatic potential in units of k<sub>b</sub> T e<sub>c</sub><sup>-1</sup>. (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>smol</code> Write out the solvent accessibility defined by the molecular surface definition (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>sspl</code> Write out the spline-based solvent accessibility (see srfm spl2). Values are unitless and range from 0 (inaccessible) to 1 (accessible) (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>vdw</code> Write out the van der Waals-based solvent accessibility (see srfm smol with srad 0.0). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>ivdw</code> Write out the inflated van der Waals-based ion accessibility (see srfm smol). Values are unitless and range from 0 (inaccessible) to 1 (accessible). (multigrid and finite element)</p>

<p style="margin-left:30px;"><code>lap</code> Write out the Laplacian of the potential in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>edens</code> Write out the "energy density" in units of k<sub>B</sub> T e<sub>c</sub><sup>-1</sup> Å<sup>-2</sup>. (multigrid only)</p>

<p style="margin-left:30px;"><code>ndens</code>Write out the total mobile ion number density for all ion species in units of M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

\[ \rho(x) = \sum_i^N {\bar{\rho}_i e^{-q_i\phi(x) - V_i (x)}}  \]  </p>

<p style="margin-left:30px;">where M is the number of ionic species, c_i is the bulk concentration of each species, q_i is the charge of each species, \phi is the electrostatic potential, k_B is Boltzmann's constant, and T is the temperature.</p>


<p style="margin-left:30px;"><code>qdens</code>Write out the total mobile charge density for all ion species in units of ec M. (multigrid only)  The output is calculated according to the formula (for nonlinear PB calculations)<br />

\[ \varrho(x) = \sum_i^N {q_i \bar{\rho}_i e^{-q_i\phi(x) - V_i (x)}}  \]   </p>

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




<a href="javascript:ReverseDisplay('elec-keyword-writemat4')">writemat</a>

<div id="elec-keyword-writemat4" style="display:none;">

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


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    "HTML-CSS": { scale: 95, linebreaks: { automatic: true } }, 
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
  });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>



		