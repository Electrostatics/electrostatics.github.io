---
layout: examples
title: pKa Calculations
permalink: /examples/pKa_Calculations/
---

<a id="topcall"></a>

This example was prepared in collaboration with David Sept for a biomolecular modeling class.

* <a data-scroll href="#Overview">Overview</a>
* <a data-scroll href="#Amino"> Amino acid model pKa values</a>
* <a data-scroll href="#pKa">pKa values in proteins</a>
* <a data-scroll href="#Continuum">Continuum electrostatics methods for pKa calculations in proteins</a>
* <a data-scroll href="#Examples">Examples</a>

<a id="Overview"></a>
<h3>Overview</h3>
Although pKa calculations may not seem like the most routine applications for demonstrating continuum electrostatics concepts, they have important scientific and teaching value. From a scientific standpoint, pKa values are important determinants of biomolecular (particularly enzymatic) function and can be used to assess functional activity and identify active sites. From a pedagogical perspective, pKa calculations require all of the important continuum electrostatics concepts and therefore serve as a "self-contained" introduction to solvation and binding energies.

This tutorial covers Poisson-Boltzmann methods for determining biomolecule pKa values. Other methods for pKa and titration state determination are given in the PDB2PQR examples. Comparison with PDB2PQR results can provide hours of additional entertainment.

This is a very brief introduction to the concepts behind biomolecular pKas and titration states. More information can be obtained from most biochemistry or biophysics textbooks as well as some of the original articles on pKa evaluation:

* <a href="http://www.ncbi.nlm.nih.gov/pubmed/2271649?dopt=Citation">Bashford D, Karplus M. pKa's of ionizable groups in proteins: Atomic detail from a continuum electrostatic model. Biochemistry. 29 (44), 10219-25, 1990.</a>
* <a href="http://www.ncbi.nlm.nih.gov/pubmed/8672483">Antosiewicz J, McCammon JA, Gilson MK. The determinants of pKas in proteins. Biochemistry. 35 (24), 7819-33, 1996.</a>
* <a href="http://onlinelibrary.wiley.com/doi/10.1002/prot.1053/abstract">Nielsen JE, Vriend G. Optimizing the hydrogen-bond network in Poisson-Boltzmann equation-based pKa calculations. Proteins 43 (4), 403-12, 2001.</a>

Recall that the acid dissociation constant Ka describes the dissocation of an acid into its components

\\[ HA \overset{K\_{\textrm{a}}}\rightleftharpoons H^+ + A^- \\]


where the equilibrium constant  is defined related to the activities of the species:

\\[ K\_{\textrm{a}} = \frac{a\_{\textrm{H}} + a\_{\textrm{A-}}}{a\_{\textrm{HA}}} \\]


which, under conditions of "ideality" (never realized in a biological system...), can be replaced with concentrations to give

\\[ K\_{\textrm{a}}\approx\frac{C\_{\textrm{H}} + C\_{\textrm{A-}}}{C\_{\textrm{HA}}} \\]

You should also recall that chemical equilibrium constants can be related to free energies by

\\[ -RTlnK_{\textrm{a}} = \Delta\_{\textrm{a}} = G\_{\textrm{HA}} - G\_{\textrm{H}} + - G\_{\textrm{A-}} \\]

However, chemists found it easier to use quantities in base-10, therefore this energetic quantity is often referred to as a pKa

\\[ \mathrm p K_a = -\log_{10}{K_a} = -\frac{K_a}{\ln(10)} = \frac{\Delta_a G}{RT \ln(10)} \approx \frac{\Delta_a G}{2.303RT} \\]


<a data-scroll href="#topcall">top</a>

<a id="Amino"></a>
<h3>Amino acid model pKa values</h3>

In many calculations, pKa values are assigned based on model values for amino acid side chains to mimic the reaction
    http://apbs.wustl.edu/MediaWiki/images/8/81/Acid-dissociation-equilibrium-model.png
for an "isolated" amino acid in solution. Some of these model pKa values are given in the following table:

Amino acid  | pKa
------------- | -------------
Arginine  | 13.0
Aspartic acid | 4.0
Cysteine | 8.7
C-terminus | 3.8
Glutamic acid | 4.4
Histidine | 6.3
Lysine | 10.4
N-terminus | 8.0
Tyrosine | 9.6

This data is from Nielsen JE, Vriend G. Optimizing the hydrogen-bond network in Poisson-Boltzmann equation-based pKa calculations. Proteins. 43 (4), 403-12, 2001. As we'll see in the next section, these model values provide the basis for calculating pKa values in proteins.

<a data-scroll href="#topcall">top</a>

<a id="pKa"></a>
<h3>pKa values in proteins</h3>

