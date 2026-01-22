import ProjectCard from "../components/Card";
import { useState } from "react";
import ProjectDetailModal from "../components/ProjectDetailModal";
import type { Project } from "../types/Project";

type ProjectKey = "students" | "timely" | null;

function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectKey>(null);

  const projects: Record<NonNullable<ProjectKey>, Project> = {
    students: {
      id: "students",
      image: "/students.png",
      description:
        "A student–alumni networking platform aimed at strengthening connections through profiles, mentorship opportunities, and community engagement.",
      techStack: ["React", "TypeScript", "Node.js", "MySQL"],
      githubURL: "https://github.com/Vasuuu641/Student_Alumni_Network",
      title: "Student-Alumni Network",
      overview: {
        title: "About this project",
        description:
          "The Student-Alumni Network is a web and mobile application designed to bridge the gap between current students and alumni. The platform allows users to create detailed profiles, connect with mentors, and engage in community discussions.",
        stats: [
          { label: "Users", value: "500+" },
          { label: "Profiles", value: "300+" },
          { label: "Mentorships", value: "150+" },
        ],
        timeline: "January 2024 – May 2024",
        role: "Full-stack Developer",
        liveDemoURL: "https://example.com",
      },
      design: "Intuitive networking interface",
      development: "Full-stack MERN application",
      challenges: "Managing user profiles and connections",
    },
    timely: {
      id: "timely",
      title: "Timely Productivity App",
      image: "/timely.png",
      description:
        "A productivity app featuring a gamified Pomodoro timer, task management, and daily reviews to help users build consistent focus habits.",
      techStack: ["NestJS", "Prisma", "MySQL", "Docker"],
      githubURL: "https://github.com/Vasuuu641/Timely_Public",
      
      overview: {
        title: "About this project",
        description:"Timely is an app I built to make managing tasks and deadlines less stressful. As a student, I often found myself juggling assignments, projects, and personal goals, and it was easy for things to slip through the cracks. Timely helps organize tasks by due date, highlights what’s overdue, and shows progress in a simple, visual way. It’s designed to be intuitive, so you can quickly add, edit, or track your work without getting bogged down in complicated tools. The idea is to give students a clear overview of their tasks, stay on top of deadlines, and spend more time actually getting things done instead of worrying about staying organized.",
        stats: [
        { label: "Load Time", value: "<3s" },
        { label: "Components", value: "20+" },
        { label: "Endpoints", value: "10+" },
        ],
        timeline: "June 2025 – Present",
        role: "Full-stack Developer",
        liveDemoURL: "https://example.com",
        },

        design: "Engaging and motivating UI",
        development: "Backend with NestJS and Docker containerization",
        challenges: "Implementing gamification mechanics",
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[hsl(var(--bg-dark-2))] text-[hsl(var(--foreground))]"
    >
      {/* Content wrapper */}
      <div
        className={`transition-all duration-300 ${
          activeProject ? "blur-sm brightness-75 scale-[0.99]" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-32">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured Projects
            </h1>

            <p className="mt-4 text-base md:text-lg text-[hsl(var(--muted))] max-w-2xl mx-auto">
              Selected work focused on full-stack systems, backend architecture,
              and practical product design.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              project={projects.students}
              onView={() => setActiveProject("students")}
            />
            <ProjectCard
             project={projects.timely}
              onView={() => setActiveProject("timely")}
            />
          </div>
        </div>
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
