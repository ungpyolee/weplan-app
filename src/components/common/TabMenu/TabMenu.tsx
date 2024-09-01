'use client';
import { useState } from 'react';

type Tab = {
    id: number;
    label: string;
};

interface TabMenuProps {
    tabs: Tab[];
    // initialTabId?: number;
    activeTab: number;
    onTabChange: (id: number) => void;
}

const TabMenu = ({ tabs, activeTab, onTabChange }: TabMenuProps) => {
    const handleTabClick = (id: number) => {
        onTabChange(id); // 상태 변경을 외부에서 처리
    };
    return (
        <div className="flex space-x-6 dark:bg-black overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`py-4 whitespace-nowrap snap-end ${
                        activeTab === tab.id
                            ? 'text-primary dark:text-white font-semibold'
                            : 'text-gray-800 dark:text-gray-400 border-transparent'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default TabMenu;
