
import React from 'react';

import { Link } from 'react-router-dom';

export const myProjects = [
  {
    id: '1a',
    name: 'The Frogger Clone',
    year: 2017,
    technologies: 'JavaScript, jQuery',
    description: 'The first project game clone.',
  },
  {
    id: '2b',
    name: 'iTravel',
    year: 2017,
    technologies: 'Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS',
    description:
      'Web App that allows logged in users to share their experiences about travel destinations.',
  },
  {
    id: '3c',
    name: 'The Plan',
    year: 2017,
    technologies:
      'Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS',
    description:
      'Web App that allows logged in users to plan your next activity with your friends or business partners.',
  },
];

//
const ProjectsPage = () => {
  return (
    <div>
      <h2>Projects Page:</h2>

      {myProjects.map(project => {
        return (
          <Link key={project.id} to={`/project-details/${project.id}`} >
          
            <div className="project">

              <h3>{project.name}</h3>
              <h4>{project.technologies}</h4>
            </div>
            
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectsPage;