import ProjectListItem from "./ProjectListItem";
import { useState } from "react";

const ProjectList = ({ projects }) => {

  //1. identify state, setter function using useState hook
  //5. Filter the projects using .filter methond and .includes
  //6. Utilize 


  const [ searchTerm, setSearchTerm ] = useState("")

  function getSearchTerm(e){
    setSearchTerm(e.target.value)
  }

  const filteredProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const projectListItems = filteredProjects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  // const projectListItems = projects.map((project) => (
  //   <ProjectListItem key={project.id} {...project} />
  // ));
 

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={getSearchTerm}/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
