---
layout: examples
title: Ionic Strength Dependence of Peptide-RNA Interactions
permalink: /examples/Protein-Rna_Tutorial/
---

#Table of Contents
* <a href="#intro">Introduction</a>
* <a href="#setup">Software and file setup</a>
	* <a href="#apbs">Find your copy of the APBS distribution</a>
	* <a href="#elec">Elec keywords</a>
* <a href="#software">Running the software</a>
	* <a href="#windows">Python script (windows)</a>
	* <a href="#unixpy">Python script (unix)</a>
	* <a href="#bash">Bash script (unix)</a>
* <a href="#results">Formatting and visualizing results</a>
	* <a href="#graph">Graph generation</a>
	* <a href="#pymol">PyMol</a>
	* <a href="#vmd">VMD</a>


####Prerequisite Requirements: 
<a href="{{site.baseurl}}/docs/downloads/" target="BLANK">Download APBS and PDB2PQR</a>   
<a href="https://www.python.org/" target="BLANK">Click here for Python</a> **Note that this is written using Python 2.7  



<a id="intro"></a>

####Introduction:

This is the [García-García and Draper paper](http://dx.doi.org/10.1016/S0022-2836\(03\)00615-6) that this example is taken from. Special thanks to [David Draper](http://pmcb.jhu.edu/inactive%20pages/draper-profile.html) who provided the PDB files. This example explores the electrostatic contributions to the binding interaction between a 22-residue α-helical peptide of protein λ with the "box B" RNA hairpin structure. In particular, this example uses nonlinear Poisson-Boltzmann equation calculations to look at the non-specific screening effects of monovalent salt on the peptide-RNA complex.
García-García and Draper isolated the contribution of KCl concentration to the binding of the folded peptide with the folded RNA hairpin and determined a fairly linear relationship between the binding free energy $\\Delta_{\rm bind} G$ and the logarithm of the KCl concentration which yields:  


\\[ \frac{\partial\Delta\_{bind}G}{\partial\log\_{10}{\rm KCl}} = {6.0 \pm 0.2 ~ } {\rm kcal/mol} \\]  


This slope can be used to determine the number  of KCl ions linked to the binding equilibrium through the expression:  
\\[ n=-\frac{\partial\Delta\_{bind}G}{\{RT}\partial\log_{10}{\rm KCl}} = {-4.52 \pm 0.08~ } {\rm kcal/mol}  \\]  

where $RT$ is the thermal energy, to determine $n = -4.4 \\pm 0.2$ for the RNA-peptide binding equilibrium. $RT$ is equal to $KT * N_a$ where $KT$ is the product of the Boltzmann constant k (k is equal to the gas constant $R/N_a$), and the temperature $T$ (at STP in kelvin it is 298.15) and $N_a$ is Avogadro's constant. Thus $RT$  is equal to \$R~({\mathrm{Joules}}/{\mathrm{Kelvin}}) * T~({\mathrm {Kelvin}}) * N_a~({\mathrm {mols}}) * {1~\mathrm{kJ}}/{1000~\mathrm J}\$ which roughly equals $(1.38\*10^{-23})\*(6.022\*10^{23})\*(298.15)/(1000)$ which is approximately $ 2.479 \mathrm{(kJ/mol)} $ or $0.593 \mathrm{(kcal/mol)}$.

García-García and Draper also used nonlinear Poisson-Boltzmann equation calculations to estimate the electrostatic contributions to the binding free energy as a function of the monovalent salt concentration. As discussed elsewhere, the Poisson-Boltzmann equation is only able to describe non-specific interactions of ions with solutes, including the effects of ion size and charge but otherwise ignoring the important differences between ionic species. Interestingly (and perhaps surprisingly), they find excellent agreement between the experimental binding energy dependence on KCl and their Poisson-Boltzmann calculations with equivalent concentrations of monovalent ions. This agreement strongly suggests that the binding of RNA and the peptide is primarily determined by electrostatic interactions. It also suggests that the primary interaction of the KCl with this system is through non-specific screening interactions. The García-García and Draper nonlinear Poisson-Boltzmann equation 
calculations gave:  

\\[ \frac{\partial\Delta\_{bind}G}{\partial\log\_{10}{\rm KCl}} = {5.9 \pm 0.2 ~ } {\rm kcal/mol} \\]  
 
and $n = -4.3 \pm 0.2$ for KCl linkage to the RNA-peptide binding equilibrium. This equation states that 

The PQR files are included in the [protein-rna](https://github.com/Electrostatics/apbs-pdb2pqr/blob/master/apbs/examples/protein-rna/) directory of the apbs-pdb2pqr repository.

<a id="setup"></a>

####Software and file setup

After downloading Python, it is useful to set it to your path so you don't have to change your command prompt to the directory containing python.exe

1. Go into "My Computer" and in the upper right corner and search for python.exe: 
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_1.jpg" />

2. Right click the file that comes up and select "Open file location" (should be near the bottom of the tab that comes up)  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_4.jpg" /> 

3. Copy the path which should look something like this:
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_6.jpg" />

4. Open the start menu and right click "Computer" and left click properties.  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_7.jpg" />

5. Click on "Advanced system settings" which should be in the top left corner.  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_8.jpg" />

6. Under the "Advanced" tab, click "Environment Variables". (Should be in the bottom right)  

7. Make sure "PATH" is selected and click "Edit..."  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_10.jpg" />

8. Go to the far right, add a semi-colon (if one does not already exist), paste the path you copied (step 2) and click ok.  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_11.jpg" />

9. Now you will need to add the path of your apbs executable (apbs.exe) to your path (you need dxmath.exe too).

<a id="apbs"></a>

###### Find your copy of the APBS distribution

Now, find the [template.txt](https://github.com/Electrostatics/apbs-pdb2pqr/blob/master/apbs/examples/protein-rna/template.txt) file in the "apbs-pdb2pqr/apbs/examples/protein-rna" directory.

This example template file (template.txt, shown again below) feeds into APBS and specifies which calculations will take place.

{% highlight bash %}
read  
	mol pqr model_outNB.pqr  
	mol pqr model_outNpep.pqr  
	mol pqr model_outBoxB19.pqr  
end  
elec name complex  
	mg-auto  
	dime 65 97 129  
	cglen 45.3322 54.9498 82.2633  
	fglen 45.3322 52.3234 68.3902  
	cgcent mol 1  
	fgcent mol 1  
	mol 1  
	npbe  
	bcfl sdh  
	pdie 4.0  
	ion charge 1 conc IONSTR radius 2.0  
	ion charge -1 conc IONSTR radius 2.0  
	sdie 80.0  
	srfm mol  
	chgm spl2  
	sdens 10.00  
	srad 1.40  
	swin 0.30  
	temp 298.15  
	calcenergy total  
	calcforce no  
	write qdens dx qdens-complex-IONSTR  
	write ndens dx ndens-complex-IONSTR	  
end  
elec name peptide  
	mg-auto  
	dime 65 97 129  
	cglen 45.3322 54.9498 82.2633  
	fglen 45.3322 52.3234 68.3902  
	cgcent mol 1  
	fgcent mol 1  
	mol 2  
	npbe  
	bcfl sdh  
	pdie 4.0  
	sdie 80.0  
	ion charge 1 conc IONSTR radius 2.0  
	ion charge -1 conc IONSTR radius 2.0  
	srfm mol  
	chgm spl2  
	sdens 10.00  
	srad 1.40  
	swin 0.30  
	temp 298.15  
	calcenergy total  
	calcforce no  
	write qdens dx qdens-peptide-IONSTR  
	write ndens dx ndens-peptide-IONSTR	  
end  
elec name rna  
	mg-auto  
	dime 65 97 129  
	cglen 45.3322 54.9498 82.2633  
	fglen 45.3322 52.3234 68.3902  
	cgcent mol 1  
	fgcent mol 1  
	mol 3  
	npbe  
	bcfl sdh  
	pdie 4.0  
	sdie 80.0  
	ion charge 1 conc IONSTR radius 2.0  
	ion charge -1 conc IONSTR radius 2.0  
	srfm mol  
	chgm spl2  
	sdens 10.00  
	srad 1.40  
	swin 0.30  
	temp 298.15  
	calcenergy total  
	calcforce no  
	write qdens dx qdens-rna-IONSTR  
	write ndens dx ndens-rna-IONSTR	  
end   

print elecEnergy complex - peptide - rna end  

quit
{% endhighlight %}  

<a id="elec"></a>

######Elec keywords

As used in the template file, the READ command, our calculation will have three parts:  
1. Calculation of the total electrostatic energy (including self-interaction energies) of the peptide-RNA complex. This calculation is named complex in the input file.  
2. Calculation of the total electrostatic energy (including self-interaction energies) of the peptide. This calculation is named peptide in the input file.  
3. Calculation of the total electrostatic energy (including self-interaction energies) of the RNA. This calculation is named rna in the input file.  

Each part of the input file will be contained in a separate [elec keyword]({{site.baseurl}}/docs/apbs-overview/#elec) section of the input file which specifies the settings for our nonlinear Poisson-Boltzmann equation calculation. The calculations themselves will not be overly demanding, since we will use relatively coarse grids. This grid coarseness has a significant impact on the absolute electrostatic binding energy we obtain from this particular calculation: the calculated energy isn't converged with respect to grid spacing. However, the overall slope of binding energy with respect to monovalent ion concentration is rather insensitive with respect to the grid spacing, allowing us to save computational time and effort during the calculations. Finally, the calculation will conclude with a PRINT command which will combine the total energies from the three parts to obtain our approximate absolute electrostatic binding energy for the complex at 0.225 M monovalent salt concentration. It is very important to note that this absolute energy no meaning in isolation for several reasons:  
  
* It is not converged with respect to grid spacing  
* It does not contain other very important non-electrostatic aspects of the binding energy which are important for the measured affinity  

IONSTR is a placeholder that represents the ion concentration of the that APBS is going to be run at. 

You will also have to create a "dxmath.txt" file which contains the following.
{% highlight bash %}
qdens-complex-IONSTR.dx
qdens-pep-IONSTR.dx -
qdens-rna-IONSTR.dx -
qdens-diff-IONSTR.dx = 
{% endhighlight %}
dxmath uses Reverse Polish Notation, and subtracts the dx maps of the individual peptide and rna from the overall structure (and prints to the qdens-diff-IONSTR.dx file)

<a id="software"></a>

####Running the software

\*When you run these programs, you need to be in the same repository as template.txt and dxmath.txt.

<a id="windows"></a>

#####Python script (windows)
<a href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/master/apbs/examples/protein-rna/apbs_win_dx.py"
download="apbs_win_dx.py">Download the Windows Python Script (shown below)</a>
{% highlight bash %}
from subprocess import call

my_list = (0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.225, 0.275, 0.325, 0.4, 0.5, 0.6, 0.7, 0.8)
with open("template.txt", "r") as temp:  
	template_text = temp.read()

for item in my_list:  
	input_txt = template_text.replace("IONSTR",str(item))  
	file_name = "apbs-" + str(item) + ".in"  
	print "Creating file now:", file_name  
	with open(file_name, "w") as temp:  
		temp.write(input_txt)
	call(["apbs", "apbs-" + str(item) + ".in"])

with open("dxmath.txt", "r") as temp:
	template_2_text = temp.read()

for item in my_list:
	input_2_txt = template_2_text.replace("IONSTR",str(item))
	file_2_name = "dxmath-" + str(item) + ".in"
	print "Creating file_2 now:", file_2_name
	with open(file_2_name, "w") as temp:
		temp.write(input_2_txt)
	call(["dxmath", "dxmath-" + str(item) + ".in"])
{% endhighlight %}

This script will create all the input files for the tests, and run apbs and dxmath on your template.txt and dxmath.txt files. Most of the syntax fills in the ion concentrations in the template file, and the call commands actually run the calculations on each input.

Run this script from your command prompt by typing  
{% highlight bash %}
python apbs_win_dx.py >> output.txt. 
{% endhighlight %}  
When it is running nothing will show up, but when it is done, there will be a new line. Make sure you run it from the apbs-pdb2pqr/apbs/examples/protein-rna directory.
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_16.jpg" /> 
The "python" tells the computer to use python.exe to run the input. It takes "apbs\_win\_dx.py" as your input.  
Furthermore the double greater than symbol ">>" tells your cmd to take the things that would normally be printed into the command prompt into a file called "output.txt".  

Open the output.txt file with your favorite text editor (This tutorial is using notepad ++), hit "ctrl f" and search for "Global net ELEC energy", copy the numbers and paste them into another file.
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_17.jpg" />

<a id="unixpy"></a>

#####Python script (unix)

<a href="https://raw.githubusercontent.com/PEMIfolder/github.io-PEMIfolder/gh-pages/Tut_scripts_PR/apbs_unix_dx.py" download="apbs_unix_dx.py">Download the Unix Python Script (shown below)</a>
{% highlight bash %}
my_list = (0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.225, 0.275, 0.325, 0.4, 0.5, 0.6, 0.7, 0.8)
with open("template.txt", "r") as temp:  
	template_text = temp.read()

for item in my_list:  
	input_txt = template_text.replace("IONSTR",str(item))  
	file_name = "apbs-" + str(item) + ".in"  
	print "Creating file now:", file_name  
	with open(file_name, "w") as temp:  
		temp.write(input_txt)

with open("dxmath.txt", "r") as temp:
	template_2_text = temp.read()

for item in my_list:
	input_2_txt = template_2_text.replace("IONSTR",str(item))
	file_2_name = "dxmath-" + str(item) + ".in"
	print "Creating file_2 now:", file_2_name
	with open(file_2_name, "w") as temp:
		temp.write(input_2_txt)
{% endhighlight %}

Run this script by typing 

{% highlight bash %}
python apbs_unix_dx.py
{% endhighlight %}

It will create all the apbs-ionconcentration.in files and dxmath-ionconcentration.in files that you need.

<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_18.jpg" />  

<a id="bash"></a>

#####Bash script (unix)

<a
href="https://github.com/Electrostatics/apbs-pdb2pqr/blob/master/apbs/examples/protein-rna/run_apdx_files.sh">Download
the Unix bash script (shown below)</a>  (check that this file is
executable)
{% highlight bash %}
#!/bin/bash
# Usage: remove all utility bills pdf file password 
shopt -s nullglob

for f in apbs-*.in
	do
		echo "Running apbs on $f" 
		apbs $f	
done		
for f in dxmath-*.in
	do
		echo "Running dxmath on - $f"   
		dxmath $f		

done
{% endhighlight %}
This script will take all the files in your current directory and find files that start with apbs- and end with .in (it does the same thing for dxmath- and .in).  It will then run apbs and dxmath on these input files on your command line.

Save the bash scipt. Run it by typing  
{% highlight bash %}
./run_apdx_files.sh | tee  output.txt
{% endhighlight %}
This will feed all the input files from the python (unix) script through apbs and dxmath. It will make a "tee pipe" by both printing the results to both the command line and the output.txt file.
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_19.jpg" />

After this command, run  
{% highlight bash %}
grep "Global net ELEC energy" output.txt | tee output_2.txt"
{% endhighlight %}
. This will search output.txt for the string "Global net ELEC energy" and output the lines which contain the phrase to a file called output\_2.txt.
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_20.jpg" />



<a id="results"></a>

#####Formatting and visualizing results

<a id="graph"></a>

######Graph generation

Take the data you found/calculated and reformat it into two columns. The data should be seperated by white space or a column. Note that these energies are in kJ/mol and converted to kcal/mol for comparison with the data from García-García and Draper. The data in this example is from APBS 1.4.0.  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/data_1.png"> 

Remove the headers from the data so that only two columns of values exists now.  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/data_2.png">  
As seen here, the data points are obviously curved and cannot be fit with a line.  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/graph_1.png">   
This properly fit data looks like this:  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/graph_4.png">   
The data is approximated by the equation $ y = 130 + 11.28*ln(x) $

Further analysis requires the ability to perform linear regression. There are many programs that do this; a simple Python script is provided for this purpose in the protein-rna example directory (named fit.py). This script can be called with:
{% highlight bash %}
cat file.dat | python fit.py
{% endhighlight %}
where file.dat is the file we created with whitespace-separated data in two columns. With linear regression, we can obtain 

\\[ \frac{\partial\Delta\_{bind}G}{\partial\log_{10}\mathrm{KCl}} = {6.2 \pm 0.1 ~ } {\rm kcal/mol} \\]  

from the graph of x = log<sub>10</sub>[ion concentration] and y = electrostatic binding energy (kcal/mol).  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/graph_2.png">  
Likewise, we can also obtain
\\[ n=-\frac{\partial\Delta\_{bind}G}{\{RT}\partial\log_{10}{\rm KCl}} = {-4.52 \pm 0.08~ } {\rm kcal/mol} \\]
from  the graph of x = ln(ion concentration) and y = RT (the electrostatic binding energy).  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/graph_3.png">


<a id="pymol"></a>

######PyMol: 
  
Open "PyMOL + Tcl-Tk GUI". Using the window at the top, find the directory containing the files that were just pooped out by the python/bash scripts. Once you find the file type  
{% highlight bash %}
load qdens-diff-0.225.dx
{% endhighlight %}  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_21.jpg" />

Your "PyMol Viewer" should now show this: 
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_22.jpg" />


Click the "qdens-diff-0.225" tab on the right so that it turns the same color as the all button (this means it's on). This should show the outline of a rectangular prism (these correspond to dime values which are used to run apbs). Click the "S (show)" next to qdens and click show everything.
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_23.jpg" />


Now load the pqr file into the PyMol Viewer from the Pymol prompt again.  
{% highlight bash %}
load  model_outNB.pqr
{% endhighlight %}


Under the "S" for the new model you just loaded hit show cartoon and ribbon. Hit "H(hide)" lines and now you should have a picture like this:
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_24.jpg" />  

<a id="vmd"></a>

######VMD:

Open VMD 1.9.1 (or what ever version you have). From the VMD Main window hit "File -> New Molecule". A "Molecule File Browser" window should come up.  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_29.jpg" />


Hit 'Browse...'    
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_34.jpg" />  


Open the "qdens-diff-0.225.dx" file and hit 'Load'   
Your display window should look somemthing like this:
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_33.jpg" /> 
(If "Load" doesn't work, make sure the file type is correct under "Determine file type")

Now load another new molecule (model_outNB.pqr) and you should have something like this (zoomed in a little with the scroll on a 3 button mouse):  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_30.jpg" />


Under the "Graphics" tab hit "Representations". A "Graphical Representations"  tab should come up.  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_31.jpg" />
Click the "Rep" that has "Style" "Lines" and change the "Drawing Method" from "Lines" to "New Cartoon". Click "Coloring Method" and change to "ResType". This will color the protein alpha helix such that each amino acid will be a different color based on whether it is non-polar, basic, acidic, or polar (white, blue, red, and green respectively).


Now change the Isosurface representation. Draw (bottom right) should be "Solid Surface" instead of "Points". The "Material should also be changed from "Opaque" to "Transparent".


Now the representation should look like this:  
<img src="{{site.baseurl}}/img/Tut_Pics_PR/Screenshot_32.jpg" />

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    "HTML-CSS": { scale: 105, linebreaks: { automatic: true } }, 
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
  });
</script>
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
