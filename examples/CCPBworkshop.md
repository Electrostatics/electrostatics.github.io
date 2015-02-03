---
layout: examples
title: CCPB workshop
permalink: /examples/CCPBworkshop/
---

<a id="topcall"></a>
This documentation was prepared for a workshop sponsored by the Collaborative Computational Project for Biomolecular Simulation (CCPB) held at the University of York on 9 January 2009 in conjunction with the Biomolecular Simulation 2009 conference. It was presented by Nathan Baker and Kaihsu Tai.

* <a data-scroll href="#CCPB">CCPB workshop tutorials</a>
	* <a data-scroll href="#CCPBover">Overview</a>
	* <a data-scroll href="#CCPBLectures">Lectures</a>
	* <a data-scroll href="#CCPBPracticals">Practicals</a>
		* <a href="#details">Technical details</a>
			* <a data-scroll href="#CCPBAPBS">APBS</a>
			* <a data-scroll href="#CCPBPDB2PQR">PDB2PQR</a>
			* <a data-scroll href="#CCPBVMD">VMD</a>
			* <a data-scroll href="#CCPBLinux">Linux miscellany</a>			
	* <a data-scroll href="#BTIBasics">The Basics</a>	
        * <a data-scroll href="#CCPBPBaseDB2PQR">PDB2PQR</a>
        * <a data-scroll href="#CCPBBaseAPBS">APBS</a>
        * <a data-scroll href="#CCPBadvance">Advanced Topics</a>
			
            
<a id="CCPBover"></a>
<h3>Overview</h3>

This workshop is designed to introduce the basic concepts and tools associated with computational electrostatics and solvation modeling in biomolecular contexts. Given the biases of the presenters and time constraints, the workshop focuses primarily on using the APBS and PDB2PQR software packages for Poisson and Poisson-Boltzmann electrostatics calculations.
The schedule for this workshop is:

------------- | -------------
0900-0930	| Registration and coffee
0930-1030	| Lecture: basic biomolecular solvation
1030-1200	| Practical: using APBS and PDB2PQR
1200-1300	| Lunch
1300-1400	| Lecture: biomolecular solvation applications
1400-1530	| Practical: applying biomolecular solvation calculations
1530-1545	| Coffee
1545-1645	| Discussion: your applications
1645-1700	| Wrap-up

<a data-scroll href="#topcall">Click here to return to the top of the page</a>
<hr/>

<a id="CCPBLectures"></a>
<h3> Lectures </h3>

* <a href="{{site.baseurl}}/docs/2008-12_workshop_handouts.pdf/">Workshop handouts</a>
* <a href="{{site.baseurl}}/docs/2008-12_workshop_lecture.pdf/">Workshop full lecture</a>
* <a href="{{site.baseurl}}/docs/2008-12_workshop_lecture.mov/">Workshop lecture Quicktime movie</a>

<a id="CCPBPracticals"></a>
<h3>Practicals</h3>
<a id="topcall"></a>

<a id="details"></a> 

#### Technical details

<a id="CCPBAPBS"></a>
<h5>APBS</h5>
* The full APBS distribution should be available from /biol/programs/apbs
* The main APBS executable (apbs) should be in your path.
* Other APBS tools should be share subdirectory of the APBS distribution.

<a id="CCPBAPBS"></a>
<h5>PDB2PQR</h5>

The full PDB2PQR distribution should be avalable from /biol/programs/pdb2pqr-1.4.0


<a id="CCPBVMD"></a>
<h5>VMD</h5>
* When launching VMD, you may need to enable the main menu by typing "menu main on" from the VMD console.
* On these workstations, VMD apparently displays some of the isocontours with obnoxious white regions. You can fix this by changing the material type of the isocontour in the Graphical Representations window. Sorry for the inconvenience.

<a id="CCPBLinux"></a>
<h5>Linux miscellany</h5>
* The browser Firefox is the icon on the top menu with a mouse around a globe. Another browser (for KDE fans) is Konqueror, available at Applications → Internet.
* You can open a terminal by right-clicking on the Desktop background. Alternatively, to get a terminal (console) window, click the top menu on Applications → System Tools → Terminal (or Konsole if you are a KDE fan). 
* The workstations run tcsh shell by default; however, some of the tutorial assumes the use of bash for some portions. You can enable bash simply by typing bash from the Terminal command line.

<a data-scroll href="#topcall">Click here to return to the top of the page</a>
<hr/>

<a id="BTIBasics"></a>
<h3>The basics</h3>

<a id="CCPBPBaseDB2PQR"></a>
<h5>PDB2PQR</h5>

PDB2PQR was designed to facilitate Poisson-Boltzmann calculations, so we will start by working through the features and capabilities of this software in the context of biomolecular solvation and electrostatics. This material is covered in the PDB2PQR tutorial which we will cover in the first part of this practical.

<a id="CCPBBaseAPBS"></a>
<h5>APBS</h5>

APBS is a tool for the calculation of biomolecular solvation using a Poisson-Boltzmann electrostatic model and a simple model for nonpolar solvation. More information about this software can be found at the APBS homepage and in the <a href="{{site.baseurl}}/docs/apbs-overview/">APBS user guide</a> .

This portion of the workshop will introduce biomolecular solvation calculations and APBS in a series of simple steps based on answers to the following questions:

* <a href="{{site.baseurl}}/docs/structures-ready/" >How do I get my structures ready for electrostatics calculations?</a>
* <a href="{{site.baseurl}}/docs/apbs-others/" >How do I visualize the electrostatic potential around my biomolecule?</a>
* <a href="{{site.baseurl}}/examples/Solvation_energies/" >How do I calculate a solvation energy?</a>
* <a href="{{site.baseurl}}/examples/binding_energies/" >How do I calculate a binding energy?</a>

Additional APBS examples can be found in the APBS distribution and elsewhere on this wiki.

<a data-scroll href="#topcall">Click here to return to the top of the page</a>
<hr/>

<a id="CCPBadvance"></a>
<h3>Advanced topics</h3>

Each of these topics will be briefly introduced in the workshop. However, due to time limitations, you will need to choose one specific lab to work on during the practical sessions:

* <a href="http://en.wikiversity.org/wiki/Poisson%E2%80%93Boltzmann_profile_for_an_ion_channel" >Ion channel solvation and electrostatics</a>
* <a href="{{site.baseurl}}/examples/potentials_of_mean_force/" >The polar solvation potential of mean force for a helix in a dielectric slab membrane</a>
* <a href="{{site.baseurl}}/examples/pKa_Calculations/" >pKa calculations</a>
* <a href="{{site.baseurl}}/examples/Protein-Rna_Tutorial/">Ionic Strength Dependence of Peptide-RNA Interactions</a>

You may also be interested in more information on <a href="{{site.baseurl}}/examples/parallel_execution_for_large_problems/">parallel electrostatics calculations</a> as well as web services-based electrostatics calculations for systems which are too large for some computers.

<a data-scroll href="#topcall">Click here to return to the top of the page</a>
<hr/>