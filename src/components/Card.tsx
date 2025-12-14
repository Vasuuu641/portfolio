type ProjectCardProps = {
    image: string;
    description: string;
    techStack: string[];
    projectURL : string;
    githubURL: string;
}


export default function ProjectCard(props : ProjectCardProps)
{
    return (
        <div>
            <div className = "Image">{props.image}</div>
            <div className = "Description">{props.description}</div>
            <div className = "TechStack">{props.techStack.join(", ")}</div>
            <div className = "Links">
                <a href={props.projectURL} target="_blank" rel="noopener noreferrer">Live Project</a>
                <a href={props.githubURL} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            
        </div>
      
    )
}
