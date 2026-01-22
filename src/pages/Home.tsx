import Button from "../components/Button";
import { ArrowDown, Download } from "lucide-react";

function Home() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        px-6 md:px-16 lg:px-32
        bg-[hsl(var(--bg-dark-2))]
        text-[hsl(var(--foreground))]
      "
    >
      {/* Centered content column */}
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Context pill */}
        <p
          className="
            text-sm md:text-base
            px-4 py-1.5
            inline-block
            rounded-full
            border border-[hsl(var(--accent))]
            text-[hsl(var(--accent))]
            mb-8
          "
        >
          Focused on backend-heavy full-stack projects
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="text-[hsl(var(--accent))]">Vasundhara</span>{" "}
          Ravikumar
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Backend-focused Full-Stack Software Engineer
        </h2>

        {/* Description */}
        <p
          className="
            max-w-3xl
            text-base md:text-lg
            text-[hsl(var(--foreground-muted))]
            leading-relaxed
            mb-10
          "
        >
          I build backend-heavy web applications using NestJS, Prisma, and SQL
          databases. I focus on clean APIs, data integrity, and systems that hold
          up under real usage.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects">
            <Button
              text="View selected projects"
              icon={<ArrowDown size={20} />}
            />
          </a>

          <a href="/Vasundhara_Resume.pdf" download>
            <Button
              text="Download resume (PDF)"
              variant="outline"
              icon={<Download size={20} />}
            />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;
