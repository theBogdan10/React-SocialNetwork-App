/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

	return (
		<div>
			<ProfileInfo  />
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;
