import React from 'react'
import styled from 'styled-components'

import colors from '../../Styles/colors'

export const RootButton = styled.button`
  border: 1px solid ${colors.darkBorder};
  border-radius: 4px;
  padding: 10px 10px;
  background: ${colors.default.off.bg};
  color: ${colors.darkText};
  font-weight: bold;
`

const Button = props => {
  const { children, ...rest } = props

  return <RootButton {...rest}>{children}</RootButton>
}

Button.defaultProps = {}

Button.propTypes = {}

/** @component */
export default Button
