import React, {Component} from 'react'

class TodoList extends Component {

    render() {
        const items = this.props.items
        return (
            <ul>
                {items.map(
                    (item) =>
                        <li key={item.toString()}>
                            {item}
                        </li>)
                }
            </ul>
        )
    }
}

export default TodoList