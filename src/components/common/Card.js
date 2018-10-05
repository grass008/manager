import React from 'React';
import { Text, View } from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.containetStyle}>
			{props.children}
		</View>
		);
};

const styles = {
	containetStyle: {
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevetion: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
};

export { Card };
