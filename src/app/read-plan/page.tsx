import { ButtonBack, ButtonFollow } from '@/components/common/Button';
import { IconPlus } from '@/components/Icons';
import ModalManagePost from '@/components/modal/ModalManagePost';
import { ImageCard, PlanDetail, PlanInfo } from '@/components/read-plan';
import React from 'react';

const PostedPlan = () => {
    return (
        <div className="pt-15">
            <div className="fixed top-0 flex px-6 pt-5 pb-4 items-center w-full max-w-[600px] bg-white dark:bg-black border-b dark:border-gray-800 z-10">
                <ButtonBack />
                <span className="ms-4">{'게시작성자'}</span>
                <ButtonFollow />
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
