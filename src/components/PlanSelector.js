import PricingPlanCard from './PricingPlanCard';
import pricingPlansData from '../pricingPlansData';
import { useEffect, useState } from 'react';

export default function PlanSelector() {
    const [plan, setPlan] = useState('Starter');
    const [planData, setPlanData] = useState(pricingPlansData[0]);

    useEffect(
        () =>
            setPlanData(
                pricingPlansData.find((planItem) => planItem.title === plan)
            ),
        [plan]
    );

    const plansOptions = ['Starter', 'Professional', 'Enterprise'].map(
        (planItem) => (
            <div className="border border-skyBlue border-b-0 flex-1">
                <input
                    type="radio"
                    name="plan"
                    value={planItem}
                    checked={plan === planItem}
                    id={planItem}
                    onChange={(e) => setPlan(e.target.value)}
                    className="peer hidden"
                />
                <label
                    htmlFor={planItem}
                    className="block py-6 text-center peer-checked:bg-grey2 peer-checked:border border-skyBlue"
                >
                    {planItem}
                </label>
            </div>
        )
    );
    console.log(plan);
    return (
        <div className="px-4 max-w-3xl mx-auto space-y-16 lg:hidden">
            <div className="border-b border-skyBlue md:flex">
                {plansOptions}
            </div>
            <PricingPlanCard planData={planData} />
        </div>
    );
}
