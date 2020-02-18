import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { RootButton } from '../Button'
import ToggleButton from '../ToggleButton'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.orientation === 'vertical' ? 'column' : 'row'};
  justify-content: center;
`

const ResetButton = styled(RootButton)`
  background: palegoldenrod;
`

const ButtonGroup = props => {
  const { orientation, buttons, active, click } = props

  let buttonArray = []
  for (const button of buttons) {
    buttonArray.push(
      <ToggleButton
        key={button.id}
        active={active === button.id}
        onClick={() => {
          click(button.id)
        }}
      >
        {button.text}
      </ToggleButton>
    )
  }
  buttonArray.push(
    <ResetButton
      onClick={() => {
        click('reset')
      }}
    >
      Reset
    </ResetButton>
  )

  return <StyledDiv orientation={orientation}>{buttonArray}</StyledDiv>
}

ButtonGroup.defaultProps = {
  orientation: 'vertical',
  buttons: ['One', 'Two', 'Three', 'Four'],
  active: '0',
  click: () => {}
}

ButtonGroup.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  buttons: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.string,
  click: PropTypes.func
}

/** @component */
export default ButtonGroup
