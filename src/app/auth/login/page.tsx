import { LoginForm } from '@/components/forms';
import { LogoWeplan } from '@/components/Icons';

const Login = () => {
    return (
        <div>
            <div className="flex flex-col text-center mb-[100px]">
                <LogoWeplan height="24" className="fill-primary mt-10 mb-2" />
                <p className="text-base">
                    국내 여행 공유플래너 <span className="font-semibold">위플랜</span>
                </p>
            </div>
            <LoginForm />
        </div>
    );
};

export default Login;
