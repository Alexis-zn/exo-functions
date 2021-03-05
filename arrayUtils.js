// math.max = renvoie le plus grand nombre d'une série 
// ... = spread syntax  

const biggest = (nb) => {
  return Math.max(...nb)
}
// console.log(biggest([12, 88, 34, 72, 28]))  

const sortAscend = (list) => {
  return list.sort((a, b) => { return a - b} )
} 
//console.log(sortAscend([7, 4, 12, 42, 47, 26, 9, 2]))

const makeUnique = (nbList) =>  {
  return Array.from(new Set (nbList))
}
console.log(makeUnique ([1, 1, 2, 2, 3, 3, 4, 4] ))