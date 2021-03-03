const isOdd = (nb) => {
    return (nb % 2) === 1
}

const isEven = (nb) => {
    return !isOdd(nb)
}

console.log(isEven(11))