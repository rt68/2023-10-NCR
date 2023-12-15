import React, { useState, useEffect } from 'react';

export default function LuhnValidator() {

  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

 
  const handleChange = (e) => {
    const input = e.target.value.replace(/\s/g, '');
    setCardNumber(input);
  };

  useEffect(() => {
    const validCard = () => {
        // Check if cardNumber is empty or contains non-numeric characters
        if (!/^\d*$/.test(cardNumber)) {
            setIsValid(null); // Reset validity if input is invalid
            return;
          };
    
        const digits = cardNumber.split('').map(Number);
    
        for (let i = digits.length - 2; i >= 0; i -=2) {
            digits[i] *= 2;
            if (digits[i] > 9) {
                digits[i] -= 9;
              }
        }
     
      const total = digits.reduce((acc, digit) => acc + digit, 0);
      setIsValid(total % 10 === 0);
      };
    
    validCard();
  }, [cardNumber]);




return (
    <div>
    <label htmlFor="cardNumber">Enter Credit Card Number:</label>
    <input
      type="text"
      id="cardNumber"
      value={cardNumber}
      onChange={handleChange}
    />
    {isValid !== null ? (
      <p>
        The card number {cardNumber} is {isValid ? 'valid' : 'not valid'}.
      </p>
    ): <p>Please enter a number</p>}
  </div>
)
}