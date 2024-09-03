import { IconClose } from '@/components/Icons';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonError from '../common/Button/ButtonError';
import Link from 'next/link';
import { useState } from 'react';
import { InputRadio } from '../common/Input';
interface ModalSelectCategoryProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (selectedCategory: string) => void;
}
const ModalSelectCategory = ({ isOpen, onClose, onConfirm }: ModalSelectCategoryProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const modalVariants = {
        hidden: { y: '100%', opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 0 },
    };

    const categoryOptions = [
        '식사',
        '카페',
        '간식',
        '쇼핑',
        '관광',
        '체험',
        '액티비티',
        '숙박',
        '휴식',
        '자동차',
        '대중교통',
        '도보',
        '자전거',
    ];

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCategory(event.target.value);
    };

    const handleConfirm = () => {
        if (selectedCategory) {
            onConfirm(selectedCategory);
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
                                {categoryOptions.map((day) => (
                                    <InputRadio
                                        key={day}
                                        name="days"
                                        value={day}
                                        label={day}
                                        checked={selectedCategory === day}
                                        onChange={handleCategoryChange}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <ButtonDefault
                                value="확인"
                                color="primary"
                                onClick={handleConfirm}
                                isDisabled={selectedCategory ? false : true}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ModalSelectCategory;
