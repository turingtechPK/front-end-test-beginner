export default function FooterListItemForSmallScreens(props) {
    return (
        <li className="flex justify-between items-center px-4 pt-4 pb-2 border-b border-b-border3">
            <h3 className="text-lg font-bold text-white">{props.title}</h3>
            <img
                src={require('../images/right-arrow-white.png')}
                alt="right arrow icon"
            />
        </li>
    );
}
