import ProjectCard from "../components/Card";


function Projects() {

  return (

    <div className="Projects" id = "projects">

      <h1>Featured Projects</h1>
      <h4>Here are some of my recent works showcasing my skills in full-stack development</h4>

      <ProjectCard
      image="Image Placeholder"
      description="A pet adoption web application that allows users to browse pets, view details, and submit adoption requests, with role-based admin access."
      techStack={["SvelteKit", "TypeScript", "JWT", "Prisma"]}
      projectURL=""
      githubURL="https://github.com/Vasuuu641/Pets"
    />

      <ProjectCard
      image="Image Placeholder"
      description="A student–alumni networking platform aimed at strengthening connections through profiles, mentorship opportunities, and community engagement."
      techStack={["React", "TypeScript", "Node.js", "MySQL"]}
      projectURL=""
      githubURL="https://github.com/Vasuuu641/Student_Alumni_Network"
    />

      <ProjectCard
      image="Image Placeholder"
      description="A productivity app featuring a gamified Pomodoro timer, task management, and daily reviews to help users build consistent focus habits."
      techStack={["NestJS", "Prisma", "MySQL", "Docker"]}
      projectURL=""
      githubURL="https://github.com/Vasuuu641/Timely_Public"
    />

    </div>

  );

}

export default Projects;