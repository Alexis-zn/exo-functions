const count = (min, max, nbStep) => {
  for(let i = min; i <= max ; i+= nbStep)
    console.log(i)
}
count(100000, 1000000, 50000)