
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

                 <div className="flex justify-center md : justify-start">
                 <img
                 src={image}
                 alt="Vasundhara Ravikumar"
                 className="
                 h-full
                 max-h-[650px]   /* limits it so it doesn't get too tall */
                 object-cover
                 rounded-2xl
                 border-2 border-[hsl(var(--accent))]
                 shadow-lg shadow-[hsl(var(--accent)/0.4)]"    
                 />
                 </div>

            <div className="flex flex-col justify-start">
                 <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                    About Me
                 </h1>
                 <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                I’m a Computer Science and Engineering student with a strong interest 
                in building practical, user-focused software. I enjoy working on full-stack 
                projects where I can turn ideas into clean, interactive experiences, and I’m especially drawn to projects 
                that solve real problems or improve everyday workflows. I like learning by building, experimenting with modern 
                frameworks, and gradually refining my code to be more efficient, modular, and scalable. As I grow as a developer, 
                I’m eager to work on software that blends thoughtful design with solid engineering.
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
              <Button key={skill} text={skill} variant="outline" size = "small"/>
              ))}
                 </div>
            </div>
           
        </div>
        </section>
    )
}

export default About;