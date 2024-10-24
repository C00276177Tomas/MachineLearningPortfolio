import React, { useState, useEffect } from 'react';
import './App.css';
import faceshot from './images/faceshot.jpg'; // Import the image
import githubLogo from './images/github.png';
import linkedInLogo from './images/linkedIn.png';
import level1Assembly from './images/level1AssemblyProject.png';
import level2Assembly from './images/level2AssemblyProject.png';
import codeAssembly from './images/codeAssemblyProject.png';
import rootMeanSquareError from './images/RootMeanSquareError.png';
import splitingModel from './images/SplitingModel802020.png';
import validationRMSE from './images/ValidationRMSE.png';
import dataCleaning from './images/filterDataset.png';
import mergeDatasets from './images/mergeDatasets.png';

function App() {

	const [activeSection, setActiveSection] = useState('top'); // Initialize with 'top' for the Home link

  // Function to scroll to the top of the page or a specific section
	const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    if (sectionId === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

	useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); // Get all section elements
      const scrollPos = window.scrollY; // Current scroll position
      const windowHeight = window.innerHeight; // Height of the viewport
      const documentHeight = document.body.offsetHeight; // Total height of the document
      const offset = 50; // Offset to check above the section

      // Check if scrolled to the top
      if (scrollPos < 500) {
        setActiveSection('top'); // Set active section to 'top' (Home)
        return;
      }
			
      // Check if scrolled to the bottom
      if (scrollPos + windowHeight >= documentHeight -20) {
        setActiveSection('contact'); // Set active section to 'contact'
        return;
      }

			else {
				// Check which section is currently in view
				sections.forEach((section) => {
					const sectionTop = section.offsetTop; // Section top position
					const sectionHeight = section.offsetHeight; // Section height
	
					// Check if the current scroll position is within the section with offset
					if (scrollPos + offset >= sectionTop && scrollPos < sectionTop + sectionHeight) {
						setActiveSection(section.id); // Update active section
					}
				});
			}


    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  return (
    <div className="App">
       <header>
        <nav className="navbar">
          <ul className="nav-links centered">
					<li>
							<a href="#" onClick={(e) => scrollToSection(e, 'top')} className={activeSection === 'top' ? 'active' : ''}>Home</a>
					</li>
					<li>
							<a href="#intro" onClick={(e) => scrollToSection(e, 'intro')} className={activeSection === 'intro' ? 'active' : ''}>Introduction</a>
					</li>
					<li>
							<a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
					</li>
					<li>
							<a href="#machineLearning" onClick={(e) => scrollToSection(e, 'machineLearning')} className={activeSection === 'machineLearning' ? 'active' : ''}>Machine Learning</a>
					</li>
					<li>
							<a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
					</li>
					<li>
							<a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
					</li>
          </ul>
        </nav>
      </header>

      <main>
			<section className="main-section">
				<section id="profile" className="profile-section">
					{/* <img src={faceshot} alt="Profile" className="profile-image" /> */}
					<div className="profile-content">
						<h1 className="welcome-message">Welcome</h1>
						<p className="job-description">
							Hi, my name is Tomas Smitas. I am a Full Stack Software Developer & Data Scientist.
						</p>
						<p className="job-description">
								<a 
										href="#intro" 
										className="scroll-link" 
										id="scroll-link" 
										onClick={(e) => scrollToSection(e, 'intro')} // Call the scroll function with 'intro'
								>
										Scroll down for more
								</a>
						</p>
					</div>
				</section>
        <section id="intro">
					<h2>About Me</h2>
          <p>
            For me, the core of software development is functionality. I value simplicity and clarity, focusing on creating both 
            intuitive frontends and efficient backends. My goal is to develop solutions that effectively address real-world problems 
            and enhance user experiences.
          </p>
          <p>
            I am particularly passionate about artificial intelligence and its potential to drive innovation. I am dedicated to 
            applying AI to tackle complex challenges and improve technological solutions. By blending my technical skills with a 
            strong interest in AI, I aim to contribute to meaningful advancements and create impactful, practical applications.
          </p>
          <p>
          I hold a Level 7 Ordinary Degree in Software Development with a 2.1 GPA, granted by South East Technological University. 
          I am currently pursuing a Level 8 Honours Degree in Software Development, with the goal of achieving a 1.1 GPA.
          </p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <div class="job">
              <h3>Netwatch – Research & Development Department (Software Development Intern)</h3>
              <p class="dates">Jan 2024 – July 2024</p>
              <ul>
                  <li>Contributed to the development of software solutions across web pages, mobile apps (Android and iOS), and in-house applications within a Scrum framework.</li>
                  <li>Performed coding, debugging, and testing applications, collaborating closely with senior developers.</li>
                  <li>Gained extensive knowledge in areas such as Azure DevOps, Git, Visual Studio, Visual Studio Code, React, Typescript, C#, Team Coding, GraphQL, SQL, Packages, Libraries, Test Cases, Mobile Applications, etc.</li>
                  <li>Implemented new features and resolved bugs and defects in existing software, improving user experience.</li>
                  <li>Participated in team meetings like Sprint Planning, Daily Stand Up, Weekly Stand Up, Planning Poker, Peer Reviews, Team Days Out, etc.</li>
                  <li>Contributed to documentation and user manuals, aiding in the understanding of React's Material React Tables V2 for developers that haven’t worked on MRT before.</li>
              </ul>
          </div>

          <div class="job">
              <h3>Integer – Medical Manufacturing (General Operative)</h3>
              <p class="dates">Sept 2018 – Jan 2024</p>
              <ul>
                  <li>Worked in multiple departments on assembly lines with team sizes of 4 to 8 to produce life-saving equipment that was subject to very high-quality standards.</li>
                  <li>Worked on the module which is a big machine that needs to be constantly maintained. My tasks included cutting coils to length, loading machine, maintaining loaders, maintaining welders, lasering, preventative maintenance, inspecting welds, and reworking or disposing of defective guides.</li>
                  <li>Operated and maintained precision manufacturing equipment, ensuring adherence to strict quality standards.</li>
                  <li>Collaborated with cross-functional teams to meet production targets, contributing to the timely delivery of medical devices.</li>
                  <li>Conducted quality inspections and tests, ensuring products met regulatory compliance and specifications.</li>
                  <li>Worked with a kanban system that ensured efficiency.</li>
              </ul>
          </div>
        </section>
				<section id="machineLearning">
          <h2>Machine Learning</h2>
          <div class="job">
						<h3>Predicting Student Final Grades Using Multidimensional Linear Regression</h3>
						
						<p><strong>Introduction</strong></p>
						<p>In this project, a dataset from DataWorld will be used, containing information about students behaviors and previous academic 
							performance, to predict their final grades. The goal is to use a multidimensional linear regression model to analyse the impact
							 of various factors on students final outcomes.</p>
						
						<p><strong>Business Objectives</strong></p>
						<p>The objective of this project is to determine whether student behavior, study habits, and previous grades can be used to 
							accurately predict final grades. This information can be useful for educators, academic advisors, and students themselves 
							to understand what factors contribute to academic success.</p>
						
						<p><strong>Situation Assessment</strong></p>
						<p>The key performance indicator for this project will be the root mean square error &#40;RMSE&#41;, which will measure the 
							accuracy of the grade predictions. A lower RMSE indicates a more accurate model. Additionally, understanding the significance 
							of various input variables &#40;such as study time, social activities, and prior performance&#41; will help identify which
							 factors are most critical in predicting student success.</p>
						
							<p><strong>Tools & Technologies</strong></p>
							<ul>
								<li><strong>Excel</strong>: Used for initial data exploration and cleaning. Excel helped in understanding the structure of the 
								dataset, identifying missing values, and performing preliminary statistical analysis before deeper modeling. It was particularly 
								useful for visualising trends in the final grades (G1), (G2) and (G3).</li>
								<br></br>
								<li><strong>Python</strong>: The core programming language used to implement the linear regression model. Python allowed for
								 the integration of different libraries such as NumPy and Pandas for efficient data manipulation and analysis. It also
								  facilitated the model training and evaluation process to predict final student grades.</li>
									<br></br>
								<li><strong>NumPy</strong>: Used to handle the numerical computations needed for the linear regression model.</li>
								<br></br>
								<li><strong>Google Colab</strong>: Provided an online environment for writing and running the Python code for the linear
								 regression model. Colabs GPU support and easy access to Jupyter notebooks made it convenient to develop, experiment with,
								  and test the model without worrying about local hardware limitations.</li>
								<br></br>
								<li><strong>Pandas</strong>: Employed to manage and manipulate the dataset effectively. Pandas was used to merge, clean, 
								and preprocess the data, and to select the relevant variables for the model.</li>
							</ul>
						<p><strong>Data Collection</strong></p>
						<p>The dataset used in this project was sourced from DataWorld. It is publicly accessible at the following 
							link: <a href="https://data.world/uci/student-performance" target="_blank">https://data.world/uci/student-performance</a>. 
							It consists of two files containing similar types of data, one with just under 400 records and the other with around 650 
							records. These datasets were merged to create a larger dataset with over 1,000 records and 33 variables. Out of these 33 
							variables, 10 were selected for use in the linear regression algorithm. These columns were chosen because they contain 
							continuous data, which is ideal for linear regression. The independant columns are defined in the figure below in the 
							`specified_columns` variable.</p>
						<img src={mergeDatasets} alt="merge Datasets"></img>
						
						<p><strong>Data Cleaning</strong></p>
						<p>First, the columns were selected to be used as independent variables, and the dataset was filtered to include only these 
							columns along with the dependent variable. The figure above shows the chosen variables. During my data cleaning process, I 
							looped through each column and checked for any missing values (nulls). If I found any null values, I replaced them with the 
							median of that specific column. This approach ensured that the data was complete and ready for analysis, allowing me to retain 
							important information without removing rows with missing data, keeping in mind that I have a small dataset.</p>
						<img src={dataCleaning} alt="data cleaning"></img>

						<p><strong>Data Quality Verification</strong></p>
						<p>The dataset was sourced from DataWorld, a reputable platform for high-quality datasets.
						 The dataset is relatively small, with a total size of 150 KB, making it easy to work with. DataWorld also provides a
						 discussion section where users can share insights and questions about the dataset, along with an activity tab for tracking 
						 updates and community engagement.</p>
						
						<p><strong>Model Selection</strong></p>
						<p>A linear regression model was selected due to its effectiveness and efficiency, especially given that all of our data is numeric.
							 The independent variables, including travel time, study time, failures, free time, going out, health, absences, and previous 
							 grades (G1 and G2), were utilised to predict the dependent variable, which is the final grade (G3). The model was trained using
							  a portion of the dataset, and its performance was evaluated on the remaining data using the root mean square error (RMSE) as the
								 evaluation metric.</p>

						
						<p><strong>Model Evaluation</strong></p>
						<p>After training the model, the Root Mean Square Error was calculated to assess its performance. </p>
						<img src={rootMeanSquareError} alt="Root Mean Square Error"></img>
						<p>The calculated RMSE indicates that the predictions were relatively accurate, with an average error of approximately 1.56 . When 
							taking into context that the final grade ranges from 0 to 15 an average devaition of 1.56 is fairly accurate.</p>

						<p><strong>Results</strong></p>
						<p>The results showed that previous grades
							 &#40;G1, G2&#41; were the most significant predictors of the final grade. Other factors, such as study time and free time, 
							 had a smaller but still noticeable impact. Interestingly, social activities (going out with friends) and health 
							 status were less influential than expected, indicating that academic performance might not be as directly tied to social 
							 behavior as initially thought. </p>

						<p><strong>Validation & Testing</strong></p>
						<p>In the image below, you can see that the dataset was split into 60% for model training, 20% for validation, and 20% for testing.</p>
						<img src={splitingModel} alt="spliting model"></img>
						<p>The Root Mean Square Error (RMSE) was calculated for the validation and testing set, indicating that the model was highly accurate.</p>
						<img src={validationRMSE} alt="validation RMSE"></img>

							 
						<p><strong>Conclusion</strong></p>
						<p>This project demonstrates the power of linear regression in predicting student performance based on behavioral and academic data.
							 The findings suggest that past academic performance is the strongest predictor of future success, while other factors like study 
							 habits and free time also play a role. These insights can help educators develop targeted interventions to improve student outcomes
							  by focusing on key factors.</p>
						<p>Further improvements can be made by exploring more complex models like decision trees or random forests, which may capture 
							non-linear relationships between the variables. Additionally, incorporating more detailed data about student motivation, engagement,
							 and learning environments could improve the model's accuracy and predictive power.</p>

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://data.world/" target="_blank">DataWorld</a> - dataset collection</p>
						<p>Lecturer Dr. Greg Doyle's notes</p>
						<p><a href="https://github.com/jakevdp" target="_blank">Jake Vanderplas - Python Data Science Handbook</a></p>
						<p><a href="https://www.youtube.com/@codebasics" target="_blank">CodeBasics</a> - YouTube channel</p>

					</div><br></br><br></br><br></br>

          <div class="job">
						<h3>Predicting The Price Of Cars Using Decision Tree Algorithm (C4.5)</h3>
						<p><strong>Introduction</strong></p>
						<p>In this project, a dataset from Kaggle will be used, containing information about cars like location,
							 year of manufacture, kilometers, fuel type, transmission type, number of owners, engine cc, break horse power, seats to predict 
							 the price. Using a decision tree is optimal since there is too much categorical data to do linear regression.</p>

						<p><strong>Business Objectives</strong></p>
						<p>The objective of this project is to determine whether location,
						year of manufacture, kilometers, fuel type, transmission type, number of owners, engine cc, break horse power, seats 
						can be used to accurately predict the price.</p>
						<p>The results from this project can help car dealerships, buyers, and businesses in the used car market to make better decisions 
							about pricing. Dealerships can use these results to set more accurate prices, while buyers can use them to find better deals.</p>

						<p><strong>Situation Assessment</strong></p>
						<p>The key performance indicator for this project will be the accuracy of the decision tree model, which will be evaluated
							using metrics like accuracy score. A higher accuracy score indicates a more effective model in 
							classifying student grades.</p>

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://www.kaggle.com/datasets/CooperUnion/cardataset" target="_blank">Kaggle</a> - dataset collection</p>
						<p>Lecturer Dr. Greg Doyle's notes</p>
						
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>

          <div class="project">
            <h3>Portfolio Website – Web Development</h3>
            <p><strong>Technologies:</strong> React, JavaScript, HTML, CSS</p>
            <p>This portfolio website showcases my projects and skills in software development. It is built using React, JavaScript, HTML, 
              CSS to provide an interactive and responsive experience. The site features a clean, modern design with sections for my experience, 
              projects, and contact information. It also includes links to live project demos and detailed descriptions of each project, 
              allowing visitors to explore my work and get in touch with me.</p>
          </div>

          <div class="project">
            <h3>Swimmer Performance Tracker – Cloud Development</h3>
            <p><strong>Technologies:</strong> Python</p>
            <p>In this project, I developed a Swimming Performance Tracker application using Python. The app connects to a database hosted on PythonAnywhere, where it retrieves data on swimmers' times and the types of swims. Using this data, the application dynamically renders a user-friendly interface that allows swimmers and coaches to visualize performance trends over time. The core feature is a chart that plots the swimmers' times against the type of swim, providing valuable insights into their progress and areas that need improvement.</p>
            <p>Check it out at: <a href="https://c00276177.pythonanywhere.com/" target="_blank">https://c00276177.pythonanywhere.com/</a></p>
          </div>

          <div class="project">
              <h3>Website API – Web Development</h3>
              <p><strong>Technologies:</strong> PHP, JavaScript, CSS</p>
              <p>In this project, an employee can log in and add, view, amend, delete, and fully manage personal data. I used the Plesk API to access and manipulate the database tables.</p>
          </div>

          <div class="project">
              <h3>Sales System – Object-Oriented Programming</h3>
              <p><strong>Technologies:</strong> Java, MySQL Workbench</p>
              <p>In this project, I created a system to manage customers using a Java GUI that retrieves data from an updatable database. The user can create, retrieve, update, and delete data as required.</p>
          </div>

          <div class="project">
              <h3>Endless Runner Game – Computer Architecture</h3>
              <p><strong>Technologies:</strong> Assembly</p>
              <p>This game leverages assembly language to create an engaging endless runner experience. It features multiple levels with increasing difficulty, background music, and special effect sounds to enhance gameplay. Key elements include a random number generator, scoring system, lives, a collision detector, and vibrant colors. The game combines these components to offer a challenging and immersive gaming experience.</p>

              <div class="image-gallery">
                  <div class="image-item">
                      <img src={level1Assembly} alt="Level 1 of Endless Runner Game"></img>
                      <p><strong>Level 1:</strong> The initial level features a character on the left side of the screen that can be moved up and down to avoid obstacles moving from right to left.</p>
                  </div>

                  <div class="image-item">
                      <img src={level2Assembly} alt="Level 2 of Endless Runner Game"></img>
                      <p><strong>Level 2:</strong> In this level, a box that changes size obstructs the view of the moving obstacles, and the speed of the obstacles increases, adding to the challenge.</p>
                  </div>

                  <div class="image-item">
                      <img src={codeAssembly} alt="Code Snippet for Sound Initialization"></img>
                      <p><strong>Code Snippet:</strong> This snippet shows the initialization of sound and other essential elements in the game, providing insights into the underlying code that enhances the gameplay experience.</p>
                  </div>
              </div>
          </div>

          <div class="project">
              <h3>Undertakers Website – Team Project</h3>
              <p><strong>Technologies:</strong> PHP, JavaScript, CSS</p>
              <p>In this team project, we developed a website for an undertaker business that allows users to add customers, manage details, create invoices, calculate payments, list customers, and list invoices among other features.</p>
          </div>

          <div class="project">
              <h3>Self-Checkout System – System Analysis</h3>
              <p><strong>Technologies:</strong> System Analysis</p>
              <p>In this analysis, I created sequence diagrams, class diagrams, use case diagrams, and test cases for the self-checkout system.</p>
          </div>
        </section>
			</section>
      </main>
      <footer>
        <section id="contact">
        <p>Contact Information:</p>
        <p>Email: <a href="mailto:tomassmitas@yahoo.com">tomassmitas@yahoo.com</a></p>
        <p>Phone: 083 358 8363</p>
        <div className="social-media-linear">
          <a href="https://github.com/C00276177Tomas" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-logo-linear" />
          </a>
          <a href="https://www.linkedin.com/in/tomas-smitas-a43aa2104/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="GitHub" className="social-logo-linear" />
          </a>
        </div>
        </section>
      </footer>
    </div>
  );
}

export default App;