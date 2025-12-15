
import Button from "../components/Button";
import { ArrowDown, Download } from "lucide-react";

function Home()
{
    return (
        
        <section id="home"
         className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 bg-[hsl(var(--bg-dark-2))] text-[hsl(var(--foreground))]"
         >

            <p className="text-base md:text-lg lg:text-xl
                          px-6 py-2
                          rounded-full
                          border-2 border-[hsl(var(--accent))]
                          bg-[hsl(var(--accent)/0.2)]
                          inline-block
                          mb-12">
                Available for new opportunities
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-6xl font-extrabold mb-6 leading-tight text-center">
                Hi, I&apos;m{" "}
                  <span className="text-[hsl(var(--accent))]">Vasundhara</span>
                  <br />
                  <span className="block text-[hsl(var(--accent))]">
                  Ravikumar
                  </span>
            </h1>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
                Aspiring Software Engineer
            </h2>

            <p className="max-w-3xl text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed text-center">
                Passionate software engineer with expertise 
            in building scalable web applications and solving complex problems. I love 
            creating efficient, user-friendly solutions that make a difference.
            </p>

           <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
           <a href = "#projects">
            <Button 
            text="View My Projects" 
            icon = {<ArrowDown size = {22} />}
            />
           </a>

           <a href = "/Vasundhara_Resume.pdf" download>
            <Button 
            text="Download my Resume"
            variant = "outline"
            icon = {<Download size = {22} />}
            />
           </a>
           </div>
        </section>
    )

}

export default Home;