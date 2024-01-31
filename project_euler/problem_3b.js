function largestPrimeFactor(number) {
    let factor = 2; // Starting with the smallest prime factor
    while (number > 1) {
      if (number % factor === 0) {
        number /= factor; // Divide the number by its smallest prime factor
      } else {
        factor++; // Move to the next potential factor
      }
    }
    return factor; // The last factor is the largest prime factor
  }
  
  // Example usage
  const number = 600851475143;
  console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}.`);
  
  function findAllPrimeFactors(number) {
    let factors = []; // Array to store all prime factors
    let factor = 2; // Start with the smallest prime number
  
    while (number > 1) {
      while (number % factor === 0) {
        factors.push(factor); // Add the factor to the array
        number /= factor; // Divide the number by its prime factor
      }
      factor++; // Move to the next potential prime factor
    }
  
    return factors; // Return the array of prime factors
  }
  
  // Example usage
  console.log(findAllPrimeFactors(number)); 