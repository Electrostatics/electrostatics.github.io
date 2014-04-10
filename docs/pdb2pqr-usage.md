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

Options:
  --version             show program's version number and exit
  -h, --help            show this help message and exit

  Mandatory options:
    One of the following options must be used.

    --ff=FIELD_NAME     The forcefield to use - currently amber, charmm,
                        parse, tyl06, peoepb and swanson are supported.
    --userff=USER_FIELD_FILE
                        The user created forcefield file to use. Requires
                        --usernames overrides --ff
    --clean             Do no optimization, atom addition, or parameter
                        assignment, just return the original PDB file in
                        aligned format. Overrides --ff and --userff

  General options:
    --nodebump          Do not perform the debumping operation
    --noopt             Do not perform hydrogen optimization
    --chain             Keep the chain ID in the output PQR file
    --assign-only       Only assign charges and radii - do not add atoms,
                        debump, or optimize.
    --ffout=FIELD_NAME  Instead of using the standard canonical naming scheme
                        for residue and atom names, use the names from the
                        given forcefield - currently amber, charmm, parse,
                        tyl06, peoepb and swanson are supported.
    --usernames=USER_NAME_FILE
                        The user created names file to use. Required if using
                        --userff
    --apbs-input        Create a template APBS input file based on the
                        generated PQR file.  Also creates a Python pickle for
                        using these parameters in other programs.
    --ligand=PATH       Calculate the parameters for the ligand in mol2 format
                        at the given path. Pdb2pka must be compiled.
    --whitespace        Insert whitespaces between atom name and residue name,
                        between x and y, and between y and z.
    --typemap           Create Typemap output.
    --neutraln          Make the N-terminus of this protein neutral (default
                        is charged). Requires PARSE force field.
    --neutralc          Make the C-terminus of this protein neutral (default
                        is charged). Requires PARSE force field.
    -v, --verbose       Print information to stdout.
    --include_header    Include pdb header in pqr file. WARNING: The resulting
                        PQR file will not with APBS versions prior to 1.5

  proPKA options:
    --with-ph=PH        Use propka to calculate pKas and apply them to the
                        molecule given the pH value. Actual PropKa results
                        will be output to <output-path>.propka.
    --reference=REFERENCE
                        Setting which reference to use for stability
                        calculations. See PROPKA 3.0 documentation.
    --propka-verbose    Print extra proPKA information to stdout. WARNING:
                        This produces an incredible level of output.

  Extension options:
    --chi               Print the per-residue backbone chi angle to {output-
                        path}.chi
    --summary           Print protein summary information to {output-
                        path}.summary.
    --contact           Print a list of contacts to {output-path}.con
    --newresinter       Print interaction energy between each residue pair in
                        the protein to {output-path}.newresinter.
    --salt              Print a list of salt bridges to {output-path}.salt

  Hbond extension options:
    --hbond             Print a list of hydrogen bonds to {output-path}.hbond
    --whatif            Change hbond output to WHAT-IF format.
    --angle_cutoff=ANGLE_CUTOFF
                        Angle cutoff to use when creating hbond data (default
                        30.0)
    --distance_cutoff=DISTANCE_CUTOFF
                        Distance cutoff to use when creating hbond data
                        (default 3.4)
    --old_distance_method
                        Use distance from donor hydrogen to acceptor to
                        calculate distance used with --distance_cutoff.

  Resinter extension options:
    --resinter          Print interaction energy between each residue pair in
                        the protein to {output-path}.resinter.
    --residue_combinations
                        Remap residues to different titration states and rerun
                        resinter appending output. Consider only the minimum
                        number of whole protein titration combinations needed
                        to test each possible pairing of residue titration
                        states. Normally used with --noopt. If a protein
                        titration state combination results in a pair of
                        residue being  re-tested in the same individual
                        titration states a warning will be generated if the
                        re-tested result is different. This warning should not
                        be possible if used with --noopt.
    --all_residue_combinations
                        Remap residues to ALL possible titration state
                        combinations and rerun resinter appending output.
                        Results with --noopt should be the same as
                        --residue_combinations. Runs considerably slower than
                        --residue_combinations and generates the same type of
                        warnings.  Use without --noopt to discover how
                        hydrogen optimization affects residue  interaction
                        energies via the warnings in the output.

  Rama extension options:
    --rama              Print the per-residue phi and psi angles to {output-
                        path}.rama for Ramachandran plots
    --phi_only          Only include phi angles in output. Rename output file
                        {output-path}.phi
    --psi_only          Only include psi ang