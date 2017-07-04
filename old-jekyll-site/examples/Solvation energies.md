---
layout: examples
title: Solvation Energies
permalink: /examples/Solvation_energies/
---

* <a data-scroll href="#Solv">Solvation free energy cycle</a>
* <a data-scroll href="#Polar">Polar solvation</a>
* <a data-scroll href="#Apol"> Apolar solvation</a>
* <a data-scroll href="#Examples">Examples</a>

Solvation energies are usually decomposed into a free energy cycle as shown in the free energy cycle below. Note that such solvation energies often performed on fixed conformations; as such, they are more correctly called "potentials of mean force". More details on using APBS for the polar and nonpolar portions of such a cycle are given in the following sections.

<a id="Solv"></a>
<h3>Solvation free energy cycle</h3>

Our model solvation free energy cycle is shown here

<img src="{{site.baseurl}}/img/apbs_sol_eng.png">

This cycle incorporates several processes into the solvation energy (step 1). Step 2 indicates charging of the solute in solution (e.g., inhomogeneous dielectric, ions present). Step 3 indicates the introduction of attractive solute-solvent dispersive interaction interactions (e.g., an integral of Weeks-Chandler-Andersen interactions over the solvent-accessible volume). Step 4 indicates the introduction of repulsive solute-solvent interaction (e.g., cavity formation). Steps 5 and 6 are basically null steps although they could be used to offset unwanted energies added in Steps 3 and 4 above. Finally, Step 6 represents the charging of the solute in a vacuum or homogeneous dielectric environment in the absence of mobile ions.

<a id="Polar"></a>
<h3>Polar solvation</h3>

The full free energy cycle is usually decomposed into polar and nonpolar parts. The polar portion is usually represented by the charging energies in Steps 2 and 6:

\\[ \Delta_p G = \Delta_2 G - \Delta_6 G \\]


Energies returned from APBS electrostatics calculations are charging free energies. Therefore, to calculate the polar contribution to the solvation free energy, we simply need to setup two calculations corresponding to Steps 2 and 6 in the free energy cycle. Note that the electrostatic charging free energies returned by APBS include self-interaction terms. These are the energies of a charge distribution interacting with itself. Such self-interaction energies are typically very large and extremely sensitive to the problem discretization (grid spacing, location, etc.). Therefore, it is very important that the two calculations in Steps 2 and 6 are performed with identical grid spacings, lengths, and centers, in order to ensure appropriate matching (or "cancellation") of self-energy terms.

<a id="Apol"></a>
<h3>Apolar solvation</h3>

Referring back to the solvation free energy cycle, the nonpolar solvation free energy is usually represented by the energy changes in Steps 3 through 5:
 
\\[ \Delta_n G = (\Delta_3 G - \Delta_5 G) + \Delta_4 G \\]


where Step 4 represents the energy of creating a cavity in solution and Steps 3-5 is the energy associated with dispersive interactions between the solute and solvent. There are many possible choices for modeling this nonpolar solvation process. APBS implements a relatively general model described by <a href="http://www.pnas.org/content/103/22/8331">Wagoner and Baker (PNAS 2006)</a> and references therein. The implementation and invocation of this model is described in more detail in the <a href="{{site.baseurl}}/docs/apbs-overview/">APBS user guide</a>.
Our basic model for the cavity creation term (Step 4) is motivated by scaled particle theory and has the form

\\[ \Delta_4 G = pV + \gamma A  \\]

where  is the solvent pressure (press keyword in the <a href="{{site.baseurl}}/docs/apbs-overview/">APOLAR input file section</a>), V is the solute volume, $\gamma$ is the solvent surface tension (gamma keyword in the <a href="{{site.baseurl}}/docs/apbs-overview/">APOLAR input file section</a>), and A is the solute surface area.

Our basic model for the dispersion terms (Steps 3 and 5) follow a Weeks-Chandler-Anderson framework as proposed by Levy, Zhang, and Gallicchio <a href="http://onlinelibrary.wiley.com/doi/10.1002/jcc.10045/abstract">(J Comput Chem, 2002)</a>:
  
\\[ \Delta_3 G - \Delta_5 G = \overset{-} \rho \int_\omega u^{(att)}(y)\theta(y)dy \\]



where $\overline{\rho}$ is the bulk solvent density (bconc keyword in the <a href="{{site.baseurl}}/docs/apbs-overview/">APOLAR input file section</a>), $\Omega$ is the problem domain, $u^{\mathrm{(att)}}(y)$ is the attractive dispersion interaction between the solute and the solvent at point y with dispersive Lennard-Jones parameters specified in APBS parameter files, and $\theta(y)$ describes the solvent accessibility of point y.

The ability to independently adjust press, gamma, and bconc means that the general nonpolar solvation model presented above can be easily adapted to other popular nonpolar solvation models. For example, setting press and bconc to zero yields a typical solvent-accessible surface area model.

Unlike the Born ion, there are no good simple examples for demonstrating these types of nonpolar calculations. APBS includes several examples of calculations using the apolar model above. Interested readers should examine the alkanes apolar examples provided with APBS.


<a id="Examples"></a>
<h3>Examples</h3>

Additional solvation energy calculations are provided below:

<a href="{{site.baseurl}}/examples/The_Born_ion/" target="BLANK">The Born ion</a>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
  });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>





