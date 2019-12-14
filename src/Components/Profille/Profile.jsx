import React from 'react';
import s from './Profile.module.css';
import ProfData from './ProfData/ProfData';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    
    return (
        <div className={s.profile}>
           <ProfData />
           <MyPosts PostData={props.PostData} 
                    dispatch={props.dispatch} 
                    newPostData={props.newPostData}  />
        </div>
    );
}

export default Profile;