import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Radio = ({ label, ...props }: RadioProps) => {
    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input type="radio" className="sr-only" {...props} />
                <div className="w-6 h-6 bg-gray-800 rounded-lg border border-gray-500 transition-colors peer-checked:bg-primary">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100">
                        <div className="w-2 h-2 bg-white rounded-[2px]"></div>
                    </div>
                </div>
            </div>
            {label && <span className="ml-3 text-base">{label}</span>}
        </label>
    );
};

export default Radio;
