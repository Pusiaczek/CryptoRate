import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';

import './App.css';




function App() {
  const [btcPriceData, setBtcPriceData] = useState(null);



  
  const getDataFromServer = () => {
    axios.get('https://blockchain.info/pl/ticker')
      .then(function (response) {
        // handle success
        setBtcPriceData(response.data);
        // console.log(response.data);
        // console.log(response.data.USD);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  
  useEffect( () => {
    getDataFromServer()
    // console.log('wykonam sie tylko raz!');
  }, [])

  useEffect( () => {
    let getDataInterval = setInterval(
      () => getDataFromServer(), 5000
    )
    return( () => {clearInterval(getDataInterval)})
  })

  return (
    <div className="App">
      <header>
        <div>
          <i className="fab fa-bitcoin btc-icon"></i>
        </div>
        <h1>Crypto Rate</h1>
      </header>
      {btcPriceData ? <CryptoList data={btcPriceData} /> : "... będzie stał mój bank!"}
    </div>
  );
}

export default App;
