import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../types/Project";

type ProjectCardProps = {
  project: Project;
  onView: (project: Project) => void;
};

export default function ProjectCard({ project, onView }: ProjectCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all cursor-pointer">
      {/* Image section */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {/* GitHub */}
          <a
            href={project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5 text-white" />
          </a>

          {/* View */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onView(project);
            }}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Info section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">
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
