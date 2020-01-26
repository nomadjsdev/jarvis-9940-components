import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledButton as Button } from 'Components/Button'

export const StyledButton = styled(Button)`
  background: palegreen;
`

const SessionButton = props => {
  const { children, ...rest } = props

  return <StyledButton {...rest}>{children}</StyledButton>
}

SessionButton.defaultProps = {
  size: 'regular'
}

SessionButton.propTypes = {
  size: PropTypes.oneOf(['regular', 'large'])
}

/** @component */
export default SessionButton
