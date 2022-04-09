import React from 'react'

type HeaderPropsType = {
    titleForHeader :string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div style={{marginLeft:'40px'}}>{props.titleForHeader}</div>
    )
}