import React from 'react'

const TodoList = ({todos, removeTodo}) => {

    return (
        <div>
            {
                todos.map(
                    (todo) => (
                        <p key={todo.id}>
                            {todo.text}
                            <input type="button" value="x" onClick={() => removeTodo(todo.id)} />
                        </p>
                    )
                )
            }
        </div>
    )
}

export default TodoList