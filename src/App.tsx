import React, { FC } from 'react'
import { createGlobalStyle } from 'styled-components'
import { SearchForm } from './components/SearchForm'

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

export const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <SearchForm />
    </>
  )
}
