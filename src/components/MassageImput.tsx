import React, {ChangeEvent} from 'react';

type MassageImputPropsType = {
    setTitle: (title:string) => void
    title: string
}

export const MassageImput = (props:MassageImputPropsType) => {
    const onCangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onCangeInputHandler}/>
    );
};

