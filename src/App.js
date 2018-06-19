import React from 'react'

import './App.css';
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
    state = {
        todoItems: []

    }

    handleAdd = (todoText) => {
        if (todoText)
            this.setState(
                {
                    todoItems: this.state.todoItems.concat({text: todoText, id: this.generateId()})
                }
            )
    }

    generateId = () => {
        return '_' + Math.random().toString(36).substr(2, 9)
    }

    handleClearList = () => {
        this.setState(
            {
                todoItems: []
            }
        )
    }

    handleTodoDelete = id => {
        console.log(id);
        this.setState((prev) => {
                return {todoItems: prev.todoItems.filter(item => item.id !== id)}
            }
        )
    }

    render() {
        return (
            <div className="App">
                <h1>TODO List:</h1>
                <AddTodoForm
                    inputText={this.state.inputText}
                    onTodoAdd={this.handleAdd}
                    onClearList={this.handleClearList}
                />
                <TodoList todos={this.state.todoItems}
                          removeTodo={this.handleTodoDelete}
                />
            </div>
        );
    }
}

export default App
