import React, { useContext } from 'react';
import './CalculatorItem.css';
import Context from '../Context';

const currencyList = ['NOK', 'SEK', 'USD', 'DKK', 'EUR'];

const humanDate = (time) => {
    const date = new Date(time);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

const CalculatorItem = ({ type }) => {
    let mod = '';
    let title = '';
    let giveFooter;

    const {
        rate, date,
        base, setBase,
        target, setTarget,
        giveValue, setGiveValue,
        getValue
    } = useContext(Context);


    let dateHuman = humanDate(date);


    const giveSelectChange = (e) => {
        const giveSelect = e.target.closest('#give');
        const getSelect = e.target.closest('#get');

        if (giveSelect) {
            let selectedIdx = giveSelect.selectedIndex;
            setBase(giveSelect.options[selectedIdx].value);
        }

        if (getSelect) {
            let selectedIdx = getSelect.selectedIndex;
            setTarget(getSelect.options[selectedIdx].value)
        }
    }

    const setGiveInputValue = (e) => {
        setGiveValue(e.target.value)
    }
    
    const interest = getValue * .5;



    switch (type) {
        case 'give':
            title = 'віддаєте';

            giveFooter = (
                <React.Fragment>
                    <div className="calculator-item-actual-title">
                        Курс обміну актуальний на <time>{dateHuman}</time>
                    </div>
                    <div className="calculator-item-actual-course">
                        1 {base} = {rate} {target}
                    </div>
                </React.Fragment>
            )
            break;
        case 'get':
            mod = type;
            title = 'отримуєте';
            giveFooter = (
                <React.Fragment>
                    <div className="calculator-item-actual-title">Комісія</div>
                    <div className="calculator-item-actual-course">{interest} {target}</div>
                </React.Fragment>
            )
            break;
        default: 
            break;

    }
    return (
        <div className={`calculator-item calculator-item-${mod}`}>
            <div className="calculator-item-title">{`Ви ${title}`}</div>
            <div className="calculator-item-body">
                <input
                    readOnly={type === 'give' ? false : true}
                    onChange={type === 'give' ? setGiveInputValue : ()=>{}}
                    type="number"
                    placeholder={type === 'give' ? giveValue : getValue}
                    className="calculator-item-input" />
                <select
                    value={type === 'give' ? base : target}
                    id={type === 'give' ? 'give' : 'get'}
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
                {giveFooter}
            </div>
        </div>
    )
}

export default CalculatorItem;