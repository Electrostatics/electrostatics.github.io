---
layout: docs
title: Installation
prev_section: usage
next_section: pdb2pqr-overview
permalink: /docs/pdb2pqr-installation/
---


<style>.section-nav {display:none;}</style>



<h2>Installation and Availability</h2>

### Overview

Most users will likely interact with PDB2PQR through the servers listed at Web servers.  However, it is also possible to install local versions of PDB2PQR. These local installations give a command line version of the PDB2PQR software that can be customized through a variety of extensions. Compiled from source a local version can provide a web server.

### Using a Binary Build

Binary builds do not require python or NumPy be installed to use. Everything needed to run PDB2PQR is included. Just unpack and use. PDB2PQR can be run with the “pdb2pqr” executable found in the base folder of the uncompressed archive.

Binary tarballs have “bin” in the file name and are named by target platform.

Binary builds DO NOT provide web server functionality. For that PDB2PQR must be compiled from source.

OSX binaries require OSX 10.6 or newer. The OSX binary is 64-bit.

Linux binaries require CentOS 6 or newer and have been tested on Ubuntu 12.04 LTS and Linux Mint 13. If you are running 64-bit Linux use the 64-bit libraries. In some cases the needed 32-bit system libraries will not be installed on a 64-bit system.

Windows binaries are 32 bit and were built and tested on Windows 7 64-bit but should work on Windows XP, Vista, and 8 both 32 and 64-bit systems.

### Compiling From Source

The PDB2PQR source code can be downloaded. As the bulk of the PDB2PQR code is written Python, the PDB2PQR code itself is architecture- and compiler-independent. PDB2PQR has been tested using Python versions 2.6-2.7. PDB2PQR will not work with older versions of python. Users who simply want to use the PDB2PQR without PROPKA or ligand parameterization support can unarchive the source code, change to the top-level source code directory, and type:

{% highlight text %}
$ python scons/scons.py BUILD_PDB2PKA=False 
$ python scons/scons.py install
{% endhighlight %}

If NumPy is not available PDB2PQR will be built without ligand support automatically.



### PROPKA support

PROPKA support has no special requirements and is always available.

### PDB2PKA support

PDB2PKA is the PDB2PQR library that includes both ligand parameterization and Poisson-Boltzmann-based pKa calculation routines. This code is written in C++ and Python. This portion of the code also requires the Python NumPy package. Unlike earlier versions, PDB2PKA is enabled by default in this version. To use PDB2PKA with PDB2PQR, a two-step installation is necessary, making use of the available C compiler and NumPy library:

{% highlight text %}
$ python scons/scons.py 
$ python scons/scons.py install
{% endhighlight %}

This should compile the PDB2PKA wrappers necessary to interface with PDB2PQR and ligand support.

If the compilation fails, please send a bug report.

### Configuration File

Compilation and installation can be configured by editing the build_config.py file.

This is the preferred way to configure the program. 

Instructions and examples for each setting are included in the file.

### Configuration Command Line Parameters

These will override any setting in build_config.py.

`PREFIX=<DIR>` Set install directory. Default is ~/pdb2pqr

`URL=<URL>` Set url for the website.  Default http://<COMPUTER NAME>/pdb2pqr/

`APBS=<APBS_BINARY>` Location of APBS binary.

`OPAL=<OPAL_URL>` Set URL for Opal service

`APBS_OPAL=<APBS_OPAL_URL>` Set URL for APBS Opal service.

`MAX_ATOMS=<MAX_ATOMS>` Sets the maximum number of atoms in a protein for non-Opal job submission. Only affects web tools. Default is 10000

`BUILD_PDB2PKA=False` Disable pkb2pka compilation. Needed if no C++ compiler is installed or NumPy is not installed. pdb2pka is required for ligand support.

### Web server installation

All the necessary files for web server installation are available with the PDB2PQR software; however, we would appreciate if users contact us before installing a publicly-accessible version of the web server so we can ensure that you are informed of PBD2PQR updates, etc.

<div class="note">
	<h5>Note</h5>
	<p>These instructions are intended for systems administrators with the ability to change the behavior of their web server software and/or install software in privileged locations. To set up a server edit the build_config.py file and set URL and PREFIX to appropriate values then run.</p>
</div>
{% highlight text %}
$ python scons/scons.py 
$ python scons/scons.py install
{% endhighlight %}

By default, the server is installed in `~/pdb2pqr` and the default URL is http://computer_name/pdb2pqr.

### Troubleshooting

It is highly recommended that PREFIX and URL point to the same directory. Specifying `PREFIX=/var/www/html/pdb2pqr-test URL=http://somedomain/pdb2pqr-test` is recommened. On the other hand, specifying something like `PREFIX=/var/www/html/mypdb2pqr URL=http://somedomain/pdb2pqr-test` is not recommened because `mypdb2pqr` and `pdb2pqr-test` are different names.

If the server interface loads correctly but you cannot execute pdb2pqr by clicking the "Submit" button, make sure you have the permission to execute `pdb2pqr.cgi` file. In particular, ensure that the access mode of `pdb2pqr.cgi` allows execution by the webserver (e.g., `chmod +x /var/www/html/pdb2pqr/pdb2pqr.cgi`). Additionally, you may need to change the configuration of your webserver to enable CGI execution. For the Apache webserver, this involves editing `httpd.conf` to add `ExecCGI` to the option list for your server. In some installations, this may be as simple as adding a line like `Options Indexes FollowSymLinks ExecCGI<code>` in the `<code><Directory "/var/www/html">` section of the Apache configuration file. If you modify this file, you will need to restart the web server.



