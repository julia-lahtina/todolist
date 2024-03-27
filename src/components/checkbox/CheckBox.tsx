// @flow
import * as React from 'react';
import {Checkbox} from '@mui/material';
import {ChangeEvent} from 'react';

type CheckBoxProps = {
    checked: boolean
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'
    onChange: (isDone: boolean) => void
};
export const CheckBox = (props: CheckBoxProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.onChange(newIsDoneValue);
    }

    return (
        <Checkbox
            checked={props.checked}
            color={props.color}
            onChange={onChangeHandler}
        />
    );
};