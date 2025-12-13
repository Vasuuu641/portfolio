type Props = {
    text: string;
}

export default function Button(props: Props) {
    return(
        <button className="Primary Button">{props.text}</button>
    )
}

