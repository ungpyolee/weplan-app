import React from 'react';

interface SubmitProps {
    value: string;
    className?: string;
    size?: 'sm' | 'default' | 'lg';
}

const Submit = ({ value, className, size = 'default' }: SubmitProps) => {
    const sizeClasses = {
        sm: 'h-10',
        default: 'h-13',
        lg: 'h-14',
    };
    return (
        <input
            type="submit"
            className={`text-white bg-primary hover:bg-primary-light rounded-xl cursor-pointer transition ${
                className || ''
            } ${sizeClasses[size]}`}
            value={value}
        ></input>
    );
};

export default Submit;
