import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL
    const todoListTitle = "What to learn"

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])


    function removeTask(taskId: number) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <div className="App">
            <TodoList tasks={tasks} todoListTitle={todoListTitle} removeTask={removeTask}/>
        </div>
    );
}

export default App;
