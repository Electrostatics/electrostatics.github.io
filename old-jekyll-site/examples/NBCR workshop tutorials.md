---
layout: examples
title: NBCR workshop
permalink: /examples/NBCR_workshop_tutorials/
---


* <a href="#overview">Overview</a>
* <a href="#lectures">Lectures</a>
* <a href="#practicals">Practicals</a>
	* <a href="#details">Technical details</a>
		* <a href="#apbs">APBs</a>
		* <a href="#pdb2pqr">PDB2PQR</a>
		* <a href="#vmd">VMD</a>
		* <a href="#pymol">PyMol</a>
	* <a href="#basics">The basics</a>
		* <a href="#basicpdb">PDB2PQR</a>
		* <a href="#basicapbs">APBS</a>
	* <a href="#topics">Advanced topics</a>

<a id="overview"></a>

### Overview

This workshop is designed to introduce the basic concepts and tools associated with computational electrostatics and solvation modeling in biomolecular contexts. Given the biases of the presenter and time constraints, the workshop focuses primarily on using the APBS and PDB2PQR software packages for Poisson and Poisson-Boltzmann electrostatics calculation with the following content:

<a id="lectures"></a>

### Lectures

* Basic continuum electrostatics and solvation:  [PDF](https://docs.google.com/file/d/0B0YGKkcX_NyBMTRlYmU1OTYtMDNlNS00OWIwLTgzZjQtZWVhYTAxMDZhMjAx/edit?ddrp=1&pli=1&hl=en#), [Quicktime](https://docs.google.com/file/d/0B0YGKkcX_NyBNjc3NDk5MzgtZWJmYy00OWZhLWEwNjItMDViOTBkYmQ3NjZl/edit?ddrp=1&pli=1&hl=en#)
* Current research questions in continuum electrostatics and solvation

<a id="practicals"></a>

### Practicals

The first session of these practicals are designed to introduce the basic concepts associated with electrostatics and solvation calculations using APBS and PDB2PQR. More advanced topics using these tools are introduced in the second session.

<a id="details"></a> 

#### Technical details

<a id="apbs"></a>

##### APBS

* Materials from the full APBS distribution should be available from [the APBS github repository](https://github.com/Electrostatics/apbs-pdb2pqr)
* The main APBS executable [could /](https://github.com/Electrostatics/apbs-pdb2pqr) should be in your path.
* Other [APBS tools](https://github.com/Electrostatics/apbs-pdb2pqr/tree/master/apbs/tools) should be tools/ subdirectory of the APBS distribution

<a id="pdb2pqr"></a>

##### PDB2PQR

* The full PDB2PQR distribution (pre-release version 2.0.0) should be available from /usr/local/src/pdb2pqr-2.0.0

<a id="vmd"></a>

##### VMD

* VMD (vmd) should be in your path.

<a id="pymol"></a>

##### PyMOL

* PyMOL (pymol) should be in your path.

<a id="basics"></a>

#### The basics

<a id="basicpdb"></a>

##### PDB2PQR

PDB2PQR was designed to facilitate Poisson-Boltzmann calculations, so we will start by working through the features and capabilities of this software in the context of biomolecular solvation and electrostatics. This material is covered in the <a href="{{site.baseurl}}/examples/home/">PDB2PQR tutorial</a> which we will cover in the first part of this practical.

<a id="basicapbs"></a>

##### APBS

APBS is a tool for the calculation of biomolecular solvation using a Poisson-Boltzmann electrostatic model and a simple model for nonpolar solvation. More information about this software can be found in the <a href="{{site.baseurl}}/docs/apbs-overview/">APBS user guide</a> and in the rest of this website.
This portion of the workshop will introduce biomolecular solvation calculations and APBS in a series of simple steps based on answers to the following questions:

* <a href="{{site.baseurl}}/docs/structures-ready/" >How do I get my structures ready for electrostatics calculations?</a>
* <a href="{{site.baseurl}}/docs/apbs-others/" >How do I visualize the electrostatic potential around my biomolecule?</a>
* <a href="{{site.baseurl}}/examples/Solvation_energies/" >How do I calculate a solvation energy?</a>
* <a href="{{site.baseurl}}/examples/binding_energies/" >How do I calculate a binding energy?</a>
*  
Additional APBS examples can be found in the APBS distribution and elsewhere on this wiki.

<a id="topics"></a>

#### Advanced topics

Each of these topics will be briefly introduced in the workshop. However, due to time limitations, you will need to choose one specific lab to work on during the practical sessions:

* <a href="http://en.wikiversity.org/wiki/Poisson%E2%80%93Boltzmann_profile_for_an_ion_channel" >Ion channel solvation and electrostatics</a>
* <a href="{{site.baseurl}}/examples/potentials_of_mean_force/" >The polar solvation potential of mean force for a helix in a dielectric slab membrane</a>
* <a href="{{site.baseurl}}/examples/pKa_Calculations/" >pKa calculations</a>
* <a href="{{site.baseurl}}/examples/Protein-Rna_Tutorial/">Ionic Strength Dependence of Peptide-RNA Interactions</a>


You may also be interested in more information on <a href="{{site.baseurl}}/examples/parallel_execution_for_large_problems/" >parallel electrostatics calculations</a> as well as web services-based electrostatics calculations for systems which are too large for some computers.
