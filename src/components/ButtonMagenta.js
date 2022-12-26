export default function Button(props) {
    return (
        <a
            href="/"
            className="bg-magenta text-white text-center text-sm inline-block py-4 w-full rounded-md"
        >
            {props.buttonText}
        </a>
    );
}
