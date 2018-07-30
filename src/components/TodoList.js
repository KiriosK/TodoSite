import React from 'react'
import styled from 'styled-components'

import { Todo, StyledText } from './Todo'

const List = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: stretch;    
    padding: 1rem;
    width: 60%;
    @media (max-width: 470px) {
        width: 100%
    }
`
const DeleteButton = styled.button`
    align-self: flex-end;
    outline: none;
    margin: 0 .1rem .1rem 0;
    padding: 1em;
    background-color: #EFEEEE;
    font-size: 15px;
    color: #b00;
    border: solid 0.5px #b00;
    :hover{
        background-color: #F0F8FF;
    }
`

export const TodoList = ({ todos, checkTodo, removeTodo }) => {

    return (
        <List>
            {todos.map(
                (todo) => (
                    <Todo key={todo.id} checked={todo.checked}>
                        <div>
                            <input type="checkbox" checked={todo.checked} onClick={() => checkTodo(todo.id)} />
                            <StyledText checked={todo.checked}>{todo.text}</StyledText>
                        </div>
                        <DeleteButton onClick={() => removeTodo(todo.id)}>Delete</DeleteButton>
                    </Todo>
                )
            )}
        </List>
    )
}