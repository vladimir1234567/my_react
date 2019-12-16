
const ADD_POST = 'ADD-POST';
const UPDATE_POST_DATA = 'UPDATE-POST-DATA';

let initialState = {
    PostData: [
        {id: 1, message: 'hi!', likesCount: 4},
        {id: 2, message: 'hello!', likesCount: 3},
        {id: 3, message: 'O`key!!', likesCount: 5},
        {id: 4, message: 'hello my dear frшутв!!!', likesCount: 5}
    ],
    newPostData: 'Привет, как дела?'
};

const profileReducer = (state = initialState, action) => {

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