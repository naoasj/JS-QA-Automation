const checkOrder = (available, ordered) => {
    switch (true) {
        case ordered === 0:
            return "Your order is empty";

        case available < ordered:
            return "Your order is too large, we don't have enough goods"

        case available >= ordered:
            return  "Your order is accepted"
    }
}
const result = checkOrder (8, 0)
console.log (result)