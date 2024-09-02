import React, { useState, useEffect, useRef } from 'react';

const CustomTimePicker = () => {
    const [period, setPeriod] = useState('AM');
    const [hour, setHour] = useState('12');
    const [minute, setMinute] = useState('00');

    const periods = ['AM', 'PM'];
    const hours = ['12', ...Array.from({ length: 11 }, (_, i) => (i + 1).toString().padStart(2, '0'))];
    const minutes = ['00', '10', '20', '30', '40', '50'];

    // Refs for scroll containers
    const periodRef = useRef<HTMLDivElement>(null);
    const hourRef = useRef<HTMLDivElement>(null);
    const minuteRef = useRef<HTMLDivElement>(null);

    // Function to set the scroll position based on selected value
    const scrollToSelected = (ref: React.RefObject<HTMLDivElement>, values: string[], selectedValue: string) => {
        if (ref.current) {
            const index = values.indexOf(selectedValue);
            ref.current.scrollTop = index * 40;
        }
    };

    useEffect(() => {
        // Initial scroll position
        scrollToSelected(periodRef, periods, period);
        scrollToSelected(hourRef, hours, hour);
        scrollToSelected(minuteRef, minutes, minute);
    }, [period, hour, minute]);

    const handleScroll = (setValue: (value: string) => void, values: string[], e: React.UIEvent<HTMLDivElement>) => {
        const newIndex = Math.round(e.currentTarget.scrollTop / 40);
        setValue(values[newIndex]);
    };

    return (
        <div className="flex text-xl justify-center relative mb-10">
            <div
                className="overflow-y-scroll h-[120px] w-[100px] snap-y snap-mandatory scrollbar-hide"
                onScroll={(e) => handleScroll(setPeriod, periods, e)}
                ref={periodRef}
            >
                <div className="h-10 flex justify-center items-center snap-center"></div>
                {periods.map((p) => (
                    <div
                        key={p}
                        className={`h-10 flex justify-center items-center snap-center ${
                            p === period ? 'font-medium' : 'dark:text-gray-400'
                        }`}
                    >
                        {p}
                    </div>
                ))}
                <div className="h-10 flex justify-center items-center snap-center"></div>
            </div>
            <div
                className="overflow-y-scroll h-[120px] w-[100px] mx-6 snap-y snap-mandatory scrollbar-hide"
                onScroll={(e) => handleScroll(setHour, hours, e)}
                ref={hourRef}
            >
                <div className="h-10 flex justify-center items-center snap-center"></div>
                {hours.map((h) => (
                    <div
                        key={h}
                        className={`h-10 flex justify-center items-center snap-center ${
                            h === hour ? 'font-medium' : 'dark:text-gray-400'
                        }`}
                    >
                        {h}
                    </div>
                ))}
                <div className="h-10 flex justify-center items-center snap-center"></div>
            </div>
            <div
                className="overflow-y-scroll h-[120px] w-[100px] snap-y snap-mandatory scrollbar-hide"
                onScroll={(e) => handleScroll(setMinute, minutes, e)}
                ref={minuteRef}
            >
                <div className="h-10 flex justify-center items-center snap-center"></div>
                {minutes.map((m) => (
                    <div
                        key={m}
                        className={`h-10 flex justify-center items-center snap-center ${
                            m === minute ? 'font-medium' : 'dark:text-gray-400'
                        }`}
                    >
                        {m}
                    </div>
                ))}
                <div className="h-10 flex justify-center items-center snap-center"></div>
            </div>
            <div className="absolute h-8 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900 bottom-0 w-full"></div>
            <div className="absolute h-8 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent top-0 w-full"></div>
        </div>
    );
};

export default CustomTimePicker;
