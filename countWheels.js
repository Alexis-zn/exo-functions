const NB_WHEELS_CYCLE = 1
const NB_WHEELS_MOTO = 2
const NB_WHEELS_VOITURE = 4
const NB_WHEELS_LIMOUSINE = 6

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  return (nb_monocycle * NB_WHEELS_CYCLE) + (nb_moto * NB_WHEELS_MOTO) + (nb_voiture * NB_WHEELS_VOITURE) + (nb_limousine * NB_WHEELS_LIMOUSINE)
}

console.log(countWheels(4, 12, 5, 1))