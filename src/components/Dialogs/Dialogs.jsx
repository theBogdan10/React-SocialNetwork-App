/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updtNewMsgBodyCreator,sendMsgCreator} from '../../redux/state';

const Dialogs = (props) => {
	
	let state=props.store.getState().dialogsPage; 

	let dialogsElements = state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} /> ));
	let messagesElements = state.messages.map(m => <Message message={m.message} />);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMsgCreator())

	};

	let onNewMessageChange = (event) => {
		let body=event.target.value;
		props.store.dispatch(updtNewMsgBodyCreator(body))
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div><textarea className={s.area} placeholder='Write your message' 
													  value={newMessageBody} 
													  onChange={onNewMessageChange}></textarea></div>
					<div><button className={s.btn} onClick={onSendMessageClick}>Sent</button></div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
