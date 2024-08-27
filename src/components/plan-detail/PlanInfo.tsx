import React from 'react';

const PlanInfo = () => {
    return (
        <div className="px-6">
            <p className="text-white mb-0.5 text-sm">{'북마크 000개'}</p>

            <p>
                여름하면 동해를 매년 꼭 가는데요. 동해는 방문할 때 마다 넓고 투명한 바다가 속을 뻥뚫어주는 기분입니다.
                천천히 여유를 즐기며, 맛도 즐기는 2박 3일 일정입니다!{' '}
            </p>
            <p className="mt-4 text-gray-400 text-sm">
                {'강원 강릉시'} <span className="mx-1"></span> {'3일'} <span className="mx-1"></span>
                {'경비 250,000원'}
            </p>
            <p className="text-gray-400 text-sm">{'2024.00.00'}</p>
        </div>
    );
};

export default PlanInfo;
