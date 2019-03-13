import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../constants/Colors'
import { borders, paddings, fontSizes } from '../constants/Measurements'
import Button from '../common/Button'
import { Actions } from 'react-native-router-flux'

export default class Home extends Component {

	onStart = () => {
		Actions.quiz()
	}

	render() {
		const {
			container,
			title
		} = styles
		return(
				<View style={container}>
					<View />
					<Text style={title}>Welcome to Digital Agents</Text>
					<Button 
						name='Start Quiz'
						onPress={this.onStart}
					/>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colors.background.homeScreen,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: paddings.screen.vertical,
		paddingHorizontal: paddings.screen.horizontal
	},
	title: {
		fontSize: fontSizes.title,
		color: colors.text.title
	}
});