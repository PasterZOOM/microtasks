import React from 'react';

type MessageButtonPropsType ={
    name:string
    callBack:()=>void
}

export const MessageButton = (props:MessageButtonPropsType) => {
    const onClickButtonHandler =()=>{
        props.callBack()
    }
    return (
           <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};
