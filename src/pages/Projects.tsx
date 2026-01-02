import ProjectCard from "../components/Card";
import { useState } from "react";
import ProjectDetailModal from "../components/ProjectDetailModal";
import type { Project } from "../types/Project";

type ProjectKey = "pets" | "students" | "timely" | null;

function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectKey>(null);

  const projects: Record<NonNullable<ProjectKey>, Project> = {
    pets: {
      id: "pets",
      image: "/pets.png",
      description:
        "A pet adoption web application that allows users to browse pets, view details, and submit adoption requests, with role-based admin access.",
      techStack: ["SvelteKit", "TypeScript", "JWT", "Prisma"],
      githubURL: "https://github.com/Vasuuu641/Pets",
      title: "Pet Adoption App", // optional, used in modal
      overview: "A comprehensive pet adoption platform",
      design: "Modern and user-friendly interface",
      development: "Full-stack development with authentication",
      challenges: "Implementing role-based access control",
    },
    students: {
      id: "students",
      image: "/students.png",
      description:
        "A student–alumni networking platform aimed at strengthening connections through profiles, mentorship opportunities, and community engagement.",
      techStack: ["React", "TypeScript", "Node.js", "MySQL"],
      githubURL: "https://github.com/Vasuuu641/Student_Alumni_Network",
      title: "Student-Alumni Network",
      overview: "Connect students with alumni mentors",
      design: "Intuitive networking interface",
      development: "Full-stack MERN application",
      challenges: "Managing user profiles and connections",
    },
    timely: {
      id: "timely",
      image: "/timely.png",
      description:
        "A productivity app featuring a gamified Pomodoro timer, task management, and daily reviews to help users build consistent focus habits.",
      techStack: ["NestJS", "Prisma", "MySQL", "Docker"],
      githubURL: "https://github.com/Vasuuu641/Timely_Public",
      title: "Timely Productivity App",
      overview: "Gamified productivity with Pomodoro timer",
      design: "Engaging and motivating UI",
      development: "Backend with NestJS and Docker containerization",
      challenges: "Implementing gamification mechanics",
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-start items-center px-6 md:px-16 lg:px-32 pt-24 bg-[hsl(var(--bg-dark-2))] text-[hsl(var(--foreground))]"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Featured Projects
      </h1>

      <h4 className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
        Here are some of my recent works showcasing my skills in full-stack
        development
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        <ProjectCard project={projects.pets} onView={() => setActiveProject("pets")} />
        <ProjectCard project={projects.students} onView={() => setActiveProject("students")} />
        <ProjectCard project={projects.timely} onView={() => setActiveProject("timely")} />
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectDetailModal
          project={projects[activeProject]}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
