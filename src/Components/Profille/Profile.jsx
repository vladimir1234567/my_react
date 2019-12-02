import React from 'react';
import s from './Profile.module.css';
import ProfData from './ProfData/ProfData';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    console.log(props);
    return (
        <div className={s.profile}>
           <ProfData />
           <MyPosts PostData={props.PostData} addPost={props.addPost} />
        </div>
    );
}

export default Profile;