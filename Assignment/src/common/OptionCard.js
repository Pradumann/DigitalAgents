import React from 'react'
import {  
	View, 
	Text, TouchableOpacity, 
	StyleSheet, 
	Image ,
	Dimensions
} from 'react-native';
import { colors } from '../constants/Colors';
import { borders, paddings, fontSizes } from '../constants/Measurements'
const { width, height } = Dimensions.get('window')

const OptionCard = ({image, title, isSelected,}) => {

	console.log(' is selected = ' + isSelected)
	const styles = StyleSheet.create({

	container: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: height*0.7*0.45,
		width: width*0.45,
		borderRadius: borders.card.radius
	},
	img: {
		height: height*0.7*0.45*0.6,
		width: width*0.45*0.9,
		borderTopLeftRadius: borders.card.radius,
		borderTopRightRadius: borders.card.radius
	},
	titleContainer: {
		height: height*0.7*0.45*0.2,
		width: width*0.45*0.9,
		borderBottomLeftRadius: borders.card.radius,
		borderBottomRightRadius: borders.card.radius,
		backgroundColor: '#fff',
		paddingVertical: paddings.card.vertical,
		paddingHorizontal:  paddings.card.horizontal,
	},
	overlay: {
	    position: 'absolute',
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: colors.background.tick,
	    left: 20,
	    right: 0,
	    top: 10,
	    bottom: 0,
	    height: 16,
	    width: 16,
	    borderRadius: 16,
	  },
	tick: {
		color: colors.text.tick,
		fontSize: fontSizes.tick
	}
	});

	const base64 = 'data:image/png;base64,' + image

	const {
		container, 
		innerContainer, 
		img,
		titleContainer,
		tick,
		overlay
	} = styles

	return(
			
				<View style={container}>
		
					<Image 
						style={img}
						source={{uri: base64}}
					/>
	
					<View style={titleContainer}>
						<Text>{title}</Text>
					</View>
					{
						isSelected ?
						<View style={overlay}>
							<Text style={tick}>✓</Text>
						</View>
						:
						<View />
					}
					
				</View>

		)
}

export default OptionCard
