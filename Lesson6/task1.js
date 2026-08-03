function calculateArea (width, height) {
    const areaDeclaration  = ((height * width).toFixed(1));
    return areaDeclaration
}
const resultDeclaration = calculateArea(13.6, 3.4)  
console.log (resultDeclaration)



const calculateArea2 = function (width, height) {
    return ((height * width).toFixed(1))
}
const resultExpression = calculateArea2(2.2, 9.5);
console.log (resultExpression)



const calculateArea3 = (width, height) => {
    return ((height * width).toFixed(1))
}
const resultArrow = calculateArea3(8.9, 43.1);
console.log (resultArrow)