'use client';

import { IconCheck, IconPlus } from '@/components/Icons';
import React, { useState } from 'react';

const ButtonFollow = () => {
    const [isFollow, setIsFollow] = useState<boolean>(false);

    const handleClick = () => {
        setIsFollow((prevState) => !prevState);
    };
    return (
        <button
            onClick={handleClick}
            className="ml-2 text-xs border px-2 py-0.5 rounded-full flex items-center active:bg-gray-100 dark:active:bg-gray-700 transition whitespace-nowrap"
        >
            <div className="h-2 w-2 me-1">
                {isFollow ? <IconCheck className="dark:fill-white" /> : <IconPlus className="dark:fill-white" />}
            </div>
            {isFollow ? '팔로잉' : '팔로우'}
        </button>
    );
};

export default ButtonFollow;
