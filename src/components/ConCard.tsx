import { IconType } from "react-icons";

type ConnectCardProps = {
  icon: IconType;
  name: string;
  info: string;
  href?: string;
};

export default function ConCard({ icon: Icon, name, info, href }: ConnectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex flex-col items-center justify-center
        w-80 h-80           /* bigger square size */
        p-8
        rounded-3xl
        bg-[hsl(var(--bg-dark-2))]
        border border-[hsl(var(--accent)/0.3)]
        hover:border-[hsl(var(--accent))]
        shadow-2xl shadow-[hsl(var(--accent)/0.2)]
        transition-all duration-300
        hover:-translate-y-3
      "
    >
      {/* Icon */}
      <div className="text-[hsl(var(--accent))] text-7xl group-hover:scale-110 transition-transform mb-6">
        {Icon({ size: 64 })}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center text-center">
        <span className="text-2xl font-semibold mb-2">{name}</span>
        <span className="text-lg text-purple-200">{info}</span>
      </div>
    </a>
  );
}
