---
layout: docs
title: APBS Utilities
prev_section: apbs-programmers
next_section: pdb2pqr-faq
permalink: /docs/apbs-utilities/
---

##APBS Utilities

APBS provides several utility programs for manipulating program output or preparing input. Some of these are documented in the links above. Usage information for all programs can be obtained by running the program with "-h" option or no arguments.

###del2dx

A utility program designed to convert DelPhi-format map files (electrostatic potential, etc.) to APBS OpenDX format.  This program is located in the APBS tools/mesh program and is invoked as:

{% highlight bash %}
del2dx delphi_file opendx_file
{% endhighlight %}

where delphi_file is the input file to be converted and opendx_file is the output OpenDX format file to be created.

###dxmath

dxmath performs simple arithmetic operations with Cartesian grid data.  It is invoked as:

{% highlight bash %}
dx-math <path>
{% endhighlight %}

where <path> is the path is the path to a file with operations specified in a stack-based (RPN) manner.  For example, a command file which adds grid1 and grid2, multiplies the result by 5.3, adds grid4, subtracts 99.3 from the whole thing, and writes the result on grid5 would have the form:



The file names, scalar values, and operations must be separated by tabs, line breaks, or white space.  Comments can be included between the character # and a new line (in the usual shell script fashion).

###mergedx2

mergedx2 is a replacement for the APBS mesh utility mergedx.  The old mergedx is deprecated and will be removed in a future release. 

mergedx2 can perform a number of grid manipulation operations. Specifically:

<ul>
<li>Resampling of one or more OpenDX map files (for example to alter the grid spacing of separate OpenDX files for further manipulation)</li>
<li>Extracting a subregion of an existing OpenDX map file</li>
</ul>

Usage and examples of running mergedx2 are given below:

{% highlight bash %}
mergedx2 [FLAGS] file1.dx [file2.dx ...]
{% endhighlight %}

####Arguments

<ul>
<li>file1.dx [file2.dx ...]<br>The OpenDX files to be merged</li>
</ul>

####Flags

<ul>
<li>-o<br>Output OpenDX file
Specifying -o will assign an output name to the merged OpenDX file. The default file name is gridmerged.dx.
(default: gridmerged.dx)</li>
<li>-r<br>Resolution of grid points
Specifying -r will allow the user to supply a spacing of grid points in the output OpenDX map. If the specified resolution is smaller than the actual resolution in the input files, upsampling will occur and a message printed to stdout will be passed. The default value is 1.0.
(default: 1.0 Angstroms)</li>
<li>-b<br>Bounds of output map as: xmin ymin zmin xmax ymax zmax
The -b flag allows the user to specify a subvolume of the volume occupied by all input OpenDX files. Ranges provided that fall outside the available bounds will cause the program to terminate. To determine the bounds of all input files use the -s option. The order for specifying bounds is:   -b xmin ymin zmin xmax ymax zmax
The default values are the full bounds of all input files.
(default: calculates full map)</li>
<li>-s<br>Print bounds of merged input dx files. Doesn't generate a merged map.
Specifying -s with all of the input files listed will run a calculation that will print the current minimum and maximum bounds for all user supplied input files. No output (merged) OpenDX file is produced. The -s flag will cause all other options to be ignored.
(-s is exclusive of the other flags)</li>
<li>-h<br>Print this message</li>
</ul>

All flags are optional. Flags must be set prior to listing input files. You must provide at least one OpenDX file. Subsequent files can be listed as a series of names on the command line.

####Examples

{% highlight bash %}
./mergedx2 -r 0.5 file1.dx file2.dx
./mergedx2 -b -3.13 -2.0 -2.14 31.0 25.4 22.1 file1.dx file2.dx file3.dx
./mergedx2 -o myfile.dx -r 0.5 -b -3.13 -2.0 -2.14 31.0 25.4 22.1 file1.dx file2.dx
./mergedx2 -s
{% endhighlight %}