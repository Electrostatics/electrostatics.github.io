---
layout: docs
title: Programmer's Guide
prev_section:
next_section:
permalink: /docs/pdb2pqr-programmers/
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




<a href="javascript:ReverseDisplay('user-defined')">Adding user-defined functions to PDB2PQR</a>

<div id="user-defined" style="display:none;">

	<p>The extensions directory is a particularly useful feature of PDB2PQR, as it allows users to add their own desired functionality to PDB2PQR and use PDB2PQR's object-oriented hierarchy. All functions in the extensions directory are automatically loaded into PDB2PQR as command line options using the function's name, and are called after all other steps (optimization, atom addition, parameter assignment) have been completed. As a result any available functions are particularly useful for post-processing, or for analysis without any changes to the input structure by using the --clean flag. Please see the PDB2PQR extensions documentation for a basic template for setting up a new script.</p>
	<p>One of the advantages of using PDB2PQR in this fashion is the ability to use built-in PDB2PQR functions. While a full and more detailed API can be found in the pydoc documentation, some useful functions are listed below:</p>

	<h2>From protein.py</h2>

	<h3>Class Protein</h3>
	<ul>
		<li><code>printAtoms(atomlist, flag)</code> Print a list of atoms</li>
		<li><code>getResidues()</code> Return a list of residues</li>
		<li><code>numResidues()</code> Return the number of residues</li>
		<li><code>numAtoms()</code> Return the number of atoms</li>
		<li><code>getAtoms()</code> Return a list of atom objects</li>
		<li><code>getChains()</code> Return a list of chains</li>
	</ul>

	<h2>From structures.py</h2>

	<h3>Class Chain</h3>
	<ul>
		<li><code>getResidues()</code> Return a list of residues in the chain</li>
		<li><code>numResidues()</code> Return the number of residues in the chain</li>
		<li><code>numAtoms()</code> Return the number of atoms in the chain</li>
		<li><code>getAtoms()</code> Return a list of atom objects in the chain</li>
	</ul>

	<h3>Class Residue</h3>
	<ul>
		<li><code>numAtoms()</code> Return the number of atoms in the residue</li>
		<li><code>addAtom(atom)</code> Add the atom object to the residue</li>
		<li><code>removeAtom(name)</code> Remove a specific atom from the residue</li>
		<li><code>renameAtom(old, new)</code> Rename atom "old" with "new"</li>
		<li><code>getAtom(name)</code> Return a specific atom from the residue</li>
		<li><code>hasAtom(name)</code> Determine if the residue has the atom "name"</li>
	</ul>

	<h3>Class Atom</h3>
	<ul>
		<li><code>getCoords()</code> Return the x/y/z coordinates of the atom</li>
		<li><code>isHydrogen()</code> Determine if the atom is a hydrogen or not</li>
		<li><code>isBackbone()</code> Determine whether the atom is from the backbone</li>
	</ul>

	<h2>From utilities.py</h2>
	<ul>
		<li><code>getAngle(c1, c2, c3)</code> Get the angle between the three coordinate sets</li>
		<li><code>getDihedral(c1, c2, c3, c4)</code> Get the dihedral angle from the four coordinates</li>
		<li><code>distance(c1, c2)</code> Return the distance between the two coordinates</li>
		<li><code>add(c1, c2)</code> Return c1 + c2</li>
		<li><code>subtract(c1, c2)</code> Return c1 - c2</li>
		<li><code>cross(c1, c2)</code> Return the cross product of c1 and c2</li>
		<li><code>dot(c1, c2)</code> Return the dot product of c1 and c2</li>
		<li><code>normalize(c1)</code> Normalize the c1 coordinates</li>
	</ul>

	<hr />

</div>






<a href="javascript:ReverseDisplay('api-documentation')">API Documentation</a>

<div id="api-documentation" style="display:none;">
	<p>API documentation for the Python source code can be obtained through the Python <code>pydoc</code> utility. The best way to access this documentation is by running.</p>

	<h2>From protein.py</h2>

{% highlight text %}
pydoc -p 9876
{% endhighlight %}

in one of the PDB2PQR source code directories, where 9876 is an arbitrary port number. You can then point your web browser to <code>http://localhost:9876</code> to access the API documentation.

	<hr />

</div>







<a href="javascript:ReverseDisplay('atom-residue-naming')">Atom and residue naming scheme</a>

