export default function Question(props) {
    return (
        <div className="border border-border flex items-center p-[22px] gap-5">
            <img
                src={`${require('../images/caret-right.png')}`}
                alt="caret right"
            />
            <p className="text-sm font-bold">{props.question}</p>
        </div>
    );
}
