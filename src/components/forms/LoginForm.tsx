'use client';

import { useState } from 'react';
import { Input, CheckBox, Submit } from '../common/Input';
const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    return (
        <form className="flex flex-col px-5 gap-4">
            <Input type="email" value={email} onChange={handleEmailChange} placeholder="이메일" />
            <Input type="paswword" value={password} onChange={handlePasswordChange} placeholder="비밀번호" />
            <CheckBox label="아이디 저장" />
            <Submit className="mt-2" value="로그인" />
        </form>
    );
};

export default LoginForm;
