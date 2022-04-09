import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {CarTable} from './site/CarTable';
import {Button} from './components/Button';
import {Filter} from './site/Filter';
import {FullInput} from './components/FullInput';
import {MassageImput} from './components/MassageImput';
import {MessageButton} from './components/MessageButton';

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

function App() {
    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'},
    // ]
    //
    // const Button1foo = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    //
    // const Button2foo = (subscriber: string) => {
    //     console.log(subscriber)
    // }
    // const Button3foo = () => {
    //     console.log('Im stupid buttom')
    // }
    //
    // let [a, setA] = useState(0)
    //
    // const onClickHandler = () => {
    //     setA(++a)
    //     console.log(a)
    // }
    //
    // const onClickHandler0 = () => {
    //     setA(a = 0)
    //     console.log(a)
    // }
    //
    // const money = [
    //     {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    //     {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    //     {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    // ]
    //
    // const [filter, setFilter] = useState<FilterType>('All')
    //
    // let currentMoney = money
    //
    // if (filter === 'RUBLS') {
    //     currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    // }
    //
    // if (filter === 'Dollars') {
    //     currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    // }
    //
    // const onClickFilterHandler = (nameButton: FilterType) => {
    //     setFilter(nameButton)
    // }
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    const [title, setTitle] = useState('')

    const addMessage = (title:string) =>{
        let newMessage = {message:title}
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler =()=>{
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <MassageImput setTitle={setTitle} title={title}/>
            <MessageButton name={'+'} callBack={callBackButtonHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index)=>{
                return(
                    <div key={index}>{el.message}</div>
                )
            })}
            {/*<Header titleForHeader={'NEW HEADER'}/>*/}
            {/*<Body titleForBody={'NEW BODY'}/>*/}
            {/*<Footer titleForFooter={'NEW FOOTER'}/>*/}
            {/*<CarTable carName={topCars}/>*/}
            {/*<Button name={'MyYouTubeChanel - 1'} callBack={() => Button1foo('Im Vasya', 18)}/>*/}
            {/*<Button name={'MyYouTubeChanel - 2'} callBack={() => Button2foo('Im Ivan')}/>*/}
            {/*<Button name={'Stupid BUTTOM'} callBack={Button3foo}/>*/}
            {/*<h1 style={{marginLeft:'100px'}}>{a}</h1>*/}
            {/*<button onClick={onClickHandler} style={{marginLeft:'70px'}}>Number</button>*/}
            {/*<button onClick={onClickHandler0}>0</button>*/}
            {/*<Filter currentMoney={currentMoney} callBack={onClickFilterHandler}/>*/}
        </div>
    )
}

export default App;
