import React from 'react';

interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
}

const InputRadio = ({ name, label, ...props }: InputRadioProps) => {
    return (
        <label className="flex items-center cursor-pointer">
            <input type="radio" className="peer sr-only" name={name} value={label} {...props} />
            <div className="px-4 py-2 text-center border cursor-pointer dark:border-gray-400 dark:text-gray-400 rounded-xl dark:peer-checked:border-white dark:peer-checked:text-white peer-checked:border-primary peer-checked:text-primary">
                {label}
            </div>
        </label>
    );
};

export default InputRadio;
