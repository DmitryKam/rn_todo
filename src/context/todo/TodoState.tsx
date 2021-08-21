import React, {useReducer, useContext} from 'react';
import {TodoContext} from './todoContext'
import {todoReducer} from './todoReducer';
import {TodosType} from '../../../App';
import {
    addTodoAC,
    clearErrorAC,
    fetchTodosAC,
    hideLoaderAC,
    removeTodoAC,
    showErrorAC,
    showLoaderAC,
    updateTodoAC
} from '../types';
import {ScreenContext} from '../screen/screenContext';
import {Alert} from 'react-native';
import {Http} from "../../http";

export type InitialStateType = {
    todos: TodosType[]
    loading: boolean
    error: string | null
}

export const TodoState: React.FC = (props) => {
    const initialState: InitialStateType = {
        todos: [],
        loading: false,
        error: null
    }
    const {changeScreen} = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async (title: string) => {
        clearError()
        try {
            const data: { name: string } = await Http.post('https://rn-todo-appk-default-rtdb.firebaseio.com/todos.json', {title})
            dispatch(addTodoAC(title, data.name))
        } catch (e) {
            showError('Something wrong...')
            console.log(e)
        }
    }

    const removeTodo = (id: string) => {
        const todo = state.todos.find(todo => todo.id === id)
        todo && Alert.alert(
            'Delete element',
            `Are you sure that you want to delete "${todo.title}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        changeScreen(null)
                        clearError()
                        try {
                            await Http.delete(`https://rn-todo-appk-default-rtdb.firebaseio.com/todos/${id}.json`)
                            dispatch(removeTodoAC(id))
                        } catch (e) {
                            showError('Something wrong...')
                        }
                    }
                }
            ],
            {cancelable: true}
        );
        changeScreen(null)
        dispatch(removeTodoAC(id))
    }

    const updateTodo = async (id: string, title: string) => {
        clearError()
        try {
            await Http.patch(`https://rn-todo-appk-default-rtdb.firebaseio.com/todos/${id}.json`, {title})
            dispatch(updateTodoAC(id, title))
        } catch (e) {
            showError('Something wrong...')
            console.log('Error', e)
        }


    }

    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const data = await Http.get('https://rn-todo-appk-default-rtdb.firebaseio.com/todos.json')
            const todos = Object.keys(data).map(key => ({...data[key], id: key}))
            dispatch(fetchTodosAC(todos))
        } catch (e) {
            showError('Something wrong...')
            console.log('error!!', e)
        }
        hideLoader()
    }

    const showLoader = () => {
        dispatch(showLoaderAC())
    }

    const hideLoader = () => {
        dispatch(hideLoaderAC())
    }

    const showError = (error: string) => {
        dispatch(showErrorAC(error))
    }

    const clearError = () => {
        dispatch(clearErrorAC())
    }

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            loading: state.loading,
            error: state.error,
            addTodo,
            removeTodo,
            updateTodo,
            fetchTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}