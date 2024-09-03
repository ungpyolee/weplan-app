import { NavBottom } from '@/components/layout';
import React from 'react';

const bookmark = () => {
    return (
        <>
            <div className="flex px-6 py-5 items-center w-full max-w-[600px] dark:bg-black border-b dark:border-gray-800">
                북마크 목록
            </div>
            <NavBottom />
        </>
    );
};

export default bookmark;
