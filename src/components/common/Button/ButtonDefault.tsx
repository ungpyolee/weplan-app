import React from 'react';

interface ButtonDefaultProps {
    value: string;
    className?: string;
    size?: 'sm' | 'default' | 'lg';
    color?: 'primary' | 'default';
    isDisabled?: boolean;
    onClick?: () => void;
}

const ButtonDefault = ({
    value,
    className = '',
    onClick,
    color = 'default',
    size = 'default',
    isDisabled = false,
}: ButtonDefaultProps) => {
    const sizeClasses = {
        sm: 'h-10',
        default: 'h-13',
        lg: 'h-14',
    };

    const colorClasses = {
        primary: 'bg-primary hover:bg-primary-light text-white',
        default: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white',
    };

    const disabledClasses = 'bg-gray-100 text-gray-300 dark:bg-gray-800 cursor-not-allowed dark:text-gray-500';

    return (
        <button
            onClick={isDisabled ? undefined : onClick}
            className={`px-4 rounded-xl transition whitespace-nowrap" ${className} ${sizeClasses[size]} ${
                isDisabled ? disabledClasses : colorClasses[color]
            }`}
            disabled={isDisabled}
        >
            {value}
        </button>
    );
};

export default ButtonDefault;
