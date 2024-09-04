'use client';
import Radio from '@/components/common/Input/Radio';
import { TabMenuWide } from '@/components/common/TabMenu';
import { NavBottom } from '@/components/layout';
import MypageHeader from '@/components/mypage/MypageHeader';
import ThemeSelector from '@/components/mypage/ThemeSelector';
import React, { useState } from 'react';
const Mypage = () => {
    const tabs = [
        { id: 0, label: '게시한 플랜 00개' },
        { id: 1, label: '저장한 플랜 00개' },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (id: number) => {
        setActiveTab(id);
    };
    return (
        <>
            <MypageHeader />
            <div className="flex items-center px-5 pt-5">
                <div className="w-1/5 border dark:border-gray-400 rounded-xl bg-white dark:bg-gray-700 me-4 overflow-hidden">
                    <div className="aspect-w-1 aspect-h-1"></div>
                </div>
                <div className="text-start">
                    <p className="mb-0.5">{'유저닉네임'}</p>
                    <p className="text-sm">
                        <button className="text-gray-500 dark:text-gray-400  me-5">
                            {'팔로워'}
                            <span className="text-black dark:text-white ms-1">000</span>
                        </button>
                        <button className="text-gray-500 dark:text-gray-400  me-5">
                            {'팔로잉'}
                            <span className="text-black dark:text-white ms-1">000</span>
                        </button>
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3 mt-4 px-6 mb-10">
                <p className="line-clamp-2 text-start dark:text-gray-200 text-base">
                    파워 J의 여행 일정을 공유합니다. 산이나 바다 자연과 함께하는 여행
                </p>
            </div>
            <TabMenuWide tabs={tabs} initialTabId={0} onTabChange={handleTabChange} />
            <ThemeSelector />
            <NavBottom />
        </>
    );
};

export default Mypage;
