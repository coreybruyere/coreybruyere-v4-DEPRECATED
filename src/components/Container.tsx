import * as React from 'react'
import { Box } from 'theme-ui'

import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const Container: React.FC = ({ children, ...other }) => (
  <Box mx={'auto'} sx={{ width: 'auto', maxWidth: `${getEmSize(widths.lg)}em`, position: 'relative' }} {...other}>
    {children}
  </Box>
)

export default Container
