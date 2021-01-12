import React, { useState } from 'react'
import { addTodo } from './redux/actions'
import { useDispatch } from 'react-redux'
import { v1 as uuid } from 'uuid'

const AddTodoInput = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        console.log(text)
        const payload = {
            id: uuid(),
            name: text
        }
        console.log(payload)
        // dispatch(addTodo(payload))
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
