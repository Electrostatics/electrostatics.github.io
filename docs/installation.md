---
layout: docs
title: Installation
prev_section: downloads
next_section: usage
permalink: /docs/installation/
---

<div class="note info">
  <h5>Installation Options</h5>
  <p>
    Several installation options are available for APBS; however, <a href="#binary">binary</a> installation is the preferred mechanism.
View the sections below to learn more about each installation type.
  </p>
</div>

### APBS Directory Structure

The APBS installation process (whether compiled from source or installed as pre-compiled binaries) will create several directories under ${APBS_PREFIX}:

- [bin] -- where the main apbs binary resides
- [share] -- contains the documentation (user guide, tutorial, programmer's guide) as well as a number of examples  and test cases for APBS
- [include] -- contains header files for using APBS libraries with other applications
- [lib] -- contains library files for using APBS libraries with other applications
- [tools] -- which contains a number of "helper" applications for use with APBS

At this point you are ready to use APBS; either by calling the binary directly or adding the above directory to your path. As mentioned above, there are also several tools provided with APBS that remain in the APBS directory; these are described in later portions of this manual. You may wish to copy these to a global location (or the same place as your APBS binary) at this time.

### Installation Types

<div>
<p>
There are multiple installation types; however, binary installation is the preferred method.
<ul>
<li><a href="http://sobolevnrm.github.io/apbs-pdb2pqr/docs/installation/#binary">Binary installation</a></li>
<li><a href="http://sobolevnrm.github.io/apbs-pdb2pqr/docs/installation/#source">Installation from source</a></li>
</ul>
</p>
</div>

<h2 id="binary">Binary Installation</h2>

The best way to install APBS is via the binary installation.

We currently offer binaries for the RedHat Linux platform on a variety of architectures as well as command-line binaries for WinXP and Mac OS X. Binaries can be downloaded from the APBS download page. For all other systems, please install from source on your particular platform and feel free to contact the APBS users mailing list for more help and/or to request a binary for that system.

<div class="note warning">
  <h5>Attention Windows Users</h5>
  <p>If you are using APBS on a Windows system, you may not want to install it in a directory with spaces in the path name (e.g., C:\Program Files\) as this can cause problems with some visualization programs.</p>
</div>

For all platforms besides Windows, APBS binaries are provided in compressed tar format (*.tgz). On most systems, the binaries can be unarchived by simply double-clicking or opening the archive. This can also be accomplished on the command line by

{% highlight html %}
gzip -dc apbs-#.#.#-XYZ.tgz | tar xvf -
{% endhighlight %}

where XYZ is the particular architecture of the binary you downloaded and #.#.# is the version number. Note that this will expand into a directory called apbs-#.#.#-XYZ. The contents of this directory can be placed anywhere on your system that you prefer (and have access to) and follow the structure: