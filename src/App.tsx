import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { SearchForm } from './components/SearchForm'
import { useStore } from './stores/RootStore/RootStoreContext'
import { Phrases } from './components/Phrases'
import { observer } from 'mobx-react-lite'

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Alegreya Sans SC', sans-serif;
  }
  body {
    padding:45px;
    background-color: #f3f3f3;
  }
  input {
    outline: none;
  }
  button {
    border:0;
  }
`
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const App: FC = observer((): JSX.Element => {
  const { PhrasesStore } = useStore()

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <SearchForm />
        {PhrasesStore.customPhrase.length !== 0 && <Phrases />}
      </AppContainer>
    </>
  )
})
