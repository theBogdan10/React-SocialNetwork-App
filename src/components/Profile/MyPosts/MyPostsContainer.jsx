/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import MyPosts from './MyPosts';
import {addPostActionCreator,updtNewPostActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';


let mapStateToProps=(state)=>{
	return{
		posts:state.profilePage.posts,
		newPostText:state.profilePage.newPostText
	};
};

let mapDispatchToProps=(dispatch)=>{
	return{
		updateNewPostText:(text)=>{
			let action=updtNewPostActionCreator(text);
			dispatch(action);
		},

		addPost:()=>{
			dispatch(addPostActionCreator());
		}
	};
};

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
