/* eslint-disable no-loop-func */
export const getUniques = (min: number, max: number, count: number): Array<number> => {
  const uniques: Array<number> = []
  for (let i = 0; i < count; i++) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min
    while (uniques.length && uniques.some((n) => n === number)) {
      number = Math.floor(Math.random() * (max - min + 1)) + min
    }
    uniques.push(number)
  }
  return uniques
}
