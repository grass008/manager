import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase'
import reducers from './reducers'

const store = createStore(reducers);

class App extends Component {
	componetWillMount() {
		const config = {
    		apiKey: 'AIzaSyA1dr9Nl5rqHMsfR32Hcvza1rLI3plT_nA',
   			authDomain: 'manager-693c6.firebaseapp.com',
    		databaseURL: 'https://manager-693c6.firebaseio.com',
    		projectId: 'manager-693c6',
    		storageBucket: 'manager-693c6.appspot.com',
    		messagingSenderId: '806765340083'
  		};
  		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={store}>
				<View>
					<Text>
						Hello world!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;