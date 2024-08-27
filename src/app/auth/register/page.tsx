import { RegisterForm } from '@/components/forms';
import { LogoWeplan } from '@/components/Icons';
import { NavTop } from '@/components/layout';
import React from 'react';

const Register = () => {
    return (
        <div className="flex flex-col justify-center h-screen">
            <NavTop title={'회원가입'} />
            <div className="px-5 flex mb-4">
                <div className="px-4 py-1 rounded-full border border-primary-light text-primary-light">
                    userid@email.com
                </div>
            </div>
            <div className="px-6 mb-6">
                <p className="text-2xl">비밀번호를 입력해주세요.</p>
                <span className="text-base text-gray-400">로그인에 사용할 비밀번호를 입력해주세요.</span>
            </div>
            <div className="px-5">
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
