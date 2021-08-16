import React from 'react';

import { Button } from '../TS examples/Button';

// Button.stories.jsx is a module
// when storybook imports the story, it will bring along these properties(title, component, argTypes)
// title: provide a path to organize storybook's navigation rail on the left
//    chekcout --> https://storybook.js.org/docs/react/essentials/controls#annotation
// component: a ref to the actual component imported from './Button' above
// argTypes: where we specify the type of argument it is
//    --think about different input controls color will render a colorPicker
export default {
  title: 'Tablr/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {control: "select"}
  },
};

// templates render React components 
const Template = (args) => <Button {...args} />;


// bind component variations to the template
// each variation has arguments specific to it  
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
