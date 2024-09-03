import React from 'react';

interface Tab {
    id: number;
    label: string;
}

interface TabMenuProps {
    tabs?: Tab[];
    selectedPeriod?: string;
    activeTab: number;
    onTabChange: (id: number) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, selectedPeriod, activeTab, onTabChange }) => {
    let finalTabs: Tab[] = tabs || [];

    if (!tabs && selectedPeriod) {
        const days = parseInt(selectedPeriod.replace('일', ''), 10);
        finalTabs = Array.from({ length: days }, (_, i) => ({
            id: i + 1,
            label: `${i + 1}일차`,
        }));
    }

    return (
        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {finalTabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
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
