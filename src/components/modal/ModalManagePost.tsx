'use client';

import { IconClose } from '@/components/Icons';
import { useState } from 'react';
import { ButtonDefault, ButtonManagePost } from '../common/Button';
import ButtonError from '../common/Button/ButtonError';
import { motion, AnimatePresence } from 'framer-motion';

const ModalManagePost = () => {
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

    return (
        <div>
            <ButtonManagePost onClick={toggleModal} />
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
                            <header className="flex items-center justify-between mb-10">
                                <p>플랜 관리</p>
                                <button className="close w-5 h-5" onClick={toggleModal}>
                                    <IconClose className="fill-white" />
                                </button>
                            </header>
                            <div className="flex flex-col gap-2.5">
                                <ButtonDefault value="플랜 수정" />
                                <ButtonError value="플랜 삭제" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ModalManagePost;
