import React from 'react';
import s from './Post.module.css';
import userava from '../../../../Img/ava.jpg';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.contentmes}>
            <img src={userava} alt='userava' />
            {props.message}
            </div>
            <div>
                <span>Like</span>{props.likesCount}
            </div>
        </div>
    );
}

export default Post;