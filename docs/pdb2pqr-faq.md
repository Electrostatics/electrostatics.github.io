---
layout: docs
title: FAQ
prev_section: pdb2pqr-programmers
next_section: apbs-installation
permalink: /docs/pdb2pqr-faq/
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




<style>.section-nav {display:none;}</style>



<a href="javascript:ReverseDisplay('limitations')">Known Limitations</a>

<div id="limitations" style="display:none;">
	<p>The following is a list of known limitations with the current version of PDB2PQR. Many of these limitations will be removed/fixed in future releases of the software: the web server is limited to biomolecules with less than 10,000 atoms.</p>
	<p>To limit the load on our servers, we currently limit web server submissions to proteins containing fewer than 10,000 atoms.</p>
	<ul>
		<li>If you are interested in using PDB2PQR for larger proteins, you are encouraged to download a command line version of PDB2PQR from the homepage.</li>
		<li>Ligands do not change PROPKA pKa predictions. The version of PROPKA we are currently using does not consider ligand effects (H-bonding, charges, etc.) when calculating pKa values. This support will be provided in future versions of PDB2PQR.</li>
		<li>The browser "back" button is not supported. Due to our use of CGI forms, we do not recommend use of your browser "back" button when using PDB2PQR. Links are provided on most pages for navigating the PDB2PQR site.</li>
	</ul>
</div>

<a href="javascript:ReverseDisplay('radius-parameters')">Can I add my own charge and radius parameters to PDB2PQR?</a>


<div id="radius-parameters" style="display:none;">
	<p>Yes; there are two ways to add your own parameters to PDB2PQR:</p>

	<h4>Adding a few additional parameters to an existing forcefield</h4>
	<p>If you are just adding the parameters of a few residues and atoms to an existing forcefield (e.g., AMBER), you can open the forcefield data file (dat/AMBER.DAT) directly and add your parameters. After the parameter addition, save the force field data file (dat/AMBER.DAT) with your changes. You should also update the corresponding .names file (dat/AMBER.names) if your added residue or atom naming scheme is different from the PDB2PQR canonical naming scheme.</p>

	<h4>Adding an entirely new forcefield.</h4>
	<p>If you are adding a new forcefield to PDB2PQR, then you will need to follow the instructions below:</p>
	<ol>
		<li>
			Provide two files:<br />
			<ul>
				<li>Your forcefield data file (e.g., myff.DAT).</li><li>If your atom naming scheme of the forcefield is different from the PDB2PQR canonical naming scheme, then you will also need to provide a names files (myff.names). It is recommended to build your own forcefield data file and names file based on existing .DAT and .names file formats. For more information on the XML format used in .names files, please refer to the XML file format documentation.</li>
			</ul>
		</li>
		<li>
			After finishing your forcefield data file and names file, these can be used with either the command line or the web server versions of PDB2PQR:
			<ul>
				<li>For command line execution:
					<ul><li>Locate your PDB2PQR distribution and place the forcefield and names files in the dat/ directory.</li><li>On PDB2PQR command line version, run: python pdb2pqr.py [options] --ff=myff {path} {output-path}</li></ul>
				</li>
			</ul>
		</li>
		<li>
				For the web server, select "User-defined forcefield" radio button, then specify your user-defined data file and names file. Select other options when needed, and then click "Submit".
		</li>
	</ol>
</div>


<a href="javascript:ReverseDisplay('forcefield-specific-residue')">Can PDB2PQR output create a PQR file using forcefield-specific residue and atom names?</a>

<div id="forcefield-specific-residue" style="display:none;">
	<p>Yes, using the <code>--ffout</code> flag with the command-line version of the code or by checking the appropriate box in the web interface. For patch-based forcefields a single residue might have different residue names. Additionally, some forcefield residue names might have 4 letters instead of the standard 3 letters, yielding columns that merge together: this will likely cause errors when used with APBS unless the resulting PQR file is cleaned up to add whitespace.</p>
