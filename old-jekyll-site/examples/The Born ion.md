---
layout: examples
title: The Born Ion
permalink: /examples/The_Born_ion/
---
<a id="topcall"></a>
One of the canonical examples for polar solvation is the Born ion: a nonpolarizable sphere with a single charge at its center surrounded by an aqueous medium. Consider the transfer of a non-polarizable ion between two dielectrics. In the initial state, the dielectric coefficient inside and outside the ion is $\epsilon\_{\mathrm {in}}$, and in the final state, the dielectric coefficient inside the ion is $\epsilon\_{\mathrm {in}}$ and the dielectric coefficient outside the ion is $\epsilon\_{\mathrm {in}}$ In the absence of external ions, the polar solvation energy of this transfer for this system is given by

\\[ \Delta\_p G\_{\mathrm{Born}}= \frac{q^2}{8\pi\epsilon\_0 a}\left (\frac{1}{\epsilon\_{\mathrm {out}}}-\frac{1}{\epsilon\_{\mathrm {in}}}\right) \\]

where q is the ion charge, a is the ion radius, and the two ε variables denote the two dielectric coefficients. This model assumes zero ionic strength.

Note that, in the case of transferring an ion from vacuum, or where $\epsilon\_{\mathrm {in}} = 1$, the expression becomes

\\[ \Delta\_p G\_{\mathrm{Born}}= \frac{q^2}{8\pi\epsilon\_0 a}\left (\frac{1}{\epsilon\_{\mathrm {out}}}-1\right) \\]

For more information on the Born ion, see slides 24 and 25 of <a href="http://www.poissonboltzmann.org/docs/2008-12_workshop_lecture.pdf">this presentation</a>.


### Setting up and running the calculation

We can setup a PQR file for the Born ion for use with APBS with the contents:
{% highlight bash %}
REMARK  This is an ion with a 3 A radius and a +1 e charge
ATOM      1   I  ION     1 0.000   0.000   0.000  1.00 3.00
{% endhighlight %}
We're interested in performing two APBS calculations for the charging free energies in homogeneous and heterogeneous dielectric coefficients. We'll assume the internal dielectric coefficient is 1 (e.g., a vacuum) and the external dielectric coefficient is 78.54 (e.g., water). for these settings, the polar Born ion solvation energy expression has the form

\\[ \Delta_p G_{\mathrm{Born}} = -691.85 \biggl( \frac{z^2}{R} \biggr) \mathrm {kJ \, A/mol} \\]

where z is the ion charge in electrons and R is the ion size in Å.

This solvation energy calculation can be setup in APBS with the following input file:
{% highlight bash %}
# READ IN MOLECULES
read
	mol pqr born.pqr
end
elec name solv # Electrostatics calculation on the solvated state
	mg-manual # Specify the mode for APBS to run
	dime 97 97 97 # The grid dimensions
	nlev 4 # Multigrid level parameter
	grid 0.33 0.33 0.33 # Grid spacing
	gcent mol 1 # Center the grid on molecule 1
	mol 1 # Perform the calculation on molecule 1
	lpbe # Solve the linearized Poisson-Boltzmann equation
	bcfl mdh # Use all multipole moments when calculating the potential
	pdie 1.0 # Solute dielectric
	sdie 78.54 # Solvent dielectric
	chgm spl2 # Spline-based discretization of the delta functions
	srfm mol # Molecular surface definition
	srad 1.4 # Solvent probe radius (for molecular surface)
	swin 0.3 # Solvent surface spline window (not used here)
	sdens 10.0 # Sphere density for accessibility object
	temp 298.15 # Temperature
	calcenergy total # Calculate energies
	calcforce no # Do not calculate forces
end
elec name ref # Calculate potential for reference (vacuum) state
	mg-manual
	dime 97 97 97
	nlev 4
	grid 0.33 0.33 0.33
	gcent mol 1
	mol 1
	lpbe
	bcfl mdh
	pdie 1.0
	sdie 1.0
	chgm spl2
	srfm mol
	srad 1.4
	swin 0.3
	sdens 10.0
	temp 298.15
	calcenergy total
	calcforce no
end
# Calculate solvation energy
print energy solv - ref end
quit
{% endhighlight %}

Running this example with a recent version of APBS should give an answer of -229.59 kJ/mol which is in good agreement with the -230.62 kJ/mol predicted by the analytic formula above.

**Note** that the Born example above can be easily generalized to other polar solvation energy calculations. For example, ions could be added to the solv ELEC, dielectric constants could be modified, surface definitions could be changed (in both ELEC sections!), or more complicated molecules could be examined. Many of the examples included with APBS (e.g., solv and ionize) also demonstrate solvation energy calculations.

**Note** that, as molecules get larger, it is important to examine the sensitivity of the calculated polar solvation energies with respect to grid spacings and dimensions.

<a data-scroll href="#topcall">top</a>
<hr/>







<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
  });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
































