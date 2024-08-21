import React from 'react';
import UserCard from './UserCard';

const SnapUserCard = () => {
    return (
        <div className="overflow-x-auto snap-x snap-mandatory flex scrollbar-hide">
            <div className="flex space-x-4 p-4">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
        </div>
    );
};

export default SnapUserCard;
