import React from 'react';
import ToDoList from './components/ToDoList'

class App extends React.Component {

	state = {
		userInput:'',
		list:[]
	}


	formHandler = (e)=>{
		e.preventDefault()
		this.setState( state => {
			const list = this.state.list.concat(state.userInput)
			return {
				list: list,
				userInput: ''
			}
		})
	}


	inputHandler = (e) => {
		this.setState({
			userInput: e.target.value
		})
	}


	editTask = (id) => {
		// iterete through state by id

		// replace the item with updated task

		// resave state
	}

	deleteTask = (id) => {
		this.setState( state => {
			const list = this.state.list.filter((el, idx) => idx !== id)
			return {
				list:list
			}

		})

	}

	render(){
		return (

				<div>
					<h1>Welcome to Task Master</h1>
					<form onSubmit={this.formHandler}>
						<input value={this.state.userInput} type="text" onChange={this.inputHandler}/>
						<button type="submit">Add Item</button>
					</form>
					<br/>
					<ToDoList tasks={this.state.list} deleteTask={this.deleteTask} />
					
				</div>

			)
	}
}

export default App;