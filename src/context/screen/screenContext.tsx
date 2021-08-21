import React from 'react';

type ScreenContextType = {
    todoId:string | null
    changeScreen:(id:string | null) => void
}

export const ScreenContext = React.createContext<ScreenContextType>({} as ScreenContextType)