import { LogoWeplan } from '@/components/Icons';

export default function Home() {
    return (
        <>
            <div className="flex flex-col text-center">
                <LogoWeplan height="24" className="fill-primary mt-10 mb-2" />
                <p className="text-lg">
                    반갑습니다. 일정을 관리하고 공유하는 서비스 <span className="font-semibold">위플랜</span>입니다.
                </p>
            </div>
        </>
    );
}
