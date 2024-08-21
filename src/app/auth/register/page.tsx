import { BackBtn } from '@/components/common/Button';
import { RegisterForm } from '@/components/forms';
import { LogoWeplan } from '@/components/Icons';
import React from 'react';

const Register = () => {
    return (
        <div className="pt-10">
            <div className="flex items-center mb-2 px-5 justify-between">
                <BackBtn />
                <LogoWeplan height="24" className="fill-primary " />
                <div className="w-10"></div>
            </div>
            <div className="mt-20 px-5">
                <p className="text-center mb-12">회원가입</p>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
