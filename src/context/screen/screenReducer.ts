import { ChangeScreenType } from '../types';

export type ScreenReducerType = {
    id:string | null
}

export const screenReducer = (state:ScreenReducerType, action:ChangeScreenType):ScreenReducerType => {
    switch (action.type) {
        case 'CHANGE_SCREEN':
            return {id: action.payload.id}
        default:
            return state
    }
}