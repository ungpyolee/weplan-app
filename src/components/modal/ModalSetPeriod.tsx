'use client';

import { IconClose } from '@/components/Icons';
import { useState } from 'react';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckBox } from '../common/Input';

interface FilterOptionProps {
    label: string;
}

const ModalSetPeriod = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            toggleModal();
        }
    };

    // 애니메이션 설정
    const modalVariants = {
        hidden: { y: '100%', opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 0 },
    };

    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const daysOptions = ['1일', '2일', '3일', '4일', '5일', '6일', '7일'];

    const handleDaysChange = (day: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelectedDays((prev) => [...prev, day]);
        } else {
            setSelectedDays((prev) => prev.filter((d) => d !== day));
        }
    };

    const handleReset = () => {
        setSelectedDays([]);
    };

    return (
        <>
            <ButtonDefault value="선택" onClick={toggleModal} size="sm" />
            <AnimatePresence>
                {isOpen && (
                    <div
                        className="fixed bottom-0 left-1/2 translate-x-[-50%] w-full max-w-[600px] h-full bg-black/10 dark:bg-black/90 z-10 flex flex-col justify-end modal-overlay"
                        onClick={handleClickOutside}
                    >
                        <motion.div
                            className="w-full bg-white dark:bg-gray-900 shadow-sm rounded-t-3xl pt-7 pb-6 px-5 modal-content"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                            <header className="flex items-center justify-between mb-6">
                                <p>기간 설정</p>
                                <button className="close w-5 h-5" onClick={toggleModal}>
                                    <IconClose className="dark:fill-white" />
                                </button>
                            </header>
                            <div className="mb-10">
                                <div className="mt-2 flex gap-2 flex-wrap">
                                    {daysOptions.map((day) => (
                                        <CheckBox
                                            key={day}
                                            name="days"
                                            value={day}
                                            label={day}
                                            checked={selectedDays.includes(day)}
                                            onChange={handleDaysChange(day)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <ButtonDefault value="확인" color="primary" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalSetPeriod;
