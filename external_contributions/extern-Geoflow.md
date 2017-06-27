---
layout: external_contributions
title: Geometric Flow Model
prev_section:
next_section:
permalink:
---

{% include no-prev-next.html %}
<script type="text/javascript" language="JavaScript"><!--
function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}
function Open(d) {
document.getElementById(d).style.display = "block";
}
//-->
window.onload = function() {
  // Check if hash exists
  if(window.location.hash) {
    // Remove the "#" from the hash
    hash = window.location.hash.substr(1);
    // Display element with id == hash
    document.getElementById(hash).style.display = "block";
  }
}
</script>

<!---
{% include no-prev-next.html %}
--->

To increase the accuracy of our implicit solvent modeling, we have recently implemented a differential geometry based geometric flow
solvation model <a href="https://www.ncbi.nlm.nih.gov/pubmed/23212974">(Thomas, 2013)</a>. In this model, polar and nonpolar free energies are coupled through a characteristic function. This function describes a smooth dielectric interface profile across the solvent-solute boundary.

#### Geometric Flow algorithm

To increase the accuracy of our implicit solvent modeling, we have recently implemented a differential geometry based geometric flow solvation model. In this model, polar and nonpolar free energies are coupled through a characteristic function. This function describes a smooth dielectric interface profile across the solvent-solute boundary. 

For our modeling, a generalized form of the Poisson equation for computing the electrostatic is used.  The solutions for the electrostatic potential ($\phi$) and the characteristic function ($S$) are obtained by minimizing the free energy functional. The dielectric function $\epsilon$($S$) takes on the value $\epsilon_m$ in the solute region ($S$=1) and the value $\epsilon_s$ in the solvent region ($S$=0).

For this model, we have utilized an Eulerian formulation of the geometric flow problem. This means that $S$ varies smoothly across the solute-solvent interfaces and leads to a non-linear partial differential equation for the characteristic function, $S$:

\\[-\nabla\cdot\left(\gamma\frac{\nabla S}{\parallel\nabla S\parallel}\right)+p-\rho_0U^{att}+\rho_m\phi - \frac{1}{2}\epsilon_m\mid\nabla\phi\mid^2+\frac{1}{2}\epsilon_s\mid\nabla\phi\mid^2=0\\]

where $\gamma$ is the microscopic surface tension, $p$ is the hydrodynamic pressure, and $U^{att}$ is the attractive potential of the van der Waals dispersion interaction between the solute and the solvent. The solution to this non-linear PDE can be solved by utilizing the following parabolic PDE, which is known as the generalized geometric flow equation and is coupled with the Poisson equation through the characteristic function $S$:

\\[\frac{\partial S}{\partial t}=\gamma\parallel\nabla S\parallel\left[\nabla\cdot\left(\frac{\nabla S}{\parallel\nabla S\parallel}\right)+\frac{V}{\gamma}\right]\\]

where $V$ is known as the generalized flow potential as described in the following equation:

\\[V=-p+\rho_0U^{att}-\rho_m\phi+\frac{\epsilon_m}{2}\mid\nabla\phi\mid^2-\frac{\epsilon_s}{2}\mid\nabla\phi\mid^2\\]

These equations were solved using a second-order central finite difference scheme, which utilizes a bi-conjugate gradient stabilized solver.

### APBS Implementation

To run Geoflow on APBS, the input file requires section READ and ELEC as the following format:

{% highlight bash %}
  READ
  ...
  END

  ELEC
  ...
  END

  QUIT
{% endhighlight %}

The details of each section are:

<ul>
  <li><a href="#read">READ input file section</a></li>
  <li><a href="#elec">ELEC input file section</a></li>
</ul>

<h3 id="read">READ Keyword</h3>

The target proteins should be in the format of APBS's .pqr files. Only the first protein in the list will be calculated, the rest input of proteins will be ignored currently.

<a href="javascript:ReverseDisplay('read-keyword-mol')">mol</a>

<div id="read-keyword-mol" style="display:none;">

<p><code>mol {format} {path}</code></p>

<p>This command specifies the molecular data to be read into APBS.</p>

<p>The required arguments are:</p>

<p><code>format</code>The format of the input data. Acceptable values include:</p>

<p style="margin-left:30px;"><code>pqr</code> Specify that molecular data is in PQR format.</p>

<p><code>path</code>The location of the molecular data file.</p>
</div>
<hr />

