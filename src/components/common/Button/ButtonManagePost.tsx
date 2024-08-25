'use client';

interface ButtonManagePost {
    onClick: () => void;
}

const ButtonManagePost = ({ onClick }: ButtonManagePost) => {
    return (
        <div>
            <button onClick={onClick} className="flex gap-1.5 p-2 ms-2">
                <div className="w-1 h-1 rounded-full bg-white"></div>
                <div className="w-1 h-1 rounded-full bg-white"></div>
                <div className="w-1 h-1 rounded-full bg-white"></div>
            </button>
        </div>
    );
};

export default ButtonManagePost;
