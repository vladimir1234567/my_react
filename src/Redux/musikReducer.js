const ADD_COMP = 'ADD-COMP';
const UPDATE_MUSIKLIST = 'UPDATE-MUSIKLIST';


const musikReducer = (state, action) => {

    switch(action.type) {
        case ADD_COMP:
            let newComposName = {
                composition: state.newCompName
            }
            state.MusikList.push(newComposName);
            state.newCompName = '';
            return state;
        case UPDATE_MUSIKLIST:
            state.newCompName = action.newCompText;
            return state; 
        default:
            return state;   
    }
}

export const addMusikActionCreator = () => ({type: ADD_COMP});

export const updateMusikActionCreator = (text) => ({type: UPDATE_MUSIKLIST, newCompText: text});

export default musikReducer;