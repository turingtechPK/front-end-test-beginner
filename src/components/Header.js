export default function Header() {
    return (
        <header className="flex flex-col items-center text-center bg-magenta">
            <div className="pt-[38px] pb-10 space-y-2.5">
                <h1 className="text-[28px] font-bold text-white">
                    Grow better with the right plan.
                </h1>
                <p className="text-sm text-white">
                    Pay for what you need (when you need it).
                </p>
            </div>
            <div className="hidden lg:block w-full">
                <div className="inline-flex bg-white">
                    <a
                        href="/"
                        className="w-[280px] h-[68px] flex items-center justify-center"
                    >
                        Products & Plans
                    </a>
                    <a
                        href="/"
                        className="w-[280px] h-[68px] flex items-center justify-center bg-grey1 border border-border"
                    >
                        Bundles
                    </a>
                </div>
                <div className="bg-white border-b border-black">
                    <div className="flex bg-white max-w-[1080px] mx-auto">
                        <a
                            href="/"
                            className="flex-1 h-[68px] flex items-center justify-center"
                        >
                            Free Tools
                        </a>
                        <a
                            href="/"
                            className="flex-1 h-[68px] flex items-center justify-center"
                        >
                            Marketing
                        </a>
                        <a
                            href="/"
                            className="flex-1 h-[68px] flex items-center justify-center"
                        >
                            CRM & Sales
                        </a>
                        <a
                            href="/"
                            className="flex-1 h-[68px] flex items-center justify-center bg-grey2 border-border2 border-b-4"
                        >
                            Customer Service
                        </a>
                        <a
                            href="/"
                            className="space-x-1 flex-1 h-[68px] flex items-center justify-center"
                        >
                            <span>CMS</span>
                            <span className="text-[10px] bg-green px-[10px] py-1">
                                New
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-8 w-full py-[22px] lg:hidden">
                <div className="relative flex justify-center items-center">
                    <div className="space-y-2.5">
                        <p className="text-xs text-white">Product & Plans</p>
                        <p className="text-[22px] text-white">
                            Customer Service
                        </p>
                    </div>
                    <img
                        src={`${require('../images/downward-arrow-white.png')}`}
                        alt="dropdown for plans"
                        className="absolute right-0"
                    />
                </div>
            </div>
        </header>
    );
}
