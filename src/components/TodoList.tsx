import React from 'react';
import {TodolistHeader} from "./TodolistHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import {FilterValueType, TaskType} from "../App";

type TodoListPropsType = {
    todoListTitle: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValueType) => void
}
export const TodoList = ({changeFilter, removeTask, todoListTitle, tasks}: TodoListPropsType) => {
    return (
        <div>
            <TodolistHeader title={todoListTitle}/>
            <AddTaskForm/>
            <TasksList changeFilter={changeFilter} removeTask={removeTask} tasks={tasks}/>
        </div>
    );
};
