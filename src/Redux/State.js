import {renderEntireTree} from '../render';

let state = {
    ProfilePage: {
        PostData: [
            {id: 1, message: 'hi!', likesCount: 4},
            {id: 2, message: 'hello!', likesCount: 3},
            {id: 3, message: 'O`key!!', likesCount: 5},
            {id: 4, message: 'hello my dear frшутв!!!', likesCount: 5}
        ],
        newPostData: 'Привет, как дела?'
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
        ],
        newmes: 'хорошо!'
    }
}

export default state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.ProfilePage.newPostData,
        likesCount: 0
    };
    state.ProfilePage.PostData.push(newPost);
    state.ProfilePage.newPostData = '';
    renderEntireTree(state);
}

export let updatePostData = (newText) => {
    state.ProfilePage.newPostData = newText;
    renderEntireTree(state);
}

export let addMessage = () => {
    let NewMessage = {
        id: 6,
        message: state.dialogsPage.newmes
    }
    state.dialogsPage.MessagesData.push(NewMessage);
    state.dialogsPage.newmes = '';
    renderEntireTree(state);
}

export let updateMessage = (newText) => {
    state.dialogsPage.newmes = newText;
    renderEntireTree(state);
}