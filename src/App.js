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
                    todoItems: this.state.todoItems.concat(todoText)
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
                    onTodoAdd={this.handleAdd}
                    onClearList={this.handleClearList}
                />
                <TodoList items={this.state.todoItems}
                          onItemDelete={this.handleItemDelete}
                />
            </div>
        );
    }
}

export default App
