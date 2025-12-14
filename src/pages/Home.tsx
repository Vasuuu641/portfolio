import Navbar from "../components/Navbar";
import Button from "../components/Button";

function Home()
{
    return (
        
        <section className="Home" id="home">

            < Navbar />

            <p>Available for new opportunities</p>

            <h1>Hi, I'm Vasundhara Ravikumar</h1>
            <h2>Aspiring Software Engineer</h2>
            <p>Passionate software engineer with expertise 
            in building scalable web applications and solving complex problems. I love 
            creating efficient, user-friendly solutions that make a difference.</p>

            < Button text="View My Projects"/>
            <Button text="Download my Resume"/>
        </section>
    )

}

export default Home;