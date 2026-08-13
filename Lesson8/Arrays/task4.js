const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenArray = []

for (const element of myArray) {
    if (element % 2 === 0) {
        evenArray.push(element)
    }
}

console.log(evenArray)

