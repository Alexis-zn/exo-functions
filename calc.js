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

const calc = (sign, nb1, nb2) => {
  switch (sign) {
    case '+':
      return add(nb1, nb2)
    case '-': 
      return sub(nb1, nb2)
    case '*':
      return mul(nb1, nb2)
    case '/':
      return div(nb1, nb2)
    default:
      return 'unknown operator'
  }
} 
console.log(calc('%', 9, 9))