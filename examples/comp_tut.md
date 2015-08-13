---
layout: examples
title: APBS, PDB2PQR, PyMol, & VMD
permalink: /examples/comp_tut/
---
\*Click on pictures to enlarge them

<a id="topcall"></a>
<h1>Table of Contents:</h1>

<link rel="stylesheet" href="{{site.baseurl}}/css/dg-picture-zoom.css" type="text/css" />
<script src="{{site.baseurl}}/js/external/mootools-1.2.4-core-yc.js"></script>
<script src="{{site.baseurl}}/js/external/mootools-more.js"></script>
<script src="{{site.baseurl}}/js/dg-picture-zoom.js"></script>
<script src="{{site.baseurl}}/js/dg-picture-zoom-autoload.js"></script>

* <a data-scroll href="#vmdtut">VMD Tutorials</a>
	* <a data-scroll href="#prot3d">How to get a 3-D protein structure</a>
	* <a data-scroll href="#ligand">How to find a ligand</a>
	* <a data-scroll href="#residue">How to find a residue</a>
	* <a data-scroll href="#mutate">How to mutate a protein</a>
* <a data-scroll href="#PDB2PQR">PDB2PQR Tutorial</a>
	* <a data-scroll href="#IntroPDB">Introduction to PDB2PQR</a>
	* <a data-scroll href="#Download">Downloading a PDB or PQR file for offline APBS</a>
* <a data-scroll href="#APBS">APBS Tutorial</a>
	* <a data-scroll href="#IntroAPBS">Introduction to APBS</a>
	* <a data-scroll href="#OnlineAPBS">How to run a protein through APBS (online)</a>
	* <a data-scroll href="#SetupAPBS">Setting up your computer for APBS</a>
	* <a data-scroll href="#CMDAPBS">How to run APBS from the command line</a>
	* <a data-scroll href="#Dimes">Potential memory size and dime value problems</a>
* <a data-scroll href="#APBSvis">APBS and Visualization</a>
	* <a data-scroll href="#PyMol">PyMol</a>
	* <a data-scroll href="#VMD">VMD</a>
* Precursor requirements:
	* <a href="http://www.ks.uiuc.edu/Research/vmd/" target="BLANK">Download VMD</a>
	*  <a href="http://www.pymol.org/" target="BLANK">Download Pymol</a>
	* <a href="{{site.baseurl}}/docs/downloads/" target="BLANK">Download APBS and PDB2PQR</a>
	* <a href="https://www.python.org/" target="BLANK">Download Python</a>  (*This is written using Python 2.7 )
	* <a href="http://matplotlib.org/" target="BLANK">Download Matplotlib</a>



<span id="vmdtut"></span>
<h2> VMD </h2>

<a id="prot3d"></a>
<h6> How to get a 3-D protein structure </h6>


1. Go to desired Protein Page
<a href="http://www.rcsb.org/pdb/explore/explore.do?structureId=4b3o" target="BLANK">(4B3O a.k.a. HIV Reverse Transcriptase)</a>

2. On the right hand corner, hit the "download files" option  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_1.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_1_big.png" class="dg-picture-zoom" id="picture1">

3. Now, select desired file type. For this tutorial, the PBD File (TEXT) was selected  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_2.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_2_big.png" class="dg-picture-zoom" id="picture2">  
Once you click the file, download should start immediately. Save the file in desired location.

4. Next, open up VMD  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_3.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_3_big.png" class="dg-picture-zoom" id="picture3">

5. Click <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_4.png" />, then click "new molecule" A Molecule File Browser will pop up as such  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_5.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_5_big.png" class="dg-picture-zoom" id="picture5">

6. Click "Browse...", and then click and open saved Protein file.
Go below to "Determine File Type", and click file type, which in this case, is PDB  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_6.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_6_big.png" class="dg-picture-zoom" id="picture6">  
Click the "Load" button, and your saved protein will load in the VMD window as a 3-D protein structure

