'use client';

import { useState } from 'react';
import { Input } from '../common/Input';

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
        <form className="flex flex-col px-5">
            <Input type="email" value={email} onChange={handleEmailChange} placeholder="이메일" size="lg" />
            <Input type="paswword" value={password} onChange={handlePasswordChange} placeholder="비밀번호" size="lg" />
        </form>
    );
};

export default LoginForm;
