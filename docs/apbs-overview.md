---
layout: docs
title: Input Files
prev_section: usage
next_section: pdb2pqr-overview
permalink: /docs/apbs-overview/
---

## Input Files

APBS input files are loosely-formatted files which contain information about the input, parameters, and output for each calculation. These files are whitespace- or linefeed-delimited. Comments can be added to the input files via the # character; all text between the # and the end of the line is not parsed by APBS. Specific examples of APBS input are described in the Examples section.

#####Please note that there are several tools which help prepare APBS input files based on molecular structures, memory constraints, etc. These tools are described in more detail in the Problem setup section.

APBS input files contain three basic sections which can be repeated any number of times:

<div>
	<ul>
		<li><a href="#read">READ</a> section for specifying input.</li>
		<li><a href="#elec">ELEC</a> section for specifying polar solvation (electrostatics) calculation parameters.</li>
		<li><a href="#apolar">APOLAR</a> section for specifying apolar solvation calculation parameters.</li>
		<li><a href="#print">PRINT</a> section for specifying summary output.</li>
	</ul>
</div>

The APBS input file is constructed from these sections in the following format:

{% highlight bash %}
READ
 ...
 END

 ELEC
 ...
 END

 APOLAR
 ...
 END

 PRINT
 ...
 END

 QUIT
 {% endhighlight %}

 These sections can occur in any order and can be repeated any number of times. However, the sections are interdependent. For example, PRINT requires ELEC and/or APOLAR while ELEC requires one or more READ sections. Sections can also be repeated; several READ statements may be used to load molecules and multiple ELEC or APOLAR sections would specify various electrostatics calculations on one or more molecules.

 <h5>NOTE: There are a number of places in the APBS input files where pathnames can be specified. If the pathname contains spaces, then the entire pathname must be enclosed in quotes. For example, if you wanted to refer to the file "foo" which resides in a directory with spaces in its name, then you should refer to foo as "/path with spaces/foo".</h5>

 Each section of the APBS input file has its own syntax, described in more detail in the following sections:

###Category List

<ul>
	<li><a href="#apolar">APOLAR input file section</a>
		<ul>
			<li><a href="#apolarkeywords">APOLAR keywords</a></li>
			<li><a href="#apolacalcs">Basic APOLAR calculations</a></li>
		</ul>
	</li>
	<li><a href="#elec">ELEC input file section</a>
		<ul>
			<li><a href="#elecblocknaming">ELEC block naming</a></li>
			<li><a href="#eleckeywords">ELEC keywords</a></li>
			<li><a href="#eleccalcs">Types of ELEC calculations</a></li>
		</ul>
	</li>
	<li><a href="#print">PRINT input file section</a></li>
	<li><a href="#read">READ input file section</a>
		<ul>
			<li><a href="#readexamples">READ examples</a></li>
			<li><a href="#readkeywords">READ keywords</a></li>
		</ul>
	</li>
</ul>

<h3 id="apolar">APOLAR</h3>

This section is the main component for apolar solvation calculations in APBS runs. There may be several APOLAR sections, operating on different molecules or using different parameters for multiple runs on the same molecule. The syntax of this section is:

{% highlight bash %}
APOLAR [name id]
        {keywords...}
    END
{% endhighlight %}

The first (optional) argument is:

{% highlight bash %}
name {id}
{% endhighlight %}

