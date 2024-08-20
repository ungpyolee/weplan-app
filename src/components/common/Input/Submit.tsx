import React from 'react';

interface SubmitProps {
    value: string;
    className?: string;
}

const Submit = ({ value, className }: SubmitProps) => {
    return (
        <input
            type="submit"
            className={`bg-primary hover:bg-primary-light h-14 rounded-xl cursor-pointer transition ${className || ''}`}
            value={value}
        ></input>
    );
};

export default Submit;
