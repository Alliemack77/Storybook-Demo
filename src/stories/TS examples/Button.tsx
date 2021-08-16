import React, {ReactNode} from 'react';
import { MyComponent } from '../../MyComponent';

export interface Props {
    children: ReactNode;
    variant: 'primary' | 'secondary';

}

export const Button = ({children, ...props}: Props) => {
    return (
        <>
        <Button {...props}>
            {children}
        </Button>
        <MyComponent name="something"></MyComponent>
        </>
    )
}