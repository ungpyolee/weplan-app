'use client';

import { IconBookmark, IconBookmarkL } from '@/components/Icons';
import React, { useState } from 'react';

const BookmarkBtn = () => {
    const [isBookmark, setIsBookmark] = useState<boolean>(false);

    const handleClick = () => {
        setIsBookmark((prevState) => !prevState); // 상태를 토글합니다.
    };
    return (
        <button onClick={handleClick} className="p-3">
            <div className="w-5 h-5 px-0.5">
                {isBookmark ? <IconBookmark className="fill-white" /> : <IconBookmarkL className="fill-white" />}
            </div>
        </button>
    );
};

export default BookmarkBtn;
