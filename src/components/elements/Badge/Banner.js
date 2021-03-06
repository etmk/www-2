import styled from 'styled-components'
import { lighten } from 'polished'

import { BOX_SHADOW } from '../Button/ButtonBase'

const Badge = styled('span')`
  padding: 0 6px;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${BOX_SHADOW}
    ${({ theme }) => lighten(0.25, theme.colors.secondary)};
  text-transform: uppercase;
  border-radius: 10px;
  color: white;
  position: relative;
  bottom: 1px;
`

export default Badge
