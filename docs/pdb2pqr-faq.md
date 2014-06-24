---
layout: docs
title: FAQ
prev_section: pdb2pqr-programmers
next_section: apbs-installation
permalink: /docs/pdb2pqr-faq/
---

### Limitations

<p>The following is a list of known limitations with the current version of PDB2PQR. Many of these limitations will be removed/fixed in future releases of the software: the web server is limited to biomolecules with less than 10,000 atoms.</p>

<p>To limit the load on our servers, we currently limit web server submissions to proteins containing fewer than 10,000 atoms.</p>
<ul>
	<li>If you are interested in using PDB2PQR for larger proteins, you are encouraged to download a command line version of PDB2PQR from the homepage.</li>
	<li>Ligands do not change PROPKA pKa predictions. The version of PROPKA we are currently using does not consider ligand effects (H-bonding, charges, etc.) when calculating pKa values. This support will be provided in future versions of PDB2PQR.</li>
	<li>The browser "back" button is not supported. Due to our use of CGI forms, we do not recommend use of your browser "back" button when using PDB2PQR. Links are provided on most pages for navigating the PDB2PQR site.</li>
</ul>
