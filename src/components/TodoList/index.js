import React from 'react'

const TodoList = props => {

    const items = props.items
    const itemsList = items.map(
        (item) => (
            <li key={item.toString()}>
                {item}
            </li>
        )
    )
    return (
        <ul>
            {itemsList}
        </ul>
    )
}

export default TodoList