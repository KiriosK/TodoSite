import React from 'react'

import './styles.css'

class AddTodoForm extends React.Component {

    state = {
        inputText: ''
    }

    handleInputChange = (e) => {
        this.setState(
            {
                inputText: e.target.value
            }
        )
    }

    handleAddClick = (e) => {
        this.props.onTodoAdd(this.state.inputText)
        this.setState(
            {
                inputText: ''
            }
        )
    }

    handleClearClick = () => {
        this.props.onClearList()
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputText} onChange={this.handleInputChange}/>
                <input type="button" value="Add" onClick={this.handleAddClick}/>
                <input type="button" value="Clear List" onClick={this.handleClearClick}/>
            </div>
        )
    }
}

export default AddTodoForm