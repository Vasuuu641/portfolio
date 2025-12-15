
import Button from "../components/Button";

function Home()
{
    return (
        
        <section id="home"
         className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 text-center md:text-left bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
         >

            <p className="text-sm md:text-base text-gray-400 mb-4">
                Available for new opportunities
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                Hi, I'm Vasundhara Ravikumar
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
                Aspiring Software Engineer
            </h2>

            <p className="max-w-xl text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
                Passionate software engineer with expertise 
            in building scalable web applications and solving complex problems. I love 
            creating efficient, user-friendly solutions that make a difference.
            </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           <a href = "#projects">
            < Button text="View My Projects"/>
           </a>

           <a href = "/Vasundhara_Resume.pdf" download>
            <Button text="Download my Resume"/>
           </a>
           </div>
        </section>
    )

}

export default Home;