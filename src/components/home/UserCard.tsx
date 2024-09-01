import React from 'react';
import { IconPlus } from '../Icons';
import { ButtonFollow } from '../common/Button';

const UserCard = () => {
    return (
        <div className="snap-start flex-shrink-0 w-80 rounded-xl border dark:border-gray-800 overflow-hidden">
            <div className="dark:bg-gray-900 p-5">
                <div className="flex items-center">
                    <div className="w-14 h-14 border dark:border-gray-400 rounded-full dark:bg-gray-700 me-4"></div>
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
                <div className="flex items-center gap-3 mt-4">
                    <p className="line-clamp-2 text-start dark:text-gray-200 text-base">
                        파워 J의 여행 일정을 공유합니다. 산이나 바다 자연과 함께하는 여행
                    </p>
                    <ButtonFollow />
                </div>
            </div>
        </div>
    );
};

export default UserCard;