<!---
- [mol](read-keywords/#mol)--->

#### READ examples

{% highlight bash %}
READ
   mol pqr 1a63.pqr
END
{% endhighlight %}

<h3 id="elec">ELEC</h3>

The ELEC section of the APBS input file is used for general electrostatics calculation parameters and treecode specification parameters:

{% highlight bash %}
ELEC [ name {id} ]
        geoflow-auto
        {keywords...}
END
{% endhighlight %}

The currently implemented keywords are:

<a href="javascript:ReverseDisplay('elec-keyword-geoflow-auto')">geoflow-auto</a>

<div id="elec-keyword-bem-manual" style="display:none;">

<p>Specifies that the Geoflow solver should be used.</p>

The syntax is:
{% highlight bash %}
lpbe
{% endhighlight %}

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-ion')">ion</a>

<div id="elec-keyword-ion" style="display:none;">

<p>Specify the bulk concentrations of mobile ion species present in the system. This command can be repeated as necessary to specify multiple types of ions; however, only the largest ionic radius is used to determine the ion-accessibility function. The total bulk system of ions must be electroneutral which means the charge densities/concentrations of positive and negative ions must be equal.</p>

The syntax is:
{% highlight bash %}
ion charge {charge} conc {conc} radius {radius}
{% endhighlight %}

<p>where<br />
<code>charge</code> Mobile ion species charge (floating point number in e<sub>c</sub>)<br />
<code>conc</code> Mobile ion species concentration (floating point number in M)<br />
<code>radius</code> Mobile ion species radius (floating point number in Å)
</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-lpbe')">lpbe</a>

<div id="elec-keyword-lpbe" style="display:none;">

<p>Specifies that the linearized Poisson-Boltzmann equation should be solved.</p>

The syntax is:
{% highlight bash %}
lpbe
{% endhighlight %}

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-mol')">mol</a>

<div id="elec-keyword-mol" style="display:none;">

<p>Specify the molecule for which the PBE is to be solved. IDs are based on the order in which molecules are read by <code>READ mol</code> statements, starting from 1.</p>

The syntax is:
{% highlight bash %}
mol {id}
{% endhighlight %}

<p>where <code>id</code> is the integer ID of the molecule for which the Poisson-Boltzmann equation is to be solved.</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-gamma')">gamma</a>

<div id="elec-keyword-gamma" style="display:none;">

<p>Specify the microscopic surface tension.</p>

The syntax is:
{% highlight bash %}
gamma {g}
{% endhighlight %}

where <code>g</code> is the floating point value of the surface tension in kcal/(mol*A^2).

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-pdie')">pdie</a>

<div id="elec-keyword-pdie" style="display:none;">

<p>Specify the dielectric constant of the biomolecule. This is usually a value between 2 to 20, where lower values consider only electronic polarization and higher values consider additional polarization due to intramolecular motion.</p>

The syntax is:
{% highlight bash %}
pdie {diel}
{% endhighlight %}

where <code>die1</code> is the floating point value of the unitless biomolecular dielectric constant.

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-sdie')">sdie</a>

<div id="elec-keyword-sdie" style="display:none;">

<p>Specify the dielectric constant of the solvent. Bulk water at biologically-relevant temperatures is usually modeled with a dielectric constant of 78-80.</p>

The syntax is:
{% highlight bash %}
sdie {diel}
{% endhighlight %}

<p>where <code>die1</code> is a floating point number representing the solvent dielectric constant (unitless).</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-press')">press</a>

<div id="elec-keyword-press" style="display:none;">

<p>Specify the solvent pressure on the solute.</p>

The syntax for this command is:
{% highlight bash %}
press {p}
{% endhighlight %}

<p>where <code>p</code> is the floating point pressure kcal/(mol*A^3).</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-bconc')">bconc</a>

<div id="elec-keyword-bconc" style="display:none;">

<p>Specify the bulk solvent density.</p>

The syntax is:
{% highlight bash %}
bconc { b }
{% endhighlight %}

<p>where <code>b</code> is a floating point number indicating the bulk solvent density in A^-3.</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-vdwdisp')">vdwdisp</a>

<div id="elec-keyword-vdwdisp" style="display:none;">

<p>Specify whether the van der Waals dispersion is (off/on).</p>

The syntax is:
{% highlight bash %}
vdwdisp { vdw }
{% endhighlight %}

<p>where <code>vdw</code> is an integer (0 or 1)indicating if the van der Waals dispersion is (off/on).</p>

<hr />

</div>


<a href="javascript:ReverseDisplay('elec-keyword-etol')">etol</a>

<div id="elec-keyword-etol" style="display:none;">

<p>Specify the numerical error tolerance for the geoflow solver.</p>

The syntax is:
{% highlight bash %}
etol { e }
{% endhighlight %}

<p>where <code>e</code> is a floating point number for the error tolerance.</p>

<hr />

</div>


<!---
- [geoflow-auto](elec-keyword/#geoflow-auto)
- [bcfl](elec-keyword/#bcfl)
- [ion](elec-keyword/#ion)
- [lpbe](elec-keyword/#lpbe)
- [gamma](elec-keyword/#gamma)
- [pdie](elec-keyword/#pdie)
- [sdie](elec-keyword/#sdie)
- [press](elec-keyword/#press)
- [bconc](elec-keyword/#bconc)
- [vdwdisp](elec-keyword/#vdwdisp)
- [etol](elec-keyword/#etol)
--->


<h3 id="electrostatics">Electrostatics example</h3>

An example input for the Geometric flow model is shown in the following table:

{% highlight bash %}
read
    mol pqr 1a63.pqr
end
elec name comp_solv         # Solvated complex
    geoflow-auto

    lpbe                    # linearized PB
    bcfl mdh                # only supported BC (full multipole)
    mol 1

    grid 0.25 0.25 0.25     # grid spacing                    
    gamma 0.0001            # surface tension kcal/(mol*A^2) 
    pdie 1.5                # Solute dielectric                 
    sdie 80.00              # Solvent dielectric                
    press 0.008             # pressure kcal/(mol*A^3)           
    bconc 0.03346           # bulk solvent density A^-3   
    vdwdisp 0               # van der wal dispersion (on/off)
    etol 0.00001            # error tolerance for the solver
end

quit
{% endhighlight %}


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    "HTML-CSS": {scale: 95, linebreaks: {automatic: true}},
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
 });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
