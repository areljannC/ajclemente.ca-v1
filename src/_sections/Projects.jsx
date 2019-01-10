import React from 'react';
import { Element } from 'react-scroll';

import PoseCard from './../_pose-components/PoseCard';

const projects = [
  {
    thumbnail: "https://udemy-images.udemy.com/course/750x422/381876_78ea.jpg",
    title: "Placeholder",
    description: "Just a bunch of random text for the description",
    tags: ["HTML", "CSS", "JavaScript"],
    linkInfo: "#",
    linkLive: "#"
  },
  {
    thumbnail: "https://udemy-images.udemy.com/course/750x422/381876_78ea.jpg",
    title: "Placeholder",
    description: "Just a bunch of random text for the description",
    tags: ["HTML", "CSS", "JavaScript"],
    linkInfo: "#",
    linkLive: "#"
  },
  {
    thumbnail: "https://udemy-images.udemy.com/course/750x422/381876_78ea.jpg",
    title: "Placeholder",
    description: "Just a bunch of random text for the description",
    tags: ["HTML", "CSS", "JavaScript"],
    linkInfo: "#",
    linkLive: "#"
  },
  {
    thumbnail: "https://udemy-images.udemy.com/course/750x422/381876_78ea.jpg",
    title: "Placeholder",
    description: "Just a bunch of random text for the description",
    tags: ["HTML", "CSS", "JavaScript"],
    linkInfo: "#",
    linkLive: "#"
  },
  {
    thumbnail: "https://udemy-images.udemy.com/course/750x422/381876_78ea.jpg",
    title: "Placeholder",
    description: "Just a bunch of random text for the description",
    tags: ["HTML", "CSS", "JavaScript"],
    linkInfo: "#",
    linkLive: "#"
  },
];

const Projects = () => (
  <Element name="projects" id="c-section-projects">
    <div className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h1 data-aos="zoom-in" data-aos-offset="-10">Projects</h1>
        </div>
        <div className="columns is-centered is-multiline">
          {
            projects.map((project) => (
              <div className="column is-half c-column">
                <PoseCard 
                  scrollAnimation="fade-up"
                  thumbnail={project.thumbnail}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  linkInfo={project.linkInfo}
                  linkLive={project.linkLive}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </Element>
);

export default Projects;