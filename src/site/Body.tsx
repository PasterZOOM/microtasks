import React from 'react'

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props:BodyPropsType) => {
    return (
        <div style={{marginLeft:'40px'}}>{props.titleForBody}</div>
    )
}