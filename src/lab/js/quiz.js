<!-- This file needs to be edited by the lab developer to suit
the requirements of their lab in particular.-->

<!-- Add class="default" to include any element as it is
specified in default.html. 
Do not include class="default" to the elements that you want to
edit -->

<!DOCTYPE html>
<html>
<head></head>
<body>

<div id="experiment"> <!-- The Experiment Document Container-->

  <!-- The lab Header contains the logo and the name of the lab,
  usually displayed on the top of the page-->

  <header id="experiment-header" class="default">
  
    <div id="experiment-header-logo" class="logo">
      <!-- Enclose the logo image of your lab or write it in 
      text-->
      <img src="../images/logo.jpg" />
    </div>

    <div id="experiment-header-heading" class="heading">
      <!-- Write the name of your lab and link it to the home 
      page of your lab (h1 tag is preferred while writing your 
      lab name)-->
      
  <script type="text/javascript" src="../js/MathJax/MathJax.js">
  </script>
  <script>
	var len=6;
	var Ans = new Array();
	Ans["q1"]=2;
	Ans["q2"]=2;
	Ans["q3"]=1;
	Ans["q4"]=0;
	Ans["q5"]=0;
	Ans["q6"]=2;
</script>
<script type="text/javascript" src="../js/quiz.js">  </script>
      <a href="../index.php">Quantum chemistry Virtual lab </a>	
    </div>

    <!-- Add any additional element you want to add to the lab 
    header, For example : Help (Enclosing them with suitable 
    div is recommended)-->

  </header>


  <!-- The lab article is the main content area where all the 
  experiment content sits-->
  <article id="experiment-article">
  
    <!-- The lab article has an header, optional navigational 
    menu, number of sections, an optional sidebar and a closing 
    footer-->
     <div id="experiment-article-breadcrumb" class="breadcrumb">
     </div>
    
      <header id="experiment-article-heading" class="heading">
        <!-- You can add a welcome message or title of the 
        experiment here -->
        Geometry optimization using ab inito quantum calculations
        <!-- Add any additional element if required with proper 
        enclosing-->
      </header>

      <!-- Navigation menu is useful to organize the view of 
      multiple sections inside the article-->
      <nav id="experiment-article-navigation" class="default">
        <ul id="experiment-article-navigation-menu">
          <!-- The menu can be dynamically generated to contain 
          the headings of your sections or instead write the 
          menu items of your choice individually enclosedu in 
          <li> tag as shown below-->
        </ul>
      </nav>

      <!-- All the sections of your lab or experiment can be 
      enclosed together with a div element as shown below-->
      <div id="experiment-article-sections">

        <!-- First section of the article-->
        <section id="experiment-article-section-1">
          
          <div id="experiment-article-section-1-icon" 
          class="icon">
	    <!-- Enclose the icon image of your lab -->
	    <img src="../images/introduction.jpg" />
	  </div>	
          
          <!-- The heading for the section can be enclosed in a 
          div tag. -->
          <div id="experiment-article-section-1-heading" 
          class="heading">
            Introduction
          </div>

          <!-- Write the section content inside a paragraph 
          element, You can also include images with <img> tag -->
          <div id="experiment-article-section-1-content" 
          class="content">	
          	<p>
		Different kinds of calculations require different kinds of input. 
		But some items are to be specified in all the cases. The two most 
		popular computer programs for carrying out ab initio quantum 
		chemical calculations is the "Gaussian" and "Gamess" series.
		</p>
		<p>
		To study a molecule using these software we need to specify the 
		molecule's Cartesian coordinates or the z-matrix of the molecule 
		or the redundant internal coordinates of the molecule.
		</p>
		<p>
		We have to also specify the method and also the basis set. For a
		single point energy calculations the geometry specified by the
		z-matrix alone is the input.
		</p>
        </div>


      </section>

      <!-- Second section of the article-->
      <section id="experiment-article-section-2">
        
        <div id="experiment-article-section-2-icon" 
        class="icon">
	  <!-- Enclose the icon image of your lab. -->
	  <img src="../images/theory.jpg" />
	</div>
				
        <!-- The heading for the section can be enclosed in a 
        div tag. -->
        <div id="experiment-article-section-2-heading" 
        class="heading">
          Theory
        </div>


        <!-- Write the section content inside a paragraph 
        element, we can also include images with <img> tag -->
        <div id="experiment-article-section-2-content" 
        class="content">
          <p>

