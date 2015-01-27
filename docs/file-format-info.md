---
layout: docs
title: File Format Info
prev_section: apbs-overview
next_section: pdb2pqr-overview
permalink: /docs/file-format-info/
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



{% include no-prev-next.html %}




##Matrices

###Harwell-Boeing

This is the sparse matrix output format used by APBS for analyses of the matrix operators which are constructed during PB solution. This format was implemented so matrix operators could by decomposed with SuperLU and ARPACK but this also serves as a useful general mechanism for sparse matrix input and output. The complete Harwell-Boeing matrix format description is under construction.




##Mesh and data

###MCSF finite element

APBS reads and writes meshes in the FEtk MCSF format


##OpenDX scalar data

We output most discretized scalar data (e.g., potential, accessibility, etc.) from APBS in the data format used by the OpenDX software package. The OpenDX data format is very flexible; the following sections describe the application of this format for APBS multigrid and finite element datasets.

The multigrid data format has the following form:

`   object 1 class gridpositions counts nx ny nz
   origin xmin ymin zmin
   delta hx 0.0 0.0
   delta 0.0 hy 0.0 
   delta 0.0 0.0 hz
   object 2 class gridconnections counts nx ny nz
   object 3 class array type double rank 0 items n data follows
   u(0,0,0) u(0,0,1) u(0,0,2)
   ...
   u(0,0,nz-3) u(0,0,nz-2) u(0,0,nz-1)
   u(0,1,0) u(0,1,1) u(0,1,2)
   ...
   u(0,1,nz-3) u(0,1,nz-2) u(0,1,nz-1)
   ...
   u(0,ny-1,nz-3) u(0,ny-1,nz-2) u(0,ny-1,nz-1)
   u(1,0,0) u(1,0,1) u(1,0,2)
   ...
   attribute "dep" string "positions"
   object "regular positions regular connections" class field
   component "positions" value 1
   component "connections" value 2
   component "data" value 3`

The variables in this format have been shown in bold and include:

`nx ny nz` The number of grid points in the x-, y-, and z-directions

`xmin ymin zmin` The coordinates of the grid lower corner.

`hx hy hz` The grid spacings in the x-, y-, and z-directions.

`n` The total number of grid points; n = nx * ny * nz

`u(*,*,*)` The data values, ordered with the z-index increasing most quickly, followed by the y-index, and then the x-index.


For finite element solutions, the OpenDX format takes the following form:

`   object 1 class array type float rank 1 shape 3 items N
   v1x v1y v1z
   v2x v2y v2z
   ...
   vNx vNy vNz
   object 2 class array type int rank 1 shape 4 items M
   s1a s1b s1c s1d
   s2a s2b s2c s2d
   ...
   sMa sMb sMc sMd
   attribute "element type" string "tetrahedra"
   object 3 class array type float rank 0 items N
   u1
   u2
   ...
   uN
   attribute "dep" string "positions"
   object "irregular positions irregular connections" class field
   component "positions" value 1
   component "connections" value 2
   component "data" value 3
   end`

where the variables in this format are shown in bold and defined as:

`N` Number of vertices

`vix viy viz` Coordinates of vertex i

`M` Number of simplices

`sia sib sic sid` IDs of vertices in simplex i

`ui` Data value associated with vertex i


###UHBD

We also support scalar data output in the legacy "UHBD format" for use with programs such as UHBD and SDA. The complete UHBD data format description is under construction.



##Molecular Structure

###MOL2

The MOL2 file format is a popular method for specifying chemical structure, including atom types, positions, and bonding. It is described in detail in the Tripos documentation (PDF).

###PDB

The PDB file format is described in detail in the [Protein Data Bank documentation](http://www.rcsb.org/pdb/static.do?p=file_formats/pdb/index.html).

###PQR

This format is a modification of the PDB format which allows users to add charge and radius parameters to existing PDB data while keeping it in a format amenable to visualization with standard molecular graphics programs. The origins of the PQR format are somewhat uncertain, but has been used by several computational biology software programs, including MEAD and AutoDock. UHBD uses a very similar format called QCD.

APBS reads very loosely-formatted PQR files: all fields are whitespace-delimited rather than the strict column formatting mandated by the PDB format. This more liberal formatting allows coordinates which are larger/smaller than ± 999 Å.

APBS reads data on a per-line basis from PQR files using the following format:

`Field_name Atom_number Atom_name Residue_name Chain_ID Residue_number X Y Z Charge Radius`

where the whitespace is the most important feature of this format. The fields are:

`Field_name` A string which specifies the type of PQR entry and should either be ATOM or HETATM in order to be parsed by APBS.

`Atom_number` An integer which provides the atom index.

`Atom_name` A string which provides the atom name.

`Residue_name` A string which provides the residue name.

`Chain_ID` An optional string which provides the chain ID of the atom. Note chain ID support is a new feature of APBS 0.5.0 and later versions.

`Residue_number` An integer which provides the residue index.

`X Y Z` 3 floats which provide the atomic coordiantes.

`Charge` A float which provides the atomic charge (in electrons).

`Radius` A float which provides the atomic radius (in Å).

Clearly, this format can deviate wildly from PDB due to the use of whitespaces rather than specific column widths and alignments. This deviation can be particularly significant when large coordinate values are used. However, in order to maintain compatibility with most molecular graphics programs, the PDB2PQR program and the utilities provided with APBS (see the Parameterization section) attempt to preserve the PDB format as much as possible.


###XML
The XML structure format was designed to remediate some of the shortcomings of the flat-file format. By use of XML, issues related to extra fields in the file or columns merging together can easily be remedied. Additionally, APBS will only parse the necessary information from the XML file and will ignore all other information, so users wishing to store extra data related to a residue or atom can do so inline without affecting APBS.

This data format has the following form:

`   <roottag>
       <residue>
           <atom>
               <x>x</x>
               <y>y</y>
               <z>z</z>
               <charge>charge</charge>
               <radius>radius</radius>
           </atom>
           ...
       </residue>
       ...
   </roottag>`


The variables in this example are:

`roottag` This is the root element of the XML file. The value is not important to APBS - APBS simply checks that it is closed at the end of the file.

`x` A float giving the x-coordinate of the atom in Å.

`y` A float giving the y-coordinate of the atom in Å.

`z` A float giving the z-coordinate of the atom in Å.

`charge` A float giving the atomic charge (in electrons).

`atomradius` A float giving the atomic Radius (in Å).




##APBS flat-file format

This parameter file format is a series of lines of the form:

`Residue_name Atom_name Charge Radius Epsilon`

where the whitespaces are important and denote separation between the fields. The fields here are:

`Residue_name` A string giving the residue name, as provided in the PDB file to be parametrized.

`Atom_name` A string giving the atom name, as provided in the PDB file to be parametrized.

`Charge` A float giving the atomic charge (in electrons).

`Radius` A float giving the atomic radius (in Å).

`Epsilon` A float giving the Lennard-Jones well depth \epsilon (in kJ/mol). This is used for the calculation of WCA energies in apolar solvation energies and forces. We assume that the Lennard-Jones potential is defined in the "AMBER style": 

\\[ U_{\mathrm{LJ}}(r) = \epsilon \left(\Bigl(\frac{\sigma}{r}\Bigr)^{12} - \Bigr(\frac{\sigma}{r}\Bigr)^6\right) \\]


##APBS XML format

This parameter file format has the following form:

`   <ffname>
       <residue>
           <name>resname</name>
           <atom>
               <name>atomname</name>
               <charge>atomcharge</charge>
               <radius>atomradius</radius>
               <epsilon>atomepsilon</epsilon>
           </atom>
           ...
       </residue>
       ...
   </ffname>`

The variables in this example are:

`ffname` The name of the forcefield. This is the root element of the XML file.

`resname` A string giving the residue name, as provided in the PDB file to be parameterized.

`atomname` A string giving the atom name, as provided in the PDB file to be parameterized.

`atomcharge` A float giving the atomic charge (in electrons).

`atomradius` A float giving the atomic Radius (in Å).

`atomepsilon` A float giving the Lennard-Jones well depth \epsilon (in kJ/mol). This is used for the calculation of WCA energies in apolar solvation energies and forces. We assume that the Lennard-Jones potential is defined in the "AMBER style": 


\\[ U_{\mathrm{LJ}}(r) = \epsilon \left(\Bigl(\frac{\sigma}{r}\Bigr)^{12} - \Bigr(\frac{\sigma}{r}\Bigr)^6\right) \\]




###PDB2PQR XML format

This file format is described in the [PDB2PQR Programmer Guide](/docs/pdb2pqr-programmers/) Using XML Files and Regular Expressions section.


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
  });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
