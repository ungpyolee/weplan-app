'use client';

import React, { useState, useRef, useEffect } from 'react';

interface InputTextProps {
    title: string;
    placeholder?: string;
}

const InputText = ({ title, placeholder }: InputTextProps) => {
    const [text, setText] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const maxLength = 10;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= maxLength) {
            setText(e.target.value);
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);

    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between px-6">
                <span>{title}</span>
                <span>
                    {text.length}/{maxLength}
                </span>
            </div>
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleChange}
                placeholder={placeholder || '내용을 입력해주세요'}
                className="w-full px-6 py-3 resize-none border-b border-gray-800 bg-transparent active:border-primary dark:hover:border-white focus:border-white focus:outline-none overflow-hidden"
                rows={1}
            />
        </div>
    );
};

export default InputText;
