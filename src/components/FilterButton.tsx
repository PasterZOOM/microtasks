import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const FilterButton = (props: ButtonPropsType) => {
    const onClickFilterHandler = () => {
        props.callBack()
    }
    return (
            <button onClick={onClickFilterHandler}>{props.name}</button>
    )
}