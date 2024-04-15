import {Button} from '@mui/material';
import React, {memo, ReactNode} from 'react';


type ButtonWithMemoPropsType = {
    variant: 'contained' | 'outlined' | 'text'
    onClick: () => void
    color: 'inherit' | 'primary' | 'secondary'
    children: ReactNode
};
export const ButtonWithMemo = memo(({variant, children, onClick, color}: ButtonWithMemoPropsType) => {
    return (
        <Button variant={variant}
                onClick={onClick}
                color={color}>
            {children}
        </Button>
    );
})