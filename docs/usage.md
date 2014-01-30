---
layout: docs
title: Basic Usage
prev_section: installation
next_section: input-overview
permalink: /docs/usage/
---

##Invocation

In addition to using APBS through other programs, there are two ways to invoke APBS from the command line. The traditional approach uses the primary APBS binary to run APBS on local resources. However, in recent versions of APBS, we have added the ability to run APBS through a secondary Python-based program which can be invoked locally but uses Opal web services to run APBS on remote resources (with no expense to the user).

{% highlight bash %}
hello world
{% endhighlight %}

Jekyll also comes with a built-in development server that will allow you to
preview what the generated site will look like in your browser locally.

{% highlight bash %}
$ jekyll serve
# => A development server will run at http://localhost:4000/

$ jekyll serve --detach
# => Same as `jekyll serve` but will detach from the current terminal.
#    If you need to kill the server, you can `kill -9 1234` where "1234" is the PID.
#    If you cannot find the PID, then do, `ps aux | grep jekyll` and kill the instance. [Read more](http://unixhelp.ed.ac.uk/shell/jobz5.html).

$ jekyll serve --watch
# => Same as `jekyll serve`, but watch for changes and regenerate automatically.
{% endhighlight %}

These are just a few of the available [configuration options](../configuration/).
Many configuration options can either be specified as flags on the command line,
or alternatively (and more commonly) they can be specified in a `_config.yml`
file at the root of the source directory. Jekyll will automatically use the
options from this file when run. For example, if you place the following lines
in your `_config.yml` file:

{% highlight yaml %}
source:      _source
destination: _deploy
{% endhighlight %}

Then the following two commands will be equivalent:

{% highlight bash %}
$ jekyll build
$ jekyll build --source _source --destination _deploy
{% endhighlight %}

For more about the possible configuration options, see the
[configuration](../configuration/) page.
