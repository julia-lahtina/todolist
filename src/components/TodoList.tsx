import React from 'react';
import {TodolistHeader} from "./TodolistHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import {TaskType} from "../App";

type TodoListPropsType = {
    todoListTitle: string
    tasks: Array<TaskType>
}
export const TodoList = ({todoListTitle, tasks}: TodoListPropsType) => {
    return (
        <div>
            <TodolistHeader title={todoListTitle}/>
            <AddTaskForm />
            <TasksList tasks={tasks}/>
        </div>
    );
};
