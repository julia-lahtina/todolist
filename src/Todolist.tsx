import React, {ChangeEvent, useRef, useState} from 'react';
import {FilterValuesType} from './App';
import {setEngine} from "node:crypto";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (taskTitle: string) => void
}

export function Todolist(props: PropsType) {

    console.log("Todolist has been rendered")

    const [taskTitle, setTaskTitle] = useState("")
    const [taskInputError, setTaskInputError] = useState(false)

    function addTask() {
        props.addTask(taskTitle)
        setTaskTitle("")
    }
    function onChangeSetTitle(e: ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.currentTarget.value)
        e.currentTarget.value.length > 15 && setTaskInputError(true)
    }

    const isAddTaskBtnDisabled = taskTitle.length === 0 || taskTitle.length > 15


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={taskTitle} onChange={onChangeSetTitle}/>
            <button disabled={isAddTaskBtnDisabled} onClick={() => {
                addTask()
            }}>+
            </button>
            {taskInputError && <div style={{color: "red"}}>Enter correct title</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                props.changeFilter("all")
            }}>
                All
            </button>
            <button onClick={() => {
                props.changeFilter("active")
            }}>
                Active
            </button>
            <button onClick={() => {
                props.changeFilter("completed")
            }}>
                Completed
            </button>
        </div>
    </div>

}
