import React from 'react';

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    size?: 'sm' | 'default' | 'lg';
}

const Input = ({ value, onChange, placeholder, type, size = 'default', ...props }: InputProps) => {
    const sizeClasses = {
        sm: 'h-10',
        default: 'h-13',
        lg: 'h-14',
    };

    return (
        <input
            type={type || 'text'}
            value={value}
            onChange={onChange}
            placeholder={placeholder || '내용을 입력해주세요'}
            required
            className={`w-full rounded-xl border border-gray-500 px-5 bg-transparent hover:border-white focus:border-primary focus:outline-none transition ${sizeClasses[size]} {}...props}`}
        />
    );
};

export default Input;
