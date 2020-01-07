import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost,updateNewPostText} from './redux/state';
import { BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree=(param)=>{
	ReactDOM.render(
		<BrowserRouter>
			<App state={param} addPost={addPost}  updateNewPostText={updateNewPostText}/>
		</BrowserRouter>, 
		document.getElementById('root'));
};
