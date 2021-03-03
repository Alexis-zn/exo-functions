const reverseStr = (str) => {
    return str.split('').reverse().join('')
}
//console.log(reverseStr('Hello!'))

const isPalindrome = (str) => {
    return reverseStr(str) === str
}
console.log(isPalindrome('oui'))
console.log(isPalindrome('non'))