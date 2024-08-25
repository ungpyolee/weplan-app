interface ButtonManagePost {
    onClick: () => void;
}

const ButtonManagePost = ({ onClick }: ButtonManagePost) => {
    return (
        <div>
            <button onClick={onClick} className="flex gap-1.5 py-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            </button>
        </div>
    );
};

export default ButtonManagePost;
