import { LogoKakao } from '@/components/Icons';
import React from 'react';

const ButtonKaKao = () => {
    return (
        <button>
            <div className="h-13 w-full rounded-xl border dark:border-gray-500 px-5 flex items-center justify-between bg-[#FEE500] active:bg-[#FEEC40] transition">
                <div className="w-5 h-5 flex items-center justify-center">
                    <LogoKakao className="fill-[#191919]" />
                </div>
                <p className="font-medium text-[#191919]">카카오 계정으로 시작하기</p>
                <div className="w-5"></div>
            </div>
        </button>
    );
};

export default ButtonKaKao;
