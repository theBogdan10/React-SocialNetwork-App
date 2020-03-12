/* eslint-disable indent */
/* eslint-disable no-case-declarations */
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you ?', likesCount: 20 },
				{ id: 2, message: 'Its my first post', likesCount: 15 },
				{ id: 3, message: 'She really busy', likesCount: 50 }
			],
			newPostText: 'Hello'
		},

		dialogsPage: {
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
		},

		sideBar: {
		}
	},

	_callSubscr() {
		console.log('State changed'); 
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscr = observer;
	},

	dispatch(action) {

		this._state.profilePage=profileReducer(this._state.profilePage,action);
		this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
		this._state.sidebar=sidebarReducer(this._state.sidebar,action);
		this._callSubscr(this._state);

	}
};





export default store;