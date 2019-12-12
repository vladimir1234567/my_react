let store = {
    _state: {
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
    },

    _callSubscriber () {
        console.log('state changed');
    },

    getState () {
        return this._state;
    },

    subscribe (observer) {// pattern for avoid cyclic dependence

        this._callSubscriber = observer;//renderEntireTree - global 
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.ProfilePage.newPostData,
                likesCount: 0
            };
            this._state.ProfilePage.PostData.push(newPost);
            this._state.ProfilePage.newPostData = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-POST-DATA') {
            this._state.ProfilePage.newPostData = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let NewMessage = {
                id: 6,
                message: this._state.dialogsPage.newmes
            }
            this._state.dialogsPage.MessagesData.push(NewMessage);
            this._state.dialogsPage.newmes = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-MESSAGE') {
            this._state.dialogsPage.newmes = action.newMessText;
            this._callSubscriber(this._state);
        } 
    }
 }

export default store;
window.store = store;

