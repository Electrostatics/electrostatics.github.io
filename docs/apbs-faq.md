---
layout: docs
title: FAQ
prev_section: apbs-programmers
next_section: apbs-utilities
permalink: /docs/apbs-faq/
---


<style>.section-nav {display:none;}</style>



This tutorial is designed as a "how to" document to get users acquainted with computational electrostatics calculations using APBS. In order to perform the provided examples, you will need the latest version of APBS. Other requirements are listed in the individual sections.
Note that many of the examples in this tutorial can also be run through Opal web-based services. More information is available in the APBS user guide.

This document is under continual construction and revision to provide up-to-date and timely examples. Many of the topics covered in the incomplete sections are also demonstrated in the examples/ directory provided with the APBS distribution.  If you have a question that isn't answered here, please visit the APBS-users mailing list. After you've looked for the answer to your question in the archive, please post it to the mailing list.

Frequently Asked Questions

- [How do I calculate a binding energy?](#binding-energy)
- [How do I calculate a pKa?](#calculate-pka)
- [How do I calculate a solvation energy?](#calculate-energy)
- [How do I calculate solvation forces?](#calculate-forces)
- [How do I get my structures ready for electrostatics calculations?](#structures)
- [How do I model the inhomogeneous environment of a membrane?](#membrane)
- [How do I run a calculation that's too big for my computer?](#mycomputer-calculation)
- [How do I run my calculations on someone else's computer?](#othercomputer-calculation)
- [How do I use APBS with my external simulation software?](#simulation-software)
- [How do I visualize the electrostatic potential?](#elecrostatic-potential)
- [What are the sources of error in my calculation?](#calculation-error)
- [What are the units of electrostatic potential?](#units-potential)
- [What does the message "WARNING! Unusually large potential values detected on the focusing boundary!" mean?](#warning-message)
- [What is FEtk?](#fetk)
- [What is focusing?](#focusing)
- [What is MALOC?](#maloc)
- [What is Opal?](#opal)
- [What is PMG?](#pmg)


<h4 id="binding-energy">How do I calculate a binding energy?</h4>

This topic is discussed in detail in the [Binding energies](/examples/binding_energies/) section.


<h4 id="calculate-pka">How do I calculate a pka?</h4>


<h4 id="calculate-energy">How do I calculate a solvation energy?</h4>
APBS provides force calculations for both polar and nonpolar solvation following the same procedures used in the "<a href="http://www.poissonboltzmann.org/apbs/frequently-asked-questions/how-do-i-calculate-a-solvation-energy">How do I calculate a solvation energy?</a>" section. In general, forces can be obtained by modifying input files used for solvation energy calculations to include calcforce total (for total forces on the entire solute) or calcforce comps to obtain detailed force information for each atom.  See the polar <a href="http://www.poissonboltzmann.org/apbs/user-guide/running-apbs/input-files/elec-input-file-section/elec-keywords/cac">calcforce</a> and apolar <a href="http://www.poissonboltzmann.org/apbs/user-guide/running-apbs/input-files/apolar-input-file-section/apolar-keywords/calcforce">calcforce</a> documentation.  For polar solvation forces, it is important to note that, like solvation energy calculations, "self-interaction" terms must be removed.


<h4 id="calculate-forces">How do I calculate solvation forces?</h4>


<h4 id="structures">How do I get my structures ready for electrostatics calculations?</h4>


<h4 id="membrane">How do I model the inhomogeneous environment of a membrane?</h4>


<h4 id="mycomputer-calculation">How do I run a calculation that's too big for my computer?</h4>


<h4 id="othercomputer-calculation">How do I run my calculations on someone else's computer?</h4>
There are many cases where it is inconvenient to run calculations on your own computer: your calculation may require more resources (memory, etc.) than available on your system, you may have many calculations to run, etc. There are two primary mechanisms for running APBS on external resources: the APBS Opal client and the PDB2PQR web interface.
<h4 id="simulation-software">How do I use APBS with my external simulation software?</h4>
Robert Konecny (McCammon group) has developed the iAPBS package which provides a C/C++/FORTRAN interface to APBS for use with AMBER, NAMD, and CHARMM. More information is available from the iAPBS homepage.

APBS also links against developmental versions of the TINKER software package. Public versions of TINKER with APBS support should be available soon from http://dasher.wustl.edu/tinker/.


<h4 id="electrostatic-potential">How do I visualize the electrostatic potential?</h4>


<h4 id="calculation-error">What are the sources of error in my calculation?</h4>


<h4 id="units-potential">What are the units of electrostatic potential?</h4>
As outlined in the user guide, there are many different ways to visualize the electrostatic potential as calculated by APBS.  We provide detailed examples for several ways to both calculate and visualize the potential in the same setting.


<h4 id="warning-message">What does the message "WARNING! Unusually large potential values detected on the focusing boundary!" mean?</h4>


<h4 id="fetk">What is FEtk?</h4>


<h4 id="focusing">What is focusing?</h4>


<h4 id="maloc">What is MALOC?</h4>


<h4 id="opal">What is Opal?</h4>


<h4 id="pmg">What is PMG?</h4>
