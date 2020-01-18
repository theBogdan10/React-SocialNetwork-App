/* eslint-disable no-case-declarations */
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';

let initialState={
	dialogs: [
		{ id: 1, name: 'Bogdan' },
		{ id: 2, name: 'Hamza' },
		{ id: 3, name: 'Misha' },
		{ id: 4, name: 'Lesha' },
		{ id: 5, name: 'Vovav' }
	],

	messages: [
		{ id: 1, message: 'Hellloooooo' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Fine bro' }
	],
	
	newMessageBody:'',
};

export const dialogsReducer= (state=initialState,action) => {

	switch (action.type) {
	case UPDATE_NEW_MESSAGE_BODY:{	
		return {
			...state,
			newMessageBody:action.body
		};
	}
	case SEND_MESSAGE:{	
		let body=state.newMessageBody;
		return {
			...state,
			newMessageBody:'',
			messages:[...state.messages,{id:4,message:body}],
		};	
	}
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