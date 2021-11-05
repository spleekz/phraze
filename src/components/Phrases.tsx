import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import styled from 'styled-components'
import { useStore } from '../stores/RootStore/RootStoreContext'

const PhrasesBlock = styled.div`
  width: 710px;
  margin: 15px 0;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  border-radius: 4px;
`
const PhraseBlock = styled.div`
  font-size: 24px;
  color: #333333;
  background-color: #ffffff;
`

export const Phrases: FC = observer((): JSX.Element => {
  const { PhrasesStore } = useStore()

  return (
    <PhrasesBlock>
      {PhrasesStore.customPhrase.map((phrase) => {
        return <PhraseBlock key={phrase}>{phrase}</PhraseBlock>
      })}
    </PhrasesBlock>
  )
})
