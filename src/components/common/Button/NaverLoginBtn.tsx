import { LogoNaver } from '@/components/Icons';
import React from 'react';

const NaverLoginBtn = () => {
    return (
        <div className="text-gray-400 hover:text-gray-100 transition">
            <button className="h-14 w-14 rounded-xl border border-gray-500 bg-[#03C75A] flex items-center justify-center hover:bg-[#42D583] transition">
                <div className="w-6 h-6 flex items-center justify-center">
                    <LogoNaver className="fill-white" />
                </div>
            </button>
            <p className="text-center mt-1 text-base ">네이버</p>
        </div>
    );
};

export default NaverLoginBtn;
