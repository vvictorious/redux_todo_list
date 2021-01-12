import React, { useState } from 'react'
import { addTodo } from './redux/actions'
import { useDispatch } from 'react-redux'

const AddTodoInput = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        console.log(text)
        dispatch(addTodo(text))
        setText('')
    }

    return (
        <form onSubmit ={onSubmit}>
            <input onChange={(e) => setText(e.target.value)} type='text' />
            <button>Add</button>
        </form>
    )
}

export default AddTodoInput
