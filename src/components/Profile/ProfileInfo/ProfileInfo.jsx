import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

	if(!props.profile){
		return <Preloader />;
	}

	return (
		<div>
			
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} className={s.foto}/>
				<div>
					<p>Full Name: {props.profile.fullName}</p>
					<p>About me: {props.profile.aboutMe}</p>
					<p>Contacts: </p>
					<ul>
						<li>Facebook : {props.profile.contacts.facebook}</li>
						<li>Vk : {props.profile.contacts.vk}</li>
						<li>Instagram : {props.profile.contacts.instagram}</li>
						<li>Github : {props.profile.contacts.github}</li>
						<li>Twitter : {props.profile.contacts.twitter}</li>

					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
