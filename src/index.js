import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './Redux/State';
import App from './App';
import {addPost} from './Redux/State';
import {updatePostData} from './Redux/State';
import {addMessage} from './Redux/State';
import {updateMessage} from './Redux/State';

// addPost('hoho');
let renderEntireTree = (state) => {
ReactDOM.render(
  <App state={state} 
       addPost={addPost} 
       updatePostData={updatePostData} 
       addMessage={addMessage} 
       updateMessage={updateMessage} />
    , document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
