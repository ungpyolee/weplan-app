import { LogoKakao } from '@/components/Icons';
import React from 'react';

const KaKaoLoginBtn = () => {
    return (
        <div className="text-gray-400 hover:text-gray-100 transition">
            <button className="h-14 w-14 rounded-xl border border-gray-500 bg-[#FEE500] flex items-center justify-center hover:bg-[#FEEC40] transition">
                <div className="w-6 h-6 flex items-center justify-center">
                    <LogoKakao className="fill-[#191919]" />
                </div>
            </button>
            <p className="text-center mt-1 text-base ">카카오</p>
        </div>
    );
};

export default KaKaoLoginBtn;
