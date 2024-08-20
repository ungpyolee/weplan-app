import { KaKaoLoginBtn, NaverLoginBtn } from '@/components/common/Button';
import { LoginForm } from '@/components/forms';
import { LogoWeplan } from '@/components/Icons';
import Link from 'next/link';
const Login = () => {
    return (
        <div className="flex flex-col justify-center h-screen pb-[68px]">
            <div className="flex flex-col text-center mb-[100px]">
                <LogoWeplan height="24" className="fill-primary mt-10 mb-2" />
                <p className="text-base">
                    국내 여행 공유플래너 <span className="font-semibold">위플랜</span>
                </p>
            </div>
            <LoginForm />
            <div className="flex justify-around mt-4 px-5">
                <Link href="/auth/register" className="w-1/3 text-center text-gray-400 hover:text-white transition">
                    회원가입
                </Link>
                <Link href="#" className="w-1/3 text-center text-gray-400 hover:text-white transition">
                    이메일 찾기
                </Link>
                <Link href="#" className="w-1/3 text-center text-gray-400 hover:text-white transition">
                    비밀번호 찾기
                </Link>
            </div>
            <div className="mt-7 pt-7 border-t border-gray-800">
                <p className="text-center text-gray-300 mb-4">소셜 로그인으로 시작하기</p>
                <div className="flex gap-5 justify-center">
                    <NaverLoginBtn />
                    <KaKaoLoginBtn />
                </div>
            </div>
        </div>
    );
};

export default Login;
