import React, { Component } from 'react'
import { 
	View, 
	Text, 
	StyleSheet, 
	Alert,
	FlatList,
	TouchableOpacity 
} from 'react-native'
import TopNavBar from '../common/TopNavBar'
import { borders, paddings, fontSizes } from '../constants/Measurements'
import { colors } from '../constants/Colors'
import { Actions } from 'react-native-router-flux'
import questionsAndAnswers from '../resources/questionsAndAnswers.json'
import Button from '../common/Button'
import OptionCard from '../common/OptionCard'

export default class Quiz extends Component {

	constructor(props){
    	super(props)
    	this.state = {
    		questionNumber: 0,
    		questions: questionsAndAnswers.questions,
    		currentQuestion: '',
    		selectedOption: 0,
    		currentOptions: []
    	}
  	}

  	componentDidMount() {
  		this.setState({ questions: questionsAndAnswers.questions})
  		this.askNextQuestion()
  	}

	onBackPress = () => {
		Actions.pop()	
	}

	onCheckPress = () => {
		if(this.state.selectedOption === 0){
			this.showAlert('Error!', 'Please select an option first')
		}else{

			if(this.state.selectedOption === this.state.questions[this.state.questionNumber-1].answer){
				this.showAlert('Hurray!','This is the correct answer', this.askNextQuestion )
			}else{
				this.showAlert(
					'OOPS!', 
					'The correct answer is ' + this.state.questions[this.state.questionNumber-1].answer,
					this.askNextQuestion
					)
			}

		}
		this.setState({selectedOption: 0})
	}

	
	askNextQuestion = () => {

		const currentQstNum = (this.state.questionNumber+1)
		console.log('current question number = ' + currentQstNum)

		if(currentQstNum<=this.state.questions.length){

			this.setState({questionNumber: currentQstNum})
			this.setState({ currentOptions: this.state.questions[currentQstNum-1].options })
			this.setState({currentQuestion: this.state.questions[currentQstNum-1].question})

		}else{
			this.showAlert(
				'Congrats!',
				'Hey there, You have successfuly completed the quiz',
				this.onBackPress
				)
		}
	}

	onOptionSelected = (item) => {
		let newOptionList = this.state.currentOptions
	
		this.setState({selectedOption: item.optionNumber})
		for(let i=0; i<this.state.currentOptions.length; i++){
			
			if(item.optionNumber === this.state.currentOptions[i].optionNumber){
		
				newOptionList[i].isSelected = true
			}else {
		
				newOptionList[i].isSelected = false
			}
		}
		
		this.setState({currentOptions: newOptionList})

	}

	showAlert = (title, message, action) => {
		Alert.alert(
  					title,
  					message,
  					[
    					{ text: 'OK', onPress: () => action() },
  					],
  					{ cancelable: false }
				);
	}

	render() {
		const { 
			container, 
			quizContainer, 
			question, 
			optionContainer,
			buttonContainer 
		} = styles


		const q = this.state.questionNumber + '/' + this.state.questions.length


		return(
				<View style={container}>
					<TopNavBar 
						title='Questions'
						onBackPress={this.onBackPress}
						leftText='❮'
						rightText={q}
					/>
					<View style={quizContainer}>
						<Text style={question}>{this.state.currentQuestion}</Text>
						
							{
								this.state.questionNumber > 0 ?
									<View style={optionContainer}>
									<FlatList
							          data={this.state.currentOptions}
							          renderItem={({ item }) => (
							           <TouchableOpacity onPress={() => this.onOptionSelected(item)}>
							            <OptionCard 
							            	image={item.image}
							            	title={`Option number : ${item.optionNumber}`}
							            	isSelected={item.isSelected}
								            />
								        </TouchableOpacity>    
								          )}
								          numColumns={2}
								          keyExtractor={(item, index) => index}
								          extraData={this.state}
								        />
								     
							        </View>
							       
							        :
							        <View style={optionContainer}/>

							}
							
						
						<Button 
							name='Check'
							onPress={this.onCheckPress}
						/>
					</View>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems:'center'
	},
	quizContainer: {
		flex: 0.9,
		width: '100%',
		flexDirection:'column',
		alignItems: 'center',
		justifyContent: 'space-between' 
	},
	question: {
		fontSize: fontSizes.text,
		color: colors.text.question,
		paddingHorizontal: paddings.screen.horizontal,
		paddingVertical: paddings.screen.vertical
	},
	optionContainer: {
		height: '70%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},

})