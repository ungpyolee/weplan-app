import { IconTailArrow } from '@/components/Icons';
import { ButtonDefault } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../common/Input';
import { useState } from 'react';
import { TabMenuWide } from '../common/TabMenu';
import ModalStartTime from './ModalStartTime';
import ModalEndTime from './ModalEndTime';
import ModalSelectCategory from './ModalSelectCategory';
import ModalSearchLocation from './ModalSearchLocation';

interface ModalAddDetailProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAddDetail = ({ isOpen, onClose }: ModalAddDetailProps) => {
    const [isModalStartTimeOpen, setIsModalStartTimeOpen] = useState<boolean>(false);
    const [isModalEndTimeOpen, setIsModalEndTimeOpen] = useState<boolean>(false);
    const [isModalSelectCategoryOpen, setIsModalSelectCategoryOpen] = useState<boolean>(false);
    const [isModalSearchLocationOpen, setIsModalSearchLocationOpen] = useState<boolean>(false);

    const [isDetailText, setIsDetailText] = useState('');
    const [activeTab, setActiveTab] = useState(0);

    const handleOpenModalStartTime = () => setIsModalStartTimeOpen(true);
    const handleCloseModalStartTime = () => setIsModalStartTimeOpen(false);
    const handleOpenModalEndTime = () => setIsModalEndTimeOpen(true);
    const handleCloseModalEndTime = () => setIsModalEndTimeOpen(false);
    const handleOpenModalSelectCategory = () => setIsModalSelectCategoryOpen(true);
    const handleCloseModalSelectCategory = () => setIsModalSelectCategoryOpen(false);
    const handleOpenModalSearchLocation = () => setIsModalSearchLocationOpen(true);
    const handleCloseModalSearchLocation = () => setIsModalSearchLocationOpen(false);

    const handleChangeDetailText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDetailText(e.target.value);
    };

    const tabs = [
        { id: 0, label: '장소' },
        { id: 1, label: '이동' },
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
                    <div className="fixed inset-0 bg-black/10 dark:bg-black/90 z-10 flex items-end justify-center modal-overlay overflow-hidden">
                        <motion.div
                            className="w-full max-w-[600px] min-h-screen max-h-screen bg-white dark:bg-black shadow-sm pt-7 pb-6 modal-content flex flex-col overflow-y-auto"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                            <header className="flex items-center mb-10 px-5 justify-between">
                                <button className="close w-5 h-5 me-3" onClick={onClose}>
                                    <IconTailArrow className="dark:fill-white" />
                                </button>
                                <p>상세 일정 추가</p>
                                <div className="w-5"></div>
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
                                        <ButtonDefault value="시작시간" size="sm" onClick={handleOpenModalStartTime} />
                                        <ModalStartTime
                                            isOpen={isModalStartTimeOpen}
                                            onClose={handleCloseModalStartTime}
                                        />
                                    </div>
                                    <div className="flex items-center ps-1">
                                        <p className="text-gray-400">종료시간 : </p>
                                        <p className="ms-2 me-auto">{'startTime'}</p>
                                        <ButtonDefault value="종료시간" size="sm" onClick={handleOpenModalEndTime} />
                                        <ModalEndTime isOpen={isModalEndTimeOpen} onClose={handleCloseModalEndTime} />
                                    </div>
                                </div>
                                <div className="mb-8 px-5 ">
                                    <p className="ps-1">카테고리</p>
                                    <div className="flex items-center mt-1">
                                        <p className="ps-1 me-auto text-gray-400">{'category'}</p>
                                        <ButtonDefault value="선택" size="sm" onClick={handleOpenModalSelectCategory} />
                                        <ModalSelectCategory
                                            isOpen={isModalSelectCategoryOpen}
                                            onClose={handleCloseModalSelectCategory}
                                        />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <TabMenuWide tabs={tabs} initialTabId={0} onTabChange={handleTabChange} />
                                    <div className="px-5 mt-3">
                                        <div className="flex ">
                                            {activeTab === 0 && (
                                                <div className="me-auto">
                                                    <p className="ps-1 text-gray-400 line-clamp-1 mb-2">
                                                        장소 : <span className="dark:text-white ">{'장소'}</span>
                                                    </p>
                                                </div>
                                            )}
                                            {activeTab === 1 && (
                                                <div className="me-auto">
                                                    <p className="ps-1 text-gray-400 line-clamp-1 mb-2">
                                                        출발지 : <span className="dark:text-white ">{'장소'}</span>
                                                    </p>
                                                    <p className="ps-1 text-gray-400 line-clamp-1">
                                                        목적지 : <span className="dark:text-white ">{'장소'}</span>
                                                    </p>
                                                </div>
                                            )}
                                            <ButtonDefault
                                                value="위치 검색"
                                                size="sm"
                                                onClick={handleOpenModalSearchLocation}
                                            />
                                            <ModalSearchLocation
                                                isOpen={isModalSearchLocationOpen}
                                                onClose={handleCloseModalSearchLocation}
                                            />
                                        </div>
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
