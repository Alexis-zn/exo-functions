const add = (nb1, nb2) => {
  return (nb1 + nb2)
}
// console.log(add(12, 13))

const sub = (nb1, nb2) => {
  return (nb1 - nb2)
}
// console.log(sub(12, 13))

const mul = (nb1, nb2) => {
  return (nb1 * nb2)
}
// console.log(mul(12, 13))

const div = (nb1, nb2) => {
  return (nb1 / nb2)
}
// console.log(div(12, 13))

const calc = (nb1, sign, nb2) => {
  switch (sign) {
    case '+':
      return add(nb1, nb2)
      break   
    case '-': 
      return sub(nb1, nb2)
      break
    case '*':
      return mul(nb1, nb2)
      break
    case '/':
      return div(nb1, nb2)
      break
  }
}
console.log(calc(2, '+', 2))