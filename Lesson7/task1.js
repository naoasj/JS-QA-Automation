const checkEven = (numb) => {
    console.log(`${numb} is an even number`)
}

const checkOdd = (numb) => {
    console.log(`${numb} is an odd number`)
}

const handleNum = (numb, evenCallback, oddCallback) => {
    if (numb % 2 === 0) {
      return evenCallback(numb); 
    } else {
      return oddCallback(numb);  
    }
};

handleNum(5, checkEven, checkOdd)
handleNum(4, checkEven, checkOdd)
