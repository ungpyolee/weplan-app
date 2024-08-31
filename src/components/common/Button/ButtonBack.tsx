'use client';

import { IconTailArrow } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonBack = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <button className="flex justify-center items-center" onClick={handleBack}>
            <div className="w-5 h-5 flex items-center justify-center">
                <IconTailArrow className="dark:fill-white " />
            </div>
        </button>
    );
};

export default ButtonBack;
