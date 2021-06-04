/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui'
import React from 'react'

interface PageProps extends BoxProps {}

const Page: React.FC<PageProps> = ({ children }) => (
  <Box
    sx={{
      display: 'block',
      flex: 1,
      position: 'relative',
      mb: 5
    }}
  >
    {children}
  </Box>
)

export default Page
