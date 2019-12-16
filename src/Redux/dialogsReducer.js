const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            let NewMessage = {
                id: 6,
                message: state.newmes
            }
            state.MessagesData.push(NewMessage);
            state.newmes = '';
            return state;
        case UPDATE_MESSAGE:
            state.newmes = action.newMessText; 
            return state;
        default:
                return state; 
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newMessText: text});

export default dialogsReducer;