import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (<div style={{marginLeft:'40px'}}>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>

    )
}