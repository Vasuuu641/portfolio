type ButtonProps = {
    text: string;
}

export default function Button(props: ButtonProps) {
    return(
        <button className="Primary Button">{props.text}</button>
    )
}

