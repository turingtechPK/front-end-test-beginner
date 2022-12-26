export default function ServiceHubHeader() {
    return (
        <div className="flex flex-col items-center gap-6 px-4 mt-16">
            <div className="flex gap-4 items-center">
                <img
                    src={`${require('../images/servicehub-icon.png')}`}
                    alt="servicehub icon"
                />
                <p className="text-[32px]">
                    Service Hub<sup className="text-[22px]"> TM</sup>
                </p>
            </div>
            <p className="text-sm text-center">
                Everything you need to deliver service that delights customers
                at scale.{' '}
                <a href="/" className="whitespace-nowrap space-x-2">
                    <span className="text-green">Calculate your price</span>
                    <img
                        src={`${require('../images/previous-arrow-icon.png')}`}
                        alt="go down arrow"
                        className="-rotate-90 inline"
                    />
                </a>
            </p>
        </div>
    );
}
