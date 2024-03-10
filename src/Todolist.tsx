import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TodolistsType} from './App';
import {AddItemForm} from './components/AddItemForm';
import {EditableSpan} from './components/EditableSpan';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
}

export function Todolist(props: PropsType) {

    const filteredTasks = () => {
        let tasksForTodolist = props.tasks;
        if (props.filter === 'active') {
            tasksForTodolist = props.tasks.filter(t => !t.isDone);
        }
        if (props.filter === 'completed') {
            tasksForTodolist = props.tasks.filter(t => t.isDone);
        }
        return tasksForTodolist
    }



    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistID)
    }


    const onAllClickHandler = () => props.changeFilter(props.todolistID, 'all');
    const onActiveClickHandler = () => props.changeFilter(props.todolistID, 'active');
    const onCompletedClickHandler = () => props.changeFilter(props.todolistID, 'completed');


    const addTaskHandler = (newTitle: string) => {
        props.addTask(props.todolistID, newTitle)
    }


    return <div>
        <h3>
            {props.title}
            <button onClick={removeTodolistHandler}>X</button>
        </h3>

        <AddItemForm
            onClick={addTaskHandler}
        />

        <ul>
            {
                filteredTasks().map(t => {
                    const onClickHandler = () => props.removeTask(props.todolistID, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <EditableSpan title={t.title}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
