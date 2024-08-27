'use client';

import { IconClose } from '@/components/Icons';
import { useState } from 'react';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonFilter } from '../common/Button/';
import { CheckBox } from '../common/Input';
import Radio from '../common/Input/Radio';

interface FilterOptionProps {
    label: string;
}

const ModalSearchFilter = () => {
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
    const [selectedBudget, setSelectedBudget] = useState<string[]>([]);

    const daysOptions = ['1일', '2일', '3일', '4일', '5일', '6일', '7일'];
    const budgetOptions = [
        '0 ~ 10만원',
        '10만원 ~ 20만원',
        '20만원 ~ 30만원',
        '30만원 ~ 50만원',
        '50만원 ~ 100만원',
        '100만원 이상',
    ];

    const handleDaysChange = (day: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelectedDays((prev) => [...prev, day]);
        } else {
            setSelectedDays((prev) => prev.filter((d) => d !== day));
        }
    };

    const handleBudgetChange = (budget: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelectedBudget((prev) => [...prev, budget]);
        } else {
            setSelectedBudget((prev) => prev.filter((d) => d !== budget));
        }
    };

    const handleReset = () => {
        setSelectedDays([]);
        setSelectedBudget([]);
    };

    return (
        <>
            <ButtonFilter onClick={toggleModal} />
            <AnimatePresence>
                {isOpen && (
                    <div
                        className="fixed bottom-0 left-1/2 translate-x-[-50%] w-full max-w-[600px] h-full bg-black/90 z-10 flex flex-col justify-end modal-overlay"
                        onClick={handleClickOutside}
                    >
                        <motion.div
                            className="w-full bg-gray-900 shadow-sm rounded-t-3xl pt-7 pb-6 px-5 modal-content"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                            <header className="flex items-center justify-between mb-6">
                                <p>필터</p>
                                <button className="close w-5 h-5" onClick={toggleModal}>
                                    <IconClose className="fill-white" />
                                </button>
                            </header>
                            <div className="mb-6">
                                <p className="font-semibold">일정 기간</p>
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
                            <div className="mb-10">
                                <p className="font-semibold">총 경비</p>
                                <div className="mt-2 flex gap-2 flex-wrap">
                                    {budgetOptions.map((budget) => (
                                        <CheckBox
                                            key={budget}
                                            name="budget"
                                            value={budget}
                                            label={budget}
                                            checked={selectedBudget.includes(budget)}
                                            onChange={handleBudgetChange(budget)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <ButtonDefault value="초기화" onClick={handleReset} />
                                <ButtonDefault value="확인" color="primary" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalSearchFilter;
