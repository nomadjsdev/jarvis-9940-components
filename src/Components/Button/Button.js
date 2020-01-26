import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  background: hotpink;
  border-radius: 4px;
  color: white;
  padding: ${props => (props.size === 'regular' ? '5px 5px;' : '10px 10px;')};
`

const Button = props => {
  const { children, ...rest } = props

  return <StyledButton {...rest}>{children}</StyledButton>
}

Button.defaultProps = {
  size: 'regular'
}

Button.propTypes = {
  size: PropTypes.oneOf(['regular', 'large'])
}

/** @component */
export default Button
