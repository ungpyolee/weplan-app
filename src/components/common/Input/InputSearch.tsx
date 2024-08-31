import { IconSearchL } from '@/components/Icons';
import React from 'react';

interface InputSearchProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    size?: 'sm' | 'default' | 'lg';
}

const InputSearch = ({ value, onChange, placeholder, type, size = 'default', ...props }: InputSearchProps) => {
    const sizeClasses = {
        sm: 'h-10',
        default: 'h-13',
        lg: 'h-14',
    };

    return (
        <div className="relative w-full">
            {' '}
            <input
                type={type || 'text'}
                value={value}
                onChange={onChange}
                placeholder={placeholder || '내용을 입력해주세요'}
                required
                className={`w-full rounded-xl border border-gray-500 pl-12 pr-5 bg-transparent dark:hover:border-white focus:border-primary focus:outline-none transition line-clamp-1 ${sizeClasses[size]} {}...props}`}
            />
            <div className="absolute w-5 h-5 flex justify-center items-center top-1/2 left-4 translate-y-[-50%]">
                <IconSearchL className="fill-black dark:fill-white" />
            </div>
        </div>
    );
};

export default InputSearch;
