---
layout: news_item
date: 2016-03-22 14:00:13 -0800
author: kozlac
version: compiled
categories: [release]
title: Version 1.4.2.1 (2016-01)
permalink: /news/apbs_Version_1.4.2.1_(2016-01)/
---


<h5>Binary Builds</h5>
<p>Binary releases may be found on <a href="https://gitgub.com/Electrostatics/apbs-pdb2pqr/releases/">GitHub</a> and on <a href="https://sourceforge.net/projects/apbs/files/apbs/">SourceForge</a>.
</p>

<h5>Changes from 1.4.2</h5>
<ul>
<li>Actually included PB-AM binary, examples, and documentation -- note that this is Linux and OS X only!</li>
<li>Fixed Windows build so that it is not a Debug build and ensured that no DLLs are missing.</li>
</ul>

<h5>NEW FEATURES</h5>
<ul>
<li>Poisson-Boltzmann Semi-Analytical Method (PB-SAM) packaged and build with APBS.</li>
<li>New Geometric flow API and improvements in speed (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/235">#235</a>).
<li>Support for BinaryDX file format (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/216">#216</a>).
<li>SOR solver added for mg-auot input file option.</li>
<li>DXMath improvements (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/168">#168</a>, <a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/216">#216</a>).</li>
<li>Test suite improvements:
<ul>
<li>APBS build in Travis-CI</li>
<li>Geometric Flow test added.</li>
<li>Protein RNA test enabled.(<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/149">#149</a>).</li>
<li>Intermediate result testing (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/64">#64</a>).</li>
</ul>
</li>
<li>Example READMEs onverted to markdown and updated with latest results.</li>
</ul>

<h5>BUG FIXES</h5>
<ul>
<li>OpenMPI (mg-para) functionality restored (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/190">#190</a>).</li>
<li>Fized parsing PQR files that contained records other than ATOM and HETATM (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/77">#77</a>, <a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/214">#214</a>).</li>
<li>Geometrix Flow boundary indexing bug fixed.</li>
<li>Build fixes:
<ul>
<li>Out of source CMake build are again working.</li>
<li>Python library may be built (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/372">#372</a>).</li>
<li>CentOS 5 binary builds for glibc compability.</li>
<li>Pull requests merged.</li>
</ul>
</li>
<li> Removed irrelevant warning messages (<a href="https://github.com/Electrostatics/apbs-pdb2pqr/issues/378">#378</a>).</li>
</ul>

<h5>NOTES</h5>
<ul>
<li>The following packages are treated as submodules in APBS:
<ul>
<li>Geometric Flow has been moved to its own <a href="https://github.com/Electrostatics/geoflow_c/">repository</a>.</li>
<li>FETk has been <a href="https://github.com/Electrostatics/FETK/">cloned</a>.</li>
<li>PB-SAM lives <a href="https://github.com/Electrostatics/PB-SAM/">here</a>.</li>
</ul>
</li>
<li>Added <a href="https://gitter.im/Electrostatics/help/">chat feature</a> for users. This can also be found from the support tab on <a href="http://www.poissonboltzmann.org/">http://www.poissonboltzmann.org</a>.</li>
</ul>

<h5>KNOWN BUGS</h5>
<ul>
<li>Travis-CI Linux builds are breaking because Geometric Flow relies on C++11 and Travis boxen have an old GCC that does not support C++11. This is also an issue for CentOS 5.</li>
<li>BEM is temporarily disabled due to build issues.</li>
<li> Geometric Flow build is currently broken on Windows using Visual Studio.</li>
</ul>

