import { IconClose, IconTailArrow } from '@/components/Icons';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../common/Input';
import { useState } from 'react';
import { TabMenuWide } from '../common/TabMenu';

interface ModalAddDetailProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAddDetail = ({ isOpen, onClose }: ModalAddDetailProps) => {
    const [isDetailText, setIsDetailText] = useState('');
    const [activeTab, setActiveTab] = useState(0);

    const handleChangeDetailText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDetailText(e.target.value);
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            onClose();
        }
    };

    const tabs = [
        { id: 0, label: '위플랜' },
        { id: 1, label: '위플래너' },
    ];

    const handleTabChange = (id: number) => {
        setActiveTab(id);
    };

    const modalVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { x: '0', opacity: 1 },
        exit: { x: '-100%', opacity: 0 },
    };

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/10 dark:bg-black/90 z-10 flex items-end justify-center modal-overlay overflow-hidden"
                        onClick={handleClickOutside}
                    >
                        <motion.div
                            className="w-full max-w-[600px] min-h-screen max-h-screen bg-white dark:bg-black shadow-sm pt-7 pb-6 modal-content flex flex-col overflow-y-auto"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                            <header className="flex items-center mb-10 px-5 ">
                                <button className="close w-5 h-5 me-3" onClick={onClose}>
                                    <IconTailArrow className="dark:fill-white" />
                                </button>
                                <p>상세 일정 추가</p>
                            </header>
                            <section>
                                <div className="mb-8 px-5 ">
                                    <p className="ps-1 mb-2">내용</p>
                                    <Input onChange={handleChangeDetailText} value={isDetailText} size="sm" />
                                </div>
                                <div className="mb-8 px-5 ">
                                    <p className="ps-1">시간</p>
                                    <div className="flex items-center mb-2 mt-1 ps-1">
                                        <p className="text-gray-400">시작시간 : </p>
                                        <p className="ms-2 me-auto">{'startTime'}</p>
                                        <ButtonDefault value="시작시간" size="sm" />
                                    </div>
                                    <div className="flex items-center ps-1">
                                        <p className="text-gray-400">종료시간 : </p>
                                        <p className="ms-2 me-auto">{'startTime'}</p>
                                        <ButtonDefault value="종료시간" size="sm" />
                                    </div>
                                </div>
                                <div className="mb-8 px-5 ">
                                    <p className="ps-1">카테고리</p>
                                    <div className="flex items-center mt-1">
                                        <p className="ps-1 me-auto text-gray-400">{'category'}</p>
                                        <ButtonDefault value="선택" size="sm" />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <TabMenuWide tabs={tabs} initialTabId={0} onTabChange={handleTabChange} />
                                    <div className="px-5 mt-3">
                                        {activeTab === 0 && (
                                            <div className="flex ">
                                                <p className="ps-1 text-gray-400">장소 : </p>
                                                <p className="ms-2 me-auto">{'장소'}</p>
                                                <ButtonDefault value="위치 검색" size="sm" />
                                            </div>
                                        )}
                                        {activeTab === 1 && (
                                            <div className="flex">
                                                <div className="me-auto">
                                                    <p className="ps-1 text-gray-400 line-clamp-1 mb-2">
                                                        출발지 : <span className="dark:text-white ">{'장소'}</span>
                                                    </p>
                                                    <p className="ps-1 text-gray-400 line-clamp-1">
                                                        목적지 : <span className="dark:text-white ">{'장소'}</span>
                                                    </p>
                                                </div>
                                                <ButtonDefault value="위치 검색" size="sm" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-8 px-5 ">
                                    <p className="ps-1 mb-2">비용</p>
                                    <Input
                                        onChange={handleChangeDetailText}
                                        value={isDetailText}
                                        size="sm"
                                        type="number"
                                        placeholder="비용을 입력해주세요"
                                    />
                                </div>
                            </section>
                            <footer className="flex flex-col mt-auto px-5 ">
                                <ButtonDefault value="완료" color="primary" />
                            </footer>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ModalAddDetail;
