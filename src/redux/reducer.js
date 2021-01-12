import {todos} from './state'
import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from './actions'

export const reducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            break
        case DELETE_TODO:
            return [
                ...state.filter(todo => todo.id !== action.payload)
            ]
        case UPDATE_TODO:
            break
        default:
            return state
    }
}