import React from "react";

type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    //it does not matter if we define the event as a prop or a component
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return (
        <div>
        <input type="text" value = {props.value} onChange={handleInputChange}/>
        </div>
    );
}