import {todos} from './state'
import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from './actions'

export const reducer = (state = todos, action) => {
    let newTodos
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state]
            newTodos.push(action.payload)
            return newTodos
        case DELETE_TODO:
            return [
                ...state.filter(todo => todo.id !== action.payload)
            ]
        case UPDATE_TODO:
                newTodos = [...state]
                let index = -1
                for(let i = 0; i < newTodos.length; i++) {
                    index++;
                    if(newTodos[i].id == action.payload.id) {
                        break;
                    }
                }
                if (index !== -1) {
                    newTodos[index] = action.payload
                    return newTodos
                }
        default:
            return state
    }
}