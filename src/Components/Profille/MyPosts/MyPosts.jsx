import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let PostData = [
        {message: 'hi!', likesCount: 4},
        {message: 'hello!', likesCount: 3},
        {message: 'O`key!!', likesCount: 5}
    ];

    let MessageElements = PostData.map(mesitem => 
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
            {/* <Post message={PostData[0].message} 
                  likesCount={PostData[0].likesCount} />
             <Post message={PostData[1].message} 
                  likesCount={PostData[1].likesCount} />
             <Post message={PostData[2].message} 
                  likesCount={PostData[2].likesCount} /> */}
                  {MessageElements}
        </div>
    );
}

export default MyPosts;