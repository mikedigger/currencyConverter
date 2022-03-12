import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header';
import Calculator from '../Calculator';
import ExchangeService from '../../services/exchangeServise';
import Context from '../Context';

const exchangeAPI = new ExchangeService();


const App = () => {

    const [rate, setRate] = useState(0);
    const [date, setDate] = useState(0);

    const [base, setBase] = useState('USD');
    const [target, setTarget] = useState('EUR');

    const [giveValue, setGiveValue] = useState(0);
    const [getValue, setGetValue] = useState(0);
    
    useEffect(() => {
        
        exchangeAPI.getActualRateDate(base, target)
            .then(res => setDate(res));

        exchangeAPI.getExchangeRate(base, target)
            .then(res => setRate(res));
    })


    return (
        <Context.Provider value={{
            rate, date,
            base, setBase,
            target, setTarget,
            giveValue, setGiveValue,
            getValue, setGetValue
        }}>
            <div className="container">
                <div className='app'>
                    <Header />
                    <Calculator />
                </div>
            </div>
        </Context.Provider>
    )
}

export default App;