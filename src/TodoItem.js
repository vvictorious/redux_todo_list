import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from './redux/actions'

const TodoItem = ({todo}) => {

    const dispatch = useDispatch()

    return (
        <div className='todoItem__container'>
            <h5>#{todo.id.length > 1 ? todo.id[2]: todo.id}</h5>            
            <p>{todo.name}</p>
            <div>
                <button>Edit</button>
                <button onClick={ () => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem