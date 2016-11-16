import React, { Component } from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import LoggedInLayout from './layout/loggedIn/LoggedInLayout';
import NotLoggedInLayout from './layout/notloggedin/NotLoggedInLayout';
import Message from './message/Message';
import Channel from './channel/Channel';
import Profile from './account/Profile';
import Chat from './chats/ChatBox';
import Login from './login/Login';
import ForgotPassword from './login/ForgotPassword';

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state={loggedIn : true};
	}
	render() {
		
		if(this.state.loggedIn)
		{
		return (
			<Router history={hashHistory}>
			<Route path="/" component={LoggedInLayout}>
			<IndexRoute component={Message}></IndexRoute>
			<Route path="chat/" component={Chat}></Route>
			<Route path="addChannel/" component={Channel}></Route>
			<Route path="profile/" component={Profile}></Route>
			<Route path="buddy/" component={Channel}></Route>
			</Route>
			</Router>
			);
		}
		else
		{
			
		return (
			<Router history={hashHistory}>
			<Route path="/" component={NotLoggedInLayout}>
				<IndexRoute component={Login}></IndexRoute>
				<Route path="ForgotPassword/" component={ForgotPassword}></Route>
			</Route>
			</Router>
			);	
		}
	}
}

export default App;