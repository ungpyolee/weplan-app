import { LogoNaver } from '@/components/Icons';
import React from 'react';

const ButtonNaver = () => {
    return (
        <button>
            <div className="h-13 w-full rounded-xl border border-gray-500 px-5 flex items-center justify-between bg-[#03C75A]  active:bg-[#42D583] transition">
                <div className="w-5 h-5 flex items-center justify-center">
                    <LogoNaver className="fill-white" />
                </div>
                <p className="font-medium">네이버 계정으로 시작하기</p>
                <div className="w-5"></div>
            </div>
        </button>
    );
};

export default ButtonNaver;