</div>


<a href="javascript:ReverseDisplay('pdf-file-specific-format')">Does the input PDB file need to be in a specific format?</a>

<div id="pdf-file-specific-format" style="display:none;">
	<p>Ideally all input PDB files would be in standard PDB Format. Since this format assigns information to specific columns, if this information is not present (e.g., in whitespace delimited files), then PDB2PQR may give strange results.</p>
</div>


<a href="javascript:ReverseDisplay('add-functionality')">How do I add my own functionality to PDB2PQR?</a>

<div id="add-functionality" style="display:none;">
	<p>PDB2PQR version 1.1.0 introduced the <code>extensions</code> directory which allows users to incorporate custom operations into the PDB2PQR workflow.</p>
</div>


<a href="javascript:ReverseDisplay('licensing')">How is PDB2PQR licensed?</a>

<div id="licensing" style="display:none;">
	<p>PDB2PQR is covered under the <a href="http://opensource.org/licenses/bsd-license.php">BSD License</a>, which basically means you can copy it, change it, use subsets of it, redistribute it, etc.; however, you need to give credit to the original source and the original portion of the code must remain under the BSD License. The PROPKA and PDB2PKA packages are also available under the BSD License. <a href="../pdb2pqr-license/">View the license.</a></p>
</div>


<a href="javascript:ReverseDisplay('protonation-state')">I already know the protonation state of a residue. How can I make PDB2PQR aware of it?</a>

<div id="protonation-state" style="display:none;">
<p>DB2PQR has the ability to recognize certain protonation states and keep them fixed during optimization. To use this feature manually rename the residue name in the PDB file as follows:</p>
	<ul>
		<li>Neutral ASP: ASH</li>
		<li>Negative CYS: CYM</li>
		<li>Neutral GLU: GLH</li>
		<li>Neutral HIS: HIE/HID/HSD/HSE</li>
		<li>Positive HIS: HIP/HSP</li>
		<li>Neutral LYS: LYN</li>
		<li>Negative TYR: TYM</li>
	</ul>
</div>


<a href="javascript:ReverseDisplay('warning-unable-to-assign-charges')">What causes the following warning: "WARNING: PDB2PQR was unable to assign charges to the following atoms"?

<div id="warning-unable-to-assign-charges" style="display:none;">
	<p>This message usually occurs when atoms belonging to ligands or other residues are not found in the forcefield data file. As a conversion utility PDB2PQR is unable to assign charges and radii when they are not available in the forcefield - thus this warning message will occur for most ligands unless a MOL2 file is provided for the ligand with the --ligand option. Occasionally this message will occur in error for a standard amino acid residue where an atom or residue may be misnamed.</p>
	<p>Some of the protonation states derived from the [PROPKA]] results are not supported in the requested forcefield and thus PDB2PQR is unable to get charges and radii for that state. PDB2PQR currently supports the following states as derived from PROPKA:</p>
	<table>
		<tr>
			<th>Protonation State</th>
			<th>AMBER Support</th>
			<th>CHARMM Support</th>
			<th>PARSE Support</th>
		</tr>
		<tr>
			<td>Neutral N-Terminus</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Neutral C-Terminus</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td></tr>
		<tr>
			<td>Neutral ARG</td>
			<td>No</td>
			<td>No</td>
			<td>No</td>
		</tr>
		<tr>
			<td>Neutral ASP</td>
			<td>Yes†</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Negative CYS</td>
			<td>Yes†</td>
			<td>No</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Neutral GLU</td>
			<td>Yes†</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr><td>Neutral HIS</td>
			<td>Yes</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Neutral LYS</td>
			<td>Yes†</td>
			<td>No</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Negative TYR</td>
			<td>No</td>
			<td>No</td>
			<td>Yes</td>
		</tr>
	</table>
	<p>† Only if residue is not a terminal residue; if the residue is terminal it will not be set to this state.</p>
