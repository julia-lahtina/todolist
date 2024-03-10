import * as React from 'react';
import {useState} from 'react';

type Props = {
    title: string
};
export const EditableSpan = ({title}: Props) => {

    const [edit, setEdit] = useState(false)

    const editHandler = () => {
        setEdit(!edit)
    }

    return (
        edit
            ? <input type="text" value={title} onBlur={editHandler} autoFocus/>
            : <span onDoubleClick={editHandler}>{title}</span>

    );
};