---
layout: docs
title: Basic Usage
prev_section: installation
next_section: apbs-overview
permalink: /docs/pdb2pqr-usage/
---

Usage: pdb2pqr.py [options] PDB_PATH PQR_OUTPUT_PATH

This module takes a PDB file as input and performs optimizations before
yielding a new PQR-style file in PQR_OUTPUT_PATH. If PDB_PATH is an ID it will
automatically be obtained from the PDB archive.

<table><th>Options</th>
  <tr><td>--version</td><td>           show program's version number and exit</td></tr>
  <tr><td>-h, --help</td><td>         show this help message and exit</td></tr>
  <th>Mandatory Options</th>
  <tr><td>One of the options must be used.</td></tr>
  <tr><td>--ff=FIELD_NAME</td><td> The forcefield to use - currently amber, charmm,
                        parse, tyl06, peoepb and swanson are supported.</td>
                        <tr><td>    --userff=USER_FIELD_FILE</td><td>The user created forcefield file to use. Requires
                        --usernames overrides --ff</td></tr>
                        <tr><td>    --clean   </td><td>Do no optimization, atom addition, or parameter
                        assignment, just return the original PDB file in
                        aligned format. Overrides --ff and --userff</td></tr>
 <th>General Options</th>
 <tr><td>--nodebump</td><td>Do not perform the debumping operation</td></tr>
 <tr><td>--noopts</td><td>Do not perform hydrogen optimization</td></tr>
 <tr><td>--chain</td><td>Keep the chain ID in the output PQR file</td></tr>
 <tr><td>--assign-only </td><td>Only assign charges and radii - do not add atoms,
                        debump, or optimize.</td></tr>
                        <tr><td>--ffout=FIELD_NAME</td><td>Instead of using the standard canonical naming scheme
                        for residue and atom names, use the names from the
                        given forcefield - currently amber, charmm, parse,
                        tyl06, peoepb and swanson are supported.</td></tr>
                        <tr><td>--usernames=USER_NAME_FILE</td><td>The user created names file to use. Required if using
                        --userff</td></tr>
                        <tr><td>--apbs-input</td><td>Create a template APBS input file based on the
                        generated PQR file.  Also creates a Python pickle for
                        using these parameters in other programs.</td></tr>
                        <tr><td>--ligand=PATH </td><td>Calculate the parameters for the ligand in mol2 format
                        at the given path. Pdb2pka must be compiled.</td></tr>
                        <tr><td>--whitespace</td><td>Insert whitespaces between atom name and residue name,
                        between x and y, and between y and z.</td></tr>
                        <tr><td>--typemap</td><td>Create Typemap output.</td></tr>
                        <tr><td>--neutraln</td><td>Make the N-terminus of this protein neutral (default
                        is charged). Requires PARSE force field.</td></tr>
                        <tr><td>--neutralc</td><td>Make the C-terminus of this protein neutral (default
                        is charged). Requires PARSE force field.</td></tr>
                        <tr><td>-v, --verbose</td><td>Print information to stdout.</td></tr>
                        <tr><td>--include_header</td><td>Include pdb header in pqr file. WARNING: The resulting
                        PQR file will not with APBS versions prior to 1.5</td></tr>

</table>