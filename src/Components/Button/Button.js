import React from 'react'
import styled from 'styled-components'

export const RootButton = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 20px;
  background: white;
`

const Button = props => {
  const { children, ...rest } = props

  return <RootButton {...rest}>{children}</RootButton>
}

Button.defaultProps = {}

Button.propTypes = {}

/** @component */
export default Button
