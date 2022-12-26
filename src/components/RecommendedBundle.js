import pricingPlansData from '../pricingPlansData';
import Heading from './Heading';
import Button from './ButtonMagenta';
import ListItemsWithTickArrow from './ListItemsWithTickArrow';
import crmIcon from '../images/crm-icon.png';
import marketingIcon from '../images/marketing-icon.png';
import salesIcon from '../images/sales-icon.png';
import serviceIcon from '../images/service-icon.png';

export default function RecommendedBundle() {
    const planData = pricingPlansData[0];
    return (
        <div className="px-4 max-w-7xl mx-auto space-y-8">
            <Heading headingText="Recommended Bundles" />
            <div className="border border-border p-6 text-sm space-y-4">
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
                    <div className="space-y-4 basis-2/3">
                        <h3 className="text-xl font-bold">
                            Starter Growth Suite
                        </h3>
                        <p>
                            Our Growth Suite bundle includes all the marketing,
                            sales, and customer service software your growing
                            business needs — fully integrated and discounted on
                            our standalone prices.{' '}
                            <a href="/" className="text-magenta font-bold">
                                See bundled pricing details here.
                            </a>
                            <img
                                className="inline ml-1"
                                src={`${require('../images/goto-link-icon.png')}`}
                                alt="goto link icon"
                            />
                        </p>
                        <p className="font-bold">Ideal for:</p>
                        <ul className="space-y-3">
                            <ListItemsWithTickArrow
                                list={[
                                    'Capturing and converting, understanding, and engaging your leads',
                                    'Organizing your team, connecting with prospects on their terms, and tracking, iterating, and improving your sales process',
                                    'Organizing and tracking customer communications, maximizing productivity, and measuring efficiency',
                                ]}
                            />
                        </ul>
                    </div>
                    <div className="space-y-4 w-72 mx-auto">
                        <div className="text-center text-xs">
                            <p>
                                Starts at{' '}
                                <span>
                                    <s>${planData.perMonthPriceOld}</s>
                                </span>
                            </p>
                            <p className="text-xl text-green">
                                ${planData.perMonthPriceCurrent}/mo
                            </p>
                            <p>
                                Billed at{' '}
                                <span>
                                    <s>${planData.perMonthPriceOld * 12}</s>
                                </span>{' '}
                                ${planData.perMonthPriceCurrent * 12}/yr
                            </p>
                        </div>
                        <Button buttonText="Buy now" />
                        <a href="/" className="text-skyBlue block text-center">
                            See all features
                        </a>
                    </div>
                </div>
                <div className="font-bold space-y-4">
                    <p>Includes:</p>
                    <ul className="flex flex-col gap-3 lg:flex-row lg:gap-0 lg:divide-x divide-border">
                        {[
                            ['HupSpot CRM', crmIcon],
                            ['Marketing Hub Starter', marketingIcon],
                            ['Sales Hub Starter', salesIcon],
                            ['Service Hub Starter', serviceIcon],
                        ].map(([item, icon]) => (
                            <li className="flex gap-3 items-center lg:px-4 first:pl-0">
                                <img src={icon} alt={`${item} icon`} />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
