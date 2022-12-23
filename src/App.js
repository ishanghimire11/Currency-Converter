import All from './All';
import { useEffect,useState } from 'react';
import './App.css';

const URL="https://v6.exchangerate-api.com/v6/4be1e93cf04f77321e054ac1/latest/USD" 



function App() {
  const [CurrencyOptions,setCurrencyOptions]=useState([])
  const [currentCurrency,setCurrentCurrency]=useState()
  const [toCurrency,settoCurrency]=useState()


  console.log(CurrencyOptions)
  useEffect (() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base_code, ...Object.keys(data.conversion_rates)])
        setCurrentCurrency(data.base_code)
        settoCurrency(data.base_code)
      })
  },[])
  
  
  
  return (
    <div className="App">

        <h1>Currency Conversion</h1>
        <All CurrencyOptions={ CurrencyOptions }
         currentCurrency={currentCurrency}
         toCurrency={toCurrency}
         changefromCurrency={e => setCurrentCurrency(e.target.value)}
         onChangeCurrency={e => settoCurrency(e.target.value)}/> 

    </div>
  );
}

export default App;
