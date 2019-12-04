import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './Redux/State';
import {updatePostData} from './Redux/State';

// addPost('hoho');
export let renderEntireTree = (state) => {
ReactDOM.render(
  <App state={state} 
       addPost={addPost} 
       updatePostData={updatePostData} />
    , document.getElementById('root'));
}

