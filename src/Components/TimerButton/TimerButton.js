import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { RootButton } from '../Button'

import colors from '../../Styles/colors'

const StyledButton = styled(RootButton)`
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
`

const TimerButton = props => {
  const { colorMode, alignment, children, ...rest } = props

  const bgColor = colors.timer[colorMode].bg
  const textColor = colors.timer[colorMode].text

  return (
    <div style={{ textAlign: alignment, height: '100%' }}>
      <StyledButton bgColor={bgColor} textColor={textColor} {...rest}>
        {children}
      </StyledButton>
    </div>
  )
}

TimerButton.defaultProps = {
  colorMode: 'off',
  alignment: 'center'
}

TimerButton.propTypes = {
  colorMode: PropTypes.oneOf(['off', 'deut', 'prot', 'tri', 'mono']),
  alignment: PropTypes.oneOf(['left', 'center', 'right'])
}

/** @component */
export default TimerButton
