const isOdd = (nb) => {
    return (nb % 2) === 1
}
const isEven = (nb) => {
    return !isOdd(nb)
}
console.log(isOdd(8))
console.log(isEven(12))
