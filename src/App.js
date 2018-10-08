import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	configFirebase() {
		const config = {
    		apiKey: 'AIzaSyA1dr9Nl5rqHMsfR32Hcvza1rLI3plT_nA',
   			authDomain: 'manager-693c6.firebaseapp.com',
    		databaseURL: 'https://manager-693c6.firebaseio.com',
    		projectId: 'manager-693c6',
    		storageBucket: 'manager-693c6.appspot.com',
    		messagingSenderId: '806765340083'
  		};
  		console.log('here we are')
  		firebase.initializeApp(config);
	};

	componetWillMount() {
		this.configFirebase();
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		this.configFirebase();

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;