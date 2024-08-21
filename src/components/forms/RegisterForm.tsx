'use client';

import React, { useState } from 'react';
import { CheckBox, Input, Submit } from '../common/Input';

const RegisterForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value);
    };

    return (
        <form className="flex flex-col gap-4">
            <Input type="email" value={email} onChange={handleChangeEmail} placeholder="이메일" />
            <Input type="password" value={password} onChange={handleChangePassword} placeholder="비밀번호" />
            <Input
                type="password"
                value={passwordConfirm}
                onChange={handleChangePasswordConfirm}
                placeholder="비밀번호 확인"
            />
            <CheckBox label="아이디 저장" />

            <Submit className="mt-2" value="회원가입" />
        </form>
    );
};

export default RegisterForm;
