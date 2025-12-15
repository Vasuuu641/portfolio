import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  image: string;
  description: string;
  techStack: string[];
  projectURL: string;
  githubURL: string;
};

export default function ProjectCard({
  image,
  description,
  techStack,
  projectURL,
  githubURL,
}: ProjectCardProps) {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-[hsl(var(--bg-dark-1))] shadow-lg transition-transform duration-300 hover:-translate-y-2">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt="Project preview"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay icons */}
        <div className="absolute bottom-3 left-3 flex gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {projectURL && (
            <a
              href={projectURL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"
            >
              <ExternalLink size={16} />
            </a>
          )}

          <a
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-4 text-sm text-[hsl(var(--foreground))]/80">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[hsl(var(--accent))]/40 px-2 py-1 text-xs text-[hsl(var(--accent))]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
