import styled from 'styled-components'

import {
  space,
  size,
  color,
  maxWidth,
  display,
  textAlign,
  borderRadius
} from 'styled-system'

const Image = styled('img')(
  {
    display: 'block',
    maxWidth: '100%'
  },
  space,
  color,
  size,
  maxWidth,
  display,
  textAlign,
  borderRadius
)

Image.defaultProps = {
  ...space.defaultProps,
  ...color.defaultProps,
  ...maxWidth.defaultProps,
  ...size.defaultProps,
  ...display.defaultProps,
  ...textAlign.defaultProps,
  ...borderRadius.defaultProps
}

export default Image
