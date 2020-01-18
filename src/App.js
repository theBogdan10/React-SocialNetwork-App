/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper-content">
				<Route path="/dialogs"
					render={() => <Dialogs state={props.state.dialogsPage} store={props.store} />} />
				<Route path="/profile"
					render={() => <Profile store={props.store}/>} /> 
			</div>
		</div>
	);
};

export default App;