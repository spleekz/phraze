import { getRandom } from './getRandom'
/* eslint-disable no-loop-func */
export const getUniques = (min: number, max: number, count: number): Array<number> => {
  const uniques: Array<number> = []
  for (let i = 0; i < count; i++) {
    let number = getRandom(min, max)
    while (uniques.length && uniques.some((n) => n === number)) {
      number = getRandom(min, max)
    }
    uniques.push(number)
  }
  return uniques
}
