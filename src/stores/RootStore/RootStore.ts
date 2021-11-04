import { IPhrasesStore, PhrasesStore } from '../PhrasesStore'
export interface IRootStore {
  PhrasesStore: IPhrasesStore
}

export class RootStore implements IRootStore {
  PhrasesStore = new PhrasesStore()
}
