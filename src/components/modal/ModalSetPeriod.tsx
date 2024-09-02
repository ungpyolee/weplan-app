'use client';

import React, { useState } from 'react';
import { IconClose } from '@/components/Icons';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { InputRadio } from '../common/Input';

interface ModalSetPeriodProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (selectedDay: string) => void;
}

const ModalSetPeriod: React.FC<ModalSetPeriodProps> = ({ isOpen, onClose, onConfirm }) => {
    const [selectedDay, setSelectedDay] = useState<string>('');

    const modalVariants = {
        hidden: { y: '100%', opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 0 },
    };

    const daysOptions = ['1일', '2일', '3일', '4일', '5일', '6일', '7일'];

    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDay(event.target.value);
    };

    const handleConfirm = () => {
        if (selectedDay) {
            onConfirm(selectedDay);
            onClose();
        }
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/10 dark:bg-black/90 z-10 flex items-end justify-center modal-overlay"
                    onClick={handleClickOutside}
                >
                    <motion.div
                        className="w-full max-w-[600px] bg-white dark:bg-gray-900 shadow-sm rounded-t-3xl pt-7 pb-6 px-5 modal-content"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                        <header className="flex items-center justify-between mb-6">
                            <p>기간 설정</p>
                            <button className="close w-5 h-5" onClick={onClose}>
                                <IconClose className="dark:fill-white" />
                            </button>
                        </header>
                        <div className="mb-10">
                            <div className="mt-2 flex gap-2 flex-wrap">
                                {daysOptions.map((day) => (
                                    <InputRadio
                                        key={day}
                                        name="days"
                                        value={day}
                                        label={day}
                                        checked={selectedDay === day}
                                        onChange={handleDayChange}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <ButtonDefault
                                value="확인"
                                color="primary"
                                onClick={handleConfirm}
                                isDisabled={selectedDay ? false : true}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ModalSetPeriod;
