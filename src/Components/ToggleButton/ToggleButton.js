import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { RootButton } from '../Button'

import colors from '../../Styles/colors'

const StyledButton = styled(RootButton)`
  ${props => (props.active ? `background: ${props.bgColor};` : '')}
  ${props => (props.active ? `color: ${props.textColor};` : '')}
`

const ToggleButton = props => {
  const { active, colorMode, alignment, buttonKey, children, ...rest } = props

  const bgColor = colors.active[colorMode].bg
  const textColor = colors.active[colorMode].text

  return (
    <div
      key={buttonKey}
      style={{ textAlign: alignment, height: '100%', width: '100%' }}
    >
      <StyledButton
        active={active}
        bgColor={bgColor}
        textColor={textColor}
        {...rest}
      >
        {children}
      </StyledButton>
    </div>
  )
}

ToggleButton.defaultProps = {
  active: false,
  colorMode: 'off',
  alignment: 'center'
}

ToggleButton.propTypes = {
  active: PropTypes.bool,
  colorMode: PropTypes.oneOf(['off', 'deut', 'prot', 'tri', 'mono']),
  alignment: PropTypes.oneOf(['left', 'center', 'right'])
}

/** @component */
export default ToggleButton
