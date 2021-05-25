import * as React from 'react'
import { Box, BoxProps } from 'theme-ui'

interface ContainerProps extends BoxProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className, ...other }) => (
  <Box mx={'auto'} className={className} sx={{ width: 'auto', maxWidth: 900, position: 'relative' }} {...other}>
    {children}
  </Box>
)

export default Container
