import React from 'react';
import {Task} from "./Task";
import {TaskType} from "../App";
import {Button} from "./Button";

type TasksListPropsType = {
    tasks: Array<TaskType>
}
export const TasksList = ({tasks}: TasksListPropsType) => {

    const tasksList = <ul>
        {
            tasks.map(task => {
                return (
                        <Task key={task.id} title={task.title} isDone={task.isDone}/>
                )
            })
        }
    </ul>

    return (
        <>
            {tasksList}
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </>
    );
};

