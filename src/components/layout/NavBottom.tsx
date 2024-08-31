'use client';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    IconHomeL,
    IconSearchL,
    IconAddL,
    IconBookmarkL,
    IconMypageL,
    IconHomeLB,
    IconSearchLB,
    IconAddLB,
    IconBookmarkLB,
    IconMypageLB,
} from '@/components/Icons';

const navItems = [
    { path: '/', Icon: IconHomeL, ActiveIcon: IconHomeLB },
    { path: '/search', Icon: IconSearchL, ActiveIcon: IconSearchLB },
    { path: '/create-plan', Icon: IconAddL, ActiveIcon: IconAddLB },
    { path: '/bookmark', Icon: IconBookmarkL, ActiveIcon: IconBookmarkLB },
    { path: '/mypage', Icon: IconMypageL, ActiveIcon: IconMypageLB },
];

const NavBottom = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 w-full max-w-[600px] dark:bg-black border-t brder-gray-100 dark:border-gray-800 pt-2 pb-3 px-3 sm:px-5">
            <div className="w-full mx-auto flex justify-around items-center ">
                {navItems.map(({ path, Icon, ActiveIcon }) => (
                    <Link
                        key={path}
                        href={path}
                        className="w-10 h-10 flex justify-center items-center rounded-xl active:bg-gray-200 dark:active:bg-gray-800 transition"
                    >
                        <div className="flex justify-center items-center">
                            <div className="w-5 h-5 flex items-center justify-center">
                                {pathname === path ? (
                                    <ActiveIcon className="fill-primary dark:fill-white" />
                                ) : (
                                    <Icon className="fill-primary dark:fill-white" />
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBottom;
