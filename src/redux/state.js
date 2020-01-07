import {rerenderEntireTree} from '../render';


let state={
	profilePage:{
		posts:[
			{id:1,message:'Hi, how are you ?',likesCount:20},
			{id:2,message:'Its my first post',likesCount:15},
			{id:3,message:'She really busy',likesCount:50}
          
		],
		newPostText:'Hello'
	},
    
	dialogsPage:{
		dialogs : [
			{ id: 1, name: 'Bogdan' },
			{ id: 2, name: 'Hamza' },
			{ id: 3, name: 'Misha' },
			{ id: 4, name: 'Lesha' },
			{ id: 5, name: 'Vovav' }
		],
    
		messages : [
			{ id: 1, message: 'Hellloooooo' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'Fine bro' }
		],  
	},

	sideBar:{
        
	}
   
};

export let addPost=()=>{
	let newPost={
		id:5,
		message:state.profilePage.newPostText,
		likesCount:0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText='';
	rerenderEntireTree(state);

};

export let updateNewPostText=(newText)=>{
	state.profilePage.newPostText=newText;
	rerenderEntireTree(state);
};


export default state;