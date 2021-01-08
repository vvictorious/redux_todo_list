import React from 'react'

const TodoItem = ({todo}) => {
    return (
        <div className='todoItem__container'>
            <p>{todo.todoPrompt}</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem