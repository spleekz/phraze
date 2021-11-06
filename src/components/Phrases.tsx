import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import styled from 'styled-components'
import { useStore } from '../stores/RootStore/RootStoreContext'
import { CopyButton } from './CopyButton'

const PhrasesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 710px;
  margin: 15px 0;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  border-radius: 4px;
`
const PhraseList = styled.div`
  margin-right: 10px;
`
const PhraseBlock = styled.div`
  font-size: 24px;
  background-color: #ffffff;
  color: #333333;
`
const ButtonContainer = styled.div``

export const Phrases: FC = observer((): JSX.Element => {
  const { PhrasesStore } = useStore()

  return (
    <PhrasesBlock>
      <PhraseList>
        {PhrasesStore.customPhrase.map((phrase) => {
          return (
            <>
              <PhraseBlock key={phrase}>{`${phrase}\n\n`}</PhraseBlock>
              <br></br>
            </>
          )
        })}
      </PhraseList>
      <ButtonContainer>
        <CopyButton text={PhrasesStore.customPhraseString} />
      </ButtonContainer>
    </PhrasesBlock>
  )
})
