import React from 'react'

const TodoItem = ({todo}) => {
    return (
        <div className='todoItem__container'>
            <h5>#1</h5>            
            <p>{todo.name}</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem