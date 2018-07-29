import React from 'react'
import nanoid from 'nanoid'
import styled from 'styled-components'

import './App.css';
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

const StyledApp = styled.div`
	display: flex;
  	flex-flow: column;
 	justify-content: center;
	align-items: center;
	background-color: #fffbe6;
`;
class App extends React.Component {
	state = {
		todos: []
	}

	handleAddTodo = (todoText) => {
		if (todoText)
			this.setState({
				todos: this.state.todos.concat({ text: todoText, id: nanoid(), checked: false })
			})
	}

	handleClearList = () => {
		this.setState({
			todos: []
		})
	}

	handleCheckTodo = id => {
		this.setState((prev) => ({
			todos: prev.todos.map(todo =>
				todo.id === id
					? { ...todo, checked: !todo.checked }
					: todo
			)
		}))
	}

	handleDeleteTodo = id => {
		this.setState((prev) => {
			return { todos: prev.todos.filter(todo => todo.id !== id) }
		})
	}

	render() {
		return (
			<StyledApp>
				<TodoForm
					addTodo={this.handleAddTodo}
					clearList={this.handleClearList}
				/>
				<TodoList
					todos={this.state.todos}
					checkTodo={this.handleCheckTodo}
					removeTodo={this.handleDeleteTodo}
				/>
			</StyledApp >
		)
	}
}

export default App
