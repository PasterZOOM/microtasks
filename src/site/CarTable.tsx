import React from 'react';

type TopCarPropsType = {
    carName: Array<InArrayPropsType>
}

type InArrayPropsType = {
    manufacturer: string,
    model: string
}

export const CarTable = (props: TopCarPropsType) => {
    return (
        <table>
            <tbody>
            {props.carName.map((element: InArrayPropsType, index) => {
                return (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{element.manufacturer}</td>
                        <td>{element.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}