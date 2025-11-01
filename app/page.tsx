"use client";import Image from "next/image";
import BlurText from "./components/BlurText";
import ShinyText from "./components/ShinyText";
import { useState } from "react";
import { motion, PanInfo } from "motion/react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "Ecovation",
      shortDesc: "DWDG competition website",
      fullDesc: "Developed the Front-End of Ecovation website for a business consulting competition by DWDG BINUS, featuring key sections such as Timeline, Collaborators, and General Requirements. The platform was enhanced with updates including LinkedIn integration for past winners, as well as refreshed judges and speakers' profiles. Built using JavaScript with the React.js framework and styled with Tailwind CSS, the website delivered a fully responsive experience aligned with Figma designs.",
      tech: ["React.js", "JavaScript", "Tailwind CSS"],
      image: "/ecovation.jpg",
      demoUrl: "https://ecovation.dwdgbinus.com/",
      codeUrl: "https://github.com/Do-Well-Do-Good-BINUS/ecov_web.git"
    },
    {
      id: 2,
      title: "Verdicto",
      shortDesc: "Connect people with lawyers",
      fullDesc: "Verdicto is a website designed to connect people directly with lawyers. This project was inspired by the fact that many legal cases go unresolved because of limited access to legal professionals, often only gaining attention once they become viral. To address this gap, my team and I developed Verdicto as a platform where individuals can easily search for and reach out to lawyers, making legal support more accessible and efficient. I was responsible for the Front-End development, ensuring a user-friendly and responsive design.",
      tech: ["HTML", "CSS"],
      image: "/verdicto.jpg",
      demoUrl: "https://drive.google.com/file/d/1e8SoeYr2xsarqnEGmkE1pvYVEkmoC2Q6/view?usp=sharing", 
      codeUrl: ""
    },
    {
      id: 3,
      title: "S.I.G.A.P",
      shortDesc: "Smart Identification & Guarding Alert Platform",
      fullDesc: "SIGAP (Smart Identification & Guarding Alert Platform) is a security-focused website designed to detect anomalies and perform real-time face recognition. Together with my team, we decided to develop SIGAP to support authorities or individuals who require high-level security by identifying suspicious movements and recognizing faces instantly. In this project, I was responsible for developing the face recognition feature. I built a pipeline that integrates YOLOv8 for face detection with FaceNet for face embedding extraction, enabling the system to detect faces and generate unique feature vectors in real time. My tasks included preparing and labeling the dataset for YOLOv8 training, training and evaluating the detection model, and implementing the embedding generation process for detected faces. The model has 0.875 in mAP50, 0.744 in mAP50-95, 0.986 in precision, and 0.843 in recall",
      tech: ["Python", "Python Notebook", "YOLO v8"],
      image: "/SIGAP.png",
      demoUrl: "", 
      codeUrl: "https://www.kaggle.com/code/agnesjulia/yolov8-facenet" 
    },
    {
      id: 4,
      title: "HackerRank",
      shortDesc: "Profile and Certifications",
      fullDesc: "I actively practice coding on HackerRank to strengthen my problem-solving and technical skills. Along the way, I earned the SQL Basic and SQL Intermediate certifications, showcasing my ability to write and optimize database queries. Beyond SQL, I am currently learning Java and planning to pursue additional certifications. I enjoy continuous learning and consistently seek opportunities to expand my knowledge and expertise in programming.",
      tech: ["SQL", "Java", "Python"],
      image: "/Hackerrank.jpg",
      demoUrl: "https://www.hackerrank.com/profile/agnesjulia53", 
      codeUrl: "https://www.hackerrank.com/profile/agnesjulia53" 
    },
    {
      id: 5,
      title: "Business Consulting",
      shortDesc: "Start-Up Project Lindungi Hutan",
      fullDesc: "As part of the DWDG program’s real startup project, I contributed to addressing key challenges faced by Lindungi Hutan such as suboptimal marketing, low donor retention, and limited community engagement. My work primarily focused on Strategy 3: Building Sustainable Donor Loyalty through Ambassador Engagement, supported by research on Digital Marketing & Branding Performance and Community Engagement. I conducted PESTLE analysis, assessed risks and mitigation plans, and contributed to financial projections to ensure the strategy’s feasibility and sustainability. Using data from Lindungi Hutan’s website and social media platforms, I carried out in-depth research and participated in brainstorming sessions to develop data-driven strategies and creative ideas that strengthen Lindungi Hutan’s online presence and foster a loyal, engaged donor community.",
      tech: ["Canva", "Google Docs", "Excel"],
      image: "/Consulting.png",
      demoUrl: "", 
      codeUrl: "" 
    },
    {
      id: 6,
      title: "LiberAI",
      shortDesc: "Book Recommendation System",
      fullDesc: "Developed the LiberAI book recommendation model, exploring the complete end-to-end development process. The project involved building a content-based recommendation system through stages including data cleaning and preprocessing, TF-IDF vectorization of genres, authors, and descriptions, dimensionality reduction using TruncatedSVD, and book clustering with KMeans. The model further utilized cosine similarity to generate personalized recommendations, resulting in an efficient and interpretable system for discovering related books.",
      tech: ["Python Notebook", "Machine Learning", "Data Preprocessing"],
      image: "/liberAI.png",
      demoUrl: "https://liberai.streamlit.app/",
      codeUrl: "https://github.com/whoopnes/LiberAI.git"
    },
    {
      id: 7,
      title: "Fruity Nutrition",
      shortDesc: "Fruit Recognition",
      fullDesc: "Developed *Fruity Nutrition*, an integrated deep learning and web-based system designed for fruit recognition and nutritional analysis. The project combines a Convolutional Neural Network (CNN) using transfer learning with ResNet50V2, trained on augmented fruit images to classify 10 different fruit types with high accuracy. I was responsible for building and optimizing the Streamlit front-end interface, creating a smooth and interactive user experience where users can upload or capture fruit images directly through the app. Once the image is processed and classified by the model, the interface automatically retrieves and displays key nutritional information such as energy, protein, vitamins, and minerals from an integrated dataset. The result is an accessible, educational platform that seamlessly connects AI-powered fruit recognition with practical nutrition insights.",
      tech: ["Python Notebook", "Computer Vision", "CNN ResNet-50"],
      image: "/fruityNutrition.png",
      demoUrl: "https://drive.google.com/file/d/11b1mrVIxBAX3f7-YaXbpfThtZdYt4f76/view?usp=drivesdk",
      codeUrl: "https://github.com/whoopnes/Fruity_Nutrition.git"
    },
    {
      id: 8,
      title: "Fruity Nutrition Similarity",
      shortDesc: "Fruit Recognition",
      fullDesc: "Developed a Natural Language Processing (NLP) based system that identifies and compares the similarity of health benefits between different fruits and vegetables. The project aims to help users discover alternative produce items with comparable nutritional or health effects. Using a dataset containing fruit and vegetable names alongside their described health benefits, the system applies text preprocessing, TF-IDF vectorization, and sentence embeddings to measure both lexical and semantic similarity. I built the interactive program interface, enabling users to compare two items or find the top five fruits or vegetables with the most similar health benefits. This solution helps users make informed dietary choices by easily identifying nutritious alternatives.",
      tech: ["Python Notebook", "NLP", "Text Preprocessing"],
      image: "/fruitSimilarity.png",
      demoUrl: "https://drive.google.com/file/d/16XnyWuCpzT2xkiuJ-dMvwzxNuhW_zjuN/view?usp=sharing",
      codeUrl: "https://github.com/NidyaH/Fruit-and-Vegetables-Nutrition-Similarity-NLP.git"
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 md:px-8 py-4 bg-gray/10 dark:bg-gray-900/10">
        <ShinyText 
          text="Agnes Julia's Portfolio"
          className="text-xl md:text-2xl font-light select-none"
          speed={3}
        />
        <ul className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg font-medium text-white">
          <li>
            <a href="#about" className="text-white hover:text-blue-500 transition">About Me</a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-blue-500 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-blue-500 transition">Contact</a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1 p-2 z-50"
        >
          <motion.span 
            className="w-5 h-0.5 bg-white"
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="w-5 h-0.5 bg-white"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="w-5 h-0.5 bg-white"
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <motion.div
          className="absolute top-0 right-0 h-full w-64 backdrop-blur-sm bg-white/10 border-l border-white/20"
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col pt-20 px-6">
            <a 
              href="#about" 
              className="text-white hover:text-blue-500 transition py-4 text-lg border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Me
            </a>
            <a 
              href="#projects" 
              className="text-white hover:text-blue-500 transition py-4 text-lg border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-blue-500 transition py-4 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </motion.div>
      {/* Introduction Section */}
      <section className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen px-4 pt-20 md:pt-0">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center h-full">
          <BlurText 
            text="Hi, I'm Agnes Julia!" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white"
            delay={100}
            animateBy="words"
          />
          <BlurText 
            text="welcome to my project collections" 
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center mb-20"
            delay={150}
            animateBy="words"
          />
        </div>
      </section>
      {/* About Me Section */}
      <section id="about" className="relative z-20 flex flex-col items-center w-full px-4 mt-10 md:mt-20 pb-20 md:pb-32">
        <div className="w-full mb-8 md:mb-10 lg:mb-14 flex justify-center">
          <BlurText 
            text="About Me"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center justify-center"
            delay={80}
            animateBy="words"
          />
        </div>
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mx-auto">
          {/* Left side - Description and Download CV */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center order-2 md:order-1">
            <BlurText 
              text="Strong interest in technology, exploration, and continuous learning. Enjoys exploring new fields, embracing challenges, and gaining diverse experiences. Dedicated to continuous growth, effective collaboration, and creating impactful solutions through both technical and creative work."
              className="mb-8 text-lg md:text-xl lg:text-2xl text-white text-justify"
              delay={50}
              animateBy="words"
            />
            <a
              href="/CV_Agnes Julia Purnomo.pdf"
              download
              className="inline-block px-6 md:px-8 py-3 text-lg md:text-xl rounded-2xl font-semibold shadow transition backdrop-blur-sm bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 border border-white/20"
            >
              <ShinyText 
                text="Download CV"
                className="text-white"
                speed={4}
              />
            </a>
          </div>
          {/* Right side - Photo */}
          <div className="flex-shrink-0 w-48 h-60 md:w-56 md:h-72 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl overflow-hidden flex items-center justify-center order-1 md:order-2 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-105">
            <Image
              src="/profile.jpg"
              alt="Agnes Julia Profile Picture"
              width={224}
              height={288}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="relative z-20 w-full px-4 py-10 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Projects Title */}
          <div className="w-full mb-12 md:mb-16 flex justify-center">
            <BlurText 
              text="My Best Work"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center justify-center"
              delay={80}
              animateBy="words"
            />
          </div>
          
          {/* Single Project Carousel */}
          <div className="relative mb-12 md:mb-16">
            <div className="flex justify-center">
              <div className="w-72 h-44 md:w-80 md:h-48 relative overflow-hidden">
                <motion.div 
                  className="flex"
                  animate={{ x: -selectedProject * 320 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="flex-shrink-0 w-72 h-44 md:w-80 md:h-48 backdrop-blur-sm border rounded-2xl overflow-hidden bg-white/20 border-white/40 shadow-2xl shadow-white/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="h-24 md:h-28 bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={320}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-3 md:p-4">
                        <h3 className="text-white font-semibold text-base md:text-lg mb-2 line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-xs md:text-sm mb-3 line-clamp-2">
                          {project.shortDesc}
                        </p>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {project.tech.slice(0, 2).map((tech, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 2 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
                              +{project.tech.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length)}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <span className="text-white text-lg md:text-xl">‹</span>
              </button>
              
              <button
                onClick={() => setSelectedProject((prev) => (prev + 1) % projects.length)}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <span className="text-white text-lg md:text-xl">›</span>
              </button>
            </div>
            
            {/* Slider Bar Indicator */}
            <div className="flex justify-center mt-8">
              <div className="relative w-64 h-2 backdrop-blur-sm bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  style={{ 
                    width: `${100 / projects.length}%`,
                  }}
                  animate={{ 
                    x: `${(selectedProject * 100)}%`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            </div>
            
            {/* Progress Text */}
            <div className="text-center mt-3">
              <span className="text-white/60 text-sm">
                {selectedProject + 1} / {projects.length}
              </span>
            </div>
          </div>
          
          {/* Project Description Section */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left - Project Details */}
              <div className="order-2 lg:order-1">
                <BlurText 
                  text={projects[selectedProject].title}
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                  delay={60}
                  animateBy="words"
                />
                <BlurText 
                  text={projects[selectedProject].fullDesc}
                  className="text-white/90 text-base md:text-lg mb-6 leading-relaxed text-justify"
                  delay={20}
                  animateBy="words"
                />
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[selectedProject].tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-white/90 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  {projects[selectedProject].id === 4 ? (
                    <a
                      href="https://www.hackerrank.com/profile/agnesjulia53"
                      className="inline-block px-6 py-3 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <ShinyText 
                        text="View Profile"
                        className="text-white"
                        speed={4}
                      />
                    </a>
                  ) : projects[selectedProject].id === 5 ? (
                    // Special buttons for Business Consulting project
                    <>
                      <a
                        href="https://drive.google.com/file/d/1rPD65cGmuI7XcwlvlvIWIZljtxg2AaIM/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        <ShinyText 
                          text="Pitch Deck"
                          className="text-white"
                          speed={4}
                        />
                      </a>
                      <a
                        href="https://docs.google.com/spreadsheets/d/1fMC6oqV3dM3mYEiGA7QWh99XaxoobjzB/edit?usp=drive_link&ouid=112640418038045612228&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        <ShinyText 
                          text="Financial Projections"
                          className="text-white"
                          speed={4}
                        />
                      </a>
                    </>
                  ) : (
                    <>
                      {projects[selectedProject].demoUrl && (
                        <a
                          href={projects[selectedProject].demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          <ShinyText 
                            text="View Live Demo"
                            className="text-white"
                            speed={4}
                          />
                        </a>
                      )}
                      {projects[selectedProject].codeUrl && (
                        <a
                          href={projects[selectedProject].codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          <ShinyText 
                            text="View Code"
                            className="text-white"
                            speed={5}
                          />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
              
              {/* Right - Project Image */}
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <Image
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="relative z-20 w-full px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Contact Title */}
          <div className="w-full mb-16 flex justify-center">
            <BlurText 
              text="Let's Connect"
              className="text-5xl font-bold text-white text-center justify-center"
              delay={80}
              animateBy="words"
            />
          </div>
          
          {/* Contact Content */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="flex justify-center">
                <BlurText 
                  text="Ready to collaborate on something amazing?"
                  className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center justify-center"
                  delay={60}
                  animateBy="words"
                />
              </div>
              <BlurText 
                text="Feel free to reach out through any of these platforms. I'd love to hear from you!"
                className="text-lg text-white/80 max-w-2xl mx-auto text-center"
                delay={40}
                animateBy="words"
              />
            </div>
            
            {/* Contact Methods */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Email */}
              <motion.button
                onClick={() => {
                  navigator.clipboard.writeText('agnesjuliaap@gmail.com');
                  alert('Email copied to clipboard!');
                }}
                className="flex items-center gap-4 px-8 py-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 group w-full md:w-auto justify-center md:justify-start cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Copy Email</span>
              </motion.button>
              
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/agnes-purnomo-035968246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-8 py-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 group w-full md:w-auto justify-center md:justify-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-white font-medium">LinkedIn</span>
              </motion.a>
            </div>
            
            {/* Additional contact info */}
            <div className="mt-12 pt-8 border-t border-white/20 text-center">
              <p className="text-white/60 text-sm">
                Based in Indonesia • Available for remote opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}