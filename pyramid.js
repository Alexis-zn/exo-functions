const pyramid = (nb, pattern, reverse) => {
  let str = ''    
  if(!reverse) {
       for(let i = 1; i <= nb; i++) {
          str += pattern.repeat(i)
       if (i !==nb) {
          str += '\n'
        }
      }     
    } else {
       for(let i = nb; i >= 1; i--) {
          str += pattern.repeat(i)
       if(i !==1) {
          str += '\n'
        }
      }
    }
       return str
  }

let str1 = pyramid(23, 'oui', false)
console.log(str1)