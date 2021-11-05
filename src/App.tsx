import React, { FC } from 'react'
import { createGlobalStyle } from 'styled-components'
import { SearchForm } from './components/SearchForm'
import { useStore } from './stores/RootStore/RootStoreContext'
import { Phrases } from './components/Phrases'
import { observer } from 'mobx-react-lite'

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: 'Alegreya Sans SC', sans-serif;
  }
  body {
    padding:45px;
  }
`

export const App: FC = observer((): JSX.Element => {
  const { PhrasesStore } = useStore()
  return (
    <>
      <GlobalStyles />
      <SearchForm />
      {PhrasesStore.customPhrase.length !== 0 && <Phrases />}
    </>
  )
})