<a data-scroll href="#topcall">top</a>
<hr/>

<a id="ligand"></a>
<h6>How to find a ligand</h6>

1. First, your 3-D protein structure should be loaded
on the VMD Main window, click
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_7.png" />, and then click
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_8.png" />


2. Next, the Graphical Representations Window will open  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_9.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_9_big.png" class="dg-picture-zoom" id="picture9">

3. Under
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_10.png" />, delete the text "all" and enter "resname (insert name of desired compound here)"

4. Hit
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_11.png" />
and the chosen ligand will appear

<a data-scroll href="#topcall">top</a>
<hr/>
<a id="residue"></a>
<h6>How to find a residue</h6>

1. First, your 3-D protein structure should be loaded
on the VMD Main window, click
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_12.png" />, and then click
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_13.png" />


2. Next, the Graphical Representations Window will open  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_14.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_14_big.png" class="dg-picture-zoom" id="picture14">

3. Under <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_15.png" />, delete the text "all" and enter "resid (insert residue number)" to find the desired residue number

4. Hit <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_16.png" /> and the chosen residue will appear

<a data-scroll href="#topcall">top</a>
<hr/>
<a id="mutate"></a>
<h6>How to mutate a protein</h6>

1.  First, one must take their pdb file (taken from pdb.org) and convert it into a psf file. This is done by hitting <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_17.png" /> in the VMD main window, then <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_18.png" />, and finally <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_19.png" />. You will see this on your screen:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_20.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_20_big.png" class="dg-picture-zoom" id="picture20">  
\*For this example, we'll use the pdb protein 1JLB.

2. Molecule simply names the molecule you want to make into a psf file. <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_21.png" /> is the name of your soon-to-be psf file; change it if you wish. Then hit <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_22.png" />

3. For the next section, keep automatic settings and hit <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_23.png" />

4. For the next section as well, keep automatic settings and hit <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_24.png" />

5. When the following window pops up, click "ok"  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_25.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_25_big.png" class="dg-picture-zoom" id="picture25">

6. If, perhaps an error window pops up:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_26.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_26_big.png" class="dg-picture-zoom" id="picture26">  
simply click <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_27.png" /> and the error messages will clear. However this may jeopardize the quality of the mutated protein.

7. Click <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_28.png" />, and then you will have the psf file saved in your files.

8. Now we can go on to really mutating our residue. Hit <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_29.png" /> in the VMD main window, then <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_30.png" />, and finally <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_31.png" />. Then, the following window will open:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_32.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_32_big.png" class="dg-picture-zoom" id="picture32">

9. Upload the psf and pdb files of your protein. For the field marked MUTATED, retype the name you wish your mutated file to be called.
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_33.png" /> refers to the original residue your target residue was
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_34.png" /> is the residue number
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_35.png" /> is the amino acid of your desired mutation.
An example of the procedure, is if you wanted to change a wild type HIV-1 Reverse Transcriptase Tyrosin to Cysteine, then <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_36.png" /> would be TYR, <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_37.png" /> would be 181, and <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_38.png" /> would be CYS
You do not have to check the <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_39.png" />  in order to mutate your residue.

10. Finally, click <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_40.png" />
The mutated protein will now appear in your VMD window

<a data-scroll href="#topcall">top</a>

<a id="PDB2PQR"></a>
<h2>PDB2PQR</h2>

<a id="IntroPDB"></a>
<h6>Introduction to PDB2PQR</h6>

<a href="http://nbcr-222.ucsd.edu/pdb2pqr_1.9.0/" target="BLANK">Use the online PDB2PQR webserver to run pdb2pqr</a>  (changes file from pdb to the pqr format, this adds missing hydrogens, adds some missing heavy atoms, and optimizes the protein structure among other things)

First, go to the PDB2PQR website above. You should already have a selected protein form pdb.org in mind.
_(My example will be using the protein 2HNY)_

