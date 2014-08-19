---
layout: docs
title: Basic Usage
prev_section: installation
next_section: apbs-overview
permalink: /docs/pdb2pqr-usage/
---


{% include no-prev-next.html %}



Usage: pdb2pqr.py [options] PDB_PATH PQR_OUTPUT_PATH

This module takes a PDB file as input and performs optimizations before
yielding a new PQR-style file in PQR_OUTPUT_PATH. If PDB_PATH is an ID it will
automatically be obtained from the PDB archive.

<table>
<th colspan="2">Options</th>
<tr><td><nobr>--version</td><td>show program's version number and exit</td></tr>
<tr><td>-h, --help</td><td>show this help message and exit</td></tr>
</table>

<table>
<th colspan="2">Mandatory Options</th>
<tr><td colspan="2">One of the options must be used.</td></tr>
<tr><td><nobr>--ff=FIELD_NAME</td><td> The forcefield to use - currently amber, charmm,
parse, tyl06, peoepb and swanson are supported.</td></tr>
<tr><td><nobr>--userff=USER_FIELD_FILE</nobr></td><td>The user created forcefield file to use. Requires --usernames overrides --ff</td></tr>
<tr><td><nobr>--clean</nobr></td><td>Do no optimization, atom addition, or parameter assignment, just return the original PDB file in aligned format. Overrides --ff and --userff</td></tr>
</table>

<table>
<th colspan="2">General Options</th>
<tr><td><nobr>--nodebump</nobr></td><td>Do not perform the debumping operation</td></tr>
<tr><td><nobr>--noopts</nobr></td><td>Do not perform hydrogen optimization</td></tr>
<tr><td><nobr>--chain</nobr></td><td>Keep the chain ID in the output PQR file</td></tr>
<tr><td><nobr>--assign-only</nobr></td><td>Only assign charges and radii - do not add atoms, debump, or optimize.</td></tr>
<tr><td><nobr>--ffout=FIELD_NAME</nobr></td><td>Instead of using the standard canonical naming scheme for residue and atom names, use the names from the given forcefield - currently amber, charmm, parse, tyl06, peoepb and swanson are supported.</td></tr>
<tr><td><nobr>--usernames=USER_NAME_FILE</nobr></td><td>The user created names file to use. Required if using --userff</td></tr>
<tr><td><nobr>--apbs-input</nobr></td><td>Create a template APBS input file based on the generated PQR file.  Also creates a Python pickle for using these parameters in other programs.</td></tr>
<tr><td><nobr>--ligand=PATH</nobr></td><td>Calculate the parameters for the ligand in mol2 format at the given path. Pdb2pka must be compiled.</td></tr>
<tr><td><nobr>--whitespace</nobr></td><td>Insert whitespaces between atom name and residue name, between x and y, and between y and z.</td></tr>
<tr><td><nobr>--typemap</td><td>Create Typemap output.</td></tr>
<tr><td><nobr>--neutraln</nobr></td><td>Make the N-terminus of this protein neutral (default is charged). Requires PARSE force field.</td></tr>
<tr><td><nobr>--neutralc</nobr></td><td>Make the C-terminus of this protein neutral (default is charged). Requires PARSE force field.</td></tr>
<tr><td>-v, --verbose</nobr></td><td>Print information to stdout.</td></tr>
<tr><td><nobr>--include_header</nobr></td><td>Include pdb header in pqr file. WARNING: The resulting PQR file will not with APBS versions prior to 1.5</td></tr>
</table>

<table>
<th colspan="2">proPKA options</th>
<tr><td><nobr>--with-ph=PH</nobr></td><td>Use propka to calculate pKas and apply them to the molecule given the pH value. Actual PropKa results will be output to output-path. propka.</td></tr>
<tr><td><nobr>--reference=REFERENCE</nobr></td><td>Setting which reference to use for stability calculations. See PROPKA 3.0 documentation.</td></tr>
<tr><td><nobr>--propka-verbose</nobr></td><td>Print extra proPKA information to stdout. WARNING: This produces an incredible level of output.</td></tr>
</table>

<table>
<th colspan="2">Extension options</th>
<tr><td><nobr>--chi</nobr></td><td>Print the per-residue backbone chi angle to {output-path}.chi</td></tr>
<tr><td><nobr>--summary</nobr></td><td>Print protein summary information to {output-path}.summary.</td>
</tr>
<tr><td><nobr>--contact</nobr></td><td>Print a list of contacts to {output-path}.con</td></tr>
<tr><td><nobr>--newresinter</nobr></td><td>Print interaction energy between each residue pair in the protein to {output-path}.newresinter.</td></tr>
<tr><td><nobr>--salt</nobr></td><td>Print a list of salt bridges to {output-path}.salt</td></tr>
</table>

<table>
<th colspan="2">Hbond extension options</th>
<tr><td><nobr>--hbond</nobr></td><td><nobr>--hbond</td></tr>
<tr><td><nobr>--whatif</nobr></td><td>Change hbond output to WHAT-IF format.</td></tr>
<tr><td><nobr>--angle_cutoff=ANGLE_CUTOFF</nobr></td><td>Angle cutoff to use when creating hbond data (default 30.0)</td>
</tr>
<tr><td><nobr>--distance_cutoff=DISTANCE_CUTOFF</nobr></td><td>Distance cutoff to use when creating hbond data (default 3.4)</td></tr>
<tr><td><nobr>--old_distance_method</nobr></td><td>Use distance from donor hydrogen to acceptor to calculate distance used with --distance_cutoff.</td></tr>
</table>

<table>
<th colspan="2">Resinter extension options</th>
<tr><td><nobr>--resinter</nobr></td><td>Print interaction energy between each residue pair in the protein to {output-path}.resinter.</td></tr>
<tr><td><nobr>--residue_combinations</nobr></td><td>Remap residues to different titration states and rerun resinter appending output. Consider only the minimum number of whole protein titration combinations needed to test each possible pairing of residue titration states. Normally used with --noopt. If a protein titration state combination results in a pair of residue being  re-tested in the same individual titration states a warning will be generated if the re-tested result is different. This warning should not be possible if used with --noopt.</td></tr>
<tr><td><nobr>--all_residue_combinations</nobr></td><td>Remap residues to ALL possible titration state combinations and rerun resinter appending output. Results with --noopt should be the same as --residue_combinations. Runs considerably slower than --residue_combinations and generates the same type of warnings.  Use without --noopt to discover how hydrogen optimization affects residue interaction energies via the warnings in the output.</td></tr>
</table>

<table>
<th colspan="2">Rama extenstion options</th>
<tr><td><nobr>--rama</nobr></td><td>Print the per-residue phi and psi angles to {output-path}.rama for Ramachandran plots</td></tr>
<tr><td><nobr>--phi_only</nobr></td><td>Only include phi angles in output. Rename output file {output-path}.phi</nobr></td></tr>
<tr><td><nobr>--psi_only</nobr></td><td>Only include psi angles in output. Rename output file {output-path}.psi</td></tr>
</table>