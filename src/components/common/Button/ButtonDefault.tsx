import React from 'react';
interface ButtonDefaultProps {
    value: string;
    className?: string;
    size?: 'sm' | 'default' | 'lg';
}

const ButtonDefault = ({ value, className, size = 'default' }: ButtonDefaultProps) => {
    const sizeClasses = {
        sm: 'h-10',
        default: 'h-13',
        lg: 'h-14',
    };

    return (
        <button
            className={`w-full bg-gray-800 hover:bg-gray-700 rounded-xl cursor-pointer transition ${className || ''} ${
                sizeClasses[size]
            }`}
        >
            {value}
        </button>
    );
};

export default ButtonDefault;
