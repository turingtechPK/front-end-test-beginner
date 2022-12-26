import facebookIcon from '../images/facebook-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import youtubeIcon from '../images/youtube-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import mediumIcon from '../images/medium-icon.png';

export default function MarketingLinks() {
    const marketingIconsElements = [
        facebookIcon,
        instagramIcon,
        youtubeIcon,
        twitterIcon,
        linkedinIcon,
        mediumIcon,
    ].map((icon) => (
        <li>
            <a href="/">
                <img src={icon} alt="icon" />
            </a>
        </li>
    ));
    return <ul className="flex gap-6 pb-4">{marketingIconsElements}</ul>;
}
