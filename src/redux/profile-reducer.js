/* eslint-disable no-case-declarations */
const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

let initialState={
	posts: [
		{ id: 1, message: 'Hi, how are you ?', likesCount: 20 },
		{ id: 2, message: 'Its my first post', likesCount: 15 },
		{ id: 3, message: 'She really busy', likesCount: 50 }
	],
	newPostText: 'Hello'
};

const profileReducer= (state=initialState,action) => {

	switch (action.type) {
	case ADD_POST:
		let newPost = {
			id: 5,
			message: state.newPostText,
			likesCount: 0
		};
		state.posts.push(newPost);
		state.newPostText = '';
		return state;
	case UPDATE_NEW_POST_TEXT:
		state.newPostText =action.newText;
		return state;
	default:
		return state;
	}
	
};

export const addPostActionCreator= () => ({type:ADD_POST});

export const updtNewPostActionCreator= (msg) => ({
	type:UPDATE_NEW_POST_TEXT,
	newText:msg,
});


export default profileReducer;