Ab initio quantum chemistry involves a choice of method and a choice of basis set. A number of different procedures are also available, such as single point calculations, geometry optimizations and calculations of frequencies.
</p>

<p>Methods, basis sets and procedures play a key role in the calculations.</p>

<p>Methods  include the abinitio methods, Hartee-Fock method and the electron correlation methods. The electron correlation methods can be classified as variational methods, perturbation methods and the density functional methods.</p>

<p>Variational correlation methods:</p>

<p>The variational principle states that the expectation value or the average value of an energy for an approximate wave function always lies above or equal to the exact solution of the schrodinger equation for the same Hamiltonian operator. This means that if we have a wave function that contains adjustable parameters and we adjust these parameters to minimise the expectation value of the energy, then we approach the exact result.</p>

<p>The principle post-Hartree-Fock method that uses the variation principle is configuration interaction. Here we take a linear combination of components, each of which represents an excited configuration wave function and mix these with the Hartree-Fock (HF) wave function. Each component has the electrons occupying the various occupied and virtual orbitals of the Hartree-Fock wave function in different ways. It is common to restrict the excited configurations to those which arise from promoting two electrons from the occupied orbitals of the HF wave function to the virtual orbitals (Configuration Interaction with double excitations - CID) or to single and double excitations (Configuration Interaction with single and double excitations - CISD). If we take all possible excitations of the electrons from the HF occupied orbitals to the virtual orbitals, the method is called "Full CI", but this is very time consuming and only possible for very small systems. Other approaches aim!
  to optimise not only the mixing coefficients of the various configurations, but also the coefficients of the basis functions in the molecular orbitals. The latter are frozen at the HF values in the CI methods described above. This more complex approach is called multi-configuration self-consistent field (MCSCF). It can give quite good results with a modest number of configurations. The CASSCF - Complete Active Space Self-Consistent Field - method is an example of this approach. MCSCF methods, however, are beyond the scope of this module.
</p>
<p>
</p><h3>Single point energy calculations</h3>
<p></p>
<p>
This procedure calculates the energy, wave function and the other requested properties for a single fixed geometry. It is usually done to study a new molecule in order to check the nature of the wave function. It is also frequently carried out after the geometry optimization, but with a larger basis set or a more superior method than those used to optimise the geometry.
</p>
<h3>Frequency calculations</h3>
<p>
The frequency calculations can be carried out for two main reasons. First one is to predict the frequencies and the IR and Raman intensities. Frequencies which are calculated are harmonic frequencies as they are obtained by assuming the potential energy surface to be harmonic. After running an optimization calculation, if all the calculated frequencies are real and positive then that contributes to the local or global minimum of the molecule taken. If we have a stationary point other than the minimum then we don't get all positive values but there would be negative numbers which are often called as "imaginary frequencies". A transition state for any molecule would have only one imaginary frequency. If the symmetry of the molecule is restrained it gives more than one imaginary frequency during optimization. For a molecule of n atoms, the number of normal modes is (3n-6) if the molecule taken is nonlinear and it is (3n-5) if the molecule is linear.
</p>
<h2>GAMESS</h2>
<p>
The software used for all calculations is GAMESS. The input file description is as follows:<br>
<br>
Input file:<br><br>
<ol>
<li>$CONTRL: This group has several subsections which speak about various global switches.</li><br>
<ol><li>SCFTYP: together  with MPLEVEL or CTYP specifies the wavefunction. The user has the choice to choose from RHF, UHF, MCSCF and so on.</li><br>

<li>MPLEVEL: chooses Moller-Plesset perturbation theory elvel after the SCF.</li><br>

<li>CITYP: chooses the CI computation after the SCF, any SCFTYP except UHF may be followed by a CI computation.</li><br>

