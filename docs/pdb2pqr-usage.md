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