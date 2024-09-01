import { IconClose } from '@/components/Icons';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonError from '../common/Button/ButtonError';
import Link from 'next/link';
interface ModalSaveOrExitProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalSaveOrExit = ({ isOpen, onClose }: ModalSaveOrExitProps) => {
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
                            <header className="flex items-center justify-between mb-10">
                                <p className="ps-1 text-gray-400">플랜 관리</p>
                                <button className="close w-5 h-5" onClick={onClose}>
                                    <IconClose className="dark:fill-white" />
                                </button>
                            </header>
                            <div className="flex flex-col gap-2.5">
                                <p className="ps-1 mb-2 text-base">
                                    일정 작성을 그만하시겠습니까? <br />
                                    <span className="font-semibold">저장하지 않으면 작성 내용이 모두 사라집니다.</span>
                                </p>

                                <ButtonDefault value="저장하기" />
                                <Link href="/">
                                    <ButtonError value="작성 그만하기" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ModalSaveOrExit;
