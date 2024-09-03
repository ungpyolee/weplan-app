'use client';
import React, { useState } from 'react';
import { TabMenu } from '../common/TabMenu';

const PlanListHeader = () => {
    const tabs = [
        { id: 0, label: '추천' },
        { id: 1, label: '팔로잉' },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (id: number) => {
        setActiveTab(id);
    };

    return (
        <>
            <TabMenu tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
        </>
    );
};

export default PlanListHeader;
