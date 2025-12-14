
import Button from "../components/Button";

function Home()
{
    return (
        
        <section className="Home" id="home">

            <p>Available for new opportunities</p>

            <h1>Hi, I'm Vasundhara Ravikumar</h1>
            <h2>Aspiring Software Engineer</h2>
            <p>Passionate software engineer with expertise 
            in building scalable web applications and solving complex problems. I love 
            creating efficient, user-friendly solutions that make a difference.</p>

           <a href = "#projects">
            < Button text="View My Projects"/>
           </a>

           <a href = "/Vasundhara_Resume.pdf" download>
            <Button text="Download my Resume"/>
           </a>
        </section>
    )

}

export default Home;