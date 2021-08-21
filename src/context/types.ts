import {TodosType} from "../../App";

export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_SCREEN = 'CHANGE_SCREEN'
export const FETCH_TODOS = 'FETCH_TODOS'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'
export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

//todos
export const addTodoAC = (title: string, id: string) => ({
    type: ADD_TODO, payload: {title, id}
}) as const

export const updateTodoAC = (id: string, title: string) => ({
    type: UPDATE_TODO, payload: {id, title}
}) as const

export const removeTodoAC = (id: string) => ({
    type: REMOVE_TODO, payload: {id}
}) as const

export const showLoaderAC = () => ({
    type: SHOW_LOADER,
}) as const

export const hideLoaderAC = () => ({
    type: HIDE_LOADER,
}) as const

export const clearErrorAC = () => ({
    type: CLEAR_ERROR,
}) as const

export const showErrorAC = (error: string) => ({
    type: SHOW_ERROR, payload: {
        error
    }
}) as const

export const fetchTodosAC = (todos: TodosType[]) => ({
    type: FETCH_TODOS, payload: {
        todos
    }
}) as const

export type TodoActionType =
    ReturnType<typeof addTodoAC>
    | ReturnType<typeof updateTodoAC>
    | ReturnType<typeof removeTodoAC>
    | ReturnType<typeof showLoaderAC>
    | ReturnType<typeof hideLoaderAC>
    | ReturnType<typeof clearErrorAC>
    | ReturnType<typeof showErrorAC>
    | ReturnType<typeof fetchTodosAC>

//change screen

export const changeScreenAC = (id: string | null) => ({
    type: CHANGE_SCREEN, payload: {id}
}) as const

export type  ChangeScreenType = ReturnType<typeof changeScreenAC>