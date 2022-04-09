import React from 'react';
import {FilterType} from '../App';
import {FilterButton} from '../components/FilterButton';

type FilterPropsType = {
    currentMoney: Array<InArrayPropsType>
    callBack: (filter: FilterType) => void
}
type InArrayPropsType = {
    banknots: string
    value: number
    number: string
}

export const Filter = (props: FilterPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objForMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objForMoneyArr.banknots}</span>
                            <span>{objForMoneyArr.value}</span>
                            <span>{objForMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'40px'}}>
                <FilterButton name={'All'} callBack={() => props.callBack('All')}/>
                <FilterButton name={'Dollars'} callBack={() => props.callBack('Dollars')}/>
                <FilterButton name={'RUBLS'} callBack={() => props.callBack('RUBLS')}/>
            </div>

        </>
    )
}

