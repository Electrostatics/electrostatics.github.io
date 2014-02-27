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