import React, { useState } from 'react';

import './CryptoList.css';




function CryptoList(props) {
    const [cryptoFilter, setCryptoFilter] = useState('');

    const mappedData = (data, filter) => {
        let exchangeRateItem = [];

        for (const currency in data) {
            exchangeRateItem.push(data[currency])
        }

        if (filter) {
            exchangeRateItem = exchangeRateItem.filter( (item) => 
                item.symbol == filter
            )
            // console.log("Filtr: " + filter);
        }

        return exchangeRateItem;
    }

    const handleChange = (e) => {
        setCryptoFilter(e.target.value)
    }

    return(
        <div>
            <input 
                className='crypto-list__filter' 
                onChange={(event) => {handleChange(event)}}
                placeholder='Filter'></input>
            <ul className='crypto-list'>
                {mappedData(props.data, cryptoFilter).map( (item, index) => 
                    <li 
                        className="crypto-list__item"
                        key={index}
                    >
                        <span className='crypto-list__title'>Last rate:</span>
                        <span className='crypto-list__exchange-rate'>{item.buy}</span> 
                        <span className='crypto-list__currency-symbol'>{item.symbol}</span>
                    </li>
                )}
            </ul>
        </div>
        
    )
}

// {15m: 34424.56, last: 34424.56, buy: 34424.56, sell: 34424.56, symbol: "USD"}


export default CryptoList;