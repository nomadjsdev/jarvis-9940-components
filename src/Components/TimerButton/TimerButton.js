import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { RootButton } from 'Components/Button'

const StyledButton = styled(RootButton)`
  background: lightskyblue;
  ${props => (props.active ? 'border: 1px solid red' : '')}
`

const TimerButton = props => {
  const { active, children, ...rest } = props

  return (
    <StyledButton active={active} {...rest}>
      {children}
    </StyledButton>
  )
}

TimerButton.defaultProps = {
  active: false
}

TimerButton.propTypes = {
  active: PropTypes.bool
}

/** @component */
export default TimerButton
