
import Button from "../components/Button";

function About()
{
    return(
        <section className="About" id="about">

            <h1>About Me</h1>
            <p>I’m a Computer Science and Engineering student with a strong interest 
                in building practical, user-focused software. I enjoy working on full-stack 
                projects where I can turn ideas into clean, interactive experiences, and I’m especially drawn to projects 
                that solve real problems or improve everyday workflows. I like learning by building, experimenting with modern 
                frameworks, and gradually refining my code to be more efficient, modular, and scalable. As I grow as a developer, 
                I’m eager to work on software that blends thoughtful design with solid engineering.
            </p>
            
            <h4>Technical Skills</h4>
            <Button text="TypeScript"/>
            <Button text="React"/>
            <Button text="Node.js"/>
            <Button text="JavaScript"/>
            <Button text="MySQL"/>
            <Button text="Python"/>
            <Button text="C"/>
            <Button text="Git"/>
            <Button text="HTML & CSS"/>

        </section>
    )
}

export default About;