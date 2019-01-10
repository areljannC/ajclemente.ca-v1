import React from 'react';
import { Element } from 'react-scroll';

import PoseCard from './../_pose-components/PoseCard';

const projects = [
  {
    thumbnail: "#",
    title: "Placeholder",
    description: "Just a bunch of random text for the description",
    tags: ["HTML", "CSS", "JavaScript"],
    linkInfo: "#",
    linkLive: "#"
  }
];

const Projects = () => (
  <Element name="projects" id="c-section-projects">
    <div className="section" data-aos="zoom-in">
      <div className="container">
        <div className="content has-text-centered">
          <h1>Projects</h1>
        </div>
        <div className="columns is-centered">
          <div className="column">
            {
              projects.map((project) => (
                <div>
                  <p>Project name: {project.title}</p>
                  <p>Tags: {
                      project.tags.map((tag) => (
                        <span>{tag}</span>
                        ))
                      }
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default Projects;