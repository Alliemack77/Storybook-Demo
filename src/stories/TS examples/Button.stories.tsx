import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Button, Props} from '../TS examples/Button';

const meta: Meta = {
    title: 'Button', 
    component: Button,

}

export const Default = () => <Button variant="primary">Click Me!</Button>

export default Meta;