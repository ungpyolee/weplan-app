import { ButtonBack } from '../common/Button';
import { IconClose } from '../Icons';
interface TopNavProps {
    title: string;
}
const NavTopClose = ({ title }: TopNavProps) => {
    return (
        <div className="fixed top-0 flex px-6 py-5 items-center w-full max-w-[600px] bg-white dark:bg-black border-b dark:border-gray-800 z-10 justify-between">
            <div className="w-5"></div>
            {title}
            <button className="w-5">
                <IconClose className="dark:fill-white" />
            </button>
        </div>
    );
};

export default NavTopClose;
