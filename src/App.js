import React, { Component } from 'react';
import './App.css';

import PriceDisplay from './components/PriceDisplay/PriceDisplay';
import TopCrypto from './components/TopCrypto/TopCrypto';

class App extends Component {
  constructor(props) {
    super(props);
    this.setCurrencyType = this.setCurrencyType.bind(this);
    this.state = {
      currencyOptions: [
        'eth-usd',
        'eth-eur',

        'btc-usd',
        'btc-eur',

        'ltc-usd',
        'ltc-eur'
      ],
      currencyType: window.localStorage.selectedCurrency || 'eth-usd'
    };
  }

  setCurrencyType(e) {
    this.setState({
      currencyType: e.target.value
    });
    window.localStorage.selectedCurrency = e.target.value;
  }

  render() {
    const optionsDOM = this.state.currencyOptions.map((currency) => {
      if (currency === window.localStorage.selectedCurrency) {
        return <option value={currency} selected>{currency}</option>;
      }

      return <option value={currency} >{currency}</option>;
    });

    return (
      <div className="App">
        <select className="currency-type" onChange={this.setCurrencyType}>
          {optionsDOM}
        </select>

        <PriceDisplay currency={this.state.currencyType} />
        <TopCrypto />

        <div className="about">
          <p>Donate ETH: 0x79aCad1654fd277096571E536b9Bd49b33c024e4</p>
          <p>Don't forget to add us to home screen</p>
          <p>Made by <a href="https://www.twitter.com/whyzhi">@whyzhi</a></p>
        </div>
      </div>
    );
  }
}

export default App;
