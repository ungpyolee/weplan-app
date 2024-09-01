interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
}

const CheckBox = ({ name, label, ...props }: CheckBoxProps) => {
    return (
        <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="peer sr-only" name={name} value={label} {...props} />
            <div className="w-16 py-2 text-center border cursor-pointer dark:border-gray-400 dark:text-gray-400 rounded-xl  dark:peer-checked:border-white dark:peer-checked:text-white peer-checked:border-primary peer-checked:text-primary">
                {label}
            </div>
        </label>
    );
};

export default CheckBox;
