import React, {Fragment} from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    
    const todos = useSelector(state => state)

    const hardCodedTodos = [
        {
            id: 1,
            todoPrompt: 'fix my car'
        },
        {
            id: 2,
            todoPrompt: 'get my stimmy'
        },
        {
            id: 3,
            todoPrompt: 'get dis got dam job ya heard'
        }
    ]
    return (
        <Fragment>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </Fragment>
    )
}

export  default TodoList