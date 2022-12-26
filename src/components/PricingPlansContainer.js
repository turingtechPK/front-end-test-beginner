import pricingPlansData from '../pricingPlansData';
import PricingPlanCard from './PricingPlanCard';
import PlanSelector from './PlanSelector';

export default function PricingPlansContainer() {
    const pricingPlansCards = pricingPlansData.map((planData) => (
        <PricingPlanCard planData={planData} />
    ));
    return (
        <>
            <PlanSelector />
            <div className="lgmax:hidden flex justify-center gap-4 xl:gap-[26px] px-4 max-w-7xl mx-auto">
                {pricingPlansCards}
            </div>
        </>
    );
}