<div id="atom-residue-naming" style="display:none;">

	<h2>Overview</h2>

	<p>As mentioned above, the XML files provide an easy way for PDB2PQR to parse data. PDB2PQR extends the built-in SAX XML parser to allow the code to go from input file to PDB2PQR object without any intermediate steps.</p>
	<p>The difficulty of adding a new forcefield to PDB2PQR depends on the naming scheme used in that forcefield. To start, either a flat file or XML file containing the desired forcefield's parameters should be made - see AMBER.DAT and AMBER.xml for examples. If the forcefield's naming scheme matches the canonical naming scheme, that's all that is necessary. If the naming schemes differ, however, conversions must be made. These are made in the *.names file (see CHARMM.names, for example). In this file you will see sections like:</p>


	{% highlight text %}
	<residue>
	   <name>WAT</name>
	   <useresname>TP3M</useresname>
	   <atom>
		   <name>O</name>
		   <useatomname>OH2</useatomname>
	   </atom>
	</residue>
	{% endhighlight %}


	<p>This section tells PDB2PQR that for the oxygen atom O in WAT, CHARMM uses the names OH2 and TP3M, respectively. When the XML file is read in, PDB2PQR ensures that the WAT/O pair points to TP3M/OH2 such that the appropriate parameters are returned. But for naming schemes that greatly differ from the PDB2PQR canonical naming scheme, this could get really ugly. As a result, PDB2PQR can use regular expressions to simplify the renaming process, i.e.:</p>
	{% highlight text %}
	<residue>
	   <name>[NC]?...$</name>
	   <atom>
		   <name>H</name>
		   <useatomname>HN</useatomname>
	   </atom>
	</residue>
	{% endhighlight %}



	<p>This section of code will ensure that the H atom of all canonical residue names that match the [NC]?...$ regular expression point to HN instead. This regular expression matches all three-letter residue names, residue names with an 'N' prepended (N-Termini), and residue names with a 'C' prepended (C-Termini). For twenty amino acids that is sixty residue name changes, all done by a single section. The use of regular expressions is therefore a much more powerful method of handling naming scheme differences than working on a one to one basis. For those unfamiliar with using regular expressions, check out the <a href="http://www.amk.ca/python/howto/regex/">Python-specific guide</a>.</p>
	<p>There are a few other additional notes when using the *.names file. First, the $group variable is used to denote the matching group of a regular expression, for instance:</p>

	{% highlight text %}
	<residue>
	   <name>HI([PDE])$</name>
	   <useresname>HS$group</useresname>
	</residue>
	{% endhighlight %}

	<p>This section replaces HIP/HID/HIE with HSP/HSD/HSE by first matching the HI([PDE])$ regular expression and then using the group that is enclosed by parantheses to fill in the name to use.</p>
	<p>Second, sections are cumulative - since CHARMM, for instance, has a patch-based naming scheme, one single canonical residue name can map to multiple forcefield-scheme names. Let's look at how to map an SS-bonded Cysteine (canonical name CYX) to the CHARMM naming scheme:</p>

	{% highlight text %}
	<residue>
	   <name>CYX</name>
	   <useresname>CYS</useresname>
	</residue>
	<residue>
	   <name>CYX</name>
	   <useresname>DISU</useresname>
	   <atom>
		   <name>CB</name>
		   <useatomname>1CB</useatomname>
	   </atom>
	   <atom>
		   <name>SG</name>
		   <useatomname>1SG</useatomname>
	   </atom>
	</residue>
	{% endhighlight %}

	<p>The CYX residue is first mapped to CHARMM's CYS, and then to CHARMM's DISU object. All atom names that are found in DISU overwrite those found in CYS - in effect, the DISU patch is applied to CYS, yielding the desired CYX. This cumulative can be repeated as necessary.</p>


	<h2>Specific atom-naming scheme</h2>

	<p>In an ideal world each individual residue and atom would have a standard, distinct name. Unfortunately <a href="http://www.bmrb.wisc.edu/ref_info/atom_nom.tbl">several naming schemes for atoms exist</a>, particularly for hydrogens. As such, in order to detect the presence/absence of atoms in a protein, an internal canonical naming scheme is used. The naming scheme used in PDB2PQR is the one recommended by the PDB itself, and derives from the IUPAC naming recommendations found in:</p>
	<p><i>J. L. Markley, et al., "Recommendations for the Presentation of NMR Structures of Proteins and Nucleic Acids," Pure & Appl. Chem., 70 (1998): 117-142.</i></p>

	<p>This canonical naming scheme is used as the default PDB2PQR output. All conversions in PDB2PQR use the internal canonical naming scheme to determine distinct atom names. In previous versions of PDB2PQR these conversions were stored in long lists of if statements, but for transparency and editing this is a bad thing. Instead, all conversions can now be found in the various XML files found in PDB2PQR - for more discussion on the XML files see the XML section.</p>
	<p>There are a few additions to the canonical naming scheme, mirrored after the AMBER naming scheme (chosen since for the most part it follows the IUPAC recommendations). These changes are made in PATCHES.xml, and allow any of the following to be patched as necessary as well as detected on input:</p>

	<h3>Terminal Naming Additions</h3>
	<ul>
		<li><code>N*</code> N-Terminal Residue (i.e. NALA, NLEU)</li>
		<li><code>NEUTRAL-N*</code> Neutral N-Terminal Residue</code</li>
		<li><code>C*</code> C-Terminal Residue (i.e. CLYS, CTYR)</li>
		<li><code>NEUTRAL-C*</code> Neutral C-Terminal Residue</li>
		<li><code>*5</code> 5-Terminus for Nucleic Acids (i.e. DA5)</li>
		<li><code>*3</code> 3-Terminus for Nucleic Acids (i.e. DA3)</li>
	</ul>

	<h3>Amino Acid Residue Additions (see dat/PATCHES.xml)</h3>

	<ul>
		<li><code>ASH</code> Neutral ASP</li>
		<li><code>CYX</code> SS-bonded CYS</li>
		<li><code>CYM</code> Negative CYS</li>
		<li><code>GLH</code> Neutral GLU</li>
		<li><code>HIP</code> Positive HIS</li>
		<li><code>HID</code> Neutral HIS, proton HD1 present</li>
		<li><code>HIE</code> Neutral HIS, proton HE2 present</li>
		<li><code>LYN</code> Neutral LYS</li>
		<li><code>TYM</code> Negative TYR</li>
	</ul>

	<h3>Amino Acid Residue Additions (see dat/PATCHES.xml)</h3>
	
	<ul>
		<li><code>ASH</code> Neutral ASP</li>
		<li><code>CYX</code> SS-bonded CYS</li>
		<li><code>CYM</code> Negative CYS</li>
		<li><code>GLH</code> Neutral GLU</li>
		<li><code>HIP</code> Positive HIS</li>
		<li><code>HID</code> Neutral HIS, proton HD1 present</li>
		<li><code>HIE</code> Neutral HIS, proton HE2 present</li>
		<li><code>LYN</code> Neutral LYS</li>
		<li><code>TYM</code>Negative TYR</li>
	</ul>

	<hr />

