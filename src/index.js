import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



let posts=[
    {id:1,message:'Hi, how are you ?',likesCount:20},
    {id:2,message:'Its my first post',likesCount:15},
    {id:3,message:'She really busy',likesCount:50}
  
  ];

let dialogs = [
    { id: 1, name: "Bogdan" },
    { id: 2, name: "Hamza" },
    { id: 3, name: "Misha" },
    { id: 4, name: "Lesha" },
    { id: 5, name: "Vovav" }
  ];

let messages = [
    { id: 1, message: "Hellloooooo" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Fine bro" }
  ];


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