Since I want my file to be compatible with VMD, for the both settings named "Pick a forcefield to use:" and "Pick an output naming scheme to use", choose the option CHARMM (PARSE works as well).

* To run with apbs, you need to change the setting in pdb2pqr to
 _Insert white spaces between atom name and residue name, between x and y, and between y and z_

* With PDB2PQR, unfortunately the program deletes any stray ligands that are in the molecule, which means to mutate accordingly a MOL2 file must be taken (which most are available at the ZINC database website).

<a href="{{site.baseurl}}/docs/pdb2pqr-faq/" target="BLANK">Click here for more PDB2PQR info</a>

<a data-scroll href="#topcall">top</a>
<a id="Download"></a>
<h6>Downloading a PDB or PQR file for offline APBS </h6>

1. After running PDB2PQR from the website, click on the file under "Input Files" labeled something like "14084693082.pdb" (the number will be different but it will have a .pdb ending). This should start a download  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_42.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_42_big.jpg" class="dg-picture-zoom" id="picture42">  
**\*(It is useful to rename the file to 1FAS.pdb because it gets confusing when you have many different strings of numbers for different proteins)**

2. If the link didn't download, right click on this link and click "Save link as..." and save the file where you want to be able to find it.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_43.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_43_big.jpg" class="dg-picture-zoom" id="picture43">  
**\*(You should rename this file too)**

