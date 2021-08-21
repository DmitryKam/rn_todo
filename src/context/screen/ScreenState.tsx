import React, { useReducer } from 'react';

import { ScreenContext } from './screenContext'
import { screenReducer } from './screenReducer'
import { changeScreenAC } from '../types';

export const ScreenState:React.FC = ({children}) => {
    const [state, dispatch] = useReducer(screenReducer, {id: null})

    const changeScreen = (id:string | null) => dispatch(changeScreenAC(id))

    return <ScreenContext.Provider value={{
        changeScreen, todoId: state.id
    }}>
        {children}
    </ScreenContext.Provider>
}