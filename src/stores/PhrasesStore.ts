import { makeAutoObservable } from 'mobx'

type IPhraseBlock = Array<string>

export interface IPhrasesStore {
  phraseBlocks: Array<IPhraseBlock>
  numberOfBlocks: number
  maxNumberOfBlocks: number
  setNumberOfBlocks(numberOfBlocks: number): void
}

export class PhrasesStore implements IPhrasesStore {
  constructor() {
    makeAutoObservable(this)
  }

  phraseBlocks: Array<IPhraseBlock> = [
    ['Фраза первого блока 1', 'Фраза первого блока 2', 'Фраза первого блока 3'],
    ['Фраза второго блока 1', 'Фраза второго блока 2', 'Фраза второго блока 3'],
    ['Фраза третьего блока 1', 'Фраза третьего блока 2', 'Фраза третьего блока 3'],
    ['Фраза четвертого блока 1', 'Фраза четвертого блока 2', 'Фраза четвертого блока 3'],
  ]
  numberOfBlocks = 3
  get maxNumberOfBlocks(): number {
    return this.phraseBlocks.length
  }

  setNumberOfBlocks(numberOfBlocks: number): void {
    this.numberOfBlocks = numberOfBlocks
  }
}