</div>





<a href="javascript:ReverseDisplay('canonical-naming-scheme')">Canonical naming scheme</a>

<div id="canonical-naming-scheme" style="display:none;">


	<p>In an ideal world each individual residue and atom would have a standard, distinct name. Unfortunately <a href="http://www.bmrb.wisc.edu/ref_info/atom_nom.tbl">several naming schemes for atoms exist</a>, particularly for hydrogens. As such, in order to detect the presence/absence of atoms in a protein, an internal canonical naming scheme is used. The naming scheme used in PDB2PQR is the one recommended by the PDB itself, and derives from the IUPAC naming recommendations found in:</p>
	<p><i>J. L. Markley, et al., "Recommendations for the Presentation of NMR Structures of Proteins and Nucleic Acids," Pure & Appl. Chem., 70 (1998): 117-142.</i></p>
	<p>This canonical naming scheme is used as the default PDB2PQR output. For a list of standard residue/atom name pairs, please see the PDB Change Advisory Notice regarding the naming scheme.</p>
	<p>All conversions in PDB2PQR use the internal canonical naming scheme to determine distinct atom names. In previous versions of PDB2PQR these conversions were stored in long lists of if statements, but for transparency and editing this is a bad thing. Instead, all conversions can now be found in the various XML files found in PDB2PQR - for more discussion on the XML files see the XML section of the Programmer Guide.</p>
	<p>There are a few additions to the canonical naming scheme, mirrored after the AMBER naming scheme (chosen since for the most part it follows the IUPAC recommendations). These changes are made in PATCHES.xml, and allow any of the following to be patched as necessary as well as detected on input:</p>

	<h3>Terminal Naming Additions</h3>

	<table>
		<tr>
			<td>>N*</td>
			<td>>N-Terminal Residue (i.e. NALA, NLEU)</td>
		</tr>
		<tr>
			<td>>NEUTRAL-N*</td>
			<td>>Neutral N-Terminal Residue</td>
		</tr>
		<tr>
			<td>>C*</td>
			<td>>C-Terminal Residue (i.e. CLYS, CTYR)</td>
		</tr>
		<tr>
			<td>>NEUTRAL-C*</td>
			<td>>Neutral C-Terminal Residue</td>
		</tr>
		<tr>
			<td>>*5&nbsp;</td>
			<td>>5-Terminus for Nucleic Acids (i.e. DA5)</td>
		</tr>
		<tr>
			<td>>*3</td>
			<td>>3-Terminus for Nucleic Acids (i.e. DA3)</td>
		</tr>
	</table>


	<h3>Amino Acid Residue Additions</h3>

	<table>
		<tr>
			<td>ASH</td>
			<td>Neutral ASP</td>
		</tr>
		<tr>
			<td>CYX</td>
			<td>SS-bonded CYS</td>
		</tr>
		<tr>
			<td>CYM</td>
			<td>Negative CYS</td>
		</tr>
		<tr>
			<td>GLH</td>
			<td>Neutral GLU</td>
		</tr>
		<tr>
			<td>HIP</td>
			<td>Positive HIS</td>
		</tr>
		<tr>
			<td>HID</td>
			<td>Neutral HIS, proton HD1 present</td>
		</tr>
		<tr>
			<td>HIE</td>
			<td>Neutral HIS, proton HE2 present</td>
		</tr>
		<tr>
			<td>LYN</td>
			<td>Neutral LYS</td>
		</tr>
		<tr>
			<td>TYM</td>
			<td>Negative TYR</td>
		</tr>
	</table>


	<hr />

