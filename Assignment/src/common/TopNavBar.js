import React from 'react'
import { 
	View, 
	Text, 
	StyleSheet,
	TouchableOpacity 
} from 'react-native'
import { colors } from '../constants/Colors'
import { paddings, borders, fontSizes } from '../constants/Measurements'

const TopNavBar = ({ title, onBackPress, leftText, rightText }) => {

	const { container, titleText, subText } = styles

	return (

			<View style={container}>
				<TouchableOpacity 
					onPress={onBackPress}
				> 
					<Text style={subText}> {leftText} </Text>
				</TouchableOpacity>
				<Text style={titleText}>{title}</Text>
				<Text style={subText}> {rightText} </Text>
			</View>

		);
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
   	flexDirection: 'row',
   	backgroundColor: colors.header.quiz,
   	alignItems: 'center',
   	justifyContent: 'space-between',
   	paddingVertical: paddings.navBar.vertical,
   	paddingHorizontal: paddings.navBar.horizontal
  },

  titleText: {
  	fontSize: fontSizes.header,
  	color: colors.text.header,
  	fontWeight: 'bold'
  },

  subText: {
  	fontSize: fontSizes.text,
  	color: colors.text.header,
  }

});

export default TopNavBar;