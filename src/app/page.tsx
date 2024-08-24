import { IconArrow, LogoWeplan } from '@/components/Icons';
import SnapPlanCard from '@/components/home/SnapPlanCard';
import SnapUserCard from '@/components/home/SnapUserCard';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className="flex flex-col text-center">
                <div className="px-5 mb-8">
                    <LogoWeplan height="24" className="fill-primary mb-2" />
                </div>
                <div className="px-5 mb-8">
                    <div className="flex  justify-between">
                        <p>지금 뜨는 위플랜</p>
                        <Link href="#" className="flex items-center">
                            전체보기
                            <div className="w-3 h-3 flex justify-center items-center rotate-[270deg] ml-2">
                                <IconArrow className="fill-white" />
                            </div>
                        </Link>
                    </div>
                    <SnapPlanCard />
                </div>
                <div className="px-5 mb-8">
                    <div className="flex  justify-between">
                        <p>믿고 보는 위플래너</p>
                        <Link href="#" className="flex items-center">
                            전체보기
                            <div className="w-3 h-3 flex justify-center items-center rotate-[270deg] ml-2">
                                <IconArrow className="fill-white" />
                            </div>
                        </Link>
                    </div>
                    <SnapUserCard />
                </div>
                <Link href="auth/login">로그인</Link>
            </div>
        </>
    );
}
