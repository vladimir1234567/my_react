import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <Post message={'hi'} likesCount={'4'} />
            <Post message={'hello'} likesCount={'3'} />
        </div>
    );
}

export default MyPosts;