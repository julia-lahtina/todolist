import React from 'react';
import {Button} from "./Button";

type TaskPropsType = {
    taskId: number
    title: string
    isDone: boolean
    removeTask: (taskId: number) => void
}
export const Task = ({removeTask, taskId, title, isDone}: TaskPropsType) => {
    return (
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <Button title={"x"} onClickHandler={()=>removeTask(taskId)}/>
        </li>
    );
};

