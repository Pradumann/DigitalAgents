import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../components/Home'
import Quiz from '../components/Quiz'

 class Routes extends Component {
	render() {
		return(
				<View style={{flex: 1}}>
					<Router>
					      <Scene key = "root">
					         <Scene
					         key = 'home' 
					         component = {Home} 
					         hideNavBar
					         initial = {true}
					         />
							<Scene 
							key = "quiz" 
							component = {Quiz} 
							hideNavBar 
							/>
					      </Scene>
					   </Router>
				</View>
			)
	}
}

export default Routes;
