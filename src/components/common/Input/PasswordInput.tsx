interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

const PasswordInput = ({ value, onChange, placeholder, type }: PasswordInputProps) => {
    return (
        <input
            type={type || 'text'}
            value={value}
            onChange={onChange}
            placeholder={placeholder || '내용을 입력해주세요'}
            required
            className="h-14 rounded-xl border border-gray-500 px-5 bg-transparent hover:border-white focus:border-primary focus:outline-none transition"
        />
    );
};

export default PasswordInput;
