/* eslint-disable indent */
/* eslint-disable no-case-declarations */
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
		switch (action.type) {
			case 'ADD-POST':
				let newPost = {
					id: 5,
					message: this._state.profilePage.newPostText,
					likesCount: 0
				};
				this._state.profilePage.posts.push(newPost);
				this._state.profilePage.newPostText = '';
				this._callSubscr(this._state);
				break;
			case 'UPDATE-NEW-POST-TEXT':
				this._state.profilePage.newPostText =action.newText;
				this._callSubscr(this._state);
				break;
		}
	}
};

export default store;