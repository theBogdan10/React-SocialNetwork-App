/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Dialogs from './Dialogs'
import {updtNewMsgBodyCreator,sendMsgCreator} from '../../redux/dialogs-reducer';
 
const DialogsContainer = (props) => {

	let state=props.store.getState();

	let onSendMessageClick = () => {
		props.store.dispatch(sendMsgCreator());

	};

	let onNewMessageChange = (body) => {
		props.store.dispatch(updtNewMsgBodyCreator(body));
	};

	return (
		<Dialogs updtNewMsgBodyCreator={onNewMessageChange}
				 sendMessage={onSendMessageClick}	 
				 dialogsPage={state.dialogsPage}
				/>
	);
};

export default DialogsContainer;
