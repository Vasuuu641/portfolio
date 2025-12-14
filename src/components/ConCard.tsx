type ConnectCardProps = {
    image: string;
    name: string;
    info : string;
}

export default function ConCard(props : ConnectCardProps)
{
    return (
        <div className="ConCard">
            <div className="Image">{props.image}</div>
            <div className="Name">{props.name}</div>
            <div className="Info">{props.info}</div>
        </div>
    )
}