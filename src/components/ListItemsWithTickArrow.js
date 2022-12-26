import tickIcon from '../images/done-tick.png';
export default function ListItemsWithTickArrow(props) {
    const listItemsElements = props.list.map((item) => (
        <li className="flex items-center gap-3">
            <img src={tickIcon} alt="tick icon" />
            <p className="text-sm">{item}</p>
        </li>
    ));
    return <>{listItemsElements}</>;
}
