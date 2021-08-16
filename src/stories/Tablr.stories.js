import { Tablr } from "../Tablr";

// create a defualt export 
export default {
    title: "Tablr - A Customizable React Table Compenent",
    component: Tablr,
    argTypes: {
        rows: {control: ""},
        headers: {control: ""}
    }
};

// tell the template to render the args
const Template = args => <Tablr {...args}/>;


// set your props
export const Default = Template.bind({});

Default.args = {
    rows: [
        ['This', 'is', 'just', 'a', 'test'],
        ['This', 'is', 'also', 'a', 'test'],
        ['Just', 'a', 'little', 'more', 'data'],
        ['Row', 'number', 'four', 'right', 'here'],
    ],
    headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};