3. Now you should download the same numbered file under "Output files" (mine is called 1408469302.pqr). This time you cannot click on it (as it will just bring up the a webpage with all the information in the file. You must right click and "Save link as..." this time. Also make sure the downloaded file ends in a .pqr but once again the number will not be the same as the one in this picture.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_44.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_44_big.jpg" class="dg-picture-zoom" id="picture44">

<a data-scroll href="#topcall">top</a>
<a id="APBS"></a>
<h2>APBS</h2>

<a id="IntroAPBS"></a>
<h6>Introduction to APBS</h6>

APBS is a useful tool to find the electrostatic field of a protein. Certain components need to be in place for APBS to work including _white spaces must be in place_

<a id="OnlineAPBS"></a>
<h6>How to run a protein through APBS (online)</h6>

The steps follow the same steps in making a PDB2PQR protein model structure, except for a small difference.

1. When making the PDB2PQR, check the option for allowing the program to have an APBS option, and in addition adding the insert white space link in the options, like so:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_45.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_45_big.png" class="dg-picture-zoom" id="picture45">

2. Then, click submit, and it will take you to the page for the PDB2PQR runned protein. On the bottom of the page, click <img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_46.jpg" />  and wait until APBS is done running.

3. Then download the .dx.gz file, and that is the end of your APBS session.

\* Note: Unzipping the .dx.gz file can be done using any unzipping program

<a data-scroll href="#topcall">top</a>
<a id="SetupAPBS"></a>
<h6>Setting up your computer for APBS</h6>

*DISCLAIMER: THIS IS FOR WINDOWS USERS ONLY (?)

In order to run APBS using command line, you will need to first download the APBS binary from http://sourceforge.net/projects/apbs/ as well as download the newest python version 2 release (https://www.python.org/download/releases/2.7.2/  as of 8/8/2014).

Why use the command line? It gives the user much more power over executable functions, immediately unzips the file, and is quite simple to use.

1. First, in order to run APBS at all, you need to make a directory connecting APBS to the command line.
To do so, go to the start menu, and right click on 'computer' The following should open:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_47.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_47_big.png" class="dg-picture-zoom" id="picture47">

2. Click on properties, and the following should open:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_48.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_48_big.png" class="dg-picture-zoom" id="picture48">

3. Click on 'Advanced System Settings' ; the computer will ask you if you want to change settings. Click yes, and then the system properties window will open.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_49.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_49_big.png" class="dg-picture-zoom" id="picture49">

4. Click
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_50.png" />, and another window will pop up.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_51.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_51_big.png" class="dg-picture-zoom" id="picture51">

5. This is where you'll write your path. Click on the
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_52.png" /> to create a new path.

6. To make the directory, simply copy and paste
**C:\Python27\;C:\Python27\Scripts;C:\Util\pdb2pqr-windows-bin-1.9.0;C:\apbs\bin**
and click ok.

You can now run APBS!

<a data-scroll href="#topcall">top</a>
<a id="CMDAPBS"></a>
<h6>How to run APBS from the command line</h6>

<h6>DISCALIMER: THIS TUTORIAL IS USING A WINDOWS COMPUTER AND WINDOWS COMMAND PROMPT</h6>

1. First, before running APBS through the command line, you must make sure your desired protein files are in the same folder as the apbs command prompt. If APBS downloaded correctly, it should be in your C drive (<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_53.png" />) when you open "computer" from your start menu.

2. Click on the APBS folder, and in the APBS folder make a new folder for all your proteins; please label the folder accordingly, and remember the name of the folder.

3. It is important to remember, that when putting protein files in the folder, you need to put both the PQR as well as the corresponding IN file. PQR and IN files can both be obtained from the PDB2PQR webserver.
(A PQR file is the information about the protein, whereas the IN file is a command file that tells APBS how to calculate the electrostatic fields. The In file is unique to one PQR file (as it specifies its commands to only one PQR file) and also holds other information such as dimensions and calculation specifications. Both files are needed to run APBS)  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_54.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_54_big.png" class="dg-picture-zoom" id="picture54">  
_An example of the pdb2pqr webserver and the pqr and in files_

4. Now that the folders are set up, you can open the command line. To open up the start menu, type in cmd.exe and open the command prompt; this is the command line execution for APBS.
The command prompt should look something similar to this:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_55.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_55_big.png" class="dg-picture-zoom" id="picture55">

5. Of course, our PQR and IN files are not in this location, so we'll have to go back to our C:\ drive, then to our APBS Folder, then to our designated protein folder. To do so, in the command prompt hit "space", cd, "space", .., then enter. Your command prompt should look like the following:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_56.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_56_big.png" class="dg-picture-zoom" id="picture56">
As you can see, this makes our prompt go up one directory. To go to the C:\ drive, type in the same command, and hit "enter"  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_57.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_57_big.png" class="dg-picture-zoom" id="picture57">

6. Now, type "space", "cd", "space", "apbs" and hit "enter". You are now in your APBS folder. To get to your folder of proteins, type in "cd", "space", then type in the first letter of your folder name and hit "tab" until your folder name pops up. Then hit "enter"
(_What the tab key does is find all files that start with the letters you have typed, for example, if you typed "i", then tab, the command prompt would go down, alphabetically, all your files in the folder that start with "i"_)  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_58.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_58_big.png" class="dg-picture-zoom" id="picture58">

7. Now that you are in your folder with your PQR and IN files, using the tab shortkey (as mentioned above), type the first letter of your
desired IN file. This is very important; apbs does not need the PQR file, it needs the IN file to operate.
Once you find your IN file, hit enter and APBS will run its calculations and save a DX file (File containing electrostatic fields coordinates) in your folder.

You are done running APBS!

<a data-scroll href="#topcall">top</a>

<a id="Dimes"></a>
<h2>Potential memory size and dime value problems</h2>

You can find the dime values by going through the input file (.in). You can change the DIME values of an APBS file by going through a text editor and manually changing the default values.

<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_113.png?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_113_big.png" class="dg-picture-zoom" id="picture113">

The picture above shows a sample .in file, which can be obtained after running PDB2PQR on the desired protein.

Dime values are the dimensions for the XYZ grid for the protein. Each  grid point requires about 160B of memory, and to get the total number if grid points the x,y,z grid elements are multiplied. The multi-grid solver iterates over all of these elements to find the electrostatic potential at each of those locations. The default dime values in PDB2PQR are based on the size of the protein.

To expand on DIME values, since a computer only knows about 1s and 0s convention is used to encode and decode values to the bits and bytes in memory; this is often called a type system.  An 8 bit byte has eight slots for a bit (1 or 0); therefore, if you are only considering positive numbers, it may hold a value between 0 (00000000) and 2^8 – 1  (11111111) which is 255 (though 2^8 is 256, and we have to subtract one because '0' takes up a slot).

The problem is that APBS used a signed integer in the 1.4 release to store the total number of elements.  If the total got bigger than 2^(n-1) - 1, where n is the width of the integer (in our case a 32 bit wide int so 2^(n-1) = 2,147,483,648) then the number "overflowed" and looked like a negative number.

<a data-scroll href="#topcall">top</a>
<a id="APBSvis"></a>
<h2>APBS and visualization</h2>

<a id="PyMol"></a>
<h6>PyMol</h6>

[The needed protein for this PyMol tutorial](http://www.rcsb.org/pdb/explore/explore.do?structureId=1fas) (1FAS a.k.a Fasciculin-1).  Fasciculin-1 is an acetylcholinesterase (this compound ends the communication between muscle cells) inhibitor found in the venom of the green mamba. This allows the action potential to go uncurbed which causes small involuntary muscle contractions (it paralyzes the injected subject).

To set up the molecule follow the <a data-scroll href="#IntroPDB">Introduction to PDB2PQR</a> instructions above.

1. Open the PQR file you are going to be using so you can edit it, and go down to where all the **"HETATM"** are (these should all be HOH which is water). Select them all and delete them. Save the file.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_59.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_59_big.jpg" class="dg-picture-zoom" id="picture59">  
It should look something like this:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_60.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_60_big.jpg" class="dg-picture-zoom" id="picture60">  

2.  Load the newly saved PQR file you had into PyMOL (File → Open...) and choose your favorite graphical representation of the molecular structure (often the easiest to view is "showing (**S**)" the cartoon representation and "hiding (**H**)" lines).  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_61.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_61_big.jpg" class="dg-picture-zoom" id="picture61">

3. Next go to the Plugin tab and open APBS Tools... (where ... is a number referring to the  version). In the window that comes up, click "Use another PQR" and then "Choose Externally Generated PQR:".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_62.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_62_big.jpg" class="dg-picture-zoom" id="picture62">

4. Now find the file that you created using the webserver and click ok.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_63.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_63_big.jpg" class="dg-picture-zoom" id="picture63">

5. Go into "My Computer" and in the upper right corner and type in apbs.exe and press enter (to search for it).  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_64.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_64_big.jpg" class="dg-picture-zoom" id="picture64">

6. Once you find the file, left click on it once to select it, then right click and go to open file location.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_65.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_65_big.jpg" class="dg-picture-zoom" id="picture65">

7. Click on the white space in the top of window.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_66.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_66_big.jpg" class="dg-picture-zoom" id="picture66">

8. When the path is highlighted blue, Right click on it,  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_67.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_67_big.jpg" class="dg-picture-zoom" id="picture67">

9. And hit Copy (to copy the file path).  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_68.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_68_big.jpg" class="dg-picture-zoom" id="picture68">

10. Paste this link into the "APBS binary location" on the "Program Locations" tab of "PyMol APBS Tools".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_69.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_69_big.jpg" class="dg-picture-zoom" id="picture69">

11. Now add "**\apbs.exe**" after "\bin" in order to finish off the path to the APBS executable. If the path to an apbs.exe executable is correct, the line should no longer be highlighted red.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_70.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_70_big.jpg" class="dg-picture-zoom" id="picture70">

12. Now repeat steps 4 through 10 but with **psize.py** and **pdb2pqr.exe** (if they are not already in place). The end product should look like this:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_71.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_71_big.jpg" class="dg-picture-zoom" id="picture71">

13. Now hit "Set grid", and "Run APBS".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_72.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_72_big.jpg" class="dg-picture-zoom" id="picture72">

14. Now you should go to the visualization tab, and hit "Show" under "Molecular surface", "Positive Isosurface", and "Negative Isosurface".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_73.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_73_big.jpg" class="dg-picture-zoom" id="picture73">

15. A visualization in the "PyMol Viewer" window should appear and look something like this:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_74.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_74_big.jpg" class="dg-picture-zoom" id="picture74">

16. \*\*\* By changing the values for" Low, High, and Contour (kT/e), you can increase the range of concentrations you can see (larger values means more white space and less dark red/blue, as well as less isosurface).  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_75.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_75_big.jpg" class="dg-picture-zoom" id="picture75">

17. To get the changes to show you need to hit the "Update button" after changing the values.  Using values of 5, this is the picture that appears (common isovalues are 1,5,10):  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_76.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_76_big.jpg" class="dg-picture-zoom" id="picture76">

18. **If a picture like this**  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_77.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_77_big.jpg" class="dg-picture-zoom" id="picture77">  
**or this appears,**  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_78.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_78_big.jpg" class="dg-picture-zoom" id="picture78">  
**you didn't properly delete/save the water molecules which causes small highly charged areas**

19. To get field lines to appear, under the Visualization(1) tab hit "Show"  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_79.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_79_big.jpg" class="dg-picture-zoom" id="picture79">  
The picture should look somewhat similar to this:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_80.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_80_big.jpg" class="dg-picture-zoom" id="picture80">

<a data-scroll href="#topcall">top</a>
<a id="VMD"></a>
<h6>VMD</h6>

[The needed protein for this VMD tutorial](http://www.rcsb.org/pdb/explore/explore.do?pdbId=1MYK) (1MYK a.k.a Hyperstable Arc Repressor Mutant PL8). An arc repressor is a small protein that acts as a transcription factor. This is a mutant that has the Proline-8 (in location 8) replaced by a Leucine. This creates enhanced stability due to an extra hydrogen bond, but also decreases the affinity of the molecule to bind to DNA.

In order to set up the molecule, follow the same instructions as <a data-scroll href="#IntroPDB">Introduction to PDB2PQR</a> but replace the shown molecule with 1MYK.

1. Open the downloaded PQR file and go to the bottom where the "HETATMs" are listed. There should be the 3 parts of a water molecule (labeled HOH). Delete these.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_81.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_81_big.jpg" class="dg-picture-zoom" id="picture81">  
You should end up with the following:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_82.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_82_big.jpg" class="dg-picture-zoom" id="picture82">  

2. Open up VMD, and under the **VMD Main** tab, click "File" -> "New Molecule".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_83.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_83_big.jpg" class="dg-picture-zoom" id="picture83">

3. Under "Molecule File Browser",  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_84.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_84_big.jpg" class="dg-picture-zoom" id="picture84">  
Hit Browse, open the "**1MYK.pqr**" file and hit Load (make sure the file type under "Determine file type:" is correct after hitting load, it should be PQR)

4. Under "Extensions", select "Analysis" and "APBS Electrostatics"  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_87.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_87_big.jpg" class="dg-picture-zoom" id="picture87">

5. Under "APBS Tools" click "Edit" and then "Settings"  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_88.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_88_big.jpg" class="dg-picture-zoom" id="picture88">

6. Under the APBS Tools "Settings" tab, hit Browse under "APBS Location". Input the location to an apbs.exe (apbs executable).  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_89.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_89_big.jpg" class="dg-picture-zoom" id="picture89">

7. Click on "Computer" on the left sidebar and in the top right corner type "apbs.exe" and hit enter to search for apbs.exe.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_90.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_90_big.jpg" class="dg-picture-zoom" id="picture90">

8. Click on one of the "apbs.exe", right click and go down to "Open file location"  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_91.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_91_big.jpg" class="dg-picture-zoom" id="picture91">

9. Click on the "apbs.exe" and click "Open".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_92.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_92_big.jpg" class="dg-picture-zoom" id="picture92">

10. For "Working Directory" browse over to the file that contains the PQR file (1MYK.pqr) you downloaded and saved previously. Hit "Ok" once you found the file.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_93.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_93_big.jpg" class="dg-picture-zoom" id="picture93">

11. Click OK on the "Settings" page  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_94.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_94_big.jpg" class="dg-picture-zoom" id="picture94">

12. Click on the "0" and hit "Edit".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_95.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_95_big.jpg" class="dg-picture-zoom" id="picture95">

13. If you need to change the APBS settings you would do it on this page; however, the defaults are usually fine except for the most highly charged molecules (Elec stands for electrostatics). Hit Ok when you are done.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_96.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_96_big.jpg" class="dg-picture-zoom" id="picture96">

14. Now hit "Run APBS". In the "APBSRun: Load APBS Maps" window click "Load files into top molecule" and click "Ok"  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_97.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_97_big.jpg" class="dg-picture-zoom" id="picture97">

15. Under the "VMD Main" tab, go to "Graphics" and hit "Representations".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_98.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_98_big.jpg" class="dg-picture-zoom" id="picture98">

16. Select the current "rep" and under "Drawing Method" select "NewCartoon". Under "Coloring Method" select "ResType (colors based on type of residue: non-polar, basic, acidic, polar are white, blue, red, and green respectively)"  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_99.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_99_big.jpg" class="dg-picture-zoom" id="picture99">  
The current picture should look something like this:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_100.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_100_big.jpg" class="dg-picture-zoom" id="picture100">

17. Now hit "Create rep" and select the new rep.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_101.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_101_big.jpg" class="dg-picture-zoom" id="picture101">  
Change the "Coloring Method" of this one to "ColorID" (the value of this should be 0).  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_102.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_102_big.jpg" class="dg-picture-zoom" id="picture102">  
Now change the "Drawing Method" to "Isosurface". Change the material to "Transparent", the "Draw" to "Solid Surface", and the "Isovalue" to 1.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_103.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_103_big.jpg" class="dg-picture-zoom" id="picture103">

18. Repeat step 17 but with a ColorID of 1 and an Isovalue of -1 (red for a negative charge is standard because oxygen is typically modeled as red while blue is standard for a positive charge because nitrogen is modeled as blue). The display window should now look something like this:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_104.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_104_big.jpg" class="dg-picture-zoom" id="picture104">

19. If you want to visualize surface potentials (instead of isosurfaces), under the "Graphical Representations" window change the coloring method for both reps that are "Isosurface" under the "Style" title to "Surf".  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_105.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_105_big.jpg" class="dg-picture-zoom" id="picture105">

20. Also change the "Coloring Method" to "Volume" and the Material to "Opaque" for both reps.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_106.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_106_big.jpg" class="dg-picture-zoom" id="picture106">

21. Under the "Trajectory" tab  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_107.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_107_big.jpg" class="dg-picture-zoom" id="picture107">  
Change the "Color Scale Data Range:" values to -10 and 10 and hit set (do this for both Surf reps).  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_108.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_108_big.jpg" class="dg-picture-zoom" id="picture108">

22. Now the display should have a solid red/blue/white surface that looks like this:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_109.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_109_big.jpg" class="dg-picture-zoom" id="picture109">

23. By keeping the "Coloring Method" as "Volume", but changing the "Drawing Method" to "FieldLines" you can visualize the local intensity of electric fields.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_110.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_110_big.jpg" class="dg-picture-zoom" id="picture110">

24. Change the "Size" to 2, "GradientMag" to approximately 8.30, "Min Length" to 1.00, and "Max Length" is approximately 200.  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_111.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_111_big.jpg" class="dg-picture-zoom" id="picture111">

25. The final representation should now look like the following:  
<img src="{{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_112.jpg?url={{site.baseurl}}/img/Tutorial_pics_in_order/Tutorial_pic_112_big.jpg" class="dg-picture-zoom" id="picture112">

<a data-scroll href="#topcall">top</a>

<script>
smoothScroll.init({
});
</script>
