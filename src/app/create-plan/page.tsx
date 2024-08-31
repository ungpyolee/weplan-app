import { ButtonDefault } from '@/components/common/Button';
import { NavCreateStatus } from '@/components/create-plan';
import { NavTopClose } from '@/components/layout';
import ModalSetPeriod from '@/components/modal/ModalSetPeriod';
import React from 'react';

const CreatePlan = () => {
    return (
        <div className="pt-16">
            <NavTopClose title="새 일정 작성" />
            <div className="flex ps-6 pe-5 py-6 justify-between items-center">
                <p className="text-base dark:text-gray-300">기간 설정</p>
                <ModalSetPeriod />
            </div>
            <div className="px-6  py-3 border-b dark:border-gray-600">
                <p>일정의 기간을 설정해주세요.</p>
            </div>
            <div className="flex flex-col p-5 border-b dark:border-gray-800">
                <ButtonDefault value="일정 추가" />
            </div>
            <NavCreateStatus />
        </div>
    );
};

export default CreatePlan;
