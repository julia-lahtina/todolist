import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import IconButton from '@mui/material/IconButton/IconButton';
import {Delete} from "@mui/icons-material";
import {Button, Checkbox} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from './state/tasks-reducer';
import {ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC} from './state/todolists-reducer';


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

export function TodolistWithRedux(props: PropsType) {

    let tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[props.id])
    const dispatch = useDispatch()
    const addTask = useCallback((title: string) => {
            dispatch(addTaskAC(title, props.id));
        }
    , [dispatch, props.id])
    const removeTodolist = () => {
        dispatch(RemoveTodolistAC(props.id));
    }
    const changeTodolistTitle = (title: string) => {
        dispatch(ChangeTodolistTitleAC(props.id, title));
    }

    const onAllClickHandler = () => dispatch(ChangeTodolistFilterAC(props.id, "all"));
    const onActiveClickHandler = () => dispatch(ChangeTodolistFilterAC(props.id, "active"));
    const onCompletedClickHandler = () => dispatch(ChangeTodolistFilterAC(props.id, "completed"));



    if (props.filter === 'active') {
        tasks = tasks.filter(t => t.isDone === false);
    }
    if (props.filter === 'completed') {
        tasks = tasks.filter(t => t.isDone === true);
    }

    return <div>
        <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasks.map(t => {
                    const onClickHandler = () => dispatch(removeTaskAC(t.id, props.id))
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        dispatch(changeTaskStatusAC(t.id, newIsDoneValue, props.id));
                    }
                    const onTitleChangeHandler = (newValue: string) => {
                        dispatch(changeTaskTitleAC(t.id, newValue, props.id));
                    }


                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox
                            checked={t.isDone}
                            color="primary"
                            onChange={onChangeHandler}
                        />

                        <EditableSpan value={t.title} onChange={onTitleChangeHandler} />
                        <IconButton onClick={onClickHandler}>
                            <Delete />
                        </IconButton>
                    </div>
                })
            }
        </div>
        <div>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'inherit'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
}


