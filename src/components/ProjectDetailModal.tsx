import { X } from "lucide-react";
import { useState } from "react";
import type { Project } from "../types/Project";
import { Info, Palette, Code, AlertTriangle } from "lucide-react";


type ProjectModalProps = {
  project: Project;
  onClose: () => void;
  isOpen?: boolean;
};

const tabs = 
[ 
  { key: "overview", label: "Overview", icon: Info },
  { key: "design", label: "Design", icon: Palette },
  { key: "development", label: "Development", icon: Code },
  { key: "challenges", label: "Challenges", icon: AlertTriangle },
] as const;

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] =
  useState<(typeof tabs)[number]["key"]>("overview");


  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="
      w-full max-w-4xl rounded-xl p-6 relative
      bg-gradient-to-b
      from-[hsl(var(--bg-dark-1))]
      to-[hsl(var(--bg-dark-2))]
      border border-[hsl(var(--accent)/0.25)]
      shadow-2xl
      ">

        <div className="relative h-64 rounded-t-xl overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="
          absolute top-6 right-6 z-20
          p-2 rounded-full
        bg-black/40 backdrop-blur-md
        text-white
        hover:bg-black/70
          transition
          "
        >
         <X className="w-5 h-5" />
        </button>

        {/* Background image */}
        <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />


        <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h2 className="text-3xl font-bold text-white">
        {project.title}
        </h2>

        <div className="flex flex-wrap gap-2 mt-3">
      {project.techStack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-sm bg-white/10 text-white rounded-full backdrop-blur"
        >
          {tech}
        </span>
        ))}
      </div>
     </div>
   </div>


        {/* Nav */}
        <nav className="flex gap-6 border-b border-gray-500/40 mb-6">

          {tabs.map(({ key, label, icon: Icon }) => {
          const isActive = activeTab === key;

    return (
      <button
        key={key}
        onClick={() => setActiveTab(key)}
        className={`
          flex items-center gap-2 pb-3 capitalize
          transition-colors
          ${
            isActive
              ? "text-[hsl(var(--accent))] border-b-2 border-[hsl(var(--accent))]"
              : "text-purple-300 hover:text-white"
          }
        `}
      >
        <Icon className="w-4 h-4" />
        {label}
      </button>
    );
  })}
        </nav>

        {/* Content */}
        <div className="text-neutral-300 leading-relaxed">
          {activeTab === "overview" && project.overview}
          {activeTab === "design" && project.design}
          {activeTab === "development" && project.development}
          {activeTab === "challenges" && project.challenges}
        </div>
      </div>
    </div>
  );
}
