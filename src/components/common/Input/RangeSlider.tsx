'use client';
import React, { useCallback } from 'react';

interface RangeSliderProps {
    min: number;
    max: number;
    minValue: number;
    maxValue: number;
    step: number;
    onMinChange: (value: number) => void;
    onMaxChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, minValue, maxValue, step, onMinChange, onMaxChange }) => {
    const handleMinChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Number(event.target.value), maxValue);
            onMinChange(value);
        },
        [maxValue, onMinChange]
    );

    const handleMaxChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(Number(event.target.value), minValue);
            onMaxChange(value);
        },
        [minValue, onMaxChange]
    );

    // Calculate the position and width of the colored range bar
    const rangeWidth = ((maxValue - minValue) / (max - min)) * 100;
    const rangeLeft = ((minValue - min) / (max - min)) * 100;

    return (
        <div className="flex flex-col mt-5">
            <div className="relative h-1">
                <div className="absolute w-full h-0.5 bg-gray-300 rounded-full translate-y-[-50%]"></div>

                <div
                    className="absolute h-0.5 bg-indigo-500 rounded-full translate-y-[-50%]"
                    style={{
                        width: `${rangeWidth}%`,
                        left: `${rangeLeft}%`,
                    }}
                ></div>

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute w-full appearance-none bg-transparent pointer-events-none translate-y-[-50%]"
                    style={{
                        WebkitAppearance: 'none',
                        zIndex: 3,
                    }}
                />

                {/* Max value input */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute w-full appearance-none bg-transparent pointer-events-none translate-y-[-50%]"
                    style={{
                        WebkitAppearance: 'none',
                        zIndex: 4,
                    }}
                />

                <style jsx>{`
                    input[type='range']::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 24px;
                        height: 24px;
                        border-radius: 8px;
                        background: #ffffff;
                        border: 6px solid #726ef3;
                        cursor: pointer;
                        pointer-events: auto;
                    }
                    input[type='range']::-moz-range-thumb {
                        width: 24px;
                        height: 24px;
                        border-radius: 8px;
                        background: #ffffff;
                        border: 6px solid #726ef3;
                        cursor: pointer;
                        pointer-events: auto;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default RangeSlider;
