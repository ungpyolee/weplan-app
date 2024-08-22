import { BookmarkBtn, LikeBtn } from '@/components/common/Button';
import { IconPlus } from '@/components/Icons';
import ImageCard from '@/components/plan-detail/ImageCard';
import PlanDetail from '@/components/plan-detail/PlanDetail';
import PlanInfo from '@/components/plan-detail/PlanInfo';
import React from 'react';

const PostedPlan = () => {
    return (
        <div className="pt-10">
            <div className="flex px-5 mb-3">
                <span>{'게시작성자'}</span>
                <button className="ml-2 text-sm border px-2 rounded-full flex items-center hover:bg-gray-700 transition">
                    <div className="h-2 w-2 me-1">
                        <IconPlus className="fill-white" />
                    </div>
                    팔로우
                </button>
                <span className="text-gray-400 ml-auto">{'조회수 000'}</span>
            </div>
            <ImageCard />
            <div className="px-2 pt-2 flex justify-between">
                <LikeBtn />
                <BookmarkBtn />
            </div>
            <PlanInfo />
            <PlanDetail />
        </div>
    );
};

export default PostedPlan;