The role of the model pKa values introduced in the previous sections is to move all the chemical (bond making and breaking) complexity of protonation into the model values. In particular, pKa values in proteins are calculated as pertubations of the model compounds according to the free energy cycles shown below. The pKa for the amino acid in the context of the protein is given by the free energy cycle:

\\[ HA(aq) \overset{^{\Delta_a G_{\mathrm{HAmodel}}}}{\rightarrow} H^+(aq) + A^-(protein)  \\]

\\[ HA(protein) \overset{^{\Delta_a G_{\mathrm{HA}}}}{\rightarrow} H^+(aq) + A^-(aq)  \\]

We are interested in determining the unknown $\Delta\_{a}G\_{\mathrm{HA}}$ from the known model $\Delta\_{a}G\_{\mathrm{HA,model}}$, and the unknown $\Delta_{\mathrm{xfer}}G\_{\mathrm{HA}}$ and $\Delta\_{\mathrm{xfer}}G\_{\mathrm{A}^-}$ according to:

\\[ \Delta\_{\textrm{a}}G\_{\textrm{HA,model}} + \Delta\_{\textrm{xfer}}G\_{\textrm{A\overset{-}}} - \Delta\_{\textrm{xfer}}G\_{\textrm{HA}} - \Delta\_{\textrm{a}}G\_{\textrm{HA}} = 0 \\]

or

\\[ \Delta\_{\textrm{a}}G\_{\textrm{HA}} = \Delta\_{\textrm{a}}G\_{\textrm{HA,model}} - \Delta\_{\textrm{A\overset{-}}} - \Delta\_{\textrm{xfer}}G\_{\textrm{HA}} = 0 \\]

In general, the quantities $\Delta\_{\mathrm{xfer}}G\_{\mathrm{HA}}$ and $\Delta\_{\mathrm{xfer}}G\_{\mathrm{A}^-}$ are obtained from a computational approach. Nearly any free energy calculation method could be used to obtain these energies according to a scheme where the (de)solvation energies of the charged and uncharged amino acids are calculated according to:

<img src="{{site.baseurl}}/img/protein_pka_calc_cycle_cartoon.png">

<a data-scroll href="#topcall">top</a>

<a id="Continuum"></a>
<h3>Continuum electrostatics methods for pKa calculations in proteins</h3>

Although nearly any free energy method could be used to evaluate the energies of transferring the protonated and unprotonated amino acids from solution into the protein environment, continuum electrostatics offer a (usually) satisfying compromise between accuracy and computational efficiency.

The transfer free energies to be calculated, $\Delta\_{\mathrm{xfer}}G\_{\mathrm{HA}}$ and $\Delta\_{\mathrm{xfer}}G\_{\mathrm{A}^-}$, can be determined from Poisson-Boltzmann (PB) energies. In particular, these energies can be calculated as effective “binding energy calculations” similar to those covered in the Binding energies section:

\\[ \Delta\_{\textrm{xfer}}G\_{\textrm{X}} = G\_{\textrm{protein with charged X}} \\] 

\\[ -G\_{\textrm{protein with uncharged X}} - G\_{\textrm{charged X in solution}} \\]

where

* $G_{\mathrm{protein~with~charged~}X}$ is the electrostatic energy of the protein with group X bound and all charges on X set to their normal values
* $G_{\mathrm{protein~with~uncharged~}X}$ is the electrostatic energy of the protein with group X bound and all charges on X set to zero
* $G_{\mathrm{charged~}X\mathrm{~in~solution}}$ is the electrostatic energy of group X in solution with all charges set to their normal values.
* (I think this is failed latex code?)

Note that, as with binding energies, $\Delta\_{\mathrm{xfer}}G\_{X}$ can be evaluated two ways:

* Directly in a PB equation by computing the difference of total electrostatic energies (including self energies) from PB calculations for each of the states. In order for this to work, all conformations/grid positions/charge states must be the same in each PB calculation.
* Indirectly through PB calculations of solvation free energies and Coulomb's law calculations (in a dielectric εp) of electrostatic interaction energies. For a sufficiently fine grid, this method is much more stable.

Both of these methods can be combined, via free energy cycles, to give the desired . However, when care is taken to use the same grids and conformations for all calculations, the direct method using total electrostatic energies is usually the most efficient.

Note that none of the methods discussed above have explicitly allowed for changes in titration state of other groups in the protein during protonation/deprotonation of the acid group of interest. Additionally, none of these methods explicitly provide for conformational changes in the protein coupled to protonation/deprotonation. As such, we are not true pKa values with this method. Instead, we are calculating so-called "intrinsic pKa" values.

<a data-scroll href="#topcall">top</a>

<a id="Examples"></a>
<h3>Examples</h3>

We currently provide a <a href="{{site.baseurl}}/examples/Lysozyme_pKa_example/">lysozyme intrinsic pKa example</a> to illustrate these principles.

<a data-scroll href="#topcall">top</a>


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}  
  });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
