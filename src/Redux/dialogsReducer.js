const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {

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