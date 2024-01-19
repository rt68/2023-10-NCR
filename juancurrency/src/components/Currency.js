export default function Currency ({currencyOptions, selectedCurrency,onChangeCurrency,amount,onChangeAmount}) {
    return (
        <div>
            <input
             type= 'number' 
             className="number" 
             value={amount} 
             onChange={onChangeAmount}
             ></input>
            <select 
            className="currency" 
            value = {selectedCurrency} 
            onChange={onChangeCurrency}
            > {
                currencyOptions.map(option=>
                <option className="option" key={option} value={option}>{option}</option>)
            }
                
            </select>
            
            
        </div>
    )
}