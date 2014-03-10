---
layout: docs
title: PDB2PQR Installation
prev_section: usage
next_section: pdb2pqr-overview
permalink: /docs/pdb2pqr-installation/
---

<h2>Installation and availability</h2>

<h3>Overview</h3>

<p>Most users will likely interact with PDB2PQR through the servers listed at <a href="http://sobolevnrm.github.io/apbs-pdb2pqr/docs/downloads/">Web servers</a>  However, it is also possible to install local versions of PDB2PQR. These local installations not only provide a web server but also give a command line version of the PDB2PQR software that can be customized through a variety of extensions.
The PDB2PQR source code can be downloaded. As the bulk of the PDB2PQR code is written Python, the PDB2PQR code itself is architecture- and compiler-independent. PDB2PQR has been tested using Python versions 2.6-2.7 and <a href="http://www.numpy.org/#older_array" target="_blank">Numeric</a> version 24.2 - problems may occur with other versions. Users who simply want to use the PDB2PQR without PROPKA or ligand parameterization support can unarchive the source code, change to the top-level source code directory, and type</p>

{% highlight bash %}
$ ./configure --disable-propka --disable-pdb2pka
$ make 
$ make install 
{% endhighlight %}

<p>or skip the configure/make process altogether.</p>

<h3>PROPKA Support</h3>

<p>To use PROPKA with PDB2PQR, a three step installation is necessary, making use of available C and Fortran compilers:</p>

{% highlight bash %}
$ ./configure
$ make 
$ make install
{% endhighlight %}

<p>This should compile the PROPKA wrappers necessary to interface with PDB2PQR. If the compilation fails, please send a bug report.</p>

<h3>PDB2PKA Support</h3>

<p>PDB2PKA is the PDB2PQR library that includes both ligand parameterization and Poisson-Boltzmann-based pKa calculation routines. This code is written in C++ and Python. This portion of the code also requires the Python Numeric or NumPy package. Note that PDB2PQR has only been extensively tested against Numeric. Unlike earlier versions, PDB2PKA is enabled by default in this version. To use PDB2PKA with PDB2PQR, a three step installation is necessary, making use of available C and Fortran compilers:<p>

{% highlight bash %}
$ ./configure
$ make 
$ make install
{% endhighlight %}

<p>This should compile the PDB2PKA wrappers necessary to interface with PDB2PQR. Note that this will also compile PROPKA supprot; this can be explicitly disabled by</p>

{% highlight bash %}
$ ./configure --enable-pdb2pka --disable-propka
$ make 
$ make install
{% endhighlight %}

<p>If the compilation fails, please send a bug report.</p>