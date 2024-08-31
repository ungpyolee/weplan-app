'use client';
import { useState } from 'react';

type Tab = {
    id: number;
    label: string;
};

interface TabMenuProps {
    tabs: Tab[];
    initialTabId?: number;
    onTabChange?: (id: number) => void;
}

const TabMenuWide = ({ tabs, initialTabId = 0, onTabChange }: TabMenuProps) => {
    const [activeTab, setActiveTab] = useState(initialTabId);

    const handleTabClick = (id: number) => {
        setActiveTab(id);
        if (onTabChange) {
            onTabChange(id);
        }
    };
    return (
        <div className="flex px-6 dark:bg-black w-full">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`pt-5 pb-2 border-b-2 w-1/2 ${
                        activeTab === tab.id
                            ? 'dark:text-white border-b-2 border-black dark:border-white font-semibold'
                            : 'text-gray-400 dark:border-gray-800'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default TabMenuWide;
