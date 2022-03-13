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
                <i class="fa-solid fa-right-left"></i>
            </button>
            <CalculatorItem type={'get'} />
        </div>
    )
}

export default Calculator;