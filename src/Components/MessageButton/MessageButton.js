import React from 'react'
import styled from 'styled-components'

import { RootButton } from '../Button'

const StyledButton = styled(RootButton)`
  background: palegoldenrod;
`

const MessageButton = props => {
  const { children, ...rest } = props

  return <StyledButton {...rest}>{children}</StyledButton>
}

/** @component */
export default MessageButton
