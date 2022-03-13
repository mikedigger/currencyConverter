import React, { useContext } from 'react';
import './Calculator.css';
import Context from '../Context';

const currencyList = ['NOK', 'SEK', 'USD', 'DKK', 'EUR'];


const Calculator = () => {

    const {
        rate, date,
        base, setBase,
        target, setTarget,
        giveValue, setGiveValue,
        getValue, setGetValue
    } = useContext(Context);

    const setGetInputValue = () => {
        let value = (giveValue * rate).toFixed(2);
        setGetValue(value);
    }

    const giveSelectChange = (e) => {
        const giveSelect = e.target.closest('#give');
        let selectedIdx = giveSelect.selectedIndex;
        setBase(giveSelect.options[selectedIdx].value);
    }

    const getSelectChange = (e) => {
        const getSelect = e.target.closest('#get');
        let selectedIdx = getSelect.selectedIndex;
        setTarget(getSelect.options[selectedIdx].value)
    }

    const setGiveInputValue = (e) => {
        setGetValue(0);
        setGiveValue(e.target.value)
    }

    const humanDate = (time) => {
        const date = new Date(time);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    };

    const time = humanDate(date);
    const interest = (getValue * .1).toFixed(2);

    return (
        <div className='calculator'>
            <div className="calculator-item calculator-item-give">
                <div className="calculator-item-title">Ви віддаєте</div>
                <div className="calculator-item-body">
                    <input
                        onChange={setGiveInputValue}
                        type="number"
                        placeholder={giveValue}
                        className="calculator-item-input" />
                    <select
                        value={base}
                        id="give"
                        onChange={(e) => giveSelectChange(e)}
                        className="calculator-item-currency-select">
                        {
                            currencyList.map(item => {
                                return (
                                    <option
                                        key={item}>
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>

                </div>
                <div className="calculator-item-footer">
                    <div className="calculator-item-actual-title">
                        Курс обміну актуальний на <time>{time}</time>
                    </div>
                    <div className="calculator-item-actual-course">
                        1 {base} = {rate} {target}
                    </div>
                </div>
            </div>

            <button
                onClick={setGetInputValue}
                className="button base-c-light">
                <i className="fa-solid fa-right-left"></i>
            </button>


            <div className="calculator-item calculator-item-get base-c-light">
                <div className="calculator-item-title opacity-low">Ви отримуєте</div>
                <div className="calculator-item-body border-c-light">
                    <input
                        readOnly
                        type="number"
                        placeholder={getValue}
                        className="calculator-item-input base-c-light" />
                    <select
                        value={target}
                        id="get"
                        onChange={(e) => getSelectChange(e)}
                        className="calculator-item-currency-select">
                        {
                            currencyList.map(item => {
                                return (
                                    <option
                                        key={item}>
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>

                </div>
                <div className="calculator-item-footer">
                    <div className="calculator-item-actual-title opacity-low">Комісія</div>
                    <div className="calculator-item-actual-course">{interest} {target}</div>
                </div>
            </div>



        </div>
    )
}

export default Calculator;