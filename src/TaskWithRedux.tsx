import {Checkbox} from '@mui/material';
import {EditableSpan} from './EditableSpan';
import IconButton from '@mui/material/IconButton/IconButton';
import {Delete} from '@mui/icons-material';
import React, {ChangeEvent, memo, useCallback} from 'react';
import {TaskType} from './TodolistWithRedux';
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from './state/tasks-reducer';
import {Dispatch} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';

type TaskPropsType = {
    taskId: string
    todolistId: string
};
export const TaskWithRedux = memo(({taskId, todolistId}: TaskPropsType) => {

    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistId].filter(t => t.id === taskId)[0])
    const dispatch = useDispatch()

    const onClickHandler = () => dispatch(removeTaskAC(taskId, todolistId))
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(taskId, newIsDoneValue, todolistId));
    }
    const onTitleChangeHandler = useCallback((newValue: string) => {
        dispatch(changeTaskTitleAC(taskId, newValue, todolistId));
    }, [dispatch, taskId, todolistId])

    return (
        <div className={task?.isDone ? 'is-done' : ''}>
            <Checkbox
                checked={task?.isDone}
                color="primary"
                onChange={onChangeHandler}
            />

            <EditableSpan value={task?.title} onChange={onTitleChangeHandler}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </div>
    );
})