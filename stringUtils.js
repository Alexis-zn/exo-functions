const reverseStr = (str) => {
    return str.split('').reverse().join('')
}

const isPalindrome = (str) => {
    return reverseStr(str) === str
}

console.log(reverseStr('Hello!'))
console.log(isPalindrome('oui'))
console.log(isPalindrome('non'))