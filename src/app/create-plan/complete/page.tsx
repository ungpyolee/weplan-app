import { NavCreateStatus } from '@/components/create-plan';
import { NavTopClose } from '@/components/layout';
import React from 'react';

const page = () => {
    return (
        <div className="pt-16">
            <NavTopClose title="새 일정 작성" />
            <NavCreateStatus />
        </div>
    );
};

export default page;
