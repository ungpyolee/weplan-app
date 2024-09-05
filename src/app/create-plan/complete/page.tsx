'use client';

import { ButtonDefault } from '@/components/common/Button';
import { InputText } from '@/components/common/Input';
import { NavCreateStatus } from '@/components/create-plan';
import { IconPin } from '@/components/Icons';
import { NavTopClose } from '@/components/layout';
import ModalSaveOrExit from '@/components/modal/ModalSaveOrExit';
import React, { useState } from 'react';

const page = () => {
    const [isModalSaveOrExitOpen, setIsModalSaveOrExitOpen] = useState(false);

    const handleOpenModalSaveOrExit = () => setIsModalSaveOrExitOpen(true);
    const handleCloseModalSaveOrExit = () => setIsModalSaveOrExitOpen(false);
    return (
        <div className="pt-16">
            <NavTopClose title="새 일정 작성" onClick={handleOpenModalSaveOrExit} />
            <ModalSaveOrExit isOpen={isModalSaveOrExitOpen} onClose={handleCloseModalSaveOrExit} />
            <section className="pt-10 flex flex-col">
                <InputText title="제목과 설명" placeholder="작성 일정에 대한 제목이나 설명을 입력해주세요" />
                <div className="my-8 px-5">
                    <p className="ps-1 mb-1">여행 지역</p>
                    <div className="flex items-center">
                        <div className="flex items-center gap-1 text-gray-300 me-auto ps-1">
                            <div className="w-3 h-3 flex justify-center items-center">
                                <IconPin className="h-full fill-gray-400" />
                            </div>
                            <p className="line-clamp-1">이번 일정의 대표 지역을 설정해주세요</p>
                        </div>
                        <ButtonDefault value="장소 검색" size="sm" />
                    </div>
                </div>
            </section>
            <NavCreateStatus />
        </div>
    );
};

export default page;
