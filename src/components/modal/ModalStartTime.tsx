import { IconClose } from '@/components/Icons';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import CustomTimePicker from '../create-plan/CustomTimePicker';
interface ModalStartTimeProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalStartTime = ({ isOpen, onClose }: ModalStartTimeProps) => {
    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            onClose();
        }
    };

    // 애니메이션 설정
    const modalVariants = {
        hidden: { y: '100%', opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 0 },
    };

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <div
                        className="fixed bottom-0 left-1/2 translate-x-[-50%] w-full max-w-[600px] h-full bg-black/10 dark:bg-black/90 z-20 flex flex-col justify-end modal-overlay"
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
                            <header className="flex items-center justify-between mb-10">
                                <p className="ps-1 text-gray-400">시작 시간</p>
                                <button className="close w-5 h-5" onClick={onClose}>
                                    <IconClose className="dark:fill-white" />
                                </button>
                            </header>
                            <section>
                                <CustomTimePicker />
                            </section>
                            <div className="flex flex-col gap-2.5">
                                <ButtonDefault value="확인" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ModalStartTime;
