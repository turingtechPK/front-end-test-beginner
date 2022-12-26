export default function FooterListItem(props) {
    const listItems = props.linksUnder.map((item) => (
        <li className="text-sm">
            <a href="/">{item}</a>
        </li>
    ));
    const listClasses =
        props.title === 'Popular Features'
            ? 'flex flex-col flex-wrap col-start-1 col-end-3 row-start-1 row-end-3 border-r border-border pb-20'
            : props.title === 'Partners'
            ? 'col-start-5 col-end-6 row-start-2'
            : '';
    const ulClasses =
        props.title === 'Popular Features'
            ? 'inline-block columns-2 space-y-4 pr-4'
            : 'space-y-4';
    return (
        <li className={`${listClasses} space-y-6`}>
            <h3 className="text-lg font-bold">{props.title}</h3>
            <ul className={`${ulClasses}`}>{listItems}</ul>
        </li>
    );
}
