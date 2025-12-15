

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[hsl(var(--background)/0.6)] backdrop-blur-md text-[hsl(var(--foreground))]">
            <div className="max-w-7xl mx-auto flex justify-center gap-12 px-6 md:px-16 py-4 font-medium">
           <a href="#about" className = "hover:text-[hsl(var(--accent))] transition-colors">
            About
           </a>
           <a href="#projects" className = "hover:text-[hsl(var(--accent))] transition-colors">
            Projects
            </a>
           <a href="#connect" className="hover:text-[hsl(var(--accent))] transition-colors">
            Connect
            </a>
            </div>
        </nav>
    )
}