export default function NavBar() {
    return (
        <nav className="text-xs px-4 py-5 max-w-[1080px] mx-auto md:px-8">
            <ul className="hidden md:flex justify-between">
                <li className="flex gap-7">
                    <ul className="flex gap-7">
                        <li>
                            <a
                                href="/"
                                className="flex items-center gap-[0.625rem]"
                            >
                                <img
                                    src={`${require('../images/globe-icon.png')}`}
                                    alt="globe icon"
                                />
                                <span>English</span>
                                <img
                                    src={`${require('../images/downward-arrow.png')}`}
                                    alt="dropdown for language"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="flex items-center gap-[0.625rem]"
                            >
                                <img
                                    src={`${require('../images/contact-icon.png')}`}
                                    alt="contact icon"
                                />
                                <span>Contact Sales</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="flex gap-4 items-center">
                        <li>
                            <img
                                src={`${require('../images/search-icon.png')}`}
                                alt="search"
                            />
                        </li>
                        <li>
                            <a href="/">Login</a>
                        </li>
                        <li>
                            <a href="/">Customer Support</a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="flex gap-[0.625rem] items-center"
                            >
                                <span>About</span>
                                <img
                                    src={`${require('../images/downward-arrow.png')}`}
                                    alt="dropdown for about"
                                />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <img
                src={`${require('../images/burger-menu-icon.png')}`}
                alt="open menu"
                className="h-5 w-10 ml-auto md:hidden"
            />
        </nav>
    );
}
