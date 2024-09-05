import { ProfileForm } from '@/components/forms';
import { NavTopBack } from '@/components/layout';
import React from 'react';

const Profile = () => {
    return (
        <div className="flex flex-col min-h-screen justify-end">
            <NavTopBack title="프로필 관리" />
            <ProfileForm />
        </div>
    );
};

export default Profile;