where id is a unique string which can be assigned to the calculation to facilitate later operations (particularly in the [PRINT]({site.url}/apbs-overview/#print) statements). The keywords... describing the parameters of the apolar calculation are discussed in more detail in the section [APOLAR keywords]({site.url}/apbs-overview/#apolarkeywords).  Basic APOLAR calculations are described in this section.

###APOLAR Keywords

- [bconc](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#bconc)
- [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#calcenergy)
- [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#calcforce)
- [dpos](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#dpos)
- [gamma](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#gamma)
- [grid](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#grid)
- [mol](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#mol)
- [press](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#press)
- [sdens](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#sdens)
- [srad](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#srad)
- [srfm](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#srfm)
- [swin](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#swin)
- [temp](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/apolar-keywords/#temp)

###Basic APOLAR calculations

APBS apolar calculations follow the very generic framework described in Wagoner JA, Baker NA. Assessing implicit models for nonpolar mean solvation forces: the importance of dispersion and volume terms. Proc Natl Acad Sci USA, 103, 8331-8336, 2006.(doi:10.1073/pnas.0600118103).

In particular, nonpolar solvation potentials of mean force (energies) are calculated according to:

<img src="{{site.url}}/img/graphic-18.gif" />

and mean nonpolar solvation forces are calculated according to:

<img src="{{site.url}}/img/graphic-19.gif" />

In these equations, gamma is the repulsive (hard sphere) solvent surface tension, A is the conformation-dependent solute surface area (see srad and srfm keywords), p (see press keyword) is the repulsive (hard sphere) solvent pressure, V is the conformation-dependent solute volume (see srad and srfm keywords), rho (see bconc keywords) is the bulk solvent density, and the integral involves the attractive portion (defined in a Weeks-Chandler-Andersen sense) of the Lennard-Jones interactions between the solute and the solvent integrated over the region of the problem domain outside the solute volume V. Lennard-Jones parameters are taken from APBS parameter files as read in through an APBS input file READ statement.

Note that the above expressions can easily be reduced to simpler apolar solvation formalisms by setting one or more of the coefficients to zero through the keywords.

<div class="note info">
	<h5>Important</h5>
	<p>All APOLAR calculations require a parameter file which contains Lennard-Jones radius and well-depth parameters for all the atoms in the solute PDB. This parameter file must also contain radius and well-depth parameters for water (specifically: residue "WAT" and atom "OW").  Complete parameter files for protein and nucleic acid parameters are not currently available and are actively under development as a research project.  Please contact Nathan Baker for additional information about the state of this research, particularly if you are interested in helping.</p>
</div>

<h3 id="elec">ELEC</h3>

The ELEC block of an APBS input file is used for polar solvation (electrostatics) calculations and has the following syntax:

{% highlight bash %}
  ELEC [ name {id} ]
        {type}
        {keywords...}
    END
{% endhighlight %}

where the indentation and linefeeds are included for clarity; only whitespace is needed in the input file.  The {id} tag allows the user to name ELEC blocks, as described in the [ELEC block naming]({site.url}/apbs-overview/#elecblocknaming) section.  The {type} command defines the Types of [ELEC calculation]({site.url}/apbs-overview/#eleccalcs) to be performed.  Finally, the {keywords} are calculation-specific commands that customize the particular type of calculation.
This section is the main component for polar solvation calculations in APBS runs. There may be several ELEC sections, operating on different molecules or using different parameters for multiple runs on the same molecule. The order of the ELEC statement can matter since certain types of boundary conditions [(bcfl)]({site.url}/elec-keywords/#bcfl) can require information about previous calculations.

###ELEC block naming

Since numerous ELEC blocks may appear in an APBS input file, it can be difficult to keep track of them all. It is possible to assign an optional name to each ELEC block to simplify the organizational process. This syntax has the form

{% highlight bash %}
ELEC name {id}
    ...
{% endhighlight %}

where ELEC is the start of the ELEC block and {id} is an alphanumeric string denoting the "name" of the calculation block.

###Elec keywords

- [akeyPRE](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#akeypre)
- [akeySOLVE](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#akeysolve)
- [async](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#async)
- [bcfl](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#bcfl)
- [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcenergy)
- [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcforce)
- [cgcent](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#cgcent)
- [cglen](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#cglen)
- [chgm](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#chgm)
- [dime](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#dime)
- [domainLength](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#domainlength)
- [ekey](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#ekey)
- [etol](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#etol)
- [fgcent](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#fgcent)
- [fglen](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#fglen)
- [gcent](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#gcent)
- [glen](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#glen)
- [grid](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#grid)
- [ion](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#ion)
- [lpbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#lpbe)
- [lrpbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#lrpbe)
- [maxsolve](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#maxsolve)
- [maxvert](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#maxvert)
- [mol](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#mol)
- [nlev](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#nlev)
- [npbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#npbe)
- [nrpbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#nrpbe)
- [ofrac](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#ofrac)
- [pdie](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#pdie)
- [pdime](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#pdime)
- [sdens](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#sdens)
- [sdie](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#sdie)
- [smpbe](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#smpbe)
- [srad](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#srad)
- [srfm](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#srfm)
- [swin](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#swin)
- [targetNum](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#targetnum)
- [targetRes](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#targetres)
- [temp](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#temp)
- [useaqua](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#useaqua)
- [usemap](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#usemap)
- [usemesh](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#usemesh)
- [write](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#write)
- [writemat](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#writemat)

###Types of ELEC calculations

- [fe-maual: manually-configured adaptive finite element Poisson-Boltzmann calculations](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calcs/#femanual)
- [mg-auto: automatically-configured sequential focusing multigrid Posson-Boltzmann calculations](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calcs/#mgauto)
- [mg-dummy: calculations of surface and charge distribution properties which do not require solution of the PBE](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calculations/#mgdummy)
- [mg-manual: manually-configured multigrid Poisson-Boltzmann calculations](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calcs/#mgmanual)
- [mg-para: automatically-configured paralle focusing multigrid Poisson-Boltzman calculations](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-calcs/#mgpara)

<h3 id="print">PRINT</h3>
This is a very simple section that allows linear combinations of calculated properties to be written to standard output.

The syntax of this section is:

{% highlight bash %}
PRINT {what} [id op id op...] END 
{% endhighlight %}

The first mandatory argument is what, the quantity to manipulate or print. This variable is a string that can assume the following values:

- energy Print energies as calculated with an earlier [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcenergy) ELEC command. Warning: this keyword is deprecated and will be removed soon. Please use elecEnergy or apolEnergy as appropriate to obtain the desired energy output. For now, use of this keyword will return the old results of elecEnergy.
- force Print forces as calculated with an earlier [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcforce) ELEC command. Warning: this keyword is deprecated and will be removed soon. Please use elecForce or apolForce as appropriate to obtain the desired energy output.
- elecEnergy Print electrostatic energies as calculated with an earlier [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcenergy) ELEC command.
- elecForce Print forces as calculated with an earlier [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcforce) ELEC command.
- apolEnergy Print energies as calculated with an earlier [calcenergy](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcenergy) APOLAR command.
- apolForce Print forces as calculated with an earlier [calcforce](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/elec-keywords/#calcforce) APOLAR command.

The next arguments are a series of id op id op id op ... id commands where every id is immediately followed by an op and another id. These options have the following form:

<ul>
<li>id  This is a variable string or integer denoting the ID of a particular ELEC or APOLAR calculation. String values of id are assume to correspond to the optional "names" that can be assigned to ELEC or APOLAR calculations. Integer values of id are assumed to corresponding to the sequentially-assigned integer IDs for ELEC or APOLAR calculations. These IDs start at 1 and are incremented independently for each new ELEC or AOPLAR calculation.</li>
<li>op  Specify the arithmetic operation to be performed on the calculated quantities:
<ul>
	<li>+ Addition</li>
	<li>- Subtraction</li>
</ul>
</li>
</ul>

Given these options, a typical PRINT declaration might look like:

{% highlight bash %}
# Energy change due to binding
print energy complex - ligand - protein end
# Energy change due to solvation
print energy solvated - reference end 
# Solvation energy change due to binding
print energy complex_solv - complex_ref - ligand_solv + ligand_ref - protein_solv + protein_ref end 
{% endhighlight %}

See the examples/ directory provided with the APBS distribution for more examples.

<h3 id="read">READ</h3>

The READ block of an APBS input file has the following general format:

{% highlight bash %}
READ
    [ keywords... ]
END
{% endhighlight %}

where keywords is or more of the keywords described in the Keyword section (the line breaks and indentation are for clarity; only whitespace is necessary).

####Note: One of these sections must be present for every molecule involved in the APBS calculation. Molecule and "map" IDs are assigned implicitly assigned for each molecule/map read, based on order and starting at 1 and incremented independently for each input type. In other words, each input PQR file is assigned an ID 1, 2, 3, ...; each input dielectric map is assigned an independent ID 1, 2, 3, ...; etc.

###READ keywords

- [charge](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#charge)
- [diel](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#diel)
- [kappa](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#kappa)
- [mesh](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#mesh)
- [mol](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#mol)
- [parm](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#parm)
- [pot](http://sobolevnrm.github.io/apbs-pdb2pqr/docs/read-keywords/#pot)

###READ examples

The following is an example of a minimal READ section that only imports PQR format molecular structure files.

{% highlight bash %}
READ
   mol pqr ligand.pqr
   mol pqr receptor.pqr
   mol pqr complex.pqr
END
{% endhighlight %}

####Reading a PDB file with parameters

{% highlight bash %}
READ
   mol pdb molecule.pdb
   parm flat param.dat
END
{% endhighlight %}

####Reading external dielectric maps

{% highlight bash %}
READ
   mol pqr molecule.pqr
   diel dx dielx.dx diely.dx dielz.dx
END
{% endhighlight %}