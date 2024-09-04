import { NavTopBack } from '@/components/layout';
import ThemeSelector from '@/components/mypage/ThemeSelector';
import React from 'react';

const theme = () => {
    return (
        <div className="pt-15">
            <NavTopBack title="테마 설정" />
            <ThemeSelector />
        </div>
    );
};

export default theme;
