import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Task} from '../Task';
import {useState} from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLIST/Task',
    component: Task,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    args: {
        task: {id: 'gffhfg', title: 'JS', isDone: true},
        changeTaskStatus: fn(),
        removeTask: fn(),
        todolistId: 'kjdsljflkd',
        changeTaskTitle: fn()
    }
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args

}

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TaskIsDoneStory: Story = {

};

export const TaskIsNotDoneStory: Story = {
    args: {
        task: {id: 'gffhfg', title: 'JS', isDone: false},
    }
};

export const TaskToggleStory: Story = {
    render: (args) => {

        const [task, setTask] = useState(args.task)
        function changeTaskStatus () {
            setTask({...task, isDone: !task.isDone})
        }
        function changeTaskTitle(taskId: string, title: string) {
            setTask({...task, title: title})
        }

        return <Task changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle} removeTask={fn()} task={task} todolistId={'gggalalakjs'}/>
    }
};

