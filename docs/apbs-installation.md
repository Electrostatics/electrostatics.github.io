---
layout: docs
title: Installation
prev_section: visualizing-results
next_section: usage
permalink: /docs/apbs-installation/
---


<style>.section-nav {display:none;}</style>




<!---
<div class="note info">
  <h5>Installation Options</h5>
  <p>
    Several installation options are available for APBS; however, <a href="#binary">binary</a> installation is the preferred mechanism.
View the sections below to learn more about each installation type.
  </p>
</div>
--->




<!---
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

<h2 id="binary">Installation</h2>
--->



<p>The best way to install APBS is via the binary installation, which you can <a href="http://www.poissonboltzmann.org/apbs/downloads">download</a>.</p>

<p>We currently offer binaries for the RedHat Linux platform on a variety of architectures as well as command-line binaries for WinXP and Mac OS X. Binaries can be downloaded from the APBS download page. For all other systems, please install from source on your particular platform and feel free to contact the APBS users mailing list for more help and/or to request a binary for that system.</p>

<div class="note warning">
  <h5>Attention Windows Users</h5>
  <p>If you are using APBS on a Windows system, you may not want to install it in a directory with spaces in the path name (e.g., C:\Program Files\) as this can cause problems with some visualization programs.</p>
</div>

<p>For all platforms besides Windows, APBS binaries are provided in compressed tar format (*.tgz). On most systems, the binaries can be unarchived by simply double-clicking or opening the archive. This can also be accomplished on the command line by:</p>

{% highlight bash %}
gzip -dc apbs-#.#.#-XYZ.tgz | tar xvf -
{% endhighlight %}

<p>where XYZ is the particular architecture of the binary you downloaded and #.#.# is the version number. Note that this will expand into a directory called apbs-#.#.#-XYZ. The contents of this directory can be placed anywhere on your system that you prefer (and have access to) and follow the structure:</p>

- [bin] -- contains the main APBS executable
- [share/apbs] -- contains additional APBS-related files
- [doc] -- the APBS programmer guide
- [examples] -- APBS examples
- [tests] -- the APBS test suite
- [tools] -- useful programs to help process APBS input and output
- [include] -- header files for building software that calls APBS
- [lib] -- libraries for building software that calls APBS

<!---
<h2 id="source">Installation from source</h2>

#### Installation of APBS from source is a two-step process

<p>
<ol>
  <li><a href="#stable">Download your preferred method of APBS (Stable or Developmental)</a></li>
  <li><a href="#installing">Install APBS via CMAKE</a></li>
</ol>
</p>

<h4 id="stable">Stable Version</h4>

<p>We recommend that most users compile APBS from our official releases, which can be downloaded <a href="http://www.poissonboltzmann.org/apbs/downloads" target="_blank">here</a>.</p>
--->

### APBS Directory Structure

The APBS installation process (whether compiled from source or installed as pre-compiled binaries) will create several directories under ${APBS_PREFIX}:

- [bin] -- where the main apbs binary resides
- [share] -- contains the documentation (user guide, tutorial, programmer's guide) as well as a number of examples  and test cases for APBS
- [include] -- contains header files for using APBS libraries with other applications
- [lib] -- contains library files for using APBS libraries with other applications
- [tools] -- which contains a number of "helper" applications for use with APBS

At this point you are ready to use APBS; either by calling the binary directly or adding the above directory to your path. As mentioned above, there are also several tools provided with APBS that remain in the APBS directory; these are described in later portions of this manual. You may wish to copy these to a global location (or the same place as your APBS binary) at this time.



<h4 id="developmental">Developmental Version</h4>

<p>For the adventurous, you can download and build the source from our <a href="http://sourceforge.net/p/apbs/_list/git" target="_blank">github repository</a>. 

<!---Starting with APBS 1.4, we have migrated away from Subversion for APBS source control and have adopted Git. All users are welcome to read access of the APBS Git repository following the instructions <a href="http://sourceforge.net/projects/apbs/" target="_blank">here</a>. Additionally, you can browse the APBS Git repository <a href="http://sourceforge.net/p/apbs/_list/git" target="_blank">online</a>.</p>--->


