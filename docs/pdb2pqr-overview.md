---
layout: docs
title: Input Files &amp; Options
prev_section: usage
next_section: viz-overview
permalink: /docs/pdb2pqr-overview/
---



<style>.section-nav {display:none;}</style>



### Web server usage

<p>Using PDB2PQR through the web server is very straightforward. Interested users can choose one of the <a href="http://www.poissonboltzmann.org/pdb2pqr/d/web-servers">available servers</a>, and immediately start using the software. More information about the various web-based options can be found below and on the <a href="http://www.poissonboltzmann.org/pdb2pqr/examples">PDB2PQR tutorials and examples </a>page.</p>

### Command line usage

<p>The command line version of PDB2PQR must be installed from source using the instructions in the&nbsp;<a href="http://www.poissonboltzmann.org/pdb2pqr/documentation/user-guide/installation-and-availability" rel="nofollow" title="http://www.poissonboltzmann.org/pdb2pqr/documentation/user-guide/installation-and-availability">PDB2PQR installation and availability</a> section. This version of the software offers an expanded range of options and can also be customized with user extensions.</p>
<p>The command line PDB2PQR is invoked as</p>

`% $ python pdb2pqr.py [options] --ff={forcefield} {path} {output-path}`

#### Required Arguments
`forcefield`
The forcefield to use -- currently AMBER (AMBER99,&nbsp;<a href="http://www3.interscience.wiley.com/journal/72511509/abstract" rel="nofollow">Wang J, et al, 2000</a>), CHARMM (CHARMM27,&nbsp;<a href="http://dx.doi.org/10.1021/jp973084f" rel="nofollow">MacKerell AD Jr, et al, 1998</a>), PARSE (PARSE,&nbsp;<a href="http://dx.doi.org/10.1021/j100058a043" rel="nofollow">Sitkoff D, et al, 1994</a>), and TYL06 (<a href="http://dx.doi.org/10.1021/jp063479b" rel="nofollow">Tan C, et al, 2006</a>) are supported.

`path` 
The path to the PDB file or an ID to obtain from the <a href="http://www.pdb.org/" rel="nofollow">PDB archive</a>

`output-path`
The desired output name of the PQR file to be generated


#### Optional Arguments

`--nodebump`
Do not perform the debumping operation

`--noopt`
Do not perform hydrogen bonding network optimization

`--chain`
Keep the chain ID in the output PQR file

`--assign-only`
Only assign charges and radii - do not add atoms, debump, or optimize.

`--clean`
Do no optimization, atom addition, or parameter assignment, just return the original PDB file in aligned format.

`--ffout=<name>`
Instead of using the standard canonical naming scheme for residue and atom names, use the names from the given forcefield.

`--with-ph=<ph>`
Use PROPKA to calculate pKas and apply them to the molecule given the pH value. Actual PROPKA results will be output to&nbsp;<tt>&lt;output-path&gt;.propka</tt>.

`--ligand=<mol2 file>`
Use the PDB2PKA package to generate parameters for the specific ligand in MOL2 format. MOL2-format ligands can be generated using PROPDRG server or from within some molecular modeling packages.

`--apbs-input`
Create a template APBS input file based on the generated PQR file.

`--whitespace`
Put an extra whitespace between atom name and residue name to <output-path>-whitespace.pqr, this may (or may not) break strict PDB formatting and cause problems for some visualization programs.

`--verbose (-v)`
Print information to stdout.

`--help (-h)`
Display the usage information

#### Additional Optional Command-Line Arguments
`--chi`
Print the per-residue backbone chi angle to <output-path>.chi

`--phi`
Print the per-residue backbone phi angle to <output-path>.phi

`--psi`
Print the per-residue backbone psi angle to <output-path>.psi

`--rama`
Print the per-residue phi and psi angles to <output-path>.rama for Ramachandran plots

`--hbond`
Print a list of hydrogen bonds to <output-path>.hbond

`--salt`
Print a list of salt bridges to <output-path>.salt
