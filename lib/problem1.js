function validateInput(input) {
  const number = Number(input);
  return Number.isInteger(number) && number > 0;
}

function findPrimes(limit) {
  const primes = [];
  nextNumber: for (let i = 2; i <= limit; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) continue nextNumber;
    }
    primes.push(i);
  }
  return primes;
}

function displayPrimes(primes, limit) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>Prime numbers up to ${limit}:</h2>
    <p>${primes.join(', ')}</p>
  `;
}

window.onload = function () {
  let input = null;

  while (true) {
    input = prompt("Enter a positive integer number:");
    if (validateInput(input)) break;
  }

  const limit = Number(input);
  const primes = findPrimes(limit);
  alert(`Prime numbers up to ${limit}: ${primes.join(', ')}`);
  displayPrimes(primes, limit);
};
