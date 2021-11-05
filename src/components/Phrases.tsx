import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import styled from 'styled-components'
import { useStore } from '../stores/RootStore/RootStoreContext'

const PhrasesBlock = styled.div`
  padding: 10px;
  background-color: #cecece;
`
const PhraseBlock = styled.div``

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
