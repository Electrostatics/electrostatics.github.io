---
layout: examples
title: APBS Binding Energies
permalink: /examples/apbs_binding_energies/
---

<a id="topcall"></a>

<h1>Binding Energies</h1>

In general, implicit solvent models are used to calculation the contribution of solvation to binding free energies. Additional binding free energy contributions (molecular mechanics energies, entropic changes, etc.) must be calculated separately and are not discussed in this tutorial. One exception is the inclusion of intermolecular Coulombic interactions; we'll discuss how these can be calculated in APBS below.

\\[ \Delta_3 G - \Delta_5 G = \overset{-} \rho \int_\omega u^{(att)}(y)\theta(y)dy \\]

* <a data-scroll href="#free">Free Energy Cycle</a>
* <a data-scroll href="#GenBind">General Binding Energy Calculations</a>
	* <a data-scroll href="#SolCon">Solvation Contribution to Binding</a>
	* <a data-scroll href="#CoulCon">Coulombic Contribution to Binding</a>
* <a data-scroll href="#ObtainLig">Obtaining Ligand Parameters</a>
* <a data-scroll href="#BindEX">Binding Energy Examples</a>


<a id="free"></a>
<h3> Free Energy Cycle </h3>

Our framework for calculating solvation contributions to binding free energies is shown in the figure below.

<img src="{{site.baseurl}}/img/apbs_bind_eng.png">

This binding free energy cycle illustrates binding in terms of transfer free energies from a homogeneous dielectric environment (where interactions are described by Coulomb's law) to an inhomogeneous dielectric environment with differing internal (green) and external (cyan) dielectric constants. The binding (dissociation) free energy is depicted in Step 3.
The binding free energy is given by

\\[\Delta<sub>\textrm{bind}</sub>\textbf{G}= -\Delta<sub>3</sub>\textbf{G}=\Delta<sub>4</sub>\textbf{G}-\Delta<sub>1</sub>\textbf{G}-\Delta<sub>2</sub>\textbf{G}\\]

The following sections provide more detail on calculating individual terms of this equation.

<a data-scroll href="#topcall">top</a>
<hr/>

<a id="GenBind"></a>
<h3> General Binding Energy Calculations </h3>

The most general method for calculating binding free energies divides the binding process up into solvation and Coulombic components:

\Delta \Delta<sub>\textrm{bind}</sub>\textbf{G}= \Delta \Delta<sub>\textrm{solv}</sub>\textbf{G} + \Delta \Delta<sub>\textrm{coul}</sub>\textbf{G} 

As mentioned above, this framework neglects the numerous other mechanical and entropic components actually involved in the binding process. The calculation of these two electrostatic/solvation components with APBS is described in the following sections.

<a data-scroll href="#topcall">top</a>
<hr/>

<a id="SolCon"></a>
<h3> Solvation Contribution to Binding </h3>

If we're just interested in calculating the solvation contributions to binding (steps 4 and 2 in the binding free energy cycle), then we simply need to follow the instructions from the "How do I calculate a solvation energy?" section for the complex and isolated components. The solvation energy contribution to the binding is then given by

EQUATION HERE

This solvation energy contribution can be decomposed into polar and nonpolar parts as outlined in the "How do I calculate a solvation energy?" section.

<a data-scroll href="#topcall">top</a>
<hr/>

<a id="CoulCon"></a>
<h3> Coulombic Contribution to Binding </h3>

To complete the binding free energy cycle, we need to add intermolecular Coulombic contributions to the solvation energy change upon binding to get the total electrostatic/solvent contribution to the binding free energy. In particular, we're interested in the change in Coulombic electrostatic energy upon binding, as given by

EQUATION HERE

Each of the  quantities in this equation is the sum of pairwise Coulombic interactions between all atoms in the molecule (or complex) for a particular uniform dielectric. In order to combine these Coulombic binding energies with the solvation energies described above, we need to make sure consistent dielectric constants are used. In particular, Coulombic interactions should be calculated using the same uniform dielectric constant as the reference state of the solvation energy above. For example, if solvation energies are calculated for transferring a protein from a homogeneous medium with uniform dielectric of  to an inhomogeneous medium with internal dielectric \epsilon_{\mathrm{in}} and external dielectric \epsilon_{\mathrm{out}}, then Coulombic energies should be calculated using a dielectric of \epsilon_{\mathrm{in}}. The APBS accessory program tools/manip/coulomb was created to help with the calculation of these individual per-molecule Coulombic energies. Given a PQR file as input, the tools/manip/coulomb program calculates Coulombic energies for a vacuum dielectric (e.g., a uniform dielectric of 1). If the reference dielectric is , then all energies returned by tools/manip/coulomb need to be divided by \epsilon_{\mathrm{in}}.

<a data-scroll href="#topcall">top</a>
<hr/>

<a id="ObtainLig"></a>
<h3> Obtaining Ligand Parameters </h3>

All of the discussion above assumes that the necessary charge and radius parameters are available for all molecules involved in the binding process. PDB2PQR can now (as of version 1.2.0) parameterize ligands, thanks to new features developed in collaboration with the Jens Nielsen group.

<a data-scroll href="#topcall">top</a>
<hr/>

<a id="BindEX"></a>
<h3> Binding Energy Examples </h3>

There are several binding energy examples provided with the APBS distribution in the examples directory. The following online tutorials also cover binding energies:

* <a href="{{site.baseurl}}/examples/Protein-Rna_Tutorial/" target="BLANK">Ionic strength dependence of peptide-RNA interactions</a>

* <a href="{{site.baseurl}}/examples/potentials_of_mean_force/" target="BLANK">The polar solvation potential of mean force for a helix in a dielectric slab membrane</a>

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