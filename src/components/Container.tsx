import * as React from 'react'
import { Box } from 'theme-ui'

const Container: React.FC = ({ children, ...other }) => (
  <Box mx={'auto'} sx={{ width: 'auto', maxWidth: 900, position: 'relative' }} {...other}>
    {children}
  </Box>
)

export default Container
