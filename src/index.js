import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './Redux/State';
import App from './App';


// addPost('hoho');
let renderEntireTree = (state) => {
ReactDOM.render(
  <App state={state} 
       addPost={store.addPost.bind(store)} 
       updatePostData={store.updatePostData.bind(store)} 
       addMessage={store.addMessage.bind(store)} 
       updateMessage={store.updateMessage.bind(store)} />
    , document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
