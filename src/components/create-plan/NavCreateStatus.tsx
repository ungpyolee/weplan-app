'use client';
import path from 'path';
import { IconTailArrow } from '../Icons';
import { ButtonDefault } from '../common/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavCreateStatus = () => {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 w-full max-w-[600px] bg-white dark:bg-black border-t dark:border-gray-800 pt-2 pb-3 px-3 sm:px-5 flex justify-between">
            <Link href="/create-plan">
                <ButtonDefault value="이전" size="sm" isDisabled={pathname === '/create-plan' ? true : false} />
            </Link>
            <div className="flex gap-4 items-center">
                <div className="flex items-center gap-1">
                    <p
                        className={`px-2 rounded-full ${
                            pathname === '/create-plan'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-300 dark:bg-gray-700 dark:text-gray-500'
                        }`}
                    >
                        1
                    </p>
                    <p className={`${pathname === '/create-plan' ? '' : 'text-gray-300 dark:text-gray-500'}`}>작성</p>
                </div>
                <div className="w-5 h-5 rotate-180 flex items-center">
                    <IconTailArrow className="fill-gray-500 " />
                </div>
                <div className="flex items-center gap-1">
                    <p
                        className={`px-2 rounded-full ${
                            pathname === '/create-plan/complete'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-300 dark:bg-gray-700 dark:text-gray-500'
                        }`}
                    >
                        2
                    </p>
                    <p className={`${pathname === '/create-plan/complete' ? '' : 'text-gray-300 dark:text-gray-500'}`}>
                        완료
                    </p>
                </div>
            </div>
            <Link href="/create-plan/complete">
                <ButtonDefault
                    value={pathname === '/create-plan' ? '다음' : '완료'}
                    size="sm"
                    color={pathname === '/create-plan' ? 'default' : 'primary'}
                />
            </Link>
        </div>
    );
};

export default NavCreateStatus;
