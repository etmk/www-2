import { Menu as MenuIcon, X as CloseIcon } from 'react-feather'
import { Box, Flex, Hide } from 'components/elements'
import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { transition } from 'theme'

import AsideBase from './AsideBase'

import { TOOLBAR_HEIGHT } from 'components/elements/Toolbar'
import { ASIDE_WIDTH } from './constants'

const MenuButton = styled('button')`
  cursor: pointer;
  z-index: 3;
  appearance: none;
  border: 0;
  margin: 0;
  padding: 0;
  top: ${TOOLBAR_HEIGHT};
  outline: none;
  background: transparent;
`

const AsideButton = React.forwardRef((props, ref) => (
  <MenuButton {...props} ref={ref} title='Toggle Menu'>
    <Box display='inline-flex' mt={3} bg='white'>
      <MenuIcon size={20} />
    </Box>
  </MenuButton>
))

const css = `
transition: padding-left ${transition.medium};
`

const AsideMobile = ({ children, ...props }) => {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)

  const CloseButton = () => (
    <CloseIcon
      size={20}
      onClick={toggleOpen}
      css={`
        custor: pointer;
      `}
    />
  )

  const css = `
    background: white;
    z-index: 2;
    left: 0;
  `

  return (
    <Fragment>
      <AsideBase
        CloseButton={CloseButton}
        isOpen={isOpen}
        css={css}
        {...props}
      />
      <AsideButton isOpen={isOpen} onClick={toggleOpen} />
      <Flex flexDirection='column' as='article' css={css}>
        {children}
      </Flex>
    </Fragment>
  )
}

const AsideDesktop = ({ children, ...props }) => (
  <Fragment>
    <AsideBase isOpen {...props} />
    <Flex pl={ASIDE_WIDTH} flexDirection='column' as='article' css={css}>
      {children}
    </Flex>
  </Fragment>
)

export default props => (
  <Fragment>
    <Hide breakpoints={[0, 1, 2]}>
      <AsideDesktop {...props} />
    </Hide>
    <Hide breakpoints={[3]}>
      <AsideMobile {...props} />
    </Hide>
  </Fragment>
)
