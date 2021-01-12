import React, {Fragment, useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    
    const todos = useSelector(state => state)

    useEffect(() => {
        console.log(todos)
    }, [todos])    

    return (
        <Fragment>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </Fragment>
    )
}

export  default TodoList