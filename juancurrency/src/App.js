import Currency from './components/Currency';
import './App.css';
import { useEffect, useState, useCallback } from 'react';

const BASE_URL = 'https://v6.exchangerate-api.com/v6/b963a354e737ffbd65d955cf'
function App() {

const [currencyOptions, setCurrencyOptions] = useState([])
const [fromCurrency, setFromCurrency] = useState()
const [toCurrency, setToCurrency] = useState()
const [amount, setAmount] = useState(1)
const [amountFromCurrency, setAmountFromCurrency] = useState(true)
const [exchangeRate, setExchangeRate] = useState()

let fromAmount, toAmount
if(amountFromCurrency){
   fromAmount = amount
  toAmount =(amount * exchangeRate).toFixed(4)
}
else{
  toAmount = amount
  fromAmount = (amount / exchangeRate).toFixed(4)
}

const getCurrency = async()=>{
  try {
    const response = await fetch(`${BASE_URL}/latest/USD`)
    const data = await response.json()
    const cny = Object.keys(data.conversion_rates)[30]
    setCurrencyOptions([...Object.keys(data.conversion_rates)])
    setFromCurrency(data.base_code)
    setToCurrency(cny)
    setExchangeRate(data.conversion_rates[cny])
    
  }catch (error){
    console.error(error)
  }
}

useEffect(()=>{
    getCurrency()
},[])

const changeCurrency = useCallback(async()=>{
    if(fromCurrency!=null && toCurrency != null){
      try {
        const response = await fetch (`${BASE_URL}/pair/${fromCurrency}/${toCurrency}`)
        const data = await response.json()
        setExchangeRate(data.conversion_rate)
         }
      catch (error){
        console.error(error)
      }
    }   
}, [fromCurrency, toCurrency]);

useEffect(()=>{

  changeCurrency()

},[changeCurrency])

function handleFromAmountChange(e){
  setAmount(e.target.value)
  setAmountFromCurrency(true)
}

function handleToAmountChange(e){
  setAmount(e.target.value)
  setAmountFromCurrency(false)
}


  return (
    <div>
      <h2>Currency  Converter</h2>
      <Currency 
      currencyOptions={currencyOptions} 
      selectedCurrency = {fromCurrency} 
      onChangeCurrency={event=>setFromCurrency(event.target.value)} 
      amount={fromAmount}
      onChangeAmount={handleFromAmountChange}
      ></Currency>
      <div className='equal'>=</div>
      <Currency 
      currencyOptions={currencyOptions} 
      selectedCurrency = {toCurrency} 
      onChangeCurrency={event=>setToCurrency(event.target.value)} 
      amount={toAmount}
      onChangeAmount={handleToAmountChange}
      ></Currency>
    </div>
  );
}

export default App;
