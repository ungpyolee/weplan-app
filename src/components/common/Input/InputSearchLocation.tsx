import { IconSearchL } from '@/components/Icons';
import React, { useState, useEffect } from 'react';

interface InputSearchLocationProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    size?: 'sm' | 'default' | 'lg';
}

const InputSearchLocation = ({
    value,
    onChange,
    placeholder,
    type,
    size = 'default',
    ...props
}: InputSearchLocationProps) => {
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        setHasValue(value.trim().length > 0);
    }, [value]);

    const sizeClasses = {
        sm: 'h-10',
        default: 'h-13',
        lg: 'h-14',
    };

    return (
        <div className="relative w-full">
            <input
                type={type || 'text'}
                value={value}
                onChange={onChange}
                placeholder={placeholder || '내용을 입력해주세요'}
                required
                className={`w-full rounded-xl dark:bg-black border border-gray-500 pr-12 pl-5 bg-transparent dark:hover:border-white focus:border-primary focus:outline-none transition line-clamp-1 ${sizeClasses[size]} ${props}`}
            />
            <button className="absolute w-5 h-5 flex justify-center items-center top-1/2 right-4 translate-y-[-50%]">
                <IconSearchL
                    className={` transition ${
                        hasValue ? 'fill-primary dark:fill-white' : 'fill-gray-500 dark:fill-gray-400'
                    }`}
                />
            </button>
        </div>
    );
};

export default InputSearchLocation;
