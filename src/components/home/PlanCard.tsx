import React from 'react';
import { IconBookmarkL, IconLikeL } from '../Icons';
import Link from 'next/link';

const PlanCard = () => {
    return (
        <Link
            href="/read-plan"
            className="max-w-full min-w-80 rounded-xl border dark:border-gray-800 overflow-hidden text-start"
        >
            <div className="flex flex-col aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700">
                <div className="flex items-end mt-auto px-5 h-10 bg-gradient-to-b from-transparent dark:via-gray-900/50 dark:to-gray-900 via-white/50 to-white">
                    <span className="me-auto text-xs font-semibold ms-1">{'게시자닉네임'}</span>
                </div>
            </div>
            <div className="px-5 pt-4 pb-5 bg-transparent dark:bg-gray-900">
                <div className="flex flex-wrap text-sm gap-1 mb-2">
                    <p className="px-2 py-0.5 border border-gray-500 rounded-full">강원 강릉시</p>
                    <p className="px-2 py-0.5 border border-gray-500 rounded-full">총 경비 250,000원</p>
                    <p className="px-2 py-0.5 border border-gray-500 rounded-full">3일 일정</p>
                </div>
                <p className="line-clamp-2 ms-1">
                    여름하면 동해를 매년 꼭 가는데요. 동해는 방문할 때 마다 넓고 투명한 바다가 속을 뻥뚫어주는
                    기분입니다.
                </p>
                <div className="text-sm ms-1 text-gray-400 mt-1">북마크 {'000'}</div>
            </div>
        </Link>
    );
};

export default PlanCard;
