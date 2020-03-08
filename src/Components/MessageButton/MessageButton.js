import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { RootButton } from '../Button'

import colors from '../../Styles/colors'

const StyledButton = styled(RootButton)`
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
`

const MessageButton = props => {
  const { colorMode, alignment, children, ...rest } = props

  const bgColor = colors.message[colorMode].bg
  const textColor = colors.message[colorMode].text

  return (
    <div style={{ textAlign: alignment, height: '100%', width: '100%' }}>
      <StyledButton bgColor={bgColor} textColor={textColor} {...rest}>
        {children}
      </StyledButton>
    </div>
  )
}

MessageButton.defaultProps = {
  colorMode: 'off',
  alignment: 'center'
}

MessageButton.propTypes = {
  colorMode: PropTypes.oneOf(['off', 'deut', 'prot', 'tri', 'mono']),
  alignment: PropTypes.oneOf(['left', 'center', 'right'])
}

/** @component */
export default MessageButton
