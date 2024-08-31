'use client';

import { IconClose } from '@/components/Icons';
import { useState } from 'react';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonFilter } from '../common/Button/';
import { CheckBox, RangeSlider } from '../common/Input';
import Radio from '../common/Input/Radio';

interface FilterOptionProps {
    label: string;
}

const ModalSearchFilter = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1000000);
    const [minDays, setMinDays] = useState(1);
    const [maxDays, setMaxDays] = useState(7);
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

    const handleReset = () => {
        setMinValue(0);
        setMaxValue(1000000);
        setMinDays(1);
        setMaxDays(7);
    };

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
                            <div className="mb-8">
                                <p className="font-semibold">일정 기간</p>
                                <p className="text-primary-light font-medium mt-2">
                                    {formatNumber(minDays)}일<span className="mx-1"> - </span>
                                    {formatNumber(maxDays)}일
                                </p>
                                <RangeSlider
                                    min={1}
                                    max={7}
                                    step={1}
                                    minValue={minDays}
                                    maxValue={maxDays}
                                    onMinChange={setMinDays}
                                    onMaxChange={setMaxDays}
                                />
                            </div>
                            <div className="mb-12">
                                <p className="font-semibold">총 경비</p>
                                <p className="text-primary-light font-medium mt-2">
                                    {formatNumber(minValue)}원<span className="mx-1"> - </span>
                                    {formatNumber(maxValue)}원
                                </p>
                                <RangeSlider
                                    min={0}
                                    max={1000000}
                                    step={10000}
                                    minValue={minValue}
                                    maxValue={maxValue}
                                    onMinChange={setMinValue}
                                    onMaxChange={setMaxValue}
                                />
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
