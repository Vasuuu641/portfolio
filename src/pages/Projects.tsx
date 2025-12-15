import ProjectCard from "../components/Card";



function Projects() {

  return (

    <section id = "projects"
    className = "min-h-screen flex flex-col justify-start items-center px-6 md:px-16 lg:px-32 pt-24 bg-[hsl(var(--bg-dark-2))] text-[hsl(var(--foreground))]">
    
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
    Featured Projects
    </h1>

    <h4 className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
    Here are some of my recent works showcasing my skills in full-stack development
    </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">

      <ProjectCard
      image="/pets.png"
      description="A pet adoption web application that allows users to browse pets, view details, and submit adoption requests, with role-based admin access."
      techStack={["SvelteKit", "TypeScript", "JWT", "Prisma"]}
      projectURL=""
      githubURL="https://github.com/Vasuuu641/Pets"
    />

      <ProjectCard
      image="/students.png"
      description="A student–alumni networking platform aimed at strengthening connections through profiles, mentorship opportunities, and community engagement."
      techStack={["React", "TypeScript", "Node.js", "MySQL"]}
      projectURL=""
      githubURL="https://github.com/Vasuuu641/Student_Alumni_Network"
    />

      <ProjectCard
      image="/timely.png"
      description="A productivity app featuring a gamified Pomodoro timer, task management, and daily reviews to help users build consistent focus habits."
      techStack={["NestJS", "Prisma", "MySQL", "Docker"]}
      projectURL=""
      githubURL="https://github.com/Vasuuu641/Timely_Public"
    />


      </div>
    </section>

  );

}

export default Projects;