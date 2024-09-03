import React from 'react';

const PlanInfo = () => {
    return (
        <div className="px-5 mb-6 py-4">
            <div className="flex flex-wrap text-sm gap-1.5 mb-4">
                <p className="px-2 py-0.5 border border-gray-500 rounded-full">강원 강릉시</p>
                <p className="px-2 py-0.5 border border-gray-500 rounded-full">총 경비 250,000원</p>
                <p className="px-2 py-0.5 border border-gray-500 rounded-full">3일 일정</p>
            </div>

            <p className="px-1">
                여름하면 동해를 매년 꼭 가는데요. 동해는 방문할 때 마다 넓고 투명한 바다가 속을 뻥뚫어주는 기분입니다.
                천천히 여유를 즐기며, 맛도 즐기는 2박 3일 일정입니다!{' '}
            </p>
            <div className="flex px-1 mt-2">
                <div className="text-sm text-gray-400 me-4">북마크 {'000'}</div>
                <p className="text-gray-400 text-sm">{'2024.00.00'}</p>
            </div>
        </div>
    );
};

export default PlanInfo;
