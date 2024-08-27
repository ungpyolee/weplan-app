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

const TabMenu = ({ tabs, initialTabId = 0, onTabChange }: TabMenuProps) => {
    const [activeTab, setActiveTab] = useState(initialTabId);

    const handleTabClick = (id: number) => {
        setActiveTab(id);
        if (onTabChange) {
            onTabChange(id);
        }
    };
    return (
        <div className="flex space-x-6 px-6 bg-black sticky top-0 pt-3">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`py-2 border-b-2 ${
                        activeTab === tab.id
                            ? 'text-white border-b-2 border-white font-semibold'
                            : 'text-gray-400 border-transparent'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default TabMenu;
