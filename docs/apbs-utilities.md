---
layout: docs
title: Utilities
prev_section: apbs-faq
next_section: viz-overview
permalink: /docs/apbs-utilities/
---



<style>.section-nav {display:none;}</style>



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





<a href="javascript:ReverseDisplay('del2dx')">del2dx</a>

<div id="del2dx" style="display:none;">

<p>A utility program designed to convert DelPhi-format map files (electrostatic potential, etc.) to APBS OpenDX format.  This program is located in the APBS <code>tools/mesh</code> program and is invoked as:</p>

<p><code>del2dx delphi_file opendx_file</code></p>

<p>where <code>delphi_file</code> is the input file to be converted and <code>opendx_file</code> is the output OpenDX format file to be created.</p>

<hr />

</div>



<a href="javascript:ReverseDisplay('dxmath')">dxmath</a>

<div id="dxmath" style="display:none;">

<p>dxmath performs simple arithmetic operations with Cartesian grid data.  It is invoked as:</p>

<p><code>dx-math &lt;path&gt;</code></p>

<p><code>dx-math</code></p>

<p>where <code>&lt;path&gt;</code> is the path is the path to a file with operations specified in a stack-based (RPN) manner.  For example, a command file which adds grid1 and grid2, multiplies the result by 5.3, adds grid4, subtracts 99.3 from the whole thing, and writes the result on grid5 would have the form:</p>

{% highlight ruby %}
grid1
grid2 +
5.3 *
grid4 +
99.3 -
grid5 =
{% endhighlight %}

<p>The file names, scalar values, and operations must be separated by tabs, line breaks, or white space.  Comments can be included between the character # and a new line (in the usual shell script fashion).</p>

<hr />

</div>




<a href="javascript:ReverseDisplay('mergedx2')">mergedx2</a>

<div id="mergedx2" style="display:none;">

<p>mergedx2 is a replacement for the APBS mesh utility mergedx.  The old mergedx is deprecated and will be removed in a future release.</p>

<p>mergedx2 can perform a number of grid manipulation operations. Specifically:</p>

<ul>
<li>Resampling of one or more OpenDX map files (for example to alter the grid spacing of separate OpenDX files for further manipulation),</li>
<li>Extracting a subregion of an existing OpenDX map file.</li>
</ul>

<p>Usage and examples of running mergedx2 are given below:</p>

<code>mergedx2 [FLAGS] file1.dx [file2.dx ...]</code>



<h4>Arguments</h4>

<p><code>file1.dx [file2.dx ...]</code> The OpenDX files to be merged</p>

<h4>Flags</h4>

<p>All flags are optional. Flags must be set prior to listing input files. You must provide at least one OpenDX file. Subsequent files can be listed as a series of names on the command line.</p>

<p><code>-o</code> Output OpenDX file<br />
Specifying -o will assign an output name to the merged OpenDX file. The default file name is gridmerged.dx.
(default: gridmerged.dx)</p>

<p><code>-r</code> Output OpenDX file<br />
Resolution of grid points<br />
Specifying -r will allow the user to supply a spacing of grid points in the output OpenDX map. If the specified resolution is smaller than the actual resolution in the input files, upsampling will occur and a message printed to stdout will be passed. The default value is 1.0.<br />
(default: 1.0 Angstroms)</p>

<p><code>-b</code> Output OpenDX file<br />
Bounds of output map as: xmin ymin zmin xmax ymax zmax<br />
The -b flag allows the user to specify a subvolume of the volume occupied by all input OpenDX files. Ranges provided that fall outside the available bounds will cause the program to terminate. To determine the bounds of all input files use the -s option. The order for specifying bounds is: -b xmin ymin zmin xmax ymax zmax<br />
The default values are the full bounds of all input files.<br />
(default: calculates full map)
</p>

<p><code>-s</code> Output OpenDX file<br />
Print bounds of merged input dx files. Doesn't generate a merged map.<br />
Specifying -s with all of the input files listed will run a calculation that will print the current minimum and maximum bounds for all user supplied input files. No output (merged) OpenDX file is produced. The -s flag will cause all other options to be ignored.<br />
(-s is exclusive of the other flags)</p>

<p><code>-h</code> Print this message.</p>

<h4>Examples</h4>

{% highlight bash %}
./mergedx2 -r 0.5 file1.dx file2.dx<br />
./mergedx2 -b -3.13 -2.0 -2.14 31.0 25.4 22.1 file1.dx file2.dx file3.dx<br />
./mergedx2 -o myfile.dx -r 0.5 -b -3.13 -2.0 -2.14 31.0 25.4 22.1 file1.dx file2.dx<br />
./mergedx2 -s
{% endhighlight %}

<hr />

</div>






<a href="javascript:ReverseDisplay('multivalue')">multivalue</a>

<div id="multivalue" style="display:none;">

<p>This program evaluates OpenDX scalar data at a series of user-specified points and returns the value of the data at each point.  Run the program without any arguments.</p>

<p><code>multivalue</code></p>

<p>to see usage information.</p>

<hr />

</div>



