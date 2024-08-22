import React from 'react';
import { IconBookmarkL, IconLikeL } from '../Icons';
import Link from 'next/link';

const PlanCard = () => {
    return (
        <Link
            href="/posted-plan"
            className="snap-start flex-shrink-0 w-80 rounded-xl shadow-md overflow-hidden text-start"
        >
            <div className="flex flex-col justify-end w-80 h-80 bg-primary">
                <div className="flex px-5 pb-2 pt-5 bg-gradient-to-b from-transparent via-black/40 to-black/80">
                    <span className="me-auto">{'게시자닉네임'}</span>
                    <button className="h-5 w-5 me-4 flex justify-center items-center">
                        <IconLikeL />
                    </button>
                    <button className="h-5 w-5 flex justify-center items-center">
                        <IconBookmarkL className="w-4" />
                    </button>
                </div>
            </div>
            <div className="px-5 pt-4 pb-5 bg-gray-800">
                <div className=" text-sm">
                    좋아요 {'number'}
                    <span className="mx-1">•</span>
                    북마크 {'number'}
                </div>
                <p className="line-clamp-1 mt-2">
                    여름하면 동해를 매년 꼭 가는데요. 동해는 방문할 때 마다 넓고 투명한 바다가 속을 뻥뚫어주는
                    기분입니다.
                </p>
                <p className="mt-1  text-gray-400 text-sm">
                    {'강원 강릉시'} <span className="mx-1"></span> {'3일'} <span className="mx-1"></span>
                    {'경비 250,000원'}
                </p>
            </div>
        </Link>
    );
};

export default PlanCard;
