import React from 'react';
interface ButtonDefaultProps {
    value: string;
    className?: string;
    size?: 'sm' | 'default' | 'lg';
    onClick?: () => void;
    color?: 'primary' | 'default';
}

const ButtonDefault = ({ value, className, onClick, color = 'default', size = 'default' }: ButtonDefaultProps) => {
    const sizeClasses = {
        sm: 'h-10',
        default: 'h-13',
        lg: 'h-14',
    };

    const colorClasses = {
        primary: 'bg-primary hover:bg-primary-light',
        default: 'bg-gray-800 hover:bg-gray-700',
    };

    return (
        <button
            onClick={onClick}
            className={`w-full rounded-xl cursor-pointer transition ${className || ''} ${sizeClasses[size]} ${
                colorClasses[color]
            }`}
        >
            {value}
        </button>
    );
};

export default ButtonDefault;
