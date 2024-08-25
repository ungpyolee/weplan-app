'use client';
import { useState } from 'react';
import { TabMenuWide } from '../common/TabMenu';
import { InputSearch } from '../common/Input';
import { ModalSearchFilter } from '../modal';

const SearchHeader = () => {
    const tabs = [
        { id: 0, label: '플래너' },
        { id: 1, label: '위플래너' },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const [searchPost, setSearchPost] = useState<string>('');
    const [searchUser, setSearchUser] = useState<string>('');
    const handleTabChange = (id: number) => {
        setActiveTab(id);
    };

    const handleSearchPostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPost(e.target.value);
    };
    const handleSearchUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchUser(e.target.value);
    };

    return (
        <>
            <TabMenuWide tabs={tabs} initialTabId={0} onTabChange={handleTabChange} />
            <div className="px-5 mt-5">
                {activeTab === 0 && (
                    <div>
                        <InputSearch
                            type="text"
                            value={searchPost}
                            onChange={handleSearchPostChange}
                            placeholder="지역, 단어로 게시물을 검색할 수 있습니다"
                        />
                        <div className="mt-2">
                            <ModalSearchFilter />
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <InputSearch
                        type="text"
                        value={searchUser}
                        onChange={handleSearchUserChange}
                        placeholder="위플래너를 검색할 수 있습니다"
                    />
                )}
            </div>
        </>
    );
};

export default SearchHeader;
