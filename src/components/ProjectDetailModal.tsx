import { X } from "lucide-react";
import { useState } from "react";
import type { Project } from "../types/Project";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
  isOpen?: boolean;
};

const tabs = ["overview", "design", "development", "challenges"] as const;

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("overview");

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-neutral-900 w-full max-w-4xl rounded-xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          <X />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>

        {/* Nav */}
        <nav className="flex gap-6 border-b border-neutral-700 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize ${
                activeTab === tab
                  ? "text-white border-b-2 border-white"
                  : "text-neutral-400"
              }`}
            >
              {tab}
            </button>
          ))}
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
