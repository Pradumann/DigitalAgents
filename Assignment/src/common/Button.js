import React from 'react';
import {  Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/Colors';
import { borders, paddings, fontSizes } from '../constants/Measurements'


const Button = ({ name, onPress }) => {
	return (
			<TouchableOpacity
			style={styles.button}
			onPress={onPress}
			>
				<Text
				style={styles.text}
				>
					{name}
				</Text>
			</TouchableOpacity>
		);
};

const styles = StyleSheet.create({
  button: {
  	width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.button,
    paddingVertical: paddings.button.vertical, 
	paddingHorizontal: paddings.button.horizontal, 
  },
  text: {
	color: colors.text.button,
	fontSize: fontSizes.button,
  }
});

export default Button;
