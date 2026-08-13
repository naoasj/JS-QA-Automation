const myArray = [1, 2, 3, 4, 5]

const newArray = myArray.map((number) => ((number)*myArray.indexOf(number)))

console.log (newArray)
