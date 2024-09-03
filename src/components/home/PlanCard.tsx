import React from 'react';
import { IconBookmarkL, IconLikeL } from '../Icons';
import Link from 'next/link';

const PlanCard = () => {
    return (
        <Link
            href="/read-plan"
            className="snap-start flex-shrink-0 w-80 rounded-xl border dark:border-gray-800 overflow-hidden text-start"
        >
            <div className="flex flex-col justify-end w-80 h-80 bg-gray-200 dark:bg-gray-700">
                <div className="flex px-5 pb-2 pt-5 bg-gradient-to-b from-transparent dark:via-gray-900/50 dark:to-gray-900 via-white/50 to-white">
                    <span className="me-auto text-xs font-semibold">{'게시자닉네임'}</span>
                </div>
            </div>
            <div className="px-5 pt-4 pb-5 bg-transparent dark:bg-gray-900">
                <div className="text-sm">북마크 {'000'}</div>
                <p className="line-clamp-1">
                    여름하면 동해를 매년 꼭 가는데요. 동해는 방문할 때 마다 넓고 투명한 바다가 속을 뻥뚫어주는
                    기분입니다.
                </p>
                <p className="mt-0.5  text-gray-400 text-sm">
                    {'강원 강릉시'} <span className="mx-1"></span> {'3일'} <span className="mx-1"></span>
                    {'경비 250,000원'}
                </p>
            </div>
        </Link>
    );
};

export default PlanCard;
