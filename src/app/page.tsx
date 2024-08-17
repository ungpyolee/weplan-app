import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className="flex flex-col mt-10 text-center">
                <span className="font-en text-2xl font-light">WEPLAN</span>
                <p className="text-base text-lg">
                    반갑습니다. 일정을 관리하고 공유하는 서비스 <span className="font-semibold">위플랜</span>입니다.
                </p>
            </div>
        </>
    );
}