<li>RUNTYP: specifies the type of computation .</li><br>

<li>COORD: choice of the molecular geometry in $DATA.</li><br>

<li>UNIQUE:only forsymmetry unique atoms will be given in Cartesian coordinates which is default.</li><br>

          <li>CART: Cartesian coordinates will be input.</li><br>

          <li>ZMAT: GAUSSIAN style internals will be input.</li><br>

<li>UNITS: distance units can be specified as ANGS or BOHR. Angles must be in degrees.</li><br>
</ol>

<li>$SYSTEM: This group provides global control information for your computer�s operation. This is system related input, and will not seem particularly chemical to the users.</li><br>
<ol>
<li>TIMLIM: time limit, in minutes. It is set to about 95 percent of the time limit given to the batch job so that GAMESS can stop itself gently.</li><br>

<li>MEMORY: establishes the maximum memory which your job can use.</li><br>
</ol>
<li>$STATPT: This group controls the search for the stationary points.</li><br>
<ol>

<li>NSTEP: maximum number of steps to take. Restart data is punched if NSTEP is exceeded.</li><br>

<li>HESS: selects the initial hessian matrix.</li><br>
<ol>
<li>GUESS: chooses a positive diagonal hessian</li><br>

<li>READ:causes the hessian to be read from a $HESS group.</li><br>

<li>RDAB: reads only the ab initio part of the hessian, and approximates the effective fragment blocks.</li><br>

<li>CALC: causes hessian to be computed.</li><br>
</ol>
</ol>
<li>$BASIS: This group allows certain standard basis sets to be easily given. If this group is omitted, the basis set must be given instead of $DATA group.</li><br>
<ol>

<li>GBASIS: Name of the Gaussian basis set.</li><br>

<li>NGAUSS: number of Gaussians(N). This parameter pertains only to GBASIS=STO, N21,N31 and N311.</li><br>

<li>NDFUNC:number of heavy atom polarization functions to be used. These are usually d functions.</li><br>
</ol>
<li>$GUESS: This group controls the selection of initial molecular orbitals.</li><br>

<li>$HUCKEL: carry out an extended Huckel calculation using a Huzinaga MINI basis set, and project this onto the current basis. This is implemented for a toms upto Rn, and will work for any electron or ECP basis set.</li><br>

<li>$DATA: This group describes the global molecular data such as point group symmetry, nuclear coordinates, and possibly the basis set. It consists of a series of free format card images.</li><br>
</ol>
<p>
For further details about the input file go to the GAMESS website by clicking <a href="http://www.msg.chem.iastate.edu/gamess/" target="_blank">here</a>
</p>
        </div>
      </section>


      <section id="experiment-article-section-3">
        
        <div id="experiment-article-section-3-icon" 
        class="icon">
	  <!-- Enclose the icon image of your lab. -->
	  <img src="../images/objective.jpg" />
	</div>
     
        <div id="experiment-article-section-3-heading" 
        class="heading">
          Objective
        </div>

        <div id="experiment-article-section-3-content" 
        class="content">
          <p>
           To perform single point energy and vibrational frequency calculations using variational principle, on simple molecules.
          </p> 
       

        </div>

      </section>


      <section id="experiment-article-section-4">

        <div id="experiment-article-section-4-icon" 
        class="icon">
	  <!-- Enclose the icon image of your lab.-->
	  <img src="../images/simulation.jpg" />
	</div>

        <div id="experiment-article-section-4-heading" 
        class="heading">
          Experiment
        </div>

        <div id="experiment-article-section-4-content" 
        class="content">
          <p>
	       <a href="experiment/index.php" target="_blank"> Start the Experiment  </a> 
          </p>
        </div>

      </section>

      <section id="experiment-article-section-5">
   
        <div id="experiment-article-section-5-icon" 
        class="icon">
	  <!-- Enclose the icon image of your lab.-->
	  <img src="../images/manual.jpg" />
	</div>

        <div id="experiment-article-section-5-heading" 
        class="heading">
          Manual
        </div>

        <div id="experiment-article-section-5-content" 
        class="content">
          <p> 
          	<ol>
		<li> Select a molecule from the list: (a) Water (b) Ammonia (c) Benzene (d) Formaldehyde (e) Benzene (f) Fullerene(C60). </li>
		<li> Fill the atom connectivity to generate the z-matrix for the selected molecule. </li>
		<li> The next slide shows the method, basis set and the procedure used for the optimization of the
		 considered molecule under study. </li>
		<li> The slide that follows shows the GAMESS input file for the respective molecule. </li>
		<li> Upon running GAMESS, the output file for the geometry optimization of the selected molecule is being displayed. </li>
		</ol>
		<br>
		<p>
		Repeat the above steps for every molecule in the list.<br><br>
		</p>
           </p>

          </div>

        </section>

        <section id="experiment-article-section-6">
      
          <div id="experiment-article-section-6-icon" 
          class="icon">
	    <!-- Enclose the icon image of your lab.-->
	    <img src="../images/quizzes.jpg" />
	  </div>

          <div id="experiment-article-section-6-heading" 
          class="heading">
            Quizzes
          </div>

          <div id="experiment-article-section-6-content" 
          class="content">
            <form name="qz" onsubmit="return checkAns(this);">
