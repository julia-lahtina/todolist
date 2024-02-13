import React, {useRef} from 'react';
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

    //  в этом случае, мы видим, что ввел пользователь только тогда, когда он нажмет кнопку добавить
    //  а нам нужно видеть, что он пишет уже на этапе ввода текста
    //  чтобы мы могли подсказать, например, если пользователь ввел неправильный символ или если длина текста ограничена

    const taskTitleInput = useRef<HTMLInputElement>(null)


    function addTask() {
        if(taskTitleInput.current) {
            const newTaskTitle = taskTitleInput.current.value
            props.addTask(newTaskTitle)
            taskTitleInput.current.value = ""
        }
    }

    

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input ref={taskTitleInput}/>
            <button onClick={() => {addTask()}}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={ () => { props.changeFilter("all") } }>
                All
            </button>
            <button onClick={ () => { props.changeFilter("active") } }>
                Active
            </button>
            <button onClick={ () => { props.changeFilter("completed") } }>
                Completed
            </button>
        </div>
    </div>
}
