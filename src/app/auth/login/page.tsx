import { ButtonKaKao, ButtonNaver } from '@/components/common/Button';
import { LoginForm } from '@/components/forms';
import { LogoWeplan } from '@/components/Icons';
import { NavTopBack } from '@/components/layout';
import Link from 'next/link';
const Login = () => {
    return (
        <div className="flex flex-col justify-center h-screen">
            <NavTopBack title={'로그인'} />
            <div className="px-6 mb-6">
                <p className="text-2xl">
                    일정을 더욱 가치 있게, <br />
                    <span className="font-semibold"> 위플랜 </span>과 함께해요.
                </p>
            </div>
            <LoginForm />
            <div className="mt-8 pt-8 border-t dark:border-gray-800 relative">
                <p className="w-5 text-center bg-white dark:bg-black absolute top-[-12px] left-1/2 translate-x-[-50%] text-gray-500">
                    or
                </p>
                <p className="text-center text-gray-500 dark:text-gray-300 mb-4">소셜 로그인</p>
                <div className="flex flex-col gap-3 px-5">
                    <ButtonNaver />
                    <ButtonKaKao />
                </div>
            </div>
        </div>
    );
};

export default Login;
