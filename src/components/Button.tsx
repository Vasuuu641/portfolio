type ButtonProps = {
  text: string;
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
};

export default function Button({
  text,
  variant = "primary",
  icon,
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center gap-3
        px-10 py-5 rounded-full
        font-semibold text-lg md:text-xl
        transition-all duration-300
        ${
          variant === "primary"
            ? "bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent-hover))] hover:-translate-y-1 hover:shadow-lg hover:shadow-[hsl(var(--accent)/0.4)]"
            : "border-2 border-[hsl(var(--accent))] text-white bg-transparent hover:bg-[hsl(var(--accent))] hover:-translate-y-1 hover:shadow-lg hover:shadow-[hsl(var(--accent)/0.4)]"
        }
      `}
    >
      {text}
      {icon}
    </button>
  );
}
