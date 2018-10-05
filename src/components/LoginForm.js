import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="E-Mail"
						placeholder="email@gmail.com"
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
					/>
				</CardSection>

				<CardSection>
					<Button>
						LOGIN
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;