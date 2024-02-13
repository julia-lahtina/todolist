import React, {useRef, useState} from 'react';
import {FilterValuesType} from './App';

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

    function addTask() {
        props.addTask(taskTitle)
        setTaskTitle("")
    }

    const isAddTaskBtnDisabled = taskTitle.length === 0 || taskTitle.length > 15


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
            <button disabled={isAddTaskBtnDisabled} onClick={() => {
                addTask()
            }}>+
            </button>
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
