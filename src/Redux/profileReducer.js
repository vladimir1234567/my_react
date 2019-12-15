
const ADD_POST = 'ADD-POST';
const UPDATE_POST_DATA = 'UPDATE-POST-DATA';

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostData,
                likesCount: 0
            }
            state.PostData.push(newPost);
            state.newPostData = ''; 
            return state;
        case UPDATE_POST_DATA:
             state.newPostData = action.newText;
             return state;
        default:
            return state;  
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostDataActionCreator = (text) => ({type: UPDATE_POST_DATA, newText: text});

export default profileReducer;