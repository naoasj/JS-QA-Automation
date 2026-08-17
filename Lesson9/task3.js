const car1 = {
    brand: "Cубару",
    model: "Чорне авто",
    year: 2026
}

const car2 = {
    brand: "Мустанг",
    model: "Рожеве авто",
    owner: 2002
}

const car3 = {...car1, ...car2}
console.log (car3)