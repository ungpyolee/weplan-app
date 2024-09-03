import PlanListHeader from '@/components/common/plan-list/PlanListHeader';
import PlanCard from '@/components/home/PlanCard';
import { NavBottom } from '@/components/layout';
import React from 'react';

const PlanList = () => {
    return (
        <>
            <div className="px-6">
                <PlanListHeader />
            </div>
            <div className="flex flex-col text-center pb-20 px-5 gap-5">
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />
            </div>
            <NavBottom />
        </>
    );
};

export default PlanList;
