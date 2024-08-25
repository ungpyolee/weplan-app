import React from 'react';
interface ButtonErrorProps {
    value: string;
    className?: string;
    size?: 'sm' | 'default' | 'lg';
}

const ButtonError = ({ value, className, size = 'default' }: ButtonErrorProps) => {
    const sizeClasses = {
        sm: 'h-10',
        default: 'h-13',
        lg: 'h-14',
    };

    return (
        <button
            className={`w-full bg-gray-800 hover:bg-gray-700 rounded-xl text-literal-danger text-base cursor-pointer transition ${
                className || ''
            } ${sizeClasses[size]}`}
        >
            {value}
        </button>
    );
};

export default ButtonError;
