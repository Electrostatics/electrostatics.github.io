---
layout: docs
title: APBS Installation
prev_section: usage
next_section: pdb2pqr-overview
permalink: /docs/apbs-installation/
---
##Installation and availability

### Overview

Most users will likely interact with PDB2PQR through the servers listed at [Web servers](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/downloads/).  However, it is also possible to install local versions of PDB2PQR. These local installations not only provide a web server but also give a command line version of the PDB2PQR software that can be customized through a variety of extensions.
The PDB2PQR source code can be downloaded. As the bulk of the PDB2PQR code is written Python, the PDB2PQR code itself is architecture- and compiler-independent. PDB2PQR has been tested using Python versions 2.6-2.7 and <a href="http://www.numpy.org/#older_array" target="_blank">Numeric</a> version 24.2 - problems may occur with other versions. Users who simply want to use the PDB2PQR without PROPKA or ligand parameterization support can unarchive the source code, change to the top-level source code directory, and type

{% highlight bash %}
$ ./configure --disable-propka --disable-pdb2pka
$ make 
$ make install 
{% endhighlight %}

or skip the configure/make process altogether.

###PROPKA Support

To use PROPKA with PDB2PQR, a three step installation is necessary, making use of available C and Fortran compilers:

{% highlight bash %}
$ ./configure
$ make 
$ make install
{% endhighlight %}

This should compile the PROPKA wrappers necessary to interface with PDB2PQR. If the compilation fails, please send a bug report.

###PDB2PKA Support

PDB2PKA is the PDB2PQR library that includes both ligand parameterization and Poisson-Boltzmann-based pKa calculation routines. This code is written in C++ and Python. This portion of the code also requires the Python Numeric or NumPy package. Note that PDB2PQR has only been extensively tested against Numeric. Unlike earlier versions, PDB2PKA is enabled by default in this version. To use PDB2PKA with PDB2PQR, a three step installation is necessary, making use of available C and Fortran compilers:

{% highlight bash %}
$ ./configure
$ make 
$ make install
{% endhighlight %}

This should compile the PDB2PKA wrappers necessary to interface with PDB2PQR. Note that this will also compile PROPKA supprot; this can be explicitly disabled by

{% highlight bash %}
$ ./configure --enable-pdb2pka --disable-propka
$ make 
$ make install
{% endhighlight %}

If the compilation fails, please send a bug report.

###Web server installation

All the necessary files for web server installation are available with the PDB2PQR software; however, we would appreciate if users contact us before installing a publicly-accessible version of the web server so we can ensure that you are informed of PBD2PQR updates, etc.
<b>Note:</b> these instructions are intended for systems administrators with the ability to change the behavior of their web server software and/or install software in privileged locations. To set up a server, simply run

{% highlight bash %}
$ ./configure 
$ make 
$ make install 
{% endhighlight %}

By default, the server is installed in /var/www/html/pdb2pqr and the default URL is http://fully_qualified_domain_name/pdb2pqr. If the user does not have root permission, then the server is installed in ${HOME}/pdb2pqr.

Configure options include

- prefix -- Installation directory (e.g., /var/www/html/pdb2pqr)
- with-url -- URL for the server (e.g., http://somedomain/pdb2pqr)
- disable-propka -- Disable PROPKA
- with-python -- Path to Python (e.g., /usr/local/bin/python2.5)
- with-opal -- Enable Opal service integration pointing to the remote clusters available at NBCR; optionally specify a URL for an alternate remote Opal service.Enable the APBS web interface. Must be pointing to a local APBS binary.useful programs to help process APBS input and output
- with-apbs-opal -- Enable Opal service integration for the APBS web interface pointing to the remote clusters available at NBCR; optionally specify a URL for an alternate remote Opal service. Requires simultaneous use of the --with-apbs flag, which must be pointing to a version of APBS greater than 1.0.0 (or the current SVN revision).

###Troubleshooting

It is highly recommended that --prefix and --with-url point to the same directory. Specifying --prefix=/var/www/html/pdb2pqr-test --with-url=http://somedomain/pdb2pqr-test is recommened. On the other hand, specifying something like --prefix=/var/www/html/mypdb2pqr --with-url=http://somedomain/pdb2pqr-test is not recommened because mypdb2pqr and pdb2pqr-test are different names.
If the server interface loads fine, but you cannot execute pdb2pqr by clicking the "Submit" button, make sure you have the permission to execute pdb2pqr.cgi file. In particular, ensure that the access mode of pdb2pqr.cgi allows execution by the webserver (e.g., chmod +x /var/www/html/pdb2pqr/pdb2pqr.cgi). Additionally, you may need to change the configuration of your webserver to enable CGI execution. For the Apache webserver, this involves editing httpd.conf to add ExecCGI to the option list for your server. In some installations, this may be as simple as adding a line like Options Indexes FollowSymLinks ExecCGI<code> in the <code><Directory "/var/www/html"> section of the Apache configuration file. If you modify this file, you will need to restart the web server.