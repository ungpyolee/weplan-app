'use client';

import React, { useState, useEffect } from 'react';
import Radio from '../common/Input/Radio';

type Theme = 'system' | 'dark' | 'light';

const ThemeSelector: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState<Theme>('system');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            setCurrentTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            setCurrentTheme('system');
            applyTheme(systemTheme);
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (currentTheme === 'system') {
                applyTheme('system');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [currentTheme]);

    const applyTheme = (theme: Theme) => {
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.className = systemTheme;
        } else {
            document.documentElement.className = theme;
        }
    };

    const handleThemeChange = (theme: Theme) => {
        setCurrentTheme(theme);
        localStorage.setItem('theme', theme);
        applyTheme(theme);
    };

    return (
        <div className="flex flex-col space-y-4 p-5">
            <Radio
                name="theme"
                label="시스템 설정"
                checked={currentTheme === 'system'}
                onChange={() => handleThemeChange('system')}
            />
            <Radio
                name="theme"
                label="다크 모드"
                checked={currentTheme === 'dark'}
                onChange={() => handleThemeChange('dark')}
            />
            <Radio
                name="theme"
                label="라이트 모드"
                checked={currentTheme === 'light'}
                onChange={() => handleThemeChange('light')}
            />
        </div>
    );
};

export default ThemeSelector;
