import { IconFilterL } from '@/components/Icons';

interface ButtonFilterProps {
    onClick: () => void;
}

const ButtonFilter = ({ onClick }: ButtonFilterProps) => {
    return (
        <button
            className="flex items-center text-sm px-4 py-2 border rounded-xl border-gray-400 gap-1 hover:border-white transition"
            onClick={onClick}
        >
            <div className="w-4 h-4 flex items-center justify-center">
                <IconFilterL />
            </div>
            필터
        </button>
    );
};

export default ButtonFilter;
