---
layout: docs
title: PDB2PQR Installation
prev_section: usage
next_section: pdb2pqr-overview
permalink: /docs/pdb2pqr-installation/
---

<h2>Installation and availability</h2>

<h3>Overview</h3>

<p>Installation on most systems is rather straightforward - as the bulk of the PDB2PQR code is written in Python, the PDB2PQR code itself is architecture/compiler independent. PDB2PQR has been tested using Python versions 2.6 through 2.7 - problems will occur with other versions.

If you would like to enable pdb2pka or ligand support, then you must have <a href="http://numpy.scipy.org/">Numpy</a> installed.</p>

<h3>Configuration and Build</h3>

<p>PDB2PQR will need to be configured and compiled in order to run:</p>

{% highlight text %}
$ python scons/scons.py (see python scons/scons.py --help for more options)
{% endhighlight %}

<p>This should configure pdb2pqr and compile the pdb2pka wrappers necessary to interface with PDB2PQR and ligand support.</p>

<h3>Configuration File</h3>

<p>Compilation and installation can be configured by editing the build_config.py file. This is the preferred way to configure the program.
Instructions and examples for each setting are included in the file.</p>

<h3>Configuration Command Line Parameters</h3>

<p>These will override any setting in build_config.py.</p>

{% highlight text %}
PREFIX=<DIR>                    Set install directory. Default is ~/pdb2pqr
URL=<URL>                   Set url for the website.  Default http://<COMPUTER NAME>/pdb2pqr/
APBS=<APBS_BINARY>            Location of APBS binary.
OPAL=<OPAL_URL>             Set URL for Opal service
APBS_OPAL=<APBS_OPAL_URL>       Set URL for APBS Opal service.
MAX_ATOMS=<MAX_ATOMS>           Sets the maximum number of atoms in a protein for non-Opal job submission. Only affects web tools. Default is 10000
BUILD_PDB2PKA=False           Disable pkb2pka compilation. Needed if no C++ compiler is installed or numpy is not installed. pdb2pka is required for ligand support.
{% endhighlight %}

<h3>Installation</h3>

<p>Installing is only needed if you plan to set up the web service or to make the install available to all users. The installation location is specified by the PREFIX setting above.</p>

{% highlight text %}
$ python scons/scons.py install
{% endhighlight %}

<h3>Using a different python.</h3>

pdb2pqr will be configured to use whichever python was used to run the build script.
If you would like to use a different installed python to run pdb2pqr run the scons/scons.py script with that python. For example:

{% highlight bash%}
$ /opt/python27/python scons/scons.py 
{% endhighlight %}

If ligand support is required Numpy must be installed on the python used to build pdb2pqr.

<h3>Windows Support</h3>

Compilation of pdb2pka on Windows requires that mingw32 and msys be installed along with the gcc C++ compiler. Compilation with Visual Studio is not currently supported. Use MinGW-Get to install mingw. During installation select "C++ Compiler" and "MinGW Developer ToolKit" <a href="http://www.mingw.org/">http://www.mingw.org/</a>

<h3>Numpy</h3>

If numpy cannot be installed directly on the python used to run pdb2pqr you can either install numpy for your local user account or use virtualenv. Homebrew may be an option on OSX. <a href="http://docs.python.org/2/install/index.html#alternate-installation">http://docs.python.org/2/install/index.html#alternate-installation</a> <a href="http://stackoverflow.com/questions/7465445/how-to-install-python-modules-without-root-access">http://stackoverflow.com/questions/7465445/how-to-install-python-modules-without-root-access</a> <a href="http://www.virtualenv.org">http://www.virtualenv.org</a>

<h3>Binary Builds</h3>

A PyInstaller spec file is included if a stand alone binary build (no python install or compile required to run) is desired. <a href="http://www.pyinstaller.org/">http://www.pyinstaller.org/</a>

PyInstaller 2.1 or newer installed as python library is required. To create standalone build, first build the application as normal then run

{% highlight bash%}
pyinstaller pdb2pqr.spec
{% endhighlight %}

in the root archive folder. The distributable program will be in the dist/pdb2pqr folder.

Each supported platform has different needs when creating the binary build:

<h4>Windows</h4>

On windows pywin32 is required.

<h4>Linux</h4>

The built binaries will dynamically link against the system standard libs. For this reason the Linux binaries should be built on an older system to increase compatibility if needed.

<h4>OSX</h4>

On the Mac you must use homebrew and use the python that it installs with brew python. See <a href="http://brew.sh/">http://brew.sh/</a> and <a href="https://github.com/Homebrew/homebrew/wiki/Homebrew-and-Python">https://github.com/Homebrew/homebrew/wiki/Homebrew-and-Python</a>. Once homebrew python is setup and configured correctly pyinstaller and numpy can be installed with `pip install numpy` and `pip install pyinstaller`. If the global python is used the binary will fail when the `--ligand` option is used. Similar to Linux, this binary is dynamically linked against the system libraries. The binary will not work on OSX older than the version built on. We officially support OSX 10.6 or newer.