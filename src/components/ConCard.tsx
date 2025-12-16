import { IconType } from "react-icons";

type ConnectCardProps = {
  icon: IconType;
  name: string;
  info: string;
  copyText?: string;
  href?: string;
};

export default function ConCard({ icon: Icon, name, info, copyText, href, }: ConnectCardProps) {
  const handleClick = () => {
    if(copyText)
    {
      navigator.clipboard.writeText(copyText);
      alert("Email copied to clipboard!");
    } 
    else if (href) 
    {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

    
  
  
  return (
    <div
      onClick={handleClick}
      className="
        group cursor-pointer
        flex flex-col items-center justify-center
        w-96 h-96
        p-10 rounded-3xl
        bg-[hsl(var(--bg-dark-2))]
        border border-[hsl(var(--accent)/0.3)]
        hover:border-[hsl(var(--accent))]
        hover:scale-[1.03]
        transition-all duration-300
      "
    >
      <div className="text-[hsl(var(--accent))] text-7xl mb-6">
        {Icon({ size: 64 })}
      </div>

      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-lg text-purple-200">{info}</p>
      <span className="mt-4 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition">
        {copyText ? "Click to copy" : "Click to open"}
      </span>
    </div>
  );
}

