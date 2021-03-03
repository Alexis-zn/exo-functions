// math.max = renvoie le plus grand nombre d'une série 
// ... = spread syntax  

const biggest = (nb) => {
  return Math.max(...nb)
}
console.log(biggest([12, 88, 34, 72, 28]))  

