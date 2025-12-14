import ProjectCard from "../components/Card";


function Projects() {

  return (

    <div className="Projects" id = "projects">

      <h1>Featured Projects</h1>
      <h4>Here are some of my recent works showcasing my skills in full-stack development</h4>

      <ProjectCard
        image="Image Placeholder"
        description="A web application that allows users to track their tasks and manage their time effectively."
        techStack={["React", "Node.js", "MongoDB"]}
        projectURL="https://example.com/project1"
        githubURL=""
      />

      <ProjectCard
        image="Image Placeholder"
        description="An e-commerce platform that provides a seamless shopping experience with secure payment integration."
        techStack={["TypeScript", "Express", "MySQL"]}
        projectURL="https://example.com/project2"
        githubURL=""
      />

      <ProjectCard
        image="Image Placeholder"
        description="A social networking site that connects people with similar interests and facilitates community building."
        techStack={["Vue.js", "Django", "PostgreSQL"]}
        projectURL="https://example.com/project3"
        githubURL=""
      />
      
    </div>

  );

}

export default Projects;