'use client';

import { NavCreateStatus } from '@/components/create-plan';
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
            <NavCreateStatus />
        </div>
    );
};

export default page;
