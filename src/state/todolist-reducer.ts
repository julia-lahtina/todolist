import {TodolistType} from '../App';
import {v1} from 'uuid';

export const todolistsReducer = (state: TodolistType[], action: TodolistsReducerType):TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }
        case 'ADD-TODOLIST': {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.title, filter: 'all'};
            return [...state, newTodolist];
        }

        default: return state;
    }
}


type TodolistsReducerType = RemoveTodolistACtype | addTodolistACtype
type RemoveTodolistACtype = ReturnType<typeof removeTodolistAC>
type addTodolistACtype = ReturnType<typeof addTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id
        }
    } as const
}

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title
        }
    } as const
}