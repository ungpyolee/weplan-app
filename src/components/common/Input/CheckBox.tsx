import React, { useId } from 'react';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
}

const CheckBox = ({ name, label, ...props }: CheckBoxProps) => {
    return (
        <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="peer sr-only" name={name} value={label} {...props} />
            <div className="px-4 py-2 border border-gray-400 text-gray-400 rounded-xl cursor-pointer peer-checked:border-white peer-checked:text-white">
                {label}
            </div>
        </label>
    );
};

export default CheckBox;
