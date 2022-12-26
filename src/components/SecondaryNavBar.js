export default function SecondaryNavbar() {
    return (
        <nav className="hidden px-4 py-5 max-w-[1080px] mx-auto md:px-8 md:block">
            <ul className="flex justify-between">
                <li className="flex items-end">
                    <ul className="flex gap-9 text-lg">
                        <li>
                            <a href="/" className="flex gap-4 items-center">
                                <span>Software</span>
                                <img
                                    src={`${require('../images/downward-arrow.png')}`}
                                    alt="dropdown for Software"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-4 items-center">
                                <span>Resources</span>
                                <img
                                    src={`${require('../images/downward-arrow.png')}`}
                                    alt="dropdown for Resources"
                                />
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a
                        href="/"
                        className="block text-sm py-[14px] px-9 bg-magenta text-white"
                    >
                        Get Started
                    </a>
                </li>
            </ul>
        </nav>
    );
}
