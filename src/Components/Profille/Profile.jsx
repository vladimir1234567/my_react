import React from 'react';
import s from './Profile.module.css';
import ProfData from './ProfData/ProfData';

const Profile = () => {
    return (
        <div className={s.profile}>
           <ProfData />
        </div>
    );
}

export default Profile;