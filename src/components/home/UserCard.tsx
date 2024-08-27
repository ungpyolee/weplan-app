import React from 'react';
import { IconPlus } from '../Icons';

const UserCard = () => {
    return (
        <div className="snap-start flex-shrink-0 w-80 rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-900 p-5">
                <div className="flex items-center">
                    <div className="w-14 h-14 border border-gray-400 rounded-full bg-gray-700 me-4"></div>
                    <div className="text-start">
                        <p className="mb-0.5">{'유저닉네임'}</p>
                        <p className="text-sm">
                            <button className="text-gray-400  me-5">
                                {'팔로워'}
                                <span className="text-white ms-1">000</span>
                            </button>
                            <button className="text-gray-400  me-5">
                                {'팔로잉'}
                                <span className="text-white ms-1">000</span>
                            </button>
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <p className="line-clamp-2 text-start text-gray-200">
                        파워 J의 여행 일정을 공유합니다. 산이나 바다 자연과 함께하는 여행
                    </p>
                    <button className="text-sm bg-white text-black px-2 font-semibold rounded-full flex items-center transition whitespace-nowrap">
                        <div className="h-2 w-2 me-0.5">
                            <IconPlus className="fill-black" />
                        </div>
                        팔로우
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
