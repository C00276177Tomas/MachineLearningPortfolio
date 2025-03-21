// By: Tomas Smitas
// Date: 2024
// Development: Assisted by chatGPT

import React, { useState, useEffect } from 'react';
import './App.css';
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
import missingValues from './images/MissingValues.png';
import accuracyScore from './images/accuracyScore.png';
import confusionMatrix from './images/ConfusionMatrix.png';
import importance from './images/importance.png';
import f1Score from './images/F1_curve.png';
import pScore from './images/P_curve.png';
import rScore from './images/R_curve.png';
import importRoboflow from './images/importFromRoboflow.png';
import traingModel from './images/trainModel.png';
import trainingNBCModel from './images/trainingNBCModel.png';
import trainingNBCModel2 from './images/trainingNBCModel2.png';
import accuracyAfterTuning from './images/accuracyAfterTuning.png';
import accuracyBeforeTuning from './images/accuracyBeforeTuning.png';
import matrixAfterTuning from './images/matrixAfterTuning.png';
import matrixBeforeTuning from './images/matrixBeforeTuning.png';
import pythonButton from './images/pythonButton.png';
import rButton from './images/rButton.png';
import ChatGPT from './images/ChatGPT.png';
import DeepSeek from './images/DeepSeek.png';
import SVMTraining from './images/SVMTraining.png';
import SVMCM from './images/SVMCM.png';
import SVMcorrelations from './images/SVMcorrelations.png';
import SVMdeparr from './images/SVMdeparr.png';
import KNNdistribution from './images/KNNdistribution.png';
import KNNacidityBYquality from './images/KNNacidityBYquality.png';
import KNNalcaholBYquality from './images/KNNalcaholBYquality.png';
import KNNcorrelation from './images/KNNcorrelation.png';
import KNNnormalise from './images/KNNnormalise.png';
import KNNaccuracy from './images/KNNaccuracy.png';
import elbowMethodImage from './images/KMCelbow.png';
import elbowMethodImageHigh from './images/KMCelbowHigh.png';
import silhouetteMethodImage from './images/KMCsilhouette.png';
import KMCanalysis from './images/KMCpca.png';

import KMCcalories from './images/KMCcalories.png';
import KMCcarbs from './images/KMCcarbs.png';
import KMCfat from './images/KMCfat.png';
import KMCfiber from './images/KMCfiber.png';
import KMCprotein from './images/KMCprotein.png';
import KMCsugars from './images/KMCsugars.png';

// Zero Code ChatGPT images
import ChatGPT1 from './images/1.png';
import ChatGPT2 from './images/2.png';
import ChatGPT3 from './images/3.png';
import ChatGPT4 from './images/4.png';
import ChatGPT5 from './images/5.png';
import ChatGPT6 from './images/6.png';
import ChatGPT7 from './images/7.png';
import ChatGPT8 from './images/8.png';
import ChatGPT9 from './images/9.png';
import ChatGPT10 from './images/10.png';
import ChatGPT11 from './images/11.png';
import ChatGPT12 from './images/12.png';
import ChatGPT13 from './images/13.png';
import ChatGPT14 from './images/14.png';
import ChatGPTevaluation from './images/ChatGPTevaluation.png';
import ChatGPTtesting from './images/ChatGPTtesting.png';

// Zero Code DeepSeek images

