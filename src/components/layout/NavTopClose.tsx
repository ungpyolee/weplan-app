import { ButtonBack } from '../common/Button';
import { IconClose } from '../Icons';
interface TopNavProps {
    title: string;
    onClick: () => void;
}
const NavTopClose = ({ title, onClick }: TopNavProps) => {
    return (
        <div className="fixed top-0 flex px-6 pt-5 pb-4 items-center w-full max-w-[600px] bg-white dark:bg-black border-b dark:border-gray-800 z-10 justify-between">
            <div className="w-5"></div>
            {title}
            <button className="w-5" onClick={onClick}>
                <IconClose className="dark:fill-white" />
            </button>
        </div>
    );
};

export default NavTopClose;