</div>




<a href="javascript:ReverseDisplay('python-file-documentation')">Python file documentation</a>

<div id="python-file-documentation" style="display:none;">

	<p>A full API can be found running the <code>pydoc -w</code> command in the PDB2PQR source tree.</p>

	<hr />

</div>





<a href="javascript:ReverseDisplay('using-xml-regex')">Using XML Files and Regular Expressions</a>

<div id="using-xml-regex" style="display:none;">

<p>As mentioned above, the XML files provide an easy way for PDB2PQR to parse data. PDB2PQR extends the built-in SAX XML parser to allow the code to go from input file to PDB2PQR object without any intermediate steps.</p>
<p>The difficulty of adding a new forcefield to PDB2PQR depends on the naming scheme used in that forcefield. To start, either a flat file or XML file containing the desired forcefield's parameters should be made - see AMBER.DAT and AMBER.xml for examples. If the forcefield's naming scheme matches the canonical naming scheme, that's all that is necessary. If the naming schemes differ, however, conversions must be made. These are made in the *.names file (see CHARMM.names for example). In this file you will see sections like:</p>


{% highlight text %}
<residue>
	<name>WAT</name>
	<useresname>TP3M</useresname>
	<atom>
		<name>O</name>
		<useatomname>OH2</useatomname>
	</atom>
</residue>
{% endhighlight %}

<p>This section tells PDB2PQR that for the oxygen atom O in WAT, CHARMM uses the names OH2 and TP3M, respectively. When the XML file is read in, PDB2PQR ensures that the WAT/O pair points to TP3M/OH2 such that the appropriate parameters are returned.</p>
<p>But for naming schemes that greatly differ from the PDB2PQR canonical naming scheme, this could get really ugly. As a result, PDB2PQR can use regular expressions to simplify the renaming process, i.e.:</p>

{% highlight text %}
<residue>
	<name>[NC]?...$</name>
	<atom>
		<name>H</name>
		<useatomname>HN</useatomname>
	</atom>
</residue>
{% endhighlight %}

<p>This section of code will ensure that the H atom of all canonical residue names that match the [NC]?...$ regular expression point to HN instead. This regular expression matches all three-letter residue names, residue names with an 'N' prepended (N-Termini), and residue names with a 'C' prepended (C-Termini). For twenty amino acids that is sixty residue name changes, all done by a single section. The use of regular expressions is therefore a much more powerful method of handling naming scheme differences than working on a one to one basis. For those unfamiliar with using regular expressions, check out the <a href="http://www.amk.ca/python/howto/regex/">Python-specific guide</a>.</p>
<p>There are a few other additional notes when using the *.names file. The $group variable is used to denote the matching group of a regular expression, for instance:</p>

{% highlight text %}
<residue>
	<name>HI([PDE])$</name>
	<useresname>HS$group</useresname>
</residue>
{% endhighlight %}

<p>This section replaces HIP/HID/HIE with HSP/HSD/HSE by first matching the HI([PDE])$ regular expression and then using the group that is enclosed by parantheses to fill in the name to use.</p>
<p>Sections are cumulative - since CHARMM, for instance, has a patch-based naming scheme, one single canonical residue name can map to multiple forcefield-scheme names. Let's look at how to map an SS-bonded Cysteine (canonical name CYX) to the CHARMM naming scheme:</p>

{% highlight text %}
<residue>
	<name>CYX</name>
	<useresname>CYS</useresname>
</residue>
<residue>
	<name>CYX</name>
	<useresname>DISU</useresname>
	<atom>
		<name>CB</name>
		<useatomname>1CB</useatomname>
	</atom>
	<atom>
		<name>SG</name>
		<useatomname>1SG</useatomname>
	</atom>
</residue>
{% endhighlight %}

<p>The CYX residue is first mapped to CHARMM's CYS, and then to CHARMM's DISU object. All atom names that are found in DISU overwrite those found in CYS - in effect, the DISU patch is applied to CYS, yielding the desired CYX. This cumulative can be repeated as necessary.</p>



</div>



