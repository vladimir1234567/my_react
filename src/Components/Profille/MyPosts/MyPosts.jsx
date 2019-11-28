import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let MessageElements = props.PostData.map(mesitem => 
            <Post message={mesitem.message} likesCount={mesitem.likesCount} /> );

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
                  {MessageElements}
        </div>
    );
}

export default MyPosts;