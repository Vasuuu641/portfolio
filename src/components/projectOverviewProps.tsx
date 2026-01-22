import { Github, ExternalLink } from "lucide-react";

type StatCard = {
  label: string;
  value: string;
};

type ProjectOverviewProps = {
  title: string;
  description: string;
  stats: StatCard[]; // Load time, Components, Endpoints
  timeline: string;
  role: string;
  liveDemoURL?: string;
  githubURL?: string;
};

export default function ProjectOverview({
  title,
  description,
  stats,
  timeline,
  role,
  liveDemoURL,
  githubURL,
}: ProjectOverviewProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white">{title}</h2>

      {/* Description */}
      <p className="text-neutral-300">{description}</p>

      {/* Stats cards */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-4 bg-[hsl(var(--bg-dark-1))] rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-lg transition"
          >
            <span className="text-neutral-400 text-sm">{stat.label}</span>
            <span className="text-white text-xl font-semibold">{stat.value}</span>
          </div>
        ))}
      </div>
      

      {/* Timeline & Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-[hsl(var(--bg-dark-1))] rounded-xl shadow-md hover:shadow-lg transition">
          <span className="text-neutral-400 text-sm">Timeline</span>
          <p className="text-white mt-1">{timeline}</p>
        </div>
        <div className="p-4 bg-[hsl(var(--bg-dark-1))] rounded-xl shadow-md hover:shadow-lg transition">
          <span className="text-neutral-400 text-sm">My Role</span>
          <p className="text-white mt-1">{role}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-700 mt-4 mb-4" />

      {/* Buttons */}
      <div className="flex gap-4">
        {liveDemoURL && (
          <a
            href={liveDemoURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
        )}

        {githubURL && (
          <a
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            <Github className="w-5 h-5" />
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
