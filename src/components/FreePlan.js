import ListItemsWithTickArrow from './ListItemsWithTickArrow';

export default function FreePlan() {
    const freePlanFeatures = [
        'Ticketing',
        'Live chat',
        'Conversations inbox',
        'Team email',
        'Tickets closed reports',
    ];
    return (
        <div className="px-4 max-w-7xl mx-auto">
            <div className="relative border border-border p-6 text-sm pb-20 space-y-6 lg:pb-6">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                    <div className="space-y-4 basis-2/3">
                        <h3 className="text-2xl">Free</h3>
                        <p>
                            Connect with and help your customers with customer
                            service tools you can use for free.
                        </p>
                    </div>
                    <a
                        href="/"
                        className="text-magenta border border-magenta rounded-sm py-[10px] px-4 inline-block text-center"
                    >
                        Get started free
                    </a>
                </div>
                <div className="lg:flex gap-6 items-center lg:border-t border-border lg:pt-6">
                    <ul className="pt-6 space-y-3 lg:flex lg:gap-6 lg:space-y-0 lg:pt-0">
                        <ListItemsWithTickArrow list={freePlanFeatures} />
                    </ul>
                    <a
                        href="/"
                        className="absolute bottom-0 left-0 py-4 w-full text-center text-skyBlue border-t border-border lg:static lg:border-t-0 lg:w-auto lg:py-0"
                    >
                        See all features
                    </a>
                </div>
            </div>
        </div>
    );
}
