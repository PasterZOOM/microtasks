import React from 'react'

type FooterPropsType = {
    titleForFooter:string
}

export const Footer =(props:FooterPropsType)=>{
    return(
        <div style={{marginLeft:'40px'}}>{props.titleForFooter}</div>
    )
}