import DeepSeek1 from './images/1Deep.png';
import DeepSeek2 from './images/2Deep.png';
import DeepSeek3 from './images/3Deep.png';
import DeepSeek4 from './images/4Deep.png';
import DeepSeek5 from './images/5Deep.png';
import DeepSeek6 from './images/6Deep.png';
import DeepSeek7 from './images/7Deep.png';
import DeepSeek8 from './images/8Deep.png';



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
          <h2>Machine Learning Projects</h2>
					<div class="machineLearning-navigation">
						<a href="#machineLearning1">
							Multidimensional Linear Regression 
							<img src={pythonButton} width={100} height={25} alt="python button" style={{ float: "right", marginLeft: "12px" }} />
						</a>
						<a href="#machineLearning2">
							Random Forest Classifier  
							<img src={pythonButton} width={100} height={25} alt="python button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a>
						<a href="#machineLearning3">
							Multinomial Naive Bayes Classifier
							<img src={pythonButton} width={100} height={25} alt="python button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a>
						<a href="#machineLearning4">
							Support Vector Machines
							<img src={rButton} width={50} height={25} alt="r button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a>
						<a href="#machineLearning5">
							K Nearest Neighbour
							<img src={rButton} width={50} height={25} alt="r button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a>
						<a href="#machineLearning6">
							K Means Clustering
							<img src={pythonButton} width={100} height={25} alt="python button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a>
						{/* <a href="#machineLearning7">
							FeedForward Neural Network
							<img src={pythonButton} width={100} height={25} alt="python button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a> */}
						<a href="#machineLearning8">
							Convolutional Neural Network
							<img src={pythonButton} width={100} height={25} alt="python button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a>
						<a href="#machineLearning9">
							Zero Code ChatGPT Model
							<img src={ChatGPT} width={100} height={25} alt="python button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a>
						<a href="#machineLearning10">
							Zero Code DeepSeek Model
							<img src={DeepSeek} width={100} height={25} alt="python button" style={{ float: "right", marginLeft: "12px" }} ></img>
						</a>
					</div>
          <div id="machineLearning1" class="job">
						<h3>Predicting Student Final Grades Using Multidimensional Linear Regression</h3>
						
						<p><strong>Introduction</strong></p>
						<p>In this project, a dataset from DataWorld is used, containing information about students behaviors and previous academic 
							performance, to predict their final grades. The goal is to use a multidimensional linear regression model to analyse the impact
							 of various factors on students final grades. Some of these variables include study time, free time, previous grades.</p>
						
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
								<li><strong>Pandas</strong>: Used to manage and manipulate the dataset effectively. Pandas was used to merge, clean, 
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
						<p><a href="https://github.com/jakevdp/PythonDataScienceHandbook/blob/master/notebooks_v1/05.06-Linear-Regression.ipynb" target="_blank">Jake Vanderplas - Python Data Science Handbook - 05.06-Linear-Regression</a></p>
						<p><a href="https://www.youtube.com/@codebasics" target="_blank">CodeBasics</a> - YouTube channel</p>

					</div><br></br><br></br>

          <div id="machineLearning2" class="job">
						<h3>Predicting The Price Of Cars Using Random Forest Classifier</h3>
						<p><strong>Introduction</strong></p>
						<p>In this project, a dataset from Kaggle is used, containing information about cars like make, year of manufacture, transmission,
							 fuel type, number of doors, engine HP, size to predict the price. A bigger dataset would 
							 have been better, but none could be obtained. This is the biggest dataset that could be sourced for this project. Using a decision 
							 tree is optimal since there is too much categorical data to do linear regression.</p>

						<p><strong>Business Objectives</strong></p>
						<p>The objective of this project is to use decision tree and random forest algorithms to predict the general price of a car. 
							The price of the car will be turned into categorical data to allow for easier understanding for the user of this data, which 
							will likely be a customers looking to buy a car. The prediction will be made on the following columns: Make, Model, Year, 
							Engine Fuel Type, Engine HP, Engine Cylinders, Transmission Type, Driven_Wheels, Number of Doors, Market Category, Vehicle Size, 
							Vehicle Style, highway MPG, city MPG, Popularity.</p>
						<p>The results from this project can help car dealerships, buyers, and businesses in the used car market to make better decisions 
							about pricing. Dealerships can use these results to set more accurate prices, while buyers can use them to find better deals.</p>

						<p><strong>Situation Assessment</strong></p>
						<p>Initially, a decision tree algorithm was used to try and predict the prices, but after revieving the results they were overfitting
						the data based on the confusion matrix results. I decided to go a step further and use a random forest algorithm to gain a more
						confident result that is less likely to overfit. The key performance indicator for this project will be the accuracy of the decision tree model, which will be evaluated
						using metrics like accuracy score and confusion matrix. A higher accuracy score indicates a more effective model in classifying car prices.</p>

						<p><strong>Tools & Technologies</strong></p>
						<ul>
								<li><strong>Excel</strong>: Used for initial data exploration and cleaning. Excel helped in understanding the structure of the 
								dataset, identifying missing values, and performing preliminary statistical analysis before deeper modeling.</li>
								<br></br>
								<li><strong>Python</strong>: The core programming language used to implement the random forest algorithm through Google Colab. 
								Python allowed for the integration of different libraries such as NumPy and Pandas for efficient data manipulation and analysis. 
								It also facilitated the model training and evaluation process to predict car prices.</li>
								<br></br>
								<li><strong>NumPy</strong>: Used to handle the numerical computations needed for the random forest algorithm.</li>
								<br></br>
								<li><strong>Google Colab</strong>: Provided an online environment for writing and running the Python code for the random forest
								algorithm. Colab's GPU support and easy access to Jupyter notebooks made it convenient to develop, experiment with,
								and test the model without worrying about local hardware limitations.</li>
								<br></br>
								<li><strong>Pandas</strong>: Used to manage and manipulate the dataset effectively. Pandas was used to merge, clean, 
								and preprocess the data, and to select the relevant variables for the model.</li>
								<br></br>
								<li><strong>sklearn</strong>: Used for implementing the machine learning pipeline and training the random forest classifier.
								sklearn provided essential tools for splitting the dataset, preprocessing the data, training the model, and evaluating its
								performance using metrics like accuracy score and the confusion matrix.</li>
								<br></br>
								<li><strong>Confusion Matrix</strong>: 
								Used to evaluate the performance of the random forest model by comparing actual and predicted categories. The confusion 
								matrix provided insight into how well the model performed in terms of true positives, true negatives, false positives, and 
								false negatives.</li>
								<br></br>
								<li><strong>Accuracy Score</strong>: A metric used to quantify the overall performance of 
								the random forest model. The accuracy score helped assess the percentage of correct predictions out of the total predictions 
								made, providing a straightforward measure of the model's effectiveness.</li>
						</ul>

						<p><strong>Data Collection</strong></p>
						<p>The dataset used in this project was sourced from Kaggle. The dataset holds just about 12,000 values. Initially, a government site was looked at for bigger and unfiltered 
						datasets, but there was no dataset available that fit my needs. The biggest dataset that could be found to predict my target was 
						sourced from Kaggle. It is publicly accessible at the following 
						link: <a href="https://www.kaggle.com/datasets/CooperUnion/cardataset" target="_blank">Kaggle</a>.
						It holds the following columns: Make, Model, Year, 
						Engine Fuel Type, Engine HP, Engine Cylinders, Transmission Type, Driven_Wheels, Number of Doors, Market Category, Vehicle Size, 
						Vehicle Style, highway MPG, city MPG, Popularity, and MSRP. After going through all of the columns, it was determined that all of
						these could be used for predicting the price. Some of the columns would have a higher impact while others not as much.
						</p>

						<p><strong>Data Cleaning</strong></p>
						<p>The first step taken for data cleaning was getting rid of the rows that had null values, as the random forest 
						algorithm could not be used on null values. A Jupyter notebook was used to loop through each row and evaluate any rows that had
						missing values. The figure below shows the missing values in each variable. After assessing the situation and realising that removing
						nearly 4,000 rows was not an option, a closer look was taken into the 'Market Category' column. After assessing this column, a decision 
						was made to remove it because it was unlikely to have a big impact on the price prediction result. This column was removed from
						the dataset, and the rows with null values were also removed. This returned a dataset that was complete with values.</p>
						<img src={missingValues} alt="data cleaning"></img>

						<p><strong>Data Quality Verification</strong></p> 
						<p>The dataset was sourced from Kaggle, a reputable platform for 
						high-quality datasets. The dataset is the largest found for my intended prediction. Kaggle provides a collaborative environment
						where users share insights, solutions, and improvements, which further enhances the reliability and usability of the datasets.</p>

						<p><strong>Model Selection</strong></p> 
						<p>Initially, a decision tree algorithm was applied to the dataset to predict car 
						MSRP categories. While the decision tree provided a reasonable baseline with acceptable predictions, it was prone 
						to overfitting, limiting its generalisation to unseen data. To address this, I selected a random forest algorithm. 
						Random forests reduce overfitting by averaging the predictions across multiple trees, making them more robust and accurate. This approach significantly improved the 
						model's performance and ensured better reliability in predicting car price categories.</p>
						
						<p><strong>Model Evaluation</strong></p>
						<p>After training the model, the accuracy score and the confusion matrix were calculated and represented to assess its performance.
							See figures below. </p>
						<img src={accuracyScore} alt="Accuracy Score"></img>
						<p>In the figure we can see that the F1 accuracy score is 92% which is fairly high. This means that 92% of predictions are correct. </p>
						<img src={confusionMatrix} alt="Confusion Matrix"></img>
						<p>The confusion matrix shows us how the true values plot against the predicted. It helps us determine if the false/true predictions are leaning
							a certain direction which can be crutial in areas such as illness predictions. For example a false prediction that should be true for
							someone that is sick is much worse than a true prediction that should be false. Since the person that is actually sick may not get the
							treatment in time while the person that is not actually sick will likely just waste a bit of time.</p>

						<p><strong>Results</strong></p>
						<p>The model achieved 92% accuracy in classifying cars into MSRP categories. Features such as 'Year', 'Engine HP', and 'Engine Fuel' 
							contributed to the predictions, while variables like 'Popularity' had less impact. The results highlight the model’s ability to 
							make reliable predictions across diverse car features. In the figure below, we can see that 'Year' had the largest impact with 
							14% importance.</p>
						<img src={importance} alt="Importance"></img>

						<p><strong>Conclusion</strong></p>
						<p>This project showcases the effectiveness of the Random Forest algorithm in predicting car MSRP categories based on various 
							features such as engine power, fuel type, and vehicle specifications. The results indicate that key attributes like 'Engine HP' 
							and 'Year' have a significant impact on the predictions, while others, such as specific car models, have less influence. 
							These insights can guide automotive companies in pricing strategies and provide valuable information for consumers making 
							purchasing decisions.</p>

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://www.kaggle.com/datasets/CooperUnion/cardataset" target="_blank">Kaggle</a> - dataset collection</p>
						<p>Lecturer Dr. Greg Doyle's notes</p>
						<p><a href="https://github.com/jakevdp/PythonDataScienceHandbook/blob/master/notebooks_v1/05.08-Random-Forests.ipynb" target="_blank">Jake Vanderplas - Python Data Science Handbook - 05.08-Random-Forests</a></p>
						
						
          </div>

					<div id="machineLearning3" class="job">

					<h3>Spam email detection using Multinomial Naive Bayes Classifier (NBC)</h3>
						<p><strong>Problem Definition</strong></p>
						<p>There is an ever increasing challenge with the amount of time spent looking through spam emails, often uncertain about whether they 
							are spam or not. This becomes a significant time drain, especially for organisations with many employees. If these spam emails 
							can be accurately detected and automatically directed to the spam folder, it would save users a considerable amount of time. 
							However, it's crucial to consider that mistakenly classifying important emails as spam could have critical consequences, 
							particularly for certain companies where timely communication is essential.
						</p>

						<p><strong>Business Objectives</strong></p>
						<p>The objective of this project is to develop an automated email spam detection model. 
							The model aims to accurately classify emails as either spam or non-spam, reducing the time employees spend manually 
							filtering through their inboxes. By implementing this solution, the organisation can enhance productivity, improve email 
							security, and ensure important communications are not mistakenly filtered out. Ultimately, the goal is to create a seamless, 
							efficient email management system that minimises distractions and safeguards against potential threats.</p>

						<p><strong>Situation Assessment</strong></p>
						<p>Traditional methods of filtering spam emails often rely on manual inspection or rule-based systems, which can be inefficient and prone to inaccuracies. 
							Using the Multinomial Naive Bayes Classifier offers a scalable and automated solution for spam detection. The algorithm’s simplicity, efficiency, and effectiveness make it 
							well-suited for classifying emails in real-time. The performance of the system is evaluated using metrics such as accuracy, precision, recall, and F1-score to measure 
							its ability to distinguish between spam and non-spam emails accurately.</p>

						<p><strong>Tools & Technologies</strong></p>
						<ul>
								<li><strong>Scikit-learn</strong>: Provides tools for building and training the model and evaluating its performance 
								through metrics and cross-validation.</li>
								<br></br>
								<li><strong>Pandas and NumPy</strong>: Used for data manipulation, preprocessing, and feature extraction from email datasets.</li>
								<br></br>
								<li><strong>Google Colab</strong>: Used to run the python notebooks, training the model, validation and testing accuracy results.</li>
								<br></br>
								<li><strong>Python</strong>: The programming language used to integrate all components, enabling efficient preprocessing, 
								modelling, and evaluation.</li>
								<br></br>
						</ul>

						<p><strong>Data Collection</strong></p>
						<p>The dataset used for training the spam email detection model was sourced from the UCI Machine Learning Repository, 
							a well-known resource for machine learning datasets. It contains thousands of labeled emails categorised as spam or non-spam. 
							The dataset includes features such as word frequency, character frequency, and metadata, providing a robust foundation for 
							training the model.</p>

						<p>The dataset was pre-processed to ensure consistency and accuracy, including handling missing values, removing duplicates, 
							and standardising text. It was then divided into training, validation, and testing sets, with a 70/20/10 split, 
							to facilitate effective model evaluation and prevent over-fitting.</p>

						<p><strong>Data Quality Verification</strong></p>
						<p>The dataset was downloaded from a reputable source, UCI Machine Learning Repository. The dataset has a licence under a 
							Creative Commons Attribution 4.0 Internation (CC BY 4.0), this is a good sign for a dataset giving it more credibility. </p>

						<p><strong>Model Selection</strong></p>
						<p>The Naive Bayes Classifier (NBC) was selected for its simplicity, efficiency, and effectiveness in text classification tasks. 
							NBC uses a probabilistic approach based on Bayes theorem, making it particularly suitable for spam email detection. </p>

						<p><strong>Data Cleaning</strong></p>
						<p>Data cleaning involved handling missing or inconsistent values and manually scanning through the columns to make sure of data 
							integrity. 
							The correlation between the target variable and the independent variables was analysed. Since the dataset contains over 
							50 columns, those with minimal to no correlation were removed. This step ensures that irrelevant columns do not interfere 
							with achieving accurate results.</p>

						<p><strong>Model Training</strong></p> <p>The Naive Bayes Classifier (NBC) model was trained on a preprocessed dataset, where 
							features were selected to remove correlations and handle missing values. The data was split into training, validation, and 
							testing sets using a 60-20-20 split. For training, the Multinomial Naive Bayes algorithm with Laplace smoothing 
							(alpha=1.0).</p> <p>The model was trained using Scikit-learn, where the key steps included fitting the model to the training 
							data and evaluating it using accuracy, confusion matrix, and classification report metrics. The training focused 
							on predicting whether an entry was spam or non-spam based on the features.</p> <p>Below is the code used to train 
							the NBC model:</p> <img src={trainingNBCModel} alt="Training Naive Bayes Model"></img>

						<p><strong>Tuning</strong></p> <p>During the tuning phase, the dataset split was adjusted to 80% for training, and 10% each for 
							validation and testing. Additionally, the alpha parameter for Laplace smoothing was modified from its default value of 1.0 
							to 0.5. This change led to an improvement in test accuracy by around 1%, demonstrating the positive impact of tuning these 
							hyperparameter on model performance.</p>
						<img src={trainingNBCModel2} alt="Training Naive Bayes Model 2"></img>

						<p><strong>Model Evaluation</strong></p> <p><strong>Before Tuning</strong></p> <p>Prior to tuning, the Naive Bayes Classifier was 
							trained with the default dataset split and alpha value. The model was evaluated using accuracy and the confusion matrix, 
							providing an initial performance benchmark.</p>
						<img src={accuracyBeforeTuning} alt="Accuracy Before Tuning"></img>
						<img src={matrixBeforeTuning} alt="Confusion Matrix Before Tuning"></img>

						<p><strong>After Tuning</strong></p> <p>After adjusting the dataset split to 80% for training and 10% each for validation and 
							testing, and fine-tuning the alpha parameter to 0.5, the model’s performance improved. The test accuracy increased by around 
							1%, and the confusion matrix reflected these improvements.</p>
						<img src={accuracyAfterTuning} alt="Accuracy After Tuning"></img>
						<img src={matrixAfterTuning} alt="Confusion Matrix After Tuning"></img>

						<p><strong>Results</strong></p> <p>The Naive Bayes Classifier demonstrated strong accuracy in classifying emails as spam or non-spam. 
							Features such as word frequency and document length were key factors influencing the model's performance. The dataset was carefully 
							preprocessed to remove correlations and handle missing values, ensuring the model was trained on high-quality data. The results 
							highlight the model's effectiveness in spam detection and its ability to generalise well to unseen data.</p>

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://archive.ics.uci.edu/dataset/94/spambase" target="_blank">University of California Irvine Machine Learning Repository</a> - dataset collection</p>
						<p><a href="https://github.com/jakevdp/PythonDataScienceHandbook/blob/8a34a4f653bdbdc01415a94dc20d4e9b97438965/notebooks/05.05-Naive-Bayes.ipynb" target="_blank">Jake Vanderplas - Python Data Science Handbook - 05.05-Naive-Bayes</a></p>
						<p>Lecturer Dr. Greg Doyle's notes</p>

					</div>


					<div id="machineLearning4" class="job">

					<h3>Predicting if a flight will be delayed by more than 15 minutes using Support Vector Machines (SVM)</h3>
						<p><strong>Introduction</strong></p>
						<p>This project focuses on using Support Vector Machines (SVM) to predict flight delays. The model is trained on the flights 
							dataset from the nycflights13 RITA, Bureau of transportation statistics, with features such as departure time, arrival time, 
							distance, and delays. Data preprocessing involved handling missing values, feature selection, and defining delay thresholds. 
							The model was evaluated using accuracy metrics to assess its performance in predicting whether a flight will be delayed.</p>

						<p><strong>Business Objectives</strong></p>
						<p>The primary goal of this project is to improve flight scheduling efficiency by predicting delays. Using Support Vector Machines
							(SVM), the model analyses flight data to determine the likelihood of a delay. This can help airlines optimise scheduling, improve 
							customer experience, and reduce operational costs.</p>

						<p><strong>Situation Assessment</strong></p>
						<p>Traditional methods of predicting flight delays often rely on historical data analysis and manual intervention, which can be 
							inefficient and inaccurate. Using Support Vector Machines (SVM) offers an automated and data-driven solution. 
							SVM’s ability to handle complex, high-dimensional data is crucial for predicting delays. The performance of the model is 
							evaluated using metrics such as accuracy, precision, and recall to assess its effectiveness in forecasting flight delays 
							and improving operational efficiency.</p>

						<p><strong>Tools & Technologies</strong></p>
						<ul>
								<li><strong>R</strong>: The programming language used to build and implement the flight delay prediction model. 
								R’s statistical capabilities are leveraged to preprocess and analyse flight data.</li>
								<br></br>
								<li><strong>e1071</strong>: Provides the Support Vector Machines (SVM) implementation for training and predicting flight delays. 
								This library is critical for building and evaluating the SVM model.</li>
								<br></br>
								<li><strong>dplyr</strong>: Used for data manipulation and preprocessing, allowing for efficient cleaning, filtering, and feature 
								selection of the flight dataset.</li>
								<br></br>
								<li><strong>ggplot2</strong>: Used for visualising the flight dataset, allowing for effective exploration of relationships 
								between variables, such as delays, departure times, and other flight-related features, to better understand the data and 
								assist in model evaluation.</li>
								<br></br>
						</ul>

						<p><strong>Data Collection</strong></p>
						<p>The dataset used for training the flight delay prediction model was sourced from the RITA 
							(Research and Innovative Technology Administration) and the Bureau of Transportation Statistics. The dataset is available 
							at the following link: 
							<a href="https://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236" target="_blank">
							https://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236</a>. It contains thousands of flight records, 
							including information on departure and arrival times, distances, delays, and other relevant features.</p>

						<p>The dataset was pre-processed to ensure consistency and accuracy, including handling missing values, removing duplicates, 
							and standardising numerical values. It was then divided into training and testing sets, with a 70/30 split, to facilitate 
							effective model evaluation and prevent overfitting.</p>

						<p><strong>Data Understanding</strong></p>
						<p>The dataset used in this project consists of several columns that provide detailed information about each flight. 
							The columns include the date of departure, represented by the year, month, and day. The actual departure and arrival times 
							are given as dep_time and arr_time in HHMM or HMM format, adjusted to the local time zone, while the scheduled departure 
							and arrival times are represented by sched_dep_time and sched_arr_time in the same format. The dataset also includes 
							dep_delay and arr_delay, which measure departure and arrival delays in minutes, with negative values indicating early 
							departures or arrivals.</p>

						<p>The carrier column contains a two-letter abbreviation for the airline carrier, which can be cross-referenced with an 
							additional dataset to obtain the carrier’s full name. The flight number is represented by the flight column, 
							and the tail number of the plane is stored in the tailnum column, which can be cross-referenced with a planes dataset 
							for more metadata. The origin and destination airports are given by the origin and dest columns, respectively, 
							and additional metadata for these airports can be found in a separate dataset.</p>

						<p>Other columns include air_time, which indicates the total time spent in the air, and distance, which measures 
							the distance between the origin and destination airports in miles. The scheduled departure time is broken into hour 
							and minute components in the hour and minute columns. Finally, the time_hour column provides the scheduled date and 
							hour of the flight as a POSIXct date, which can be used along with the origin to join the flight data with weather data for 
							further analysis.</p>

						<p><strong>Data Visualisation</strong></p>
						<p>Data visualisation was used to compare each variable against the target to see if any insight into the data could be reached.
							The comparison between the target variable dep_delay (departure delay) and departure time was made. A graph was produced to compare
							 the values in a two dimensional way by plotting the figures. An insight was achieved when looking at the times between just after 
							 midnight and to about 4 am. A conclusion can be made from the graph that nearly all flight are delayed between these times. See figure below.
						</p>
						<p>This insight made me research the reasons why fights are nearly always delayed between these times. One of the main reasons 
							this happens was due to shortages of Air Traffic Control (ATC) staff and delays caused by poor visibility at night. 
							Source in acknowledgements.
						</p>
						<img src={SVMdeparr} alt="Dep Arr correlation"></img>

						<p><strong>Data Quality Verification</strong></p>
						<p>The dataset used in this project was sourced from the Bureau of Transportation Statistics (BTS), 
							specifically from the RITA (Research and Innovative Technology Administration) database. The dataset is publicly 
							available and provides comprehensive, accurate, and up-to-date flight information. Given that it comes from a trusted 
							government source, it is considered reliable and credible for use in analysing flight delays and building predictive models.</p>

						<p><strong>Model Selection</strong></p>
						<p>The Support Vector Machine (SVM) was selected for its ability to handle high-dimensional data and its effectiveness in 
							classification tasks. SVM works by finding a hyperplane that best separates the classes in the feature space, 
							making it well-suited for predicting flight delays based on various factors such as departure times, carrier information, 
							and weather conditions. Its robustness in handling complex datasets and its ability to generalise well to unseen data make 
							it an ideal choice for this project.</p>

						<p><strong>Data Cleaning</strong></p>
						<p>Data cleaning involved handling missing values and ensuring consistency across the dataset. Irrelevant columns with minimal 
							correlation to the target variable were removed to improve model accuracy. This step helped streamline the data and ensure it 
							was ready for analysis and model training.</p>
						<p>The selected columns were chosen because they directly impact flight delays, with factors like departure time, 
							flight duration, and distance being key indicators of delay patterns. This was calculated by getting the correlations 
							between the target variable and the rest of the numeric columns. Initially the column arr_time was included in the prediction 
							which gave the model a high accuracy but after reviewing the correlations it made sense that this column should be removed 
							because it was highly unlikely to have this value when attempting to make a prediction for a delay if the flight hasn't happened.</p>
						<img src={SVMcorrelations} alt="correlations"></img>

						<p><strong>Model Training</strong></p>
						<p>The Support Vector Machine (SVM) model was trained on a preprocessed dataset. The data was split into training and testing sets 
							using a 70-30 split. The model was trained using the `e1071` library in R, where the key steps included fitting the SVM model 
							to the training data and evaluating it using accuracy, confusion matrix, and classification report metrics. The training 
							focused on predicting whether a flight would be delayed or not based on various factors like departure times, 
							carrier information, and other features.</p>

						<p>Below is the code used to train the SVM model:</p> <img src={SVMTraining} alt="Training SVM"></img>

						<p><strong>Model Evaluation</strong></p> 
						<p>When the confusion matrix was examined, it showed great alignment between the actual and predicted values, indicating that 
							the model was highly accurate. The model's ability to predict flight delays was assessed, and the results were visualised 
							through a confusion matrix heatmap to better understand its predictive performance.</p>
						<img src={SVMCM} alt="confusion matrix"></img>

						<p><strong>Results</strong></p>
						<p>The Support Vector Machine (SVM) model demonstrated strong accuracy in predicting flight delays. Features such as 
							departure and arrival times, distance, and historical flight data played a significant role in the model's performance. 
							The dataset was carefully preprocessed to handle missing values and ensure consistency, allowing the model to be trained
							on high-quality data. The results highlight the model's effectiveness in predicting flight delays and its ability to 
							generalise well to unseen data.</p>

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236" target="_blank">Bureau of Transportation Statistics (BTS)</a> - dataset collection</p>
						<p><a href="https://github.com/jakevdp/PythonDataScienceHandbook/blob/8a34a4f653bdbdc01415a94dc20d4e9b97438965/notebooks/05.07-Support-Vector-Machines.ipynb" target="_blank">Jake Vanderplas - Python Data Science Handbook - 05.07-Support-Vector-Machines</a></p>
						<p><a href="https://www.travelandtourworld.com/news/article/severe-air-traffic-controller-new-shortages-disrupt-travel-at-major-us-hubs-new-york-washington-dc-and-nationwide-impact/?utm_source=chatgpt.com" target="_blank">Flights delayed due to ATC shortages</a></p>
						<p>Lecturer Dr. Agnes Maciocha notes</p>
						<p>Lecturer Dr. Greg Doyle's notes</p>

					</div>


					<div id="machineLearning5" class="job">

					<h3>Predicting Wine Quality Using k-Nearest Neighbors (k-NN)</h3>
						<p><strong>Introduction</strong></p>
						<p>This project focuses on using k-Nearest Neighbors (k-NN) to predict wine quality. The model is trained on a wine quality 
							dataset containing physicochemical properties such as acidity, alcohol content, and pH level. Data preprocessing involved 
							handling missing values, feature scaling, and selecting relevant attributes. The model was evaluated using accuracy metrics 
							to assess its performance in classifying wine quality.</p>

						<p><strong>Business Objectives</strong></p>
						<p>The primary goal of this project is to predict whether a wine will be of high quality for consumers. Using k-Nearest Neighbors
							 (k-NN), the model analyses various physicochemical properties of wine, such as acidity, alcohol content, and pH level, 
							 to determine its quality. This can help wine producers maintain consistency, improve quality control, and enhance 
							 customer satisfaction.</p>

						<p><strong>Situation Assessment</strong></p>
						<p>Traditional methods of assessing wine quality often rely on professional tasters, whose evaluations can be subjective 
							and inconsistent. Factors such as personal preference, tasting conditions, and human error can lead to variability in 
							quality ratings. Using machine learning, specifically k-Nearest Neighbors (k-NN), provides a more objective, data-driven 
							approach to predicting wine quality. The model's performance is evaluated using  the accuracy score to assess its 
							effectiveness in classifying high-quality wines 
							and supporting better decision-making in wine production.</p>


						<p><strong>Tools & Technologies</strong></p>
						<ul>
								<li><strong>R</strong>: The programming language used to build and implement the wine quality prediction model. 
								R’s statistical capabilities are leveraged for data preprocessing, visualisation, and model training.</li>
								<br></br>
								<li><strong>class</strong>: Provides the k-Nearest Neighbors (k-NN) implementation for training and predicting wine quality. 
								This library is crucial for building and evaluating the k-NN model.</li>
								<br></br>
								<li><strong>caret</strong>: Used for data partitioning and cross-validation, helping optimise the model by selecting the best k-value 
								through hyperparameter tuning.</li>
								<br></br>
								<li><strong>ggplot2</strong>: Used for visualising the wine dataset, allowing for effective exploration of relationships 
								between features such as alcohol content, volatile acidity, and wine quality.</li>
								<br></br>
						</ul>

						<p><strong>Data Collection</strong></p>
						<p>The dataset used for training the wine quality prediction model was sourced from the UCI Machine Learning Repository. 
							The dataset is available at the following link: 
							<a href="https://archive.ics.uci.edu/dataset/186/wine+quality" target="_blank">
							https://archive.ics.uci.edu/dataset/186/wine+quality</a>.
						</p>

						<p><strong>Data Understanding</strong></p>
						<p>This dataset contains physicochemical test results of different wine samples and their corresponding quality scores 
							(ranging from 0 to 10). The input variables include:</p>

						<ul>
								<li>Fixed acidity</li>
								<li>Volatile acidity</li>
								<li>Citric acid</li>
								<li>Residual sugar</li>
								<li>Chlorides</li>
								<li>Free sulfur dioxide</li>
								<li>Total sulfur dioxide</li>
								<li>Density</li>
								<li>pH</li>
								<li>Sulphates</li>
								<li>Alcohol</li>
						</ul>

						<p>The output variable represents the quality of the wine, which is determined based on sensory data from expert wine tasters.</p>

						<p>The dataset was preprocessed to ensure consistency and accuracy, including handling missing values, normalising numerical 
							features, and selecting relevant attributes. It was then divided into training and testing sets (80/20 split) 
							to facilitate effective model evaluation and improve generalisation.</p>

						<p><strong>Data Visualisation</strong></p>
						<p>In the figure below, we can see the distribution of wine quality scores, which range from 3 to 8. The data is highly skewed 
							towards central values, as there are significantly more ratings around the middle of the scale compared to extreme values 
							like 3 or 8.</p>
						<img src={KNNdistribution} alt="KNN distribution"></img>

						<p>The figure below illustrates the relationship between alcohol content (alcohol strength) and wine quality ratings. 
							The visualisation suggests a positive correlation, indicating that wines with higher alcohol content are more likely
							 to receive higher quality ratings.</p>
						<img src={KNNalcaholBYquality} alt="KNN alcahol by quality"></img>

						<p>Similar to the previous figure, the one below suggests an inverse relationship between acidity and wine quality, 
							indicating that higher acidity levels are generally associated with lower quality ratings.</p>
						<img src={KNNacidityBYquality} alt="KNN acidity by quality"></img>

						<p><strong>Data Quality Verification</strong></p>
						<p>The dataset used in this project was sourced from the UCI Machine Learning Repository, specifically from the Wine
							 Quality dataset. This dataset is publicly available and has been referenced in academic research, 
							 including [Cortez et al., 2009]. It contains physicochemical properties of wine, along with quality ratings based on 
							 sensory evaluations by expert wine tasters. Given its widespread use in machine learning studies and its structured format, 
							 the dataset is considered reliable and suitable for building predictive models.</p>

						<p><strong>Model Selection</strong></p>
						<p>The k-Nearest Neighbors (k-NN) algorithm was selected for its simplicity and effectiveness in classification tasks. 
							k-NN works by finding the k closest data points (neighbors) to a given instance and classifying it based on the majority 
							vote of those neighbors. This makes it well-suited for predicting wine quality based on physicochemical properties 
							such as acidity, alcohol content, and sulfur dioxide levels. k-NN's non-parametric nature allows it to adapt to complex 
							patterns in the data, making it a strong choice for this project.</p>

						<p><strong>Data Cleaning</strong></p>
						<p>The data cleaning process involved multiple steps to ensure data quality and improve model performance. 
							Missing values were handled by removing incomplete rows, resulting in the removal of 13 rows. Additionally, missing values 
							in specific columns were imputed using the mean to preserve important data. Duplicate records were identified and 
							merged to maintain dataset integrity. Furthermore, columns with a correlation of less than 0.1 with the target variable
								(wine quality) were removed to enhance model accuracy and streamline the dataset for analysis and training.</p>
								<img src={KNNnormalise} alt="KNN normalise"></img>
								<img src={KNNcorrelation} alt="KNN correlation"></img>

						<p><strong>Model Training</strong></p>
						<p>The K-Nearest Neighbors (KNN) model was trained on a preprocessed dataset. The data was split into training and testing 
							sets using an 80-20 split. The model was implemented using the `class` and `caret` libraries in R. Key steps included 
							normalising the feature variables, selecting the optimal value of `k` through cross-validation, and training the KNN model 
							on the training set. The model was then evaluated using accuracy metrics to predict wine quality based on 
							physicochemical properties such as acidity, alcohol content, and sulphates.</p>

						<p><strong>Model Evaluation</strong></p> 
						<p>The performance of the k-NN model was assessed using the accuracy score. Initially, before tuning, the model achieved an 
							accuracy of 51%. After tuning the hyperparameters, the accuracy improved to 59%. While this represents a notable improvement, 
							the results indicate that there is still room for further optimisation, such as refining feature selection or experimenting 
							with different preprocessing techniques.</p>
						<img src={KNNaccuracy} alt="accuracy"></img>

						<p><strong>Results</strong></p>
						<p>The k-NN model demonstrated a 59% accuracy in predicting wine quality, with key features like alcohol content, 
							volatile acidity, and fixed acidity playing a significant role in the model's performance. The dataset was carefully 
							preprocessed to handle missing values, impute missing data, and remove irrelevant columns, ensuring high-quality input 
							for model training. Despite the moderate accuracy, the results suggest the model's potential in predicting wine quality, 
							with room for further optimisation in feature selection and parameter tuning.</p>

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://archive.ics.uci.edu/dataset/186/wine+quality" target="_blank">UCI Machine Learning Repository</a> - dataset collection</p>
						<p><a href="https://www.kaggle.com/code/mmdatainfo/k-nearest-neighbors" target="_blank">Kaggle kNN</a> - notes</p>
						<p><a href="https://notebook.community/RagsX137/TF_Tutorial/My+own+KNN+Classifier" target="_blank">notebook.community</a> - notes</p>
						<p>Lecturer Dr. Agnes Maciocha notes</p>
						<p>Lecturer Dr. Greg Doyle's notes</p>

					</div>


					<div id="machineLearning6" class="job">

					<h3>Uncovering Nutritional Insights with K-Means Clustering</h3>
						<p><strong>Problem Definition</strong></p>
						<p>With the vast variety of food options available, identifying nutritious choices efficiently can be challenging. 
							By clustering foods based on their nutritional composition, we can uncover patterns that help users make informed 
							dietary decisions. This project uses K-Means clustering to group foods by different nutritional content to then identify
							food that are high, medium, low in different types of nutritional values. The user can then select a cluster that meets their 
							needs and eat the foods that are in that cluster.</p>

						<p><strong>Business Objectives</strong></p>
						<p>This project aims to analyse nutrition data using K-Means clustering to group foods based on key nutritional factors 
							such as calories, protein, carbohydrates, fat, fiber, and sugars. By identifying patterns in these attributes, 
							the project provides insights that help users make informed dietary choices and optimise nutrition intake.</p>

						<p><strong>Tools & Technologies</strong></p>
						<ul>
								<li><strong>Scikit-learn</strong>: Provides tools for building and training the model and evaluating its performance 
								through metrics and cross-validation.</li>
								<br></br>
								<li><strong>Pandas and NumPy</strong>: Used for data manipulation, preprocessing, and feature extraction from email datasets.</li>
								<br></br>
								<li><strong>Python</strong>: The programming language used to integrate all components, enabling efficient preprocessing, 
								modelling, and evaluation.</li>
								<br></br>
						</ul>

						<p><strong>Data Collection</strong></p>
						<p>The dataset for this project was sourced from the 
							<a href="https://www.kaggle.com/code/samikshadalvi/daily-food-and-nutrition-dataset-eda/input"> Kaggle Daily Food and Nutrition 
							Dataset</a>. 
							It contains records of food items consumed by individuals, including their nutritional breakdown. The dataset includes 
							attributes such as calories, protein, carbohydrates, fat, fiber, and sugars, making it a valuable resource for analysing 
							dietary patterns and clustering foods based on their nutritional composition.</p>

						<p><strong>Model Selection</strong></p>
						<p>K-Means clustering was selected for this project due to its effectiveness in identifying patterns within unlabeled data. 
							This algorithm groups food items based on their nutritional composition, allowing us to uncover meaningful clusters such as 
							high-protein, low-carb, or high-calorie foods. K-Means is well-suited for this task as it efficiently handles large 
							datasets and provides intuitive insights into dietary trends.</p>

						<p><strong>Data Cleaning</strong></p>
						<p>Data cleaning involved selecting the most relevant nutritional columns such as Calories, Protein, Carbohydrates, 
							Fat, Fiber, and Sugars. Irrelevant columns like Date and User_ID were removed. The data was then scaled to ensure 
							consistency across features. A check for missing values was performed, and none were found. This process ensures 
							that only the most important attributes are used for clustering, improving the accuracy and effectiveness of the K-Means model.</p>

						<p><strong>Model Training</strong></p>
						<p>The optimal number of clusters (k) was first determined using the Elbow Method. This method involves plotting the sum of 
							squared distances from each point to its assigned cluster center (inertia) against different values of k. The "elbow" 
							point on the graph indicates the ideal k value. However, in this case, the Elbow Method did not provide a clear-cut choice for k.</p>
						<img src={elbowMethodImage} alt="Elbow Method for Optimal K Value"></img>
						<img src={elbowMethodImageHigh} alt="Elbow Method for Optimal K Value"></img>

						<p>As the Elbow Method was inconclusive, the Silhouette Method was then applied to determine the optimal k. 
							This method evaluates the quality of clusters by measuring how similar each point is to its own cluster 
							compared to other clusters. A higher Silhouette Score indicates better-defined clusters. Based on the Silhouette analysis, 
							a k value of 32 was chosen for the K-Means clustering model.</p>
						<img src={silhouetteMethodImage} alt="Silhouette Method for Optimal K Value"></img>
						<p>The K-Means clustering model was then trained on the preprocessed dataset, where features were selected based on their relevance. 
							The model was implemented using Scikit-learn, where the key steps included fitting the model to the data and evaluating 
							the results through cluster analysis.</p>
						<img src={KMCanalysis} alt="KMC analysis"></img>


						<p><strong>Results</strong></p>
						<p>The K-Means clustering model successfully grouped food items into distinct clusters based on their nutritional content. 
							Each cluster was analysed by examining the distribution of key nutrients, such as Calories, Protein, Fat, Carbohydrates, 
							Fiber, and Sugars.</p>

						<p>We can use this data to choose clusters that match our nutrition needs, which could significantly save time and improve
							performance. For example the first cluster would be classified as mid calories, low protein, mid fat, low carbs, mid fiber,
							 mid sugars. Below are the visualisations showing how these nutrients vary across the different clusters:</p>

						<p><strong>Calories</strong></p>
						<img src={KMCcalories} alt="Calories Distribution Across Clusters"></img>

						<p><strong>Protein</strong></p>
						<img src={KMCprotein} alt="Protein Distribution Across Clusters"></img>

						<p><strong>Fat</strong></p>
						<img src={KMCfat} alt="Fat Distribution Across Clusters"></img>

						<p><strong>Carbohydrates</strong></p>
						<img src={KMCcarbs} alt="Carbohydrates Distribution Across Clusters"></img>

						<p><strong>Fiber</strong></p>
						<img src={KMCfiber} alt="Fiber Distribution Across Clusters"></img>

						<p><strong>Sugars</strong></p>
						<img src={KMCsugars} alt="Sugars Distribution Across Clusters"></img>


						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://www.kaggle.com/code/samikshadalvi/daily-food-and-nutrition-dataset-eda/input" target="_blank">Kaggle</a> - dataset collection</p>
						<p><a href="https://github.com/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/05.11-K-Means.ipynb" target="_blank">Jake Vanderplas - Python Data Science Handbook - 05.11-K-Means</a></p>
						<p><a href="https://notebook.community/cgivre/oreilly-sec-ds-fundamentals/Notebooks/Unsupervised/K-Means%20Clustering%20Example" target="_blank">notebook.community</a></p>
						<p>Lecturer Dr. Greg Doyle's notes</p>

					</div>


					{/* <div id="machineLearning7" class="job">

					<h3>Predicting House Prices using FeedForward Neural Network (FFNN)</h3>
						<p><strong>Introduction</strong></p>
						<p>This project focuses on using object detection algorithm (CNN) to detect helmets. The YOLO (You Only Look Once) model, 
							implemented with the Ultralytics library, is used in conjunction with OpenCV for real-time video processing. 
							The dataset was sourced from public repositories and  was preannotated on Roboflow. The annotations were revised to optimise 
							the model.</p>

						<p><strong>Business Objectives</strong></p>
						<p>The primary goal of this project is to improve safety by detecting helmets and no helmets. Using YOLO and OpenCV, the model detects whether 
							people are wearing helmets in real-time video feeds. This can prevent accidents, ensure compliance with safety regulations, 
							and minimise workplace hazards.</p>

						<p>The system’s results can be used by construction managers, safety officers, insurance companies and many others to enhance 
							safety protocols, reduce liability, and improve worker protection.</p>

						<p><strong>Situation Assessment</strong></p>
						<p>Traditional methods of monitoring safety often rely on manual observation, which can be time-consuming and 
							prone to human error. Using YOLO for object detection offers a scalable and automated solution. YOLO’s fast inference and accuracy 
							are critical for real-time applications, and OpenCV ensures efficient video processing. The performance of the system is 
							evaluated using metrics such as precision, recall, and F1-score to measure its effectiveness in detecting helmet violations.</p>

						<p><strong>Tools & Technologies</strong></p>
						<ul>
								<li><strong>Ultralytics YOLO</strong>: Used for implementing  the object detection model. The Ultralytics library simplifies 
								the integration of YOLO models.</li>
								<br></br>
								<li><strong>OpenCV</strong>: Facilitates real-time video stream processing and visualisation. OpenCV is critical for 
								preprocessing video input and displaying detection results.</li>
								<br></br>
								<li><strong>Google Colab</strong>: Provides an environment with GPU support for training the YOLO model. 
								Colab’s cloud infrastructure enables quick experimentation and model optimisation without requiring local resources.</li>
								<br></br>
								<li><strong>Python</strong>: The programming language used to build the system, combining YOLO and OpenCV.</li>
								<br></br>
						</ul>

						<p><strong>Data Collection</strong></p>
						<p>The dataset used for training the model was sourced from Roboflows publicly available repositories. It contains just over
							7000 of annotated images with class's for helmets and noHelmets. The dataset was augmented to improve the model by implemeting the following 
							augmentations: Rotations, Crops, Grayscale and Blur.</p>
						
						<p>The images were already annotated but they were checked over and adjusted to ensure accurate labeling. The dataset was divided 
							into training, validation, and testing sets, with a 70/20/10 split for effective model evaluation.</p>

						<p><strong>Data Cleaning</strong></p>
						<p>Data cleaning involved ensuring consistent annotations and removing duplicates or mislabeled images. Images with poor visibility 
							or low resolution were excluded to maintain data quality. </p>

						<p><strong>Data Quality Verification</strong></p>
						<p>The dataset was verified through visualisation of annotations. The training process was monitored to ensure the model was 
							learning effectively, and sample predictions were manually reviewed to confirm detection accuracy.</p>

						<p><strong>Model Selection</strong></p>
						<p>The YOLOv11 model from the Ultralytics library was selected for its high speed and accuracy in object detection tasks, 
							it is the latest model of YOLO. YOLO's one-stage detection framework allows real-time processing, which is critical for 
							live video analysis.</p>

						<p><strong>Model Training</strong></p> <p>The annotated dataset was imported from Roboflow with the following code.</p>
						<img src={importRoboflow} alt="RoboFlow Import"></img>
						<p> Roboflow was used to annotate images and export the dataset in a format compatible with the YOLOv11 model.</p> 
						<p>The training process was conducted using Google Colab, leveraging its GPU support to accelerate computations. 
							To balance training quality and time constraints, the model was trained for 15 epochs. This duration was chosen due to the 
							computational intensity required for processing the dataset. Training at 15 epochs took just over 2 hours.</p> 
						<p>The training utilised the Ultralytics framework, which simplifies object detection model training. 
							First, a pretrained model from Ultralytics was loaded as a starting point. This approach allowed the model to leverage 
							features learned from a large generic dataset, speeding up convergence and improving accuracy. 
							Subsequently, a new model was trained on the annotated dataset, ensuring it was fine-tuned to detect helmets and no helmets.
							See image below for the code example.</p>
						<img src={traingModel} alt="Training Model"></img>

						<p><strong>Model Evaluation</strong></p>
						<p>After training the model, its performance was evaluated using F1-score, recall, and precision metrics. See the figures below 
							for detailed results.</p>
						<img src={f1Score} alt="F1" class="responsive-img"></img>
						<p>The F1-score achieved was 93%, indicating the model's high reliability in detecting helmets and no helmets. 
							This means that 93% of predictions were correct.</p>
						<img src={pScore} alt="Precision" class="responsive-img"></img>
						<p>The precision-confidence curve for the helmet detection project shows that all classes achieve a precision of 1.00 at a 
							confidence threshold of 0.907. This means that when the model predicts with at least 90.7% confidence, it makes no false 
							positive detections, ensuring highly reliable predictions for safety equipment detection at higher confidence levels.</p>
						<img src={rScore} alt="Recall" class="responsive-img"></img>
						<p>The recall-confidence curve for the helmet detection project shows that all classes achieve a recall of 0.99 at a confidence 
							threshold of 0.0. This indicates that the model successfully detects 99% of all actual instances across all classes, 
							even when it predicts with very low confidence, highlighting its effectiveness in minimising missed detections.</p>

						<p><strong>Results</strong></p>
						<p>The model demonstrated high accuracy in detecting helmets and no helmets in diverse environments. Features such as lighting 
							conditions and worker positions impacted detection performance, while robust preprocessing techniques mitigated these challenges. 
							The results affirm the system’s capability to monitor safety effectively.</p>

						<p><strong>Conclusion</strong></p>
						<p>This project highlights the potential of Ultralytics, YOLO and OpenCV in real-time object detection for enhancing safety. 
							The system successfully identified safety violations with high accuracy, providing a reliable tool for supervisors and 
							safety officers. This innovation can significantly reduce workplace accidents, ensuring a safer environment for workers.</p>

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://ultralytics.com/" target="_blank">Ultralytics</a> - Documentation, Tutorials, Guides, Framework, Support</p>
						<p><a href="https://app.roboflow.com/" target="_blank">Roboflow</a> - Dataset annotation and preparation</p>
						<p><a href="https://opencv.org/" target="_blank">OpenCV</a> - Video stream processing</p>
						<p>Lecturer Dr. Greg Doyle's notes</p>

					</div> */}

					<div id="machineLearning8" class="job">

					<h3>Object Detection For Helmets Using Convolutional Neural Network (CNN)</h3>
						<p><strong>Introduction</strong></p>
						<p>This project focuses on using object detection algorithm (CNN) to detect helmets. The YOLO (You Only Look Once) model, 
							implemented with the Ultralytics library, is used in conjunction with OpenCV for real-time video processing. 
							The dataset was sourced from public repositories and  was preannotated on Roboflow. The annotations were revised to optimise 
							the model.</p>

						<p><strong>Business Objectives</strong></p>
						<p>The primary goal of this project is to improve safety by detecting helmets and no helmets. Using YOLO and OpenCV, the model detects whether 
							people are wearing helmets in real-time video feeds. This can prevent accidents, ensure compliance with safety regulations, 
							and minimise workplace hazards.</p>

						<p>The system’s results can be used by construction managers, safety officers, insurance companies and many others to enhance 
							safety protocols, reduce liability, and improve worker protection.</p>

						<p><strong>Situation Assessment</strong></p>
						<p>Traditional methods of monitoring safety often rely on manual observation, which can be time-consuming and 
							prone to human error. Using YOLO for object detection offers a scalable and automated solution. YOLO’s fast inference and accuracy 
							are critical for real-time applications, and OpenCV ensures efficient video processing. The performance of the system is 
							evaluated using metrics such as precision, recall, and F1-score to measure its effectiveness in detecting helmet violations.</p>

						<p><strong>Tools & Technologies</strong></p>
						<ul>
								<li><strong>Ultralytics YOLO</strong>: Used for implementing  the object detection model. The Ultralytics library simplifies 
								the integration of YOLO models.</li>
								<br></br>
								<li><strong>OpenCV</strong>: Facilitates real-time video stream processing and visualisation. OpenCV is critical for 
								preprocessing video input and displaying detection results.</li>
								<br></br>
								<li><strong>Google Colab</strong>: Provides an environment with GPU support for training the YOLO model. 
								Colab’s cloud infrastructure enables quick experimentation and model optimisation without requiring local resources.</li>
								<br></br>
								<li><strong>Python</strong>: The programming language used to build the system, combining YOLO and OpenCV.</li>
								<br></br>
						</ul>

						<p><strong>Data Collection</strong></p>
						<p>The dataset used for training the model was sourced from Roboflows publicly available repositories. It contains just over
							7000 of annotated images with class's for helmets and noHelmets. The dataset was augmented to improve the model by implemeting the following 
							augmentations: Rotations, Crops, Grayscale and Blur.</p>
						
						<p>The images were already annotated but they were checked over and adjusted to ensure accurate labeling. The dataset was divided 
							into training, validation, and testing sets, with a 70/20/10 split for effective model evaluation.</p>

						<p><strong>Data Cleaning</strong></p>
						<p>Data cleaning involved ensuring consistent annotations and removing duplicates or mislabeled images. Images with poor visibility 
							or low resolution were excluded to maintain data quality. </p>

						<p><strong>Data Quality Verification</strong></p>
						<p>The dataset was verified through visualisation of annotations. The training process was monitored to ensure the model was 
							learning effectively, and sample predictions were manually reviewed to confirm detection accuracy.</p>

						<p><strong>Model Selection</strong></p>
						<p>The YOLOv11 model from the Ultralytics library was selected for its high speed and accuracy in object detection tasks, 
							it is the latest model of YOLO. YOLO's one-stage detection framework allows real-time processing, which is critical for 
							live video analysis.</p>

						<p><strong>Model Training</strong></p> <p>The annotated dataset was imported from Roboflow with the following code.</p>
						<img src={importRoboflow} alt="RoboFlow Import"></img>
						<p> Roboflow was used to annotate images and export the dataset in a format compatible with the YOLOv11 model.</p> 
						<p>The training process was conducted using Google Colab, leveraging its GPU support to accelerate computations. 
							To balance training quality and time constraints, the model was trained for 15 epochs. This duration was chosen due to the 
							computational intensity required for processing the dataset. Training at 15 epochs took just over 2 hours.</p> 
						<p>The training utilised the Ultralytics framework, which simplifies object detection model training. 
							First, a pretrained model from Ultralytics was loaded as a starting point. This approach allowed the model to leverage 
							features learned from a large generic dataset, speeding up convergence and improving accuracy. 
							Subsequently, a new model was trained on the annotated dataset, ensuring it was fine-tuned to detect helmets and no helmets.
							See image below for the code example.</p>
						<img src={traingModel} alt="Training Model"></img>

						<p><strong>Model Evaluation</strong></p>
						<p>After training the model, its performance was evaluated using F1-score, recall, and precision metrics. See the figures below 
							for detailed results.</p>
						<img src={f1Score} alt="F1" class="responsive-img"></img>
						<p>The F1-score achieved was 93%, indicating the model's high reliability in detecting helmets and no helmets. 
							This means that 93% of predictions were correct.</p>
						<img src={pScore} alt="Precision" class="responsive-img"></img>
						<p>The precision-confidence curve for the helmet detection project shows that all classes achieve a precision of 1.00 at a 
							confidence threshold of 0.907. This means that when the model predicts with at least 90.7% confidence, it makes no false 
							positive detections, ensuring highly reliable predictions for safety equipment detection at higher confidence levels.</p>
						<img src={rScore} alt="Recall" class="responsive-img"></img>
						<p>The recall-confidence curve for the helmet detection project shows that all classes achieve a recall of 0.99 at a confidence 
							threshold of 0.0. This indicates that the model successfully detects 99% of all actual instances across all classes, 
							even when it predicts with very low confidence, highlighting its effectiveness in minimising missed detections.</p>

						<p><strong>Results</strong></p>
						<p>The model demonstrated high accuracy in detecting helmets and no helmets in diverse environments. Features such as lighting 
							conditions and worker positions impacted detection performance, while robust preprocessing techniques mitigated these challenges. 
							The results affirm the system’s capability to monitor safety effectively.</p>

						<p><strong>Conclusion</strong></p>
						<p>This project highlights the potential of Ultralytics, YOLO and OpenCV in real-time object detection for enhancing safety. 
							The system successfully identified safety violations with high accuracy, providing a reliable tool for supervisors and 
							safety officers. This innovation can significantly reduce workplace accidents, ensuring a safer environment for workers.</p>

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://ultralytics.com/" target="_blank">Ultralytics</a> - Documentation, Tutorials, Guides, Framework, Support</p>
						<p><a href="https://app.roboflow.com/" target="_blank">Roboflow</a> - Dataset annotation and preparation</p>
						<p><a href="https://opencv.org/" target="_blank">OpenCV</a> - Video stream processing</p>
						<p>Lecturer Dr. Greg Doyle's notes</p>

					</div>


					<div id="machineLearning9" class="job">

					<h3>Zero-Code ChatGPT Neural Network for Word Sentiment Prediction</h3>
						<p><strong>Introduction</strong></p>
						<p>In this project an AI tool ChatGPT will be used to create a model with zero code. All of the code used in this will be 
							generated by ChatGPT. The goal of this project is to create a functioning model that predicts if unseen words are positive or negative.
							To add to the zero code concept, also a zero database idea will be used. The database will be generated from the ChatGPT model itself.

							The main purpose of this project is to speed up the creation of the model. This project is expected to take a considerably lower 
							timeframe than the previous projects.
						</p>

						<p><strong>ChatGPt Promts & Responses</strong></p> 
						<p>Promts & Responses 1</p>
						<img src={ChatGPT1} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 2</p>
						<img src={ChatGPT2} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 3</p>
						<img src={ChatGPT3} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 4</p>
						<img src={ChatGPT4} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 5</p>
						<img src={ChatGPT5} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 6</p>
						<img src={ChatGPT6} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 7</p>
						<img src={ChatGPT7} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 8</p>
						<img src={ChatGPT8} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 9</p>
						<img src={ChatGPT9} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 10</p>
						<img src={ChatGPT10} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 11</p>
						<img src={ChatGPT11} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 12</p>
						<img src={ChatGPT12} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 13</p>
						<img src={ChatGPT13} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
						<p>Promts & Responses 14</p>
						<img src={ChatGPT14} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>

						<p><strong>Model Evaluation</strong></p>
						<p>After training the model, from the figure below, we can see that the accuracy for the validation decreased slightly for each epoch. The accuracy stayed
							fairly low of around 40%.
						</p>
						<img src={ChatGPTevaluation} alt="Eval" class="responsive-img"></img>

						<p>From the figure below, we can see that using the model to evaluate unseen words can be effective. There was an incorrect
							prediction with 'Hydrated' which is a word that should be predicted as positive,  but was predicted as negative. All of the other words
							seem accurate.
						</p>
						<img src={ChatGPTtesting} alt="Testing"></img>

						<p><strong>Results</strong></p>
						<p>The model demonstrated a relatively low accuracy for the validation set. However, the unseen words that were manually tested
							resulted in an 80% accuracy. </p>

						<p><strong>Conclusion</strong></p>
						<p>This project highlights how generative AI can be used to speed up the creation of the model process. It comes with some drawbacks
							like having to use small datasets, relying on code thats not well understood. But, also has its advantages like taking a considerably
							lower amount of time, dataset was sourced from ChatGPT to increase convieniece, simplicity.</p>

						<p>There is potential to overcome the issues by using the premium version, 
							but this comes with the drawback of having to pay for the service.</p>
						

						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://chatgpt.com/" target="_blank">ChatGPT</a></p>

					</div>



					<div id="machineLearning10" class="job">

					<h3>Zero-Code DeepSeek Neural Network for Word Sentiment Prediction</h3>
					<p><strong>Introduction</strong></p>
					<p>In this project, the AI tool DeepSeek will be used to create a model with zero code. All of the code used in this project will be 
							generated by DeepSeek. The goal is to build a functioning model that predicts whether unseen words are positive or negative. 
							To further embrace the zero-code concept, a zero-database approach will also be implemented. The dataset will be generated directly 
							from the DeepSeek model itself.</p>

					<p>The main objective of this project is to accelerate the model development process. This project is expected to be completed in a 
							significantly shorter timeframe compared to previous projects.</p>

					<p><strong>DeepSeek Promts & Responses</strong></p> 
					<p>Prompts & Responses 1</p>
					<img src={DeepSeek1} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
					<p>Prompts & Responses 2</p>
					<img src={DeepSeek2} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
					<p>Prompts & Responses 3</p>
					<img src={DeepSeek3} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
					<p>Prompts & Responses 4</p>
					<img src={DeepSeek4} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
					<p>Prompts & Responses 5</p>
					<img src={DeepSeek5} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
					<p>Prompts & Responses 6</p>
					<img src={DeepSeek6} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
					<p>Prompts & Responses 7</p>
					<img src={DeepSeek7} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>
					<p>Prompts & Responses 8</p>
					<img src={DeepSeek8} alt="Prompts & Responses" style={{ border: "2px solid black" }}></img>

					<p><strong>Results</strong></p>
					<p>The DeepSeek model was unable to produce a working implementation. Unlike the ChatGPT generated code, which successfully built 
						a functioning model, DeepSeek consistently returned code that creates a model that only checked whether a word was in the provided 
						list rather than making a prediction on unseen data. Even after two additional explanations, it was still unable to generate 
						the correct code.</p>

					<p><strong>Conclusion</strong></p>
					<p>This project demonstrates the potential of generative AI in accelerating the model development process. However, it also 
						highlights limitations when the AI struggles to understand the task. DeepSeek's inability to generate a functioning predictive 
						model shows that its coding capabilities may be limited for some logic.</p>

					<p>While a premium version may offer improvements, this comes with the drawback of requiring a paid subscription. Future 
						iterations could explore alternative AI tools or manual intervention to correct the generated code.</p>


						<p><strong>Acknowledgements</strong></p>
						<p><a href="https://deepseek.com/" target="_blank">DeepSeek</a></p>

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
            <p>In this project, I developed a Swimming Performance Tracker application using Python. The app connects to a database hosted on PythonAnywhere, where it retrieves data on swimmers' times and the types of swims. Using this data, the application dynamically renders a user-friendly interface that allows swimmers and coaches to visualise performance trends over time. The core feature is a chart that plots the swimmers' times against the type of swim, providing valuable insights into their progress and areas that need improvement.</p>
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