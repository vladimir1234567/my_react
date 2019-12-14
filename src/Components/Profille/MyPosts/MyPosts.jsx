import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostDataActionCreator} from '../../../Redux/State';




const MyPosts = (props) => {
    

    let MessageElements = props.PostData.map(mesitem => 
            <Post message={mesitem.message} likesCount={mesitem.likesCount} /> );

    let newPostEl = React.createRef();

    let addPost = () => {
        // let text = newPostEl.current.value;
        props.dispatch(addPostActionCreator());
        // newPostEl.current.value = '';
    }

    let updatePostData = () => {
        let text = newPostEl.current.value;
        props.dispatch(updatePostDataActionCreator(text));
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={ newPostEl } 
                value={props.newPostData} 
                onChange={updatePostData} />
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
                  {MessageElements}
        </div>
    );
}

export default MyPosts;