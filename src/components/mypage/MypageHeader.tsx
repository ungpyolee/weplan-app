import React from 'react';
import { IconsettingL } from '../Icons';
import Link from 'next/link';

const MypageHeader = () => {
    return (
        <div className="flex px-6 pt-5 pb-4 items-center w-full max-w-[600px] dark:bg-black">
            <Link href="mypage/set" className="w-8 h-8 flex justify-center items-center ms-auto">
                <div className="w-5 h-5">
                    <IconsettingL className="dark:fill-white" />
                </div>
            </Link>
        </div>
    );
};

export default MypageHeader;
