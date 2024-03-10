// @flow 
import * as React from 'react';

type Props = {
    title: string
};
export const EditableSpan = ({title}: Props) => {
    return (
        <span>{title}</span>
    );
};