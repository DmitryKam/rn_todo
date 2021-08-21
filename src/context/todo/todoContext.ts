import {createContext} from 'react';
import {TodosType} from '../../../App';

export type ContextType = {
    todos: TodosType[]
    addTodo: (id: string) => void
    removeTodo: (id: string) => void
    updateTodo: (id: string, title: string) => void
    fetchTodos: () => void
    loading:boolean
    error: null | string
}

export const TodoContext = createContext<ContextType>({} as ContextType)
