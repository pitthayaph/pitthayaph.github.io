function isPositiveInteger(input) {
  const num = Number(input);
  return Number.isInteger(num) && num > 0;
}

function isNegativeInteger(input) {
  const num = Number(input);
  return Number.isInteger(num) && num < 0;
}

function readInput() {
  const list = [];
  while (true) {
    const input = prompt("Enter a positive integer (negative to finish):");

    if (isNegativeInteger(input)) break;
    if (!isPositiveInteger(input)) continue;

    list.push(Number(input));
  }
  return list;
}

function displayStats(list) {
  const resultDiv = document.getElementById("result");

  const average = list.length > 0
    ? (list.reduce((sum, val) => sum + val, 0) / list.length).toFixed(2)
    : "0.00";

  const min = list.length > 0 ? Math.min(...list) : 0;
  const max = list.length > 0 ? Math.max(...list) : 0;
  const allNumbers = list.length > 0 ? list.join(', ') : "None";

  
  alert(
    `You entered: ${allNumbers}\n` +
    `Average: ${average}\nMinimum: ${min}\nMaximum: ${max}`
  );
}


window.onload = function () {
  const numbers = readInput();
  displayStats(numbers);
};
