import React from "react";
import { Link } from "react-router-dom";

const myProjects = [
  {
    id: "1a",
    name: "The Frogger Clone",
    year: 2017,
    technologies: "JavaScript, jQuery",
    description: "The first project game clone.",
  },
  {
    id: "2b",
    name: "iTravel",
    year: 2017,
    technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
    description:
      "Web App that allows logged in users to share their experiences about travel destinations.",
  },
  {
    id: "3c",
    name: "The Plan",
    year: 2017,
    technologies:
      "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
    description:
      "Web App that allows logged in users to plan your next activity with your friends or business partners.",
  },
];

function ProjectDetailsPage(props) {
  console.log("props :>> ", props);
  console.log("props.match.params.id :>> ", props.match.params.id);

  // Get the id from props.match.params.id
  const projectId = props.match.params.id;

  // Find the exact project by looping over myProjects array
  const foundProject = myProjects.find((project) => projectId === project.id);

  console.log("foundProject :>> ", foundProject);

  return (
    <div>
      <h2>PROJECT DETAILS</h2>
      <h2>{foundProject.name}</h2>
      <h3>Used technologies: {foundProject.technologies}</h3>
      <h3>Year: {foundProject.year}</h3>
      <h3>Description: {foundProject.description}</h3>

      <Link to="/projects">
        <button>Back To Projects</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
