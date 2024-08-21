import { LogoNaver } from '@/components/Icons';
import React from 'react';

const NaverLoginBtn = () => {
    return (
        <button className="text-gray-400 hover:text-gray-100 transition">
            <div className="h-12 w-12 rounded-xl border border-gray-500 bg-[#03C75A] flex items-center justify-center hover:bg-[#42D583] transition">
                <div className="w-5 h-5 flex items-center justify-center">
                    <LogoNaver className="fill-white" />
                </div>
            </div>
            <p className="text-center mt-1 text-base ">네이버</p>
        </button>
    );
};

export default NaverLoginBtn;
