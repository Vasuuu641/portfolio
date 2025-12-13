import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="NavBar">
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/projects">Projects</Link>
            <Link to ="/contact">Contact</Link>
        </nav>
    )
}