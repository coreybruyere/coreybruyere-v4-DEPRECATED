/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui'
import * as React from 'react'

interface ContainerProps extends BoxProps {}

const Container: React.FC<ContainerProps> = ({ children, ...other }) => (
  <Box mx={'auto'} sx={{ width: 'auto', maxWidth: 900, position: 'relative' }} {...other}>
    {children}
  </Box>
)

export default Container
