'use client';
import { IconLike, IconLikeL } from '@/components/Icons';
import React, { useState } from 'react';

const LikeBtn = () => {
    const [isLike, setIsLike] = useState<boolean>(false);

    const handleClick = () => {
        setIsLike((prevState) => !prevState); // 상태를 토글합니다.
    };
    return (
        <button onClick={handleClick} className="p-3">
            <div className="w-5 h-5">
                {isLike ? <IconLike className="fill-white" /> : <IconLikeL className="fill-white" />}
            </div>
        </button>
    );
};

export default LikeBtn;
