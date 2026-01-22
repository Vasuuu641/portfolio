
import Button from "../components/Button";
import image from "../assets/profile.png";

function About()
{
    return(
        <section 
        id="about"
        className="min-h-screen flex items-center px-6 md:px-16 lg:px-32 bg-[hsl(var(--bg-dark-1))] text-[hsl(var(--foreground))]"
        >
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                 <div className="flex justify-center md:justify-start">
                 <img
                 src={image}
                 alt="Vasundhara Ravikumar"
                 className="
                 h-full
                 max-h-[650px]
                 object-cover
                 shadow-sm
                 rounded-xl
                 border border-[hsl(var(--border-default))]"   
                 />
                 </div>

            <div className="flex flex-col justify-start">
                <h1 className="text-4xl md:text-5xl font-bold mb-6"> About </h1>
 
                <p className="text-base md:text-lg text-[hsl(var(--foreground-muted))] leading-relaxed mb-6">
                I’m a Computer Science and Engineering student focused on building practical,
                user-focused software. I enjoy full-stack projects where I can turn ideas into
                clean, functional interfaces backed by reliable systems.
                </p>

                <p className="text-base md:text-lg text-[hsl(var(--foreground-muted))] leading-relaxed mb-8">
                I like learning by building, experimenting with modern tools, and refining my
                code to be more modular, maintainable, and scalable. I’m especially interested
                in projects that solve real problems or improve everyday workflows.
                </p>

                <h4 className="text-2xl font-semibold mb-4">
                    Technical Skills
                </h4>

                <div className="flex flex-wrap gap-3">
                {[
                "TypeScript",
                "React",
                "Node.js",
                "JavaScript",
                "MySQL",
                "Python",
                "C",
                "Git",
                "HTML & CSS",
                 ].map((skill) => (
              <span key={skill} className="px-3 py-1.5 text-sm rounded-md border border-[hsl(var(--border-subtle))] text-[hsl(var(--foreground-muted))]">
                {skill}
              </span>

              ))}
                 </div>
            </div>
           
        </div>
        </section>
    )
}

export default About;