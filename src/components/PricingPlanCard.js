import ButtonMagenta from './ButtonMagenta';
import ListItemsWithTickArrow from './ListItemsWithTickArrow';
export default function PricingPlanCard({ planData }) {
    return (
        <div className="relative space-y-4 border border-border rounded-sm pt-8 pb-24 px-5 xl:px-9 flex-1">
            <div className="flex justify-between items-center mdminmax:justify-evenly">
                <div className=" gap-2 items-center">
                    <img
                        src={planData.image}
                        alt={`${planData.title} plan icon`}
                        className="mdminmax:mx-auto"
                    />
                    <h2 className="text-2xl">{planData.title}</h2>
                </div>
                <div className="text-right text-xs mdminmax:text-center">
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
            </div>
            <p className="text-xs mdminmax:text-center">
                Starts at {planData.paidUsers} paid users
            </p>
            <ButtonMagenta
                buttonText={
                    planData.title === 'Starter' ? 'Buy Now' : 'Talk to Sales'
                }
            />
            <div className="space-y-4 hidden lg:block">
                <p className="text-sm">
                    {planData.title === 'Starter'
                        ? 'Free tools'
                        : planData.title === 'Professional'
                        ? 'Starter'
                        : 'Professional'}{' '}
                    plus
                </p>
                <ul className="space-y-9">
                    {planData.tools.map(({ heading, list }) => (
                        <li className="space-y-4">
                            <h3 className="text-xs text-skyBlue font-bold uppercase">
                                {heading}
                            </h3>
                            <ul className="space-y-3">
                                <ListItemsWithTickArrow list={list} />
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <a
                href="/"
                className="absolute bottom-0 left-0 py-4 w-full text-center text-skyBlue border-t border-border"
            >
                See all features
            </a>
        </div>
    );
}
