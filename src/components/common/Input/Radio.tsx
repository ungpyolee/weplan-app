'use client';

import React, { useId } from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
}
const Radio = ({ name, label, ...props }: RadioProps) => {
    const id = useId();
    return (
        <label className="flex items-center cursor-pointer" htmlFor={id}>
            <div className="relative flex items-center">
                <input type="radio" className="sr-only peer" {...props} name={name} id={id} />
                <div className="w-6 h-6 bg-gray-800 rounded-lg border border-gray-500"></div>
                <div className="absolute w-6 h-6 rounded-lg transition-opacity bg-primary opacity-0 peer-checked:opacity-100 border border-primary-light">
                    <div className="absolute inset-0 flex items-center justify-center  ">
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                </div>
            </div>
            {label && <span className="ml-2 text-base text-gray-300 hover:text-white mt-1 transition">{label}</span>}
        </label>
    );
};

export default Radio;
