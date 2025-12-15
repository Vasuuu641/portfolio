import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  variant?: "primary" | "outline"; // filled or border
  size?: "default" | "small";      // homepage vs skill button
  icon?: ReactNode;                // optional icon
};

export default function Button({ text, variant = "primary", size = "default", icon }: ButtonProps) {
  // Base classes
  let baseClasses = "font-medium transition-all duration-300 flex items-center justify-center gap-2";

  // Size
  if (size === "small") {
    baseClasses += " px-6 py-3.5 text-sm rounded-md"; // About page
  } else {
    baseClasses += " px-6 py-3 rounded-full text-lg"; // Homepage: fully rounded
  }

  // Variant
  if (variant === "outline") {
    baseClasses += " border-2 border-[hsl(var(--accent))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent-hover))] hover:-translate-y-1 bg-transparent hover:bg-[hsl(var(--accent)/0.2)]";
  } else {
    baseClasses += " bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent-hover))] hover:-translate-y-1";
  }

  return (
    <button className={baseClasses}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
