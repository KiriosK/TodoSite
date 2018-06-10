import React, {Component} from 'react'

import './App.css';
import AddTodoForm from './containers/AddTodoForm'
import TodoList from './containers/TodoList'

class App extends Component {

    state = {
        inputText: '',
        todoItems: []

    }

    handleInputText = (todo) => {
        this.setState(
            {
                inputText: todo
            }
        )
    }

    handleAdd = () => {
        if (this.state.inputText !== '')
            this.setState(
                {
                    inputText: '',
                    todoItems: this.state.todoItems.concat(this.state.inputText)
                }
            )
    }

    handleClearList = () => {
        this.setState(
            {
                todoItems: []
            }
        )
    }

    render() {
        return (
            <div className="App">
                <h1>TODO List:</h1>
                <AddTodoForm
                    inputText={this.state.inputText}
                    onInputChange={this.handleInputText}
                    onAddClick={this.handleAdd}
                    onClearClick={this.handleClearList}
                />
                <TodoList items={this.state.todoItems}/>
            </div>
        );
    }
}

export default App
