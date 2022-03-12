import React, { useContext } from 'react';
import './Calculator.css';
import CalculatorItem from '../CalculatorItem';
import Context from '../Context';




const Calculator = () => {

    const {
        rate, giveValue, setGetValue
    } = useContext(Context);

    const setGetInputValue = () => {
        let value = giveValue * rate;
        setGetValue(value);
    }



    return (
        <div className='calculator'>
            <CalculatorItem
                type={'give'} />
            <button
                onClick={setGetInputValue}
                className="button">
                X
            </button>
            <CalculatorItem type={'get'} />
        </div>
    )
}

export default Calculator;