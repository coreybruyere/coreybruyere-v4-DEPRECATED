import * as React from 'react'
import styled from '@emotion/styled'
import { Box } from 'theme-ui'

import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledContainer = styled(Box)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
