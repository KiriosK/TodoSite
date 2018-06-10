import React, {Component} from 'react'

import './styles.css'

class AddTodoForm extends Component {

    handleInputChange = (e) => {
        this.props.onInputChange(e.target.value)
    }

    handleAdd = (e) => {
        this.props.onAddClick()
        e.preventDefault()
    }

    handleClear = (e) => {
        this.props.onClearClick()
    }



    render() {
        return (
            <div>
                <input type="text" value={this.props.inputText} onChange={this.handleInputChange}/>
                <input type="button" value="Add" onClick={this.handleAdd}/>
                <input type="button" value="Clear List" onClick={this.handleClear}/>
            </div>
        )
    }
}

export default AddTodoForm