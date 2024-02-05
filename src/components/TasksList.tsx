import React from 'react';
import {Task} from "./Task";
import {FilterValueType, TaskType} from "../App";
import {Button} from "./Button";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValueType) => void
}
export const TasksList = ({changeFilter, removeTask, tasks}: TasksListPropsType) => {

    const tasksList = <ul>
        {
            tasks.map(task => {
                return (
                    <Task removeTask={removeTask} taskId={task.id} key={task.id} title={task.title}
                          isDone={task.isDone}/>
                )
            })
        }
    </ul>

    return (
        <>
            {tasksList}
            <div>
                <Button title={"All"} onClickHandler={() => changeFilter("all")}/>
                <Button title={"Active"} onClickHandler={() => changeFilter("active")}/>
                <Button title={"Completed"} onClickHandler={() => changeFilter("completed")}/>
            </div>
        </>
    );
};

