import React from 'react';
import PlanCard from './PlanCard';

const SnapPlanCard = () => {
    return (
        <div className="overflow-x-auto snap-x snap-mandatory flex scrollbar-hide">
            <div className="flex gap-4">
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />
            </div>
        </div>
    );
};

export default SnapPlanCard;
