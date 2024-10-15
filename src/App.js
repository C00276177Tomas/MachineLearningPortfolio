import React, { useState, useEffect } from 'react';
import './App.css';
import faceshot from './images/faceshot.jpg'; // Import the image
import githubLogo from './images/github.png';
import linkedInLogo from './images/linkedIn.png';
import level1Assembly from './images/level1AssemblyProject.png';
import level2Assembly from './images/level2AssemblyProject.png';
import codeAssembly from './images/codeAssemblyProject.png';

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
              <h3>Predicting Student Final Grade &#40;Multi dimentional Linear regression&#41;</h3>
              <p><strong>Introduction</strong></p>
							<p>In this prject I will use a dataset from dataworld of setudents behaviours and previous marks to predict their final grade</p>
							<p><strong>Business Objectives</strong></p>
							<p>In this prject I will use a dataset from dataworld of setudents behaviours and previous marks to predict their final grade</p>
							<p><strong>Situation Assesment</strong></p>
							<p>In this prject I will use a dataset from dataworld of setudents behaviours and previous marks to predict their final grade</p>
							<p><strong>Data Collection</strong></p>
							<p>In this prject I will use a dataset from dataworld of setudents behaviours and previous marks to predict their final grade</p>
          </div>

          <div class="job">
              <h3>Integer – Medical Manufacturing (General Operative)</h3>
              <p><strong>Introduction</strong></p>
							<p>This i</p>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>

          <div class="project">
            <h2>Portfolio Website – Web Development</h2>
            <p><strong>Technologies:</strong> React, JavaScript, HTML, CSS</p>
            <p>This portfolio website showcases my projects and skills in software development. It is built using React, JavaScript, HTML, 
              CSS to provide an interactive and responsive experience. The site features a clean, modern design with sections for my experience, 
              projects, and contact information. It also includes links to live project demos and detailed descriptions of each project, 
              allowing visitors to explore my work and get in touch with me.</p>
          </div>

          <div class="project">
            <h2>Swimmer Performance Tracker – Cloud Development</h2>
            <p><strong>Technologies:</strong> Python</p>
            <p>In this project, I developed a Swimming Performance Tracker application using Python. The app connects to a database hosted on PythonAnywhere, where it retrieves data on swimmers' times and the types of swims. Using this data, the application dynamically renders a user-friendly interface that allows swimmers and coaches to visualize performance trends over time. The core feature is a chart that plots the swimmers' times against the type of swim, providing valuable insights into their progress and areas that need improvement.</p>
            <p>Check it out at: <a href="https://c00276177.pythonanywhere.com/" target="_blank">https://c00276177.pythonanywhere.com/</a></p>
          </div>

          <div class="project">
              <h2>Website API – Web Development</h2>
              <p><strong>Technologies:</strong> PHP, JavaScript, CSS</p>
              <p>In this project, an employee can log in and add, view, amend, delete, and fully manage personal data. I used the Plesk API to access and manipulate the database tables.</p>
          </div>

          <div class="project">
              <h2>Sales System – Object-Oriented Programming</h2>
              <p><strong>Technologies:</strong> Java, MySQL Workbench</p>
              <p>In this project, I created a system to manage customers using a Java GUI that retrieves data from an updatable database. The user can create, retrieve, update, and delete data as required.</p>
          </div>

          <div class="project">
              <h2>Endless Runner Game – Computer Architecture</h2>
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
              <h2>Undertakers Website – Team Project</h2>
              <p><strong>Technologies:</strong> PHP, JavaScript, CSS</p>
              <p>In this team project, we developed a website for an undertaker business that allows users to add customers, manage details, create invoices, calculate payments, list customers, and list invoices among other features.</p>
          </div>

          <div class="project">
              <h2>Self-Checkout System – System Analysis</h2>
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