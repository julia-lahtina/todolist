import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
    console.log(v1())

    // BLL
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ]);

    let [filter, setFilter] = useState<FilterValuesType>('all');

    // CRUD tasks
    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask(taskTitle: string) {   //от пользователя получаем данные, это какое-то название таски, то есть строка
        const newTask: TaskType = {
            id: v1(),
            title: taskTitle,
            isDone: false
        }
        const nextState = [newTask, ...tasks]
        setTasks(nextState)
    }

    function changeTaskStatus(id: string) {  //"2"
        const task = tasks.find(t => t.id === id) //undefined если нет совпадений
        if (task) {
            task.isDone = !task.isDone  // меняем статус мутабельно
            setTasks([...tasks])
        }
    }


    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    //UI
    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
