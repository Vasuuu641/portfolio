import Button from "../components/Button";
import ConCard from "../components/ConCard";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Connect() {
  return (
    <section
      id="connect"
      className="min-h-screen flex flex-col justify-start items-center px-6 md:px-16 lg:px-32 pt-40 py-16 bg-[hsl(var(--bg-dark-1))] text-[hsl(var(--foreground))]"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-12">
        Let's Connect
      </h1>

      <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>

      {/* Cards container */}
     <div className="flex flex-wrap justify-center gap-12">
  <ConCard 
  icon={FaEnvelope} 
  name="Email" 
  info="vasundhararavi641@gmail.com" 
  copyText = "vasundhararavi641@gmail.com" 
  />

  <ConCard 
  icon={FaLinkedin} 
  name="LinkedIn" 
  info="linkedin.com/in/vasundhararavi" 
  href = "https://www.linkedin.com/in/vasundhararavikumar/" 
  />
  <ConCard 
  icon={FaGithub} 
  name="GitHub" 
  info="github.com/Vasuuu641" 
  href = "https://github.com/Vasuuu641" 
  />
</div>

      <div className="mt-12">
        <Button text="Get in touch" />
      </div>
    </section>
  );
}

export default Connect;
