import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = "all" | "active" | "completed"

function App() {
    //BLL
    const todoListTitle = "What to learn"

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValueType>("all")


    function removeTask(taskId: number) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    function changeFilter(filter: FilterValueType) {
        setFilter(filter)
    }

    //UI

    let tasksForTodoList = tasks;
    if (filter === "active") {
        tasksForTodoList = tasks.filter(task => !task.isDone)
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(task => task.isDone)
    }
    return (
        <div className="App">
            <TodoList changeFilter={changeFilter} tasks={tasksForTodoList} todoListTitle={todoListTitle}
                      removeTask={removeTask}/>
        </div>
    );
}

export default App;
