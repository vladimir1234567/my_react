import {renderEntireTree} from '../render';

let state = {
    ProfilePage: {
        PostData: [
            {id: 1, message: 'hi!', likesCount: 4},
            {id: 2, message: 'hello!', likesCount: 3},
            {id: 3, message: 'O`key!!', likesCount: 5},
            {id: 4, message: 'hello my dear frшутв!!!', likesCount: 5}
        ]
    },
    dialogsPage: {
        DialogsData: [
            {name: 'Dimych', id: 1},
            {name: 'Andrey', id: 2},
            {name: 'Sveta', id: 3},
            {name: 'Sasha', id: 4},
            {name: 'Valera', id: 5}
        ],
        MessagesData: [
            {message: 'hi', id: 1},
            {message: 'hello!', id: 2},
            {message: 'o`key!', id: 3},
            {message: 'Let`s go', id: 4},
            {message: 'Yo-ho!', id: 5}
        ]
    }
}

export default state;

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.ProfilePage.PostData.push(newPost);
    renderEntireTree(state);
}
