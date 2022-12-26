import footerListItems from '../footerListItemsData';
import FooterListItem from './FooterListItem';
import FooterListItemForSmallScreens from './FooterListItemForSmallScreens';
import MarketingLinks from './MarketingLinks';
import appStoreIcon from '../images/appstore-icon.png';
import googlePlayIcon from '../images/googleplay-icon.png';
import logoIcon from '../images/hubspot-icon.png';

export default function FooterContainer() {
    const footerListItemsElementsForLargeScreens = footerListItems.map(
        ({ title, linksUnder }) => (
            <FooterListItem title={title} linksUnder={linksUnder} />
        )
    );
    const footerListItemsElementsForSmallScreens = footerListItems.map(
        ({ title }) => <FooterListItemForSmallScreens title={title} />
    );
    return (
        <footer className="text-border bg-magenta">
            <div className="max-w-[1112px] mx-auto pb-16 space-y-8 md:pt-20 md:pb-24 md:px-4">
                <ul className="mdmax:hidden grid grid-rows-[25%_min-content] grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-8">
                    {footerListItemsElementsForLargeScreens}
                </ul>
                <ul className="md:hidden">
                    {footerListItemsElementsForSmallScreens}
                </ul>
                <div className="flex flex-col items-center gap-4">
                    <MarketingLinks />
                    <ul className="flex gap-3 pb-4 lg:hidden">
                        {[appStoreIcon, googlePlayIcon].map((icon) => (
                            <li>
                                <a href="/">
                                    <img src={icon} alt="icon" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="/">
                        <img src={logoIcon} alt="logo" />
                    </a>
                    <p className="text-xs">Copyright © 2021 HubSpot, Inc.</p>
                    <ul className="flex divide-x divide-border3">
                        {['Legal Stuff', 'Privacy Policy'].map((item) => (
                            <li className="px-4 text-sm underline">
                                <a href="/">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
