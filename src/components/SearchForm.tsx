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
`
const SearchInput = styled.input`
  font-size: 30px;
  padding: 0 0 0 4px;
  &::placeholder {
    font-size: 21px;
  }
`
const GenerateButton = styled.button`
  font-size: 32px;
  padding: 4px;
  &:hover {
    cursor: pointer;
  }
`

export const SearchForm: FC = () => {
  const { PhrasesStore } = useStore()

  return (
    <SearchFormContainer>
      <FieldsContainer>
        <SearchInput
          placeholder={`Количество блоков (максимум - ${PhrasesStore.maxNumberOfBlocks})`}
        />
        <GenerateButton>Сгенерировать фразу</GenerateButton>
      </FieldsContainer>
    </SearchFormContainer>
  )
}
