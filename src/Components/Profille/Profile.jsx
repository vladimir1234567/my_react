import React from 'react';
import s from './Profile.module.css';
import ProfData from './ProfData/ProfData';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.profile}>
           <ProfData />
           <MyPosts />
        </div>
    );
}

export default Profile;