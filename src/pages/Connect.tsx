import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ConCard from "../components/ConCard";


function Connect()
{
    return (
        <section className="Connect" id="connect">
            
            < Navbar />
            <h1>Let's Connect</h1>

            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

            <ConCard
            image="Image placeholder"
            name="Email"
            info="vasundhararavi641@gmail.com"
            />

            <ConCard
            image="Image placeholder"
            name="LinkedIn"
            info="linkedin.com/in/vasundhararavi"
            />
            
            <ConCard
            image="Image placeholder"
            name="GitHub"
            info="github.com/vasundhararavi"
            />

            <Button text="Get in touch"/>
            </section>
    )

}

export default Connect;