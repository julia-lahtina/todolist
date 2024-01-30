import React from 'react';
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
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    return (
        <div className="App">
            <TodoList tasks={tasks} todoListTitle={todoListTitle}/>
        </div>
    );
}

export default App;
