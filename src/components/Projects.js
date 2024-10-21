import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import portfoliopng from "../assets/portfolio.png";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Projects = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 100 });
    }
  }, [controls, inView]);

  const projectData = [
    {
      title: "Portfolio Website",
      description: " React | CSS",
      image: portfoliopng,
      link: "https://github.com/cheenoxd/portfolio-website",
    },
   
  
  ];

  return (
    <motion.div
      className="projects-container"
      ref={ref}
      initial={{ opacity: 0, x: 100 }} 
      animate={controls} 
      transition={{ duration: 1, delay: 0.3 }} 
    >
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </motion.div>
  );
};

export default Projects;
