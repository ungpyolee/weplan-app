import { ButtonBack } from '@/components/common/Button';
import { IconPlus } from '@/components/Icons';
import ModalManagePost from '@/components/modal/ModalManagePost';
import { ImageCard, PlanDetail, PlanInfo } from '@/components/read-plan';
import React from 'react';

const PostedPlan = () => {
    return (
        <div className="pt-16">
            <div className="fixed top-0 flex px-6 py-5 items-center w-full max-w-[600px] bg-black border-b border-gray-800 z-10">
                <ButtonBack />
                <span className="ms-4">{'게시작성자'}</span>
                <button className="ml-2 text-sm border px-2 rounded-full flex items-center hover:bg-gray-700 transition">
                    <div className="h-2 w-2 me-1">
                        <IconPlus className="fill-white" />
                    </div>
                    팔로우
                </button>
                <span className="text-gray-400 ml-auto me-4 text-sm">{'조회 000'}</span>
                <ModalManagePost />
            </div>
            <div className="mb-5">
                <ImageCard />
            </div>
            <PlanInfo />
            <PlanDetail />
        </div>
    );
};

export default PostedPlan;
