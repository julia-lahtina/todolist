import React from 'react';
import {TodolistHeader} from "./TodolistHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import {TaskType} from "../App";

type TodoListPropsType = {
    todoListTitle: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
}
export const TodoList = ({removeTask, todoListTitle, tasks}: TodoListPropsType) => {
    return (
        <div>
            <TodolistHeader title={todoListTitle}/>
            <AddTaskForm />
            <TasksList removeTask={removeTask} tasks={tasks}/>
        </div>
    );
};
