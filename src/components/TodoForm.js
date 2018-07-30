import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
    display: flex;
    flex-flow: column;
    margin: 1rem;
    align-items: stretch;
    margin-bottom: 1rem;    
    width: 60%;
    @media (max-width: 470px) {
        width: 100%
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    padding: .5rem 0;
    justify-content: stretch;    
`

const StyledInput = styled.input`
    text-align: left;
    border: 1px solid #cecece;
    outline: none;
    height: 2em;
    padding: .5em;
    background: #F6F6f6;
	border-radius: 3px;
    margin: .5rem;
`

const Button = styled.button`
    flex-grow: 1;
    outline: none;
    padding: 1em;
    background-color: #fffbe6;
    margin: 0 .5rem;
    font-size: 15px;
    :hover {
        background-color: #F0F8FF;
    }
`
const AddButton = Button.extend`
    color: blue;
    border: solid 0.5px blue;
`

const ClearButton = Button.extend`  
    color: #b00;
    border: solid 0.5px #b00;
`

export class TodoForm extends React.Component {

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

    handleEnterPress = (e) => {
        if (e.key === 'Enter')
            this.handleAddClick(e)
    }

    handleAddClick = (e) => {
        this.props.addTodo(this.state.inputText)
        this.setState(
            {
                inputText: ''
            }
        )
    }

    render() {
        const { clearList } = this.props
        return (
            <StyledForm>
                <h1>TODO List:</h1>
                <StyledInput
                    type="text"
                    placeholder="Type todo text here and click enter or Add"
                    onKeyPress={this.handleEnterPress}
                    value={this.state.inputText}
                    onChange={this.handleInputChange}
                />
                <ButtonWrapper>
                    <AddButton onClick={this.handleAddClick}>Add</AddButton>
                    <ClearButton onClick={() => clearList()}>Clear List</ClearButton>
                </ButtonWrapper>
            </StyledForm>
        )
    }
}