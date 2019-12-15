import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import musikReducer from "./musikReducer";


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
        },

        MusikPage: {
            MusikList: [
                {composition: 'saber dance'},
                {composition: 'turkish march'}
            ],
            newCompName: 'seasons'
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

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.MusikPage = musikReducer(this._state.MusikPage, action);

        this._callSubscriber(this._state);
    }
 }

export default store;
window.store = store;

