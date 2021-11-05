import { makeAutoObservable } from 'mobx'
import { getRandom } from '../utils/getRandom'
import { getUniques } from '../utils/getUniques'

type IPhraseBlock = Array<string>

export interface IPhrasesStore {
  phraseBlocks: Array<IPhraseBlock>
  numberOfBlocks: number
  maxNumberOfBlocks: number
  customPhrase: Array<string>
  setNumberOfBlocks(numberOfBlocks: number): void
  generatePhrase(): void
}

export class PhrasesStore implements IPhrasesStore {
  constructor() {
    makeAutoObservable(this)
  }
  customPhrase: Array<string> = []

  phraseBlocks: Array<IPhraseBlock> = [
    ['Фраза первого блока 1', 'Фраза первого блока 2', 'Фраза первого блока 3'],
    ['Фраза второго блока 1', 'Фраза второго блока 2', 'Фраза второго блока 3'],
    ['Фраза третьего блока 1', 'Фраза третьего блока 2', 'Фраза третьего блока 3'],
    ['Фраза четвертого блока 1', 'Фраза четвертого блока 2', 'Фраза четвертого блока 3'],
  ]
  numberOfBlocks = 0
  get maxNumberOfBlocks(): number {
    return this.phraseBlocks.length
  }

  setNumberOfBlocks(numberOfBlocks: number): void {
    this.numberOfBlocks = numberOfBlocks
  }
  generatePhrase(): void {
    const customPhrase: Array<string> = []
    const indexesOfBlocks = getUniques(1, this.maxNumberOfBlocks - 1, this.numberOfBlocks - 1)
    const indexes = [0, ...indexesOfBlocks]
    indexes.forEach((index) => {
      const block = this.phraseBlocks[index]
      const indexOfPhrase = getRandom(0, block.length - 1)
      const phrase = block[indexOfPhrase]
      customPhrase.push(phrase)
    })
    this.customPhrase = customPhrase
  }
}
