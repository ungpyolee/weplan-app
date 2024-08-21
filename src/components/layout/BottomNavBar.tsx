'use client';

// components/BottomNavBar.tsx
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
    { path: '/add-plan', Icon: IconAddL, ActiveIcon: IconAddLB },
    { path: '/bookmark', Icon: IconBookmarkL, ActiveIcon: IconBookmarkLB },
    { path: '/mypage', Icon: IconMypageL, ActiveIcon: IconMypageLB },
];

const BottomNavBar = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 w-full max-w-[600px] bg-gray-900 border-t border-gray-800 pt-2 pb-3 px-3 sm:px-5">
            <div className="w-full mx-auto flex justify-around items-center ">
                {navItems.map(({ path, Icon, ActiveIcon }) => (
                    <Link
                        key={path}
                        href={path}
                        className="w-12 h-12 flex justify-center items-center hover:bg-gray-800 transition rounded-xl"
                    >
                        <div className="flex justify-center items-center">
                            <div className="w-[20px] h-[20px] flex items-center justify-center">
                                {pathname === path ? <ActiveIcon /> : <Icon />}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default BottomNavBar;
