import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { CheckIcon } from '../svg/CheckIcon'
import { CopyIcon } from '../svg/CopyIcon'

interface CopyButtonProps {
  text: string
}

const StyledCopyButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  svg {
    transition: all 0.26s;
  }
`

export const CopyButton: FC<CopyButtonProps> = ({ text }): JSX.Element => {
  const [fillColor, setFillColor] = useState<string>('#3a3a3a')
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyPhrase = (): void => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
  }
  useEffect(() => {
    if (isCopied) {
      setFillColor('#3a3a3a')
      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    }
  }, [isCopied])

  return (
    <StyledCopyButton
      onClick={copyPhrase}
      disabled={isCopied}
      onMouseEnter={() => setFillColor('#00ccff')}
      onMouseLeave={() => setFillColor('#3a3a3a')}
    >
      {isCopied ? <CheckIcon /> : <CopyIcon fillColor={fillColor} />}
    </StyledCopyButton>
  )
}
