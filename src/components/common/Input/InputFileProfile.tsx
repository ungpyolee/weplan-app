import React from 'react';

const InputFileProfile = () => {
    return (
        <label className="inline-flex items-center justify-center h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white px-4 rounded-xl transition whitespace-nowrap cursor-pointer">
            사진 변경
            <input type="file" name="profile image" accept="image/png, image/jpeg" className="hidden" />
        </label>
    );
};

export default InputFileProfile;
