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
        <form className="flex flex-col px-5">
            <Input type="email" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요" />
            {/* <Input type="paswword" value={password} onChange={handlePasswordChange} placeholder="비밀번호" /> */}
            <Submit className="mt-3" value="계속하기" />
        </form>
    );
};

export default LoginForm;
