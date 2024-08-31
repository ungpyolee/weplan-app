import { IconArrow, LogoWeplan } from '@/components/Icons';
import SnapPlanCard from '@/components/home/SnapPlanCard';
import SnapUserCard from '@/components/home/SnapUserCard';
import { NavBottom } from '@/components/layout';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className="flex flex-col text-center pb-20">
                <div className="px-6 pt-5 mb-8 ">
                    <LogoWeplan height="24" className="fill-primary" />
                </div>
                <div className="px-5 mb-8">
                    <div className="flex justify-between mb-2">
                        <p className="ms-1 text-base font-medium darK:text-white">지금 뜨는 위플랜</p>
                        <Link href="#" className="flex items-center me-1 text-sm font-medium">
                            전체보기
                            <div className="w-3 h-3 flex justify-center items-center rotate-[270deg] ml-2">
                                <IconArrow className="fill-dark dark:fill-white" />
                            </div>
                        </Link>
                    </div>
                    <SnapPlanCard />
                </div>
                <div className="px-5 mb-8">
                    <div className="flex justify-between mb-2">
                        <p className="ms-1 text-base font-medium">믿고 보는 위플래너</p>
                    </div>
                    <SnapUserCard />
                </div>
                <Link href="auth/login">로그인</Link>
            </div>
            <NavBottom />
        </>
    );
}
