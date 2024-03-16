// @flow 
import * as React from 'react';
import {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


type AddItemFormProps = {
    onClick: (title: string) => void
};
export const AddItemForm = (props: AddItemFormProps) => {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== '') {
            props.onClick(newTitle);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const buttonStyles = {
        maxWidth: '39px',
        maxHeight: '39px',
        minWidth: '39px',
        minHeight: '39px',
    }


    return (
        <div>
{/*            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />*/}
            <TextField
                error={!!error}
                value={title}
                id="standard-basic"
                label={error ? 'error' : 'Type something...'}
                variant="outlined"
                size='small'
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />

            <Button onClick={addTask} variant="contained" style={buttonStyles}>+</Button>

            {error && <div className="error-message">{error}</div>}
        </div>
    );
};
