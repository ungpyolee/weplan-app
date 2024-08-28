import { ButtonBack } from '../common/Button';
interface NavTopProps {
    title: string;
}
const NavTopBack = ({ title }: NavTopProps) => {
    return (
        <div className="fixed top-0 flex px-6 py-5 items-center w-full max-w-[600px] bg-black border-b border-gray-800 z-10 justify-between">
            <ButtonBack />
            {title}
            <div className="w-6"></div>
        </div>
    );
};

export default NavTopBack;