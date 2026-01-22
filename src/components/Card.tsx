import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../types/Project";

type ProjectCardProps = {
  project: Project;
  onView: (project: Project) => void;
};

export default function ProjectCard({ project, onView }: ProjectCardProps) {
  return (
    <div className="
    group cursor-pointer
    flex flex-col overflow-hidden
    rounded-3xl
    bg-[hsl(var(--bg-dark-2))]
    border border-[hsl(var(--accent)/0.3)]
    hover:border-[hsl(var(--accent))]
    shadow-sm hover:shadow-md shadow-black/50
    transition-all duration-300
    hover:-translate-y-1

    ">
  
      {/* Image section */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

       {/* Hover overlay */}
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
  <div className="absolute bottom-4 left-4 flex gap-3">
    
    {/* On View – primary */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        onView(project);
      }}
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        bg-white text-black
        text-sm font-medium
        hover:bg-neutral-200
        transition
      "
    >
      <ExternalLink className="w-4 h-4" />
      View
    </button>

    {/* GitHub – secondary */}
    <a
      href={project.githubURL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-white
        text-white
        text-sm font-medium
        hover:bg-white/10
        transition
      "
    >
      <Github className="w-4 h-4" />
      GitHub
    </a>

  </div>
</div>
</div>

      {/* Info section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
