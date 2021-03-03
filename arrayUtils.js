// null est obligatoire en première valeur de retour et j'ai' pas compris pourquoi :(
const biggest = (nb) => {
  return Math.max.apply(null, nb) 
}
  console.log(biggest([12, 88, 34, 72, 28]))  