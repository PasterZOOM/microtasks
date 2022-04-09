import React, {useState, ChangeEvent} from 'react';

type FullInputPropsType = {
    addMessage:(title:string)=>void
}
export const FullInput = (props: FullInputPropsType) => {
    const [title, setTitle] = useState('')
    const onCangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () =>{
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onCangeInputHandler}/>
            <button onClick={onClickButtonHandler}>
                +
            </button>
        </div>
    );
};

