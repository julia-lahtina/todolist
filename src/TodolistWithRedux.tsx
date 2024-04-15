import React, {ChangeEvent, memo, useCallback, useMemo} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import IconButton from '@mui/material/IconButton/IconButton';
import {Delete} from '@mui/icons-material';
import {Button, Checkbox} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from './state/tasks-reducer';
import {ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC} from './state/todolists-reducer';
import {ButtonWithMemo} from './ButtonWithMemo';
import {TaskWithRedux} from './TaskWithRedux';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export const TodolistWithRedux = memo((props: PropsType) => {

    console.log('Todolist')

    let tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[props.id])
    const dispatch = useDispatch()


    const addTask = useCallback((title: string) => {
            dispatch(addTaskAC(title, props.id));
        }
        , [dispatch, props.id])
    const removeTodolist = useCallback(() => {
        dispatch(RemoveTodolistAC(props.id));
    }, [dispatch, props.id])
    const changeTodolistTitle = useCallback((title: string) => {
        dispatch(ChangeTodolistTitleAC(props.id, title));
    }, [dispatch, props.id])

    const onAllClickHandler = useCallback(() => dispatch(ChangeTodolistFilterAC(props.id, 'all')), [dispatch, props.id])
    const onActiveClickHandler = useCallback(() => dispatch(ChangeTodolistFilterAC(props.id, 'active')), [dispatch, props.id])
    const onCompletedClickHandler = useCallback(() => dispatch(ChangeTodolistFilterAC(props.id, 'completed')), [dispatch, props.id])


   tasks = useMemo(() => {
        if (props.filter === 'active') {
            tasks = tasks.filter(t => t.isDone === false);
        }
        if (props.filter === 'completed') {
            tasks = tasks.filter(t => t.isDone === true);
        }
        return tasks
    }, [props.filter, tasks])


    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasks.map(t => {

                    return <TaskWithRedux
                        key={t.id}
                        todolistId={props.id}
                        taskId={t.id}
                    />
                })
            }
        </div>
        <div>
            <ButtonWithMemo variant={props.filter === 'all' ? 'outlined' : 'text'}
                            onClick={onAllClickHandler}
                            color={'inherit'}
            >
                All
            </ButtonWithMemo>
            <ButtonWithMemo variant={props.filter === 'active' ? 'outlined' : 'text'}
                            onClick={onActiveClickHandler}
                            color={'primary'}>
                Active
            </ButtonWithMemo>
            <ButtonWithMemo variant={props.filter === 'completed' ? 'outlined' : 'text'}
                            onClick={onCompletedClickHandler}
                            color={'secondary'}>
                Completed
            </ButtonWithMemo>
        </div>
    </div>
})


