interface EmailInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const EmailInput = ({ value, onChange, placeholder }: EmailInputProps) => {
    return (
        <input
            type="email"
            value={value}
            onChange={onChange}
            placeholder={placeholder || '이메일'}
            required
            className="h-14 rounded-xl border border-gray-500 px-5 bg-transparent hover:border-white focus:border-primary focus:outline-none transition"
        />
    );
};

export default EmailInput;