</div>



<a href="javascript:ReverseDisplay('force-fields-available')">What force fields or parameter sets are available?</a>

<div id="force-fields-available" style="display:none;">
	<p>PDB2PQR currently has built in support for AMBER 94, CHARMM 27, and PARSE. You may also supply a user-defined forcefield.</p>
</div>


<a href="javascript:ReverseDisplay('pqr-file')">What is a PQR file?</a>

<div id="pqr-file" style="display:none;">
	<p>A PQR file is a PDB file with the temperature and occupancy columns replaced by columns containing the per-atom charge (Q) and radius (R). PQR files are used in several computational biology packages, including APBS.</p>
</div>



<a href="javascript:ReverseDisplay('peoe-pb')">What is PEOE_PB?</a>

<div id="peoe-pb" style="display:none;">
	<p>PEOE_PB is the partial charge optimization method developed by Paul Czodrowski for Poisson-Boltzmann electrostatics calculations. More information can be found in the following publication:</br>
	Czodrowski P, Dramburg I, Sotriffer CA, Klebe G. Development, validation, and application of adapted PEOE charges to estimate pKa values of functional groups in protein-ligand complexes. Proteins, 65, 424-437 (2006). <a href="http://dx.doi.org/10.1002/prot.21110">http://dx.doi.org/10.1002/prot.21110</a></p>
</div>


<a href="javascript:ReverseDisplay('what-is-propka')">What is PROPKA?</a>

<div id="what-is-propka" style="display:none;">
	<p>PROPKA is a heuristic pKa calculation software package developed by Jan Jensen at University of Copenhagen. <a href="http://propka.ki.ku.dk/">More information</a>.</p>
</div>


<a href="javascript:ReverseDisplay('what-platforms')">What platforms, compilers, and architectures are compatible with PDB2PQR?</a>

<div id="what-platforms" style="display:none;">
	<p>The PDB2PQR code itself is platform independent, but to use PropKa within PDB2PQR you must compile some code. PropKa has been tested with the Gnu gcc/g77 compilers on i*86, ia64, x86_64, and Mac OS X (Darwin) systems. It has also been tested with Intel icc/ifort compilers on i*86 and ia64 systems. If you find that PDB2PQR/PropKa does not compile on your system please send a bug report. PDB2PKA requires a C++ compiler and has been tested with g++.</p>
	<p>The PDB2PQR web interface can be accessed with nearly any browser on any platform, so this question will focus on the command-line version of the software. The PDB2PQR code itself is written in OS-independent Python, and thus will work with Python under Cygwin. Unfortunately PROPKA makes use of compilers and shared objects, which can be rather tricky through Cygwin. For basic functionality under Windows, it is strongly recommended to use PDB2PQR without PROPKA enabled; if you would like to try to get PROPKA working as well, you might want to look at section 6.2.2 of the <a href="https://www.python.org/doc/2.4.1/inst/tweak-flags.html">Building Extensions in the Python Tutorial</a>.</p>
</div>


<a href="javascript:ReverseDisplay('residues-recognized')">What types of residues can PDB2PQR recognize?</a>

<div id="residues-recognized" style="display:none;">
	<p>PDB2PQR recognizes all of the standard amino acids, nucleic acids, and waters (both WAT and HOH) in most titration states -- with some force-field dependent caveats.  PDB2PQR will also use PEOE to parameterize ligands if provided in MOL2 format.</p>
</div>


<a href="javascript:ReverseDisplay('chain-id')">Why are chain IDs not included in the output by default?</a>

<div id="chain-id" style="display:none;">
	<p>This is done specifically for APBS, as older versions of APBS were unable to handle chain IDs in a PQR file. To keep the chain IDs in your resulting PQR file please use the <code>--chain</code> option with command-line execution or select the appropriate checkbox on the web interface.</p>
</div>