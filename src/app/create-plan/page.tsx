'use client';
import React, { useState } from 'react';
import { ButtonDefault } from '@/components/common/Button';
import { TabMenu } from '@/components/common/TabMenu';
import { NavCreateStatus } from '@/components/create-plan';
import { NavTopClose } from '@/components/layout';
import ModalSetPeriod from '@/components/modal/ModalSetPeriod';
import ModalSaveOrExit from '@/components/modal/ModalSaveOrExit';
import ModalAddDetail from '@/components/modal/ModalAddDetail';

const CreatePlan = () => {
    const [isModalSetPeriodOpen, setIsModalSetPeriodOpen] = useState(false);
    const [isModalSaveOrExitOpen, setIsModalSaveOrExitOpen] = useState(false);
    const [isModalAddDetailOpen, setIsModalAddDetailOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [activeTab, setActiveTab] = useState(1);

    const handleOpenModalAddDetail = () => setIsModalAddDetailOpen(true);
    const handleCloseModalAddDetail = () => setIsModalAddDetailOpen(false);

    const handleOpenModalSaveOrExit = () => setIsModalSaveOrExitOpen(true);
    const handleCloseModalSaveOrExit = () => setIsModalSaveOrExitOpen(false);

    const handleOpenModalSetPeriod = () => setIsModalSetPeriodOpen(true);
    const handleCloseModalSetPeriod = () => setIsModalSetPeriodOpen(false);
    const handleConfirmPeriod = (day: string) => {
        setSelectedPeriod(day);
        setActiveTab(1);
    };

    const handleTabChange = (id: number) => {
        setActiveTab(id);
    };

    return (
        <div className="pt-16 overflow-hidden relative">
            <NavTopClose title="새 일정 작성" onClick={handleOpenModalSaveOrExit} />
            <ModalSaveOrExit isOpen={isModalSaveOrExitOpen} onClose={handleCloseModalSaveOrExit} />
            <div className="flex ps-6 pe-5 py-6 justify-between items-center">
                <p className="text-base dark:text-gray-300">기간 설정</p>
                <ButtonDefault
                    value={selectedPeriod === '' ? '선택' : selectedPeriod}
                    size="sm"
                    onClick={handleOpenModalSetPeriod}
                />
                <ModalSetPeriod
                    isOpen={isModalSetPeriodOpen}
                    onClose={handleCloseModalSetPeriod}
                    onConfirm={handleConfirmPeriod}
                />
            </div>
            {selectedPeriod === '' ? (
                <div className="px-6 py-3 border-b dark:border-gray-600">
                    <p>일정의 기간을 설정해주세요.</p>
                </div>
            ) : (
                <div className="px-6 border-b dark:border-gray-600">
                    <TabMenu selectedPeriod={selectedPeriod} activeTab={activeTab} onTabChange={handleTabChange} />
                </div>
            )}
            {selectedPeriod === '' ? (
                <></>
            ) : (
                <div className="flex flex-col p-5 border-b dark:border-gray-800">
                    <ButtonDefault value="일정 추가" onClick={handleOpenModalAddDetail} />
                    <ModalAddDetail isOpen={isModalAddDetailOpen} onClose={handleCloseModalAddDetail} />
                </div>
            )}
            <NavCreateStatus />
        </div>
    );
};

export default CreatePlan;
