import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { RootButton } from '../Button'

const StyledButton = styled(RootButton)`
  ${props => (props.active ? 'background: palegreen;' : '')}
`

const ToggleButton = props => {
  const { active, children, ...rest } = props

  return (
    <StyledButton active={active} {...rest}>
      {children}
    </StyledButton>
  )
}

ToggleButton.defaultProps = {
  active: false
}

ToggleButton.propTypes = {
  active: PropTypes.bool
}

/** @component */
export default ToggleButton
