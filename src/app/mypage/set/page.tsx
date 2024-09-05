import { IconArrow } from '@/components/Icons';
import { NavTopBack } from '@/components/layout';
import Link from 'next/link';
import React from 'react';

const Set = () => {
    return (
        <div className="pt-15">
            <NavTopBack title="설정" />
            <div className="flex flex-col py-5">
                <Link href="/mypage/set/profile" className="flex items-center justify-between px-5 py-3">
                    <p className="ps-1">프로필 수정</p>
                    <IconArrow className="w-4 h-4 dark:fill-white rotate-[-90deg]" />
                </Link>
                <Link href="#" className="flex items-center justify-between px-5 py-3">
                    <p className="ps-1">계정 관리</p>
                    <IconArrow className="w-4 h-4 dark:fill-white rotate-[-90deg]" />
                </Link>
                <div className="h-[1px] bg-gray-100 dark:bg-gray-800 my-1"></div>
                <Link href="/mypage/set/theme" className="flex items-center justify-between px-5 py-3">
                    <p className="ps-1">화면 테마</p>
                    <IconArrow className="w-4 h-4 dark:fill-white rotate-[-90deg]" />
                </Link>
                <div className="h-[1px] bg-gray-100 dark:bg-gray-800 my-1"></div>
                <Link href="#" className="flex items-center justify-between px-5 py-3">
                    <p className="ps-1">고객 센터</p>
                    <IconArrow className="w-4 h-4 dark:fill-white rotate-[-90deg]" />
                </Link>
                <div className="h-[1px] bg-gray-100 dark:bg-gray-800 my-1"></div>
                <Link href="#" className="flex items-center justify-between px-5 py-3">
                    <p className="ps-1">로그아웃</p>
                    <IconArrow className="w-4 h-4 dark:fill-white rotate-[-90deg]" />
                </Link>
            </div>
        </div>
    );
};

export default Set;
