import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from './redux/actions'

const TodoItem = ({todo}) => {

    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.name)

    const dispatch = useDispatch()

    return (
        <div className='todoItem__container'>
            <h5>#{todo.id.length > 1 ? todo.id[2]: todo.id}</h5>
            <div>
                {
                    edit ? 
                        <input type='text' 
                        placeholder={todo.name} 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        />                     
                    : 
                        <p>{todo.name}</p>    
                }                            
            </div>      
            <div>
                <button onClick={ () => {
                    dispatch(updateTodo({
                        ...todo,
                        name: name
                    }))
                    if (edit) {
                        setName(todo.naame)
                    }
                    setEdit(!edit)
                }}>

                    {
                        edit ?
                            'update'
                        :
                            'edit'
                    }
                </button>
                <button onClick={ () => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem