const numbersList = [1,10,14,2,4,5,43,34]

const newArray = numbersList.map(number => number)

newArray.sort((a, b) => a - b)

console.log(`${numbersList} початковий список`);
console.log(`${newArray} відсортований список`);