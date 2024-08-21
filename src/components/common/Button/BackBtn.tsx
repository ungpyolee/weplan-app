'use client';

import { IconLeftArrow } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackBtn = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <button
            className="w-10 h-10 rounded-xl hover:bg-gray-800 transition flex justify-center items-center"
            onClick={handleBack}
        >
            <div className="w-5 h-5 flex items-center justify-center">
                <IconLeftArrow className="fill-white" />
            </div>
        </button>
    );
};

export default BackBtn;
