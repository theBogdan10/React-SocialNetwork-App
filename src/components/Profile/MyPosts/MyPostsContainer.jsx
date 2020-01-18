/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator,updtNewPostActionCreator} from '../../../redux/profile-reducer';


const MyPostsContainer = (props) => {
    
	let state=props.store.getState();

	let addPost=()=>{
		props.store.dispatch(addPostActionCreator());
	};

	let onPostChange=(text)=>{
		props.store.dispatch(updtNewPostActionCreator(text));
	};
 
	return (
		<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
	);
};

export default MyPostsContainer;