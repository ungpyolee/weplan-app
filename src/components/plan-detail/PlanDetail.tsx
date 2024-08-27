'use client';
import { useState } from 'react';
import TabMenu from '../common/TabMenu/TabMenu';
import { IconBookmark, IconBookmarkL, IconCall, IconCoin, IconPin } from '../Icons';
import { BookmarkBtn, ButtonDefault } from '../common/Button';

type TabContent = {
    id: number;
    starttime: string;
    endtime: string;
    description: string;
    expense: number;
    departure?: string;
    destination: string;
    category: string;
};

const tabContents: TabContent[] = [
    {
        id: 0,
        starttime: '09:00',
        endtime: '10:00',
        description: 'This is the first content for Tab 1.',
        expense: 100,
        departure: '위치정보',
        destination: '위치정보',
        category: '대중교통',
    },
    {
        id: 0,
        starttime: '10:00',
        endtime: '11:00',
        description: 'This is the second content for Tab 1.',
        expense: 150,
        departure: '위치정보',
        destination: '위치정보',
        category: '대중교통',
    },
    {
        id: 1,
        starttime: '10:00',
        endtime: '11:00',
        description: 'This is the content for Tab 2.',
        expense: 200,
        departure: '위치정보',
        destination: '위치정보',
        category: '대중교통',
    },
    {
        id: 2,
        starttime: '11:00',
        endtime: '12:00',
        description: 'This is the content for Tab 3.',
        expense: 300,
        departure: '위치정보',
        destination: '위치정보',
        category: '대중교통',
    },
];

const PlanDetail = () => {
    const tabs = [
        { id: 0, label: '1일차' },
        { id: 1, label: '2일차' },
        { id: 2, label: '3일차' },
        { id: 3, label: '4일차' },
        { id: 4, label: '5일차' },
        { id: 5, label: '6일차' },
        { id: 6, label: '7일차' },
    ];

    const tabContents = [
        {
            id: 0,
            starttime: '09:00',
            endtime: '10:00',
            description: '서울에서 강릉 엄지네 포장마차',
            expense: 22300,
            departure: '서울 광진구 강변역로 50 동서울종합터미널',
            destination: '강원 강릉시 하슬라로 15 고속버스터미널',
            category: '대중교통',
        },
        {
            id: 0,
            starttime: '10:00',
            endtime: '11:00',
            description: '엄지네 포장마차 꼬막무침 비빔밥과 육사시미',
            expense: 67000,
            destination: '강원 강릉시 경강로2255번길 21',
            category: '대중교통',
        },
        {
            id: 1,
            starttime: '10:00',
            endtime: '11:00',
            description: 'This is the content for Tab 2.',
            expense: 200,
            departure: '위치정보',
            destination: '위치정보',
            category: '대중교통',
        },
        {
            id: 2,
            starttime: '11:00',
            endtime: '12:00',
            description: 'This is the content for Tab 3.',
            expense: 300,
            departure: '위치정보',
            destination: '위치정보',
            category: '대중교통',
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (id: number) => {
        setActiveTab(id);
    };

    const activeContents = tabContents.filter((content) => content.id === activeTab);

    const calculateTotalExpenseForId = (id: number): number => {
        return tabContents
            .filter((content) => content.id === id)
            .reduce((total, content) => total + content.expense, 0);
    };

    const totalExpense = calculateTotalExpenseForId(activeTab);

    return (
        <div>
            <TabMenu tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            <div className="pt-10  bg-gray-900">
                {activeContents.length > 0 ? (
                    activeContents.map((content, index) => (
                        <div key={index} className="flex mb-8 px-6 ">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 me-3 mt-[9px]"></div>
                            <div>
                                <div className="flex items-center">
                                    {content.starttime} ~ {content.endtime}
                                    <span className="ms-2 px-3 py-0.5 text-sm rounded-full bg-literal-green-dark">
                                        {content.category}
                                    </span>
                                </div>
                                <h2 className="mt-2">{content.description}</h2>

                                {content.departure ? (
                                    <div className="text-sm text-gray-300 my-2 flex ">
                                        <div className="w-4 me-2 flex flex-col pt-1 items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mb-1"></div>
                                            <div className="w-1 h-1 rounded-full bg-gray-400 mb-1"></div>
                                            <div className="w-1 h-1 rounded-full bg-gray-400 mb-1"></div>
                                            <IconPin className="h-4 fill-gray-400" />
                                        </div>
                                        <div>
                                            <p className="mb-1">출발 : {content.departure}</p>
                                            <p>도착 : {content.destination}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-sm text-gray-300 my-2 flex items-center ">
                                        <div className="w-4 me-2 flex justify-center">
                                            <IconPin className="h-4 fill-gray-400" />
                                        </div>
                                        <p>도착 : {content.destination}</p>
                                    </div>
                                )}

                                <div className="flex items-center text-literal-gold-light text-sm">
                                    <IconCoin className="fill-literal-gold-light h-4 me-2" />
                                    {content.expense} 원
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="px-6 mb-10">No content available for this tab.</p>
                )}
                <div className="border-t border-dashed border-gray-700 p-5">
                    <div className="px-1">
                        <p className="font-semibold mb-2">{activeTab + 1}일차 경비 </p>
                        <div className="flex items-center text-literal-gold-light">
                            <IconCoin className="fill-literal-gold-light h-4 me-2" />
                            {totalExpense} 원
                        </div>
                    </div>
                    <p className="font-semibold mt-6 mb-2 ps-1">방문 정보 </p>
                    <div className="flex gap-4">
                        <div className="w-1/4">
                            <div className=" aspect-w-1 aspect-h-1 bg-gray-700 rounded-xl"></div>
                        </div>
                        <div className="flex flex-col justify-center gap-0.5">
                            <div className="flex mb-0.5">
                                <p>엄지네포장마차 본점</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-300">
                                <div className="w-3 h-3 flex justify-center items-center">
                                    <IconPin className="h-full fill-gray-400" />
                                </div>
                                <p className="text-sm line-clamp-1">강원 강릉시 경강로2255번길 21</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-300 ">
                                <div className="w-3 h-3 flex justify-center items-center ">
                                    <IconCall className="w-full fill-gray-400" />
                                </div>
                                <p className="text-sm line-clamp-1">000 0000 0000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed z-10 bottom-0 w-full max-w-[600px] bg-black border-t border-gray-800 overflow-hidden">
                <TabMenu tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="flex justify-between px-5 pb-3">
                    <ButtonDefault value="여정 기록하기" size="sm" color="primary" />
                    <BookmarkBtn />
                </div>
            </div>
        </div>
    );
};

export default PlanDetail;
