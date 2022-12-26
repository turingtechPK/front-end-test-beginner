import Heading from './Heading';
import phoneIconGrey from '../images/phone-icon-grey.png';
import documentIcon from '../images/document-icon.png';
import peopleIcon from '../images/people-icon.png';

export default function CustomerSupport() {
    const customerSupportElements = [
        ['Phone & Email Support', phoneIconGrey, 'phone icon'],
        ['Help Documentation & Training', documentIcon, 'document icon'],
        ['Community Support', peopleIcon, 'people-icon'],
    ].map(([title, imgSrc, alt]) => (
        <div
            key={title}
            className="flex flex-row-reverse justify-end items-center gap-4 sm:flex-col"
        >
            <p className="text-sm font-bold sm:text-base">{title}</p>
            <img src={imgSrc} alt={alt} />
        </div>
    ));
    return (
        <div className="flex items-center gap-7 px-4 max-w-[1112px] mx-auto xl:max-w-[1200px]">
            <img
                src={`${require('../images/people-pictures.png')}`}
                alt="people pictures"
                className="hidden xl:inline-block"
            />
            <div className="sm:text-center">
                <p>Customer Support</p>
                <Heading headingText="HubSpot is more than just software." />
                <p className="text-sm mt-6 mb-[54px]">
                    You don't have to do it alone. HubSpot's award-winning
                    customer support and services teams are here to answer your
                    questions, help you master the inbound methodology, and make
                    sure you're getting the most out of your tools. All that —
                    plus our detailed help documentation, educational resources,
                    and training programs — means you'll never feel left out in
                    the cold.
                </p>
                <div className="flex flex-col gap-6 max-w-3xl mx-auto sm:flex-row sm:flex-grow sm:justify-evenly sm:gap-8">
                    {customerSupportElements}
                </div>
            </div>
        </div>
    );
}
