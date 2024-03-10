import * as React from 'react';
import {ChangeEvent, useState} from 'react';

type Props = {
    oldTitle: string
    callback: (newTitle: string) => void
};
export const EditableSpan = ({oldTitle, callback}: Props) => {

    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(oldTitle)

    const editHandler = () => {
        setEdit(!edit)
        if (edit) {
            addTask()
        }
    }

    const addTask = () => {
        callback(newTitle)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)

    }


    return (
        edit
            ? <input
                onChange={onChangeHandler}
                type="text"
                value={newTitle}
                onBlur={editHandler}
                autoFocus
            />
            : <span onDoubleClick={editHandler}>{oldTitle}</span>

    );
};