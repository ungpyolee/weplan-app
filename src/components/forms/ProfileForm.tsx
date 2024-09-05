'use client';
import React from 'react';
import { ButtonDefault } from '../common/Button';
import { InputText } from '../common/Input';

const ProfileForm = () => {
    return (
        <div className="min-h-screen pt-15 pb-5 flex flex-col">
            <div className="flex items-center px-5 pt-10">
                <div className="w-1/5 border dark:border-gray-800 rounded-lg dark:bg-gray-900 me-4 overflow-hidden">
                    <div className="aspect-w-1 aspect-h-1"></div>
                </div>
                <div className="text-start me-auto">
                    <p className="mb-0.5">{'프로필 사진'}</p>
                </div>
                <ButtonDefault value="사진 변경" size="sm" />
            </div>
            <div className="flex-grow pt-10 flex flex-col justify-between">
                <div className="space-y-10">
                    <InputText title="닉네임" placeholder={'유저닉네임'} />
                    <InputText title="소개글" />
                </div>
                <div className="px-5 flex flex-col">
                    <ButtonDefault value="저장" color="primary" />
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
