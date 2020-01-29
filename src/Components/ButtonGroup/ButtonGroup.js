import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ToggleButton from '../ToggleButton'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.orientation === 'vertical' ? 'column' : 'row'};
  justify-content: center;
`

const ButtonGroup = props => {
  const { orientation, buttons, active } = props

  let buttonArray = []
  for (const button of buttons) {
    buttonArray.push(
      <ToggleButton key={button.id} active={active === button.id}>
        {button.text}
      </ToggleButton>
    )
  }

  return <StyledDiv orientation={orientation}>{buttonArray}</StyledDiv>
}

ButtonGroup.defaultProps = {
  orientation: 'vertical',
  buttons: ['One', 'Two', 'Three', 'Four'],
  active: '0'
}

ButtonGroup.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  buttons: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.string
}

/** @component */
export default ButtonGroup
