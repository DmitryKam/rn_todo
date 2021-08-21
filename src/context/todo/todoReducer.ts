import {InitialStateType} from './TodoState';
import {ADD_TODO, CLEAR_ERROR, HIDE_LOADER, REMOVE_TODO, SHOW_LOADER, TodoActionType, UPDATE_TODO} from '../types';

export const todoReducer = (state: InitialStateType, action: TodoActionType): InitialStateType => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, {id: action.payload.id, title: action.payload.title}]}
        case UPDATE_TODO:
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.title = action.payload.title
                    }
                    return todo
                })
            }
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(((todo) => todo.id !== action.payload.id))}
        case SHOW_LOADER: {
            return {...state, loading: true}
        }
        case HIDE_LOADER: {
            return {
                ...state, loading: false
            }
        }
        case CLEAR_ERROR: {
            return {...state, error: null}
        }
        case "SHOW_ERROR": {
            return {...state, error: action.payload.error}
        }
        case "FETCH_TODOS": {
            return {...state, todos: action.payload.todos}
        }
        default:
            return state
    }
}