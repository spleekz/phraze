import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import styled from 'styled-components'
import { useStore } from '../stores/RootStore/RootStoreContext'

const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 710px;
`
const SearchInput = styled.input`
  font-size: 30px;
  padding: 0 0 0 4px;
  border-radius: 5px;
  &::placeholder {
    font-size: 21px;
  }
`
const GenerateButton = styled.button`
  font-size: 28px;
  font-weight: bold;
  background-color: #fdfdfd;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  border-radius: 5px;
  padding: 4px;
  &:hover {
    cursor: pointer;
  }
`

export const SearchForm: FC = observer((): JSX.Element => {
  const { PhrasesStore } = useStore()

  const setNumberOfBlocks = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value)
    if (!isNaN(value)) PhrasesStore.setNumberOfBlocks(value)
  }
  const generatePhrase = (): void => {
    if (
      PhrasesStore.numberOfBlocks > 0 &&
      PhrasesStore.numberOfBlocks <= PhrasesStore.maxNumberOfBlocks
    ) {
      PhrasesStore.generatePhrase()
    }
  }

  return (
    <SearchFormContainer>
      <FieldsContainer>
        <SearchInput
          placeholder={`Количество блоков (максимум - ${PhrasesStore.maxNumberOfBlocks})`}
          value={PhrasesStore.numberOfBlocks === 0 ? '' : PhrasesStore.numberOfBlocks}
          onChange={setNumberOfBlocks}
        />
        <GenerateButton onClick={generatePhrase}>Сгенерировать фразу</GenerateButton>
      </FieldsContainer>
    </SearchFormContainer>
  )
})