<h2>Quiz</h2>
            <p>
              
	<p> <b>Q1.</b> A minimal valence basis set is the one in which<br>
	<input name="q1" id="q1" value="3" type="radio"> <font color="black">
	Always gives lower energy </font> <br>
	<input name="q1" id="q1" value="2" type="radio"><font color="black">
	Is optimized for small molecules </font> <br>
	<input name="q1" id="q1" value="1" type="radio" > <font color="black">
	Contains one basis function for each atomic orbital </font> <br>
	<input name="q1" id="q1" value="0" type="radio"><font color="black">
	None of the above </font> <br>
	<br>
	
	<b>Q2.</b> Which of the following basis sets do not have the polarization functions<br>
	<input name="q2" id="q2" value="3" type="radio"> <font color="black">
	6-31G* </font> <br>
	<input name="q2" id="q2" value="2" type="radio"><font color="black">
	6-31G(d) </font> <br>
	<input name="q2" id="q2" value="1" type="radio" > <font color="black">
	3-21G </font> <br>
	<input name="q2" id="q2" value="0" type="radio"><font color="black">
	None of the above </font> <br>
	<br>
	
	<b>Q3.</b>In the context of quantum chemistry , UHF stands for <br>
	<input name="q3" id="q3" value="3" type="radio"> <font color="black">
	Ultra High Frequency </font> <br>
	<input name="q3" id="q3" value="2" type="radio"><font color="black">
	Unrestricted Hatree Fock </font> <br>
	<input name="q3" id="q3" value="1" type="radio"> <font color="black">
	Under Half Full </font> <br>
	<input name="q3" id="q3" value="0" type="radio"><font color="black">
	Unlimited Hamiltonian function </font> <br>
	<br>
	
	<b>Q4.</b> What do MP2 and B3LYP levels have in common <br>
	<input name="q4" id="q4" value="3" type="radio"> <font color="black">
	They are all post-Hartree-Fock techniques </font> <br>
	<input name="q4" id="q4" value="2" type="radio"><font color="black">
	They are all size-extensive techniques </font> <br>
	<input name="q4" id="q4" value="1" type="radio"> <font color="black">
	They are all techniques which include electron correlation </font> <br>
	<input name="q4" id="q4" value="0" type="radio"><font color="black">
	They are all based on density functional theory </font> <br>
	<br>
	
	<b>Q5.</b> The transition state can be characterised by <br>
	<input name="q5" id="q5" value="3" type="radio"> <font color="black">
	One imaginary frequency </font> <br>
	<input name="q5" id="q5" value="2" type="radio"><font color="black">
	All positive frequencies </font> <br>
	<input name="q5" id="q5" value="1" type="radio"> <font color="black">
	All negative frequencies </font> <br>
	<input name="q5" id="q5" value="0" type="radio"><font color="black">
	None of the above </font> <br>
	<br>
	
	<b>Q6.</b> The number of normal modes for a non-linear molecule of 'n' atoms is <br>
	<input name="q6" id="q6" value="3" type="radio"> <font color="black">
	3n-4 </font> <br>
	<input name="q6" id="q6" value="2" type="radio"><font color="black">
	3n-5 </font> <br>
	<input name="q6" id="q6" value="1" type="radio"> <font color="black">
	3n-6 </font> <br>
	<input name="q6" id="q6" value="0" type="radio"><font color="black">
	3n </font> <br>
	<br>
	<input value="Submit Answers" type="submit" class="button"> </p>
	
            </p>
	</form>
          </div>

        </section>
	<!--
        <section id="experiment-article-section-7">
	  
          <div id="experiment-article-section-7-icon" 
          class="icon">
	    <img src="../images/procedure.jpg" />
	  </div>
	
          <div id="experiment-article-section-7-heading" 
          class="heading">
	    Procedure
	  </div>
	
          <div id="experiment-article-section-7-content" 
          class="content">
	    <p>
	      Procedure for the experiment is as follows.
	    </p>
	  </div>
        </section>
	-->	
		
        <section id="experiment-article-section-8">
   
          <div id="experiment-article-section-8-icon" 
          class="icon">
	    <!-- Enclose the icon image of your lab.-->
	    <img src="../images/readings.jpg" />
	  </div>

          <div id="experiment-article-section-8-heading" 
          class="heading">
            Further Readings
          </div>

          <div id="experiment-article-section-8-content" 
          class="content">
            <ol>
		  <li>Griffiths, David J. (2004). Introduction to Quantum Mechanics (2nd ed.). Prentice Hall.</li>
		  <li><a href="http://chemistry.umeche.maine.edu/Modeling/GGZmat.html" target="_blank">http://chemistry.umeche.maine.edu/Modeling/GGZmat.html</a></li>
		  <li><a href="http://cmt.dur.ac.uk/sjc/thesis_dlc/node36.html" target="_blank">http://cmt.dur.ac.uk/sjc/thesis_dlc/node36.html</a></li>
		  <li> "General Atomic and Molecular Electronic Structure System" M.W.Schmidt, <br/> K.K.Baldridge, J.A.Boatz, S.T.Elbert, M.S.Gordon, J.H.Jensen, S.Koseki, N.Matsunaga, K.A.Nguyen, S.Su, T.L.Windus, M.Dupuis, J.A.Montgomery J. Comput. Chem., 14, 1347-1363(1993).</li>
		</ol>
          </div>

        </section>
	        <section id="lab-article-section-6">
       
       <div id="lab-article-section-6-icon" class="icon">
         <!-- Enclose the icon image for the section. -->
 <img src="../images/manual.jpg" />
