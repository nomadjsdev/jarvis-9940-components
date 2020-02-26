import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { RootButton } from '../Button'
import ToggleButton from '../ToggleButton'

import colors from '../../Styles/colors'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.orientation === 'vertical' ? 'column' : 'row'};
  ${props => (props.alignment === 'left' ? 'justify-content: flex-start;' : '')}
  ${props => (props.alignment === 'center' ? 'justify-content: center;' : '')}
  ${props => (props.alignment === 'right' ? 'justify-content: flex-end;' : '')}
`
const Title = styled.h3`
  margin: 8px 15px;
  text-align: ${props => props.alignment};
`

const ResetButton = styled(RootButton)`
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
`

const ButtonGroup = props => {
  const {
    title,
    orientation,
    colorMode,
    alignment,
    buttons,
    active,
    click
  } = props

  const bgColor = colors.reset[colorMode].bg
  const textColor = colors.reset[colorMode].text

  let buttonArray = []

  if (title) {
    buttonArray.push(
      <Title key={`title-${buttons[0].id}`} alignment={alignment}>
        {title}
      </Title>
    )
  }

  for (const button of buttons) {
    buttonArray.push(
      <ToggleButton
        key={button.id}
        buttonKey={button.id}
        active={active === button.id}
        colorMode={colorMode}
        alignment={alignment}
        onClick={() => {
          click(button.id)
        }}
      >
        {button.text}
      </ToggleButton>
    )
  }
  buttonArray.push(
    <div key={`reset-${buttons[0].id}`} style={{ textAlign: alignment }}>
      <ResetButton
        bgColor={bgColor}
        textColor={textColor}
        onClick={() => {
          click('reset')
        }}
      >
        Reset
      </ResetButton>
    </div>
  )

  return (
    <StyledDiv orientation={orientation} alignment={alignment}>
      {buttonArray}
    </StyledDiv>
  )
}

ButtonGroup.defaultProps = {
  title: null,
  orientation: 'vertical',
  colorMode: 'off',
  alignment: 'center',
  buttons: ['One', 'Two', 'Three', 'Four'],
  active: null,
  click: () => {}
}

ButtonGroup.propTypes = {
  title: PropTypes.string,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  colorMode: PropTypes.oneOf(['off', 'deut', 'prot', 'tri', 'mono']),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  buttons: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.string,
  click: PropTypes.func
}

/** @component */
export default ButtonGroup
