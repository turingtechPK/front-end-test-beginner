export default function HubspotForStarters() {
    return (
        <div className="px-4 max-w-7xl mx-auto">
            <div className="border border-border p-6 text-sm flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                <div className="space-y-4 basis-2/3">
                    <h3 className="text-base font-bold">
                        HubSpot for Startups
                    </h3>
                    <p>
                        If you work for a startup, you might be eligible for up
                        to 90% off through the HubSpot for Startups Program.
                    </p>
                </div>
                <a
                    href="/"
                    className="bg-grey1 border border-border rounded-sm py-[10px] px-8 inline-block text-center"
                >
                    Learn more
                </a>
            </div>
        </div>
    );
}
