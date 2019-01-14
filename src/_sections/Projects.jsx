import React from 'react';
import { Element } from 'react-scroll';

import PoseCard from './../_pose-components/PoseCard';

const projects = [
  {
    "thumbnail": require("./../_assets/png/thumbnail-ajclemente.PNG"),
    "title": "Web Portfolio",
    "description": "My web portfolio made with React.js.",
    "tags": ["React.js", "Formik", "Yup", "Axios", "Bulma"],
    "linkInfo": "https://github.com/areljannC/ajclemente.ca",
    "linkLive": "ajclemente.ca"
  },
  {
    "thumbnail": require("./../_assets/png/thumbnail-masala-bites.PNG"),
    "title": "Masala Bites Redesign",
    "description": "A local restaurant's website modern redesign.",
    "tags": ["jQuery", "Bulma", "SASS"], 
    "linkInfo": "https://github.com/areljannC/MasalaBitesRedesign",
    "linkLive": "https://areljannc.github.io/MasalaBitesRedesign/"
  },
  {
    "thumbnail": require("./../_assets/png/thumbnail-quotes-generator.PNG"),
    "title": "Quotes Generator",
    "description": "A simple quotes generator for when you're speechless.",
    "tags": ["Vanilla JavaScript", "CSS3", "SASS"],
    "linkInfo": "https://github.com/areljannC/QuotesGenerator",
    "linkLive": "https://areljannc.github.io/QuotesGenerator/"
  }
];

const Projects = () => (
  <Element name="projects" id="c-section-projects">
    <div className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h1 className="is-uppercase is-size-1-desktop c-text-color-black"
            data-aos="zoom-in"
            data-aos-offset="-10"
          >
             <span className="c-text-underline">Projects</span>
          </h1>
        </div>
        <div className="columns is-centered is-multiline">
          {
            (projects.length < 1) ? (
              <div className="section">
                <div className="content has-text-centered">
                  <p className="is-size-4 c-text-color-red">
                    No projects yet!
                  </p>
                </div>
              </div>
            ) : (
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
              )
            ))
          }
        </div>
      </div>
    </div>
  </Element>
);

export default Projects;