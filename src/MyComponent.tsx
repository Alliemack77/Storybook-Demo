// this is a short intro into typescript
// use interfaces (or types) to define your props
// question mark after a property means that it is not required 
//      - removing name prop from where the comp is used will create an error
//      - this is the benefit of TS
// inform TS that these are the props for the component by passing in Props to our component

import React from "react";


interface Props {
    name: string;
    text?: string;
    // isActive: boolean;
    // number: number;
    // list: string[];
    // someObj: {
    //     id: number;
    //     description: string
    // }

    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// props can also be destructured like so: ({name, text}: Props)
// you can then pass them into the return --> see comments below
// youcan also provide default values for function arguments 
//      -({name, text = "default text"}: Props)
export const MyComponent = (props: Props) => {
    
    return <div>
        {/* {name} - {text} */}

        {/* <button onClick={(event) =>{}}>Click Me!</button> */}
    </div>;


};
