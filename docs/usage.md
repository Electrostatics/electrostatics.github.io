---
layout: docs
title: Basic Usage
prev_section: installation
next_section: input-overview
permalink: /docs/usage/
---

##Invocation

In addition to using APBS through other programs, there are two ways to invoke APBS from the command line. The traditional approach uses the primary APBS binary to run APBS on local resources. However, in recent versions of APBS, we have added the ability to run APBS through a secondary Python-based program which can be invoked locally but uses Opal web services to run APBS on remote resources (with no expense to the user).

<div>
	<ul>
		<li>APBS command-line binary</li>
		<li>APBS Opal client</li>
	</ul>
</div>

###APBS command-line binary

As mentioned in the installation and availability section, the main APBS binary is installed in ${APBS_PREFIX}/bin where ${APBS_PREFIX} is the top-level directory you chose for the installation. Of course, you can move the binary to any directory you choose. APBS is invoked with a very simple syntax:

{% highlight bash %}
apbs [options] input-file
{% endhighlight %}