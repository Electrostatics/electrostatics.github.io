---
layout: news_item
date: 2011-08-28 19:48:13 -0800
author: mchun0630
version: compiled
categories: [release]
title: Version 1.3.0 (2008-01)
permalink: /news/Version_1.3.0_(2008-01)/
---


<h5>New features</h5>
<ul>
<li>Added "make test" and "make adv-test"</li>
<li>Fixed problems with "make dist"</li>
<li>Added integration with Opal for launching jobs as well as querying status</li>
<li>The user may use NUMPY to specify the location of NUMPY.</li>
<li>Both PDB2PKA and PROPKA are enabled by default.  PDB2PKA is enabled by default since ligand parameterization would fail without this option.</li>
<li>For a regular user, "make install" tells the user the exact command the system administrator will use to make the URL viewable.</li>
<li>The default value of 7.00 for the pH on the server form is removed due to a problem with browser refershing.</li>
<li>Updated warning messages for lines beginning with SITE, TURN, SSBOND and LINK.</li>
<li>Switched license from GPL to BSD.</li>
<li>Made a new tar ball pdb2pqr-1.3.0-1.tar.gz for Windows users who cannot create pdb2pqr.py through configure process.</li>
<li>configure now automatically detects SRCPATH, WEBSITE, and the location of pdb2pqr.cgi.  In version 1.2.1, LOCALPATH(SRCPATH) and WEBSITE were defined in src/server.py and the location of pdb2pqr.cgi was specified in html/server.html (index.html).  Configure now uses variable substitution with new files src/server.py.in and html/server.html.in to create src/server.py and html/server.html (index.html).</li>
<li>SRCPATH is automatically set to the current working directory. WEBSITE is automatically set to http://fully_qualified_domain_name/pdb2pqr. Path to CGI is automcailly set to http://fully_qualified_domain_name/pdb2pqr/pdb2pqr.cgi.  </li>
<li>In version 1.2.1, there were 3 variables that needed to be changed to set up a server at a location different from agave.wustl.edu.  LOCALPATH, WEBSITE, and the location of the CGI file.  In this version, LOCALPATH has been used to SRCPATH to avoid confusion, since LOCALPATH could be interpreted as the local path for source files or the localpath for the server.</li>
<li>Since configure now automatically sets the locations of files/directories based on the machine and configure options, the default  agave.wustl.edu locations are not used anymore.</li>
<li>A copy of pdb2pqr.css is included.</li>
<li>configure prints out information about parameters such as python flags, srcpath, localpath, website, etc.</li>
<li>configure now automatically creates tmp/ with r + w + x permissions.</li>
<li>configure now automatically copies pdb2pqr.py to pdb2pqr.cgi.</li>
<li>configure now automatically copies html/server.html to index.html after variable substitution.  In src/server.py.in (src/server.py), WEBNAME is changed to index.html. </li>
<li>${HOME}/pdb2pqr is the default prefix for a regular user</li>
<li>/var/www/html is the default prefix for root</li>
<li>http://FQDN/pdb2pqr as default website.  </li>
<li>"make install" runs "make" first, and the copies the approprite files to --prefix.</li>
<li>If root did not specify --prefix and /var/www/html/pdb2pqr already</li>
<li>exists, then a warning is issued, and the user may choose to quit or overwrite that directory.  </li>
<li>Similary, if a regular user did not specify --prefix and ${HOME}/pdb2pqr already exists, then a warning is issued, and the user may choose to quit or overwrite that directory. </li>
<li>If root does not specify --prefix to be a directory to be inside /var/www/html (for example, --prefix=/share/apps/pdb2pqr), then a symbolic link will be made to /var/www/html/pdb2pqr during "make install".</li>
<li>configure option --with-url can be specified either as something like http://sandstone.ucsd.edu/pdb2pqr-test or sandstone.ucsd.edu/pdb2pqr-test.  It also doesn't matter if there's a '/' at the end.</li>
<li>If user is root, and the last part of URL and prefix are different, for example, --with-url=athena.nbcr.net/test0 --prefix=/var/www/html/pdb2pqr-test, then a warning will be issued saying the server will be viewable from the URL specified, but not the URL based on pdb2pqr-test.  In other words, the server will be viewable from athena.abcr.net/test0, but not athena.nbcr.net/pdb2pqr-test.  During "make  install", a symbolic link is created to enable users to view the server from --with-url.</li>
<li>When making a symbolic link for root, if then link destination already exists as a directory or a symoblic link, then the user may choose to continue with creating the link and overwrite the original directory or quit.</li>
<li>If the user changes py_path when running configure for PDB2PQR, then the change also applies to PROPKA.</li>
</ul>

<h5>Bug fixes</h5>
<ul>
<li>Fixed the line feed bug. Now PDB2PQR handles different input files (.pdb and .mol2) created or saved on different platforms.</li>
<li>Fixed "hbondwhatif" warning at start up.</li>
</ul>

<h5>Known issues</h5>
<ul>
<li>The install directory name cannot contain dots.</li>
<li>For python 2.2, if PDB2PQR cannot find module sets, then sets needs to be copied from .../python2.2/site-packages/MYSQLdb/sets.py to .../lib/python2.2</li>
</ul>
