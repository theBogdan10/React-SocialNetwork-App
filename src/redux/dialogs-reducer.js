/* eslint-disable no-case-declarations */
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';


export const dialogsReducer= (state,action) => {

	switch (action.type) {
	case UPDATE_NEW_MESSAGE_BODY:		
		state.newMessageBody =action.body;
		return state;
	case SEND_MESSAGE:		
		let body=state.newMessageBody;
		state.newMessageBody='';
		state.messages.push({id:4,message:body});
		return state;
	default:
		return state;
	}
};

export const sendMsgCreator= () => ({type:SEND_MESSAGE});

export const updtNewMsgBodyCreator= (textBody) => ({
	type:UPDATE_NEW_MESSAGE_BODY,
	body:textBody,
});

export default dialogsReducer;