// import { LogoKakao } from '@/components/Icons';
// import React from 'react';

// const KaKaoLoginBtn = () => {
//     return (
//         <div className="text-gray-400 hover:text-gray-100 transition">
//             <button className="h-12 w-12 rounded-xl border border-gray-500 bg-[#FEE500] flex items-center justify-center hover:bg-[#FEEC40] transition">
//                 <div className="w-5 h-5 flex items-center justify-center">
//                     <LogoKakao className="fill-[#191919]" />
//                 </div>
//             </button>
//             <p className="text-center mt-1 text-base ">카카오</p>
//         </div>
//     );
// };

// export default KaKaoLoginBtn;

import { LogoKakao } from '@/components/Icons';
import React from 'react';

const KaKaoLoginBtn = () => {
    return (
        <button className="text-gray-400 hover:text-gray-100 transition">
            <div className="h-12 w-12 rounded-xl border border-gray-500 bg-[#FEE500] flex items-center justify-center hover:bg-[#FEEC40] transition">
                <div className="w-5 h-5 flex items-center justify-center">
                    <LogoKakao className="fill-[#191919]" />
                </div>
            </div>
            <p className="text-center mt-1 text-base ">카카오</p>
        </button>
    );
};

export default KaKaoLoginBtn;
