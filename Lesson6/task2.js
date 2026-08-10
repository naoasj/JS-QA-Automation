function checkAdult (age) {
    let isAdult;
    if (age >= 18) {
        isAdult = true}
    else {
        isAdult = false}
    return isAdult
}
const result = checkAdult (25)
console.log (result)



const checkAdult2 = (age) => {
    if (age >= 18) {
        return true}
    else {
        return false}
}
const resultArrow = checkAdult2 (2)
console.log (resultArrow)