import React, { FC } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }
`

export const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <div>phrase</div>
    </>
  )
}