</div>

<!-- The heading for the section can be enclosed in a div tag and shown with a <h2> tag -->

<div id="lab-article-section-6-heading" class="heading">
Feedback
</div>

<!-- Write the section content inside a paragraph element, You can also include images with <img> tag -->
<div id="lab-article-section-6-content" class="content">
 <p>
  <ul>
<li><a href="http://feedback.vlabs.ac.in/feedback/experiment" >Feedback </a></li>

  </ul>
 </p>
</div>

     </section>
      </div>


    <!-- An article can have a sidebar that contain related 
    links and additional material (however it is kept optional 
    at this moment) -->
    <aside id="lab-article-sidebar" class="default">
      <!-- put the content that you want to appear in the 
      sidebar -->	
    </aside>


    <!-- Article footer can display related content and 
    additional links -->						
    <footer id="lab-article-footer" class="default">
      <!-- Put the content that you want to appear here -->
    </footer>

  </article>


  <!-- Links to other labs, about us page can be kept the lab 
  footer-->
 <footer id="lab-footer" class="footer">
   <!-- Put the content here-->
<a href="http://virtual-labs.ac.in/nmeict/" >Sponsered by MHRD (NME-ICT) </a> | <a href="http://virtual-labs.ac.in/licensing/" target="_blank"> Licensing Terms </a>
</footer>
</div>		

</body>
</html>
