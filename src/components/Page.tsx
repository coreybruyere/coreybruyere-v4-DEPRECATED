import React from 'react'
import { Box, BoxProps } from 'theme-ui'

interface PageProps extends BoxProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <Box
    sx={{
      display: 'block',
      flex: 1,
      position: 'relative',
      mb: 5
    }}
    className={className}
  >
    {children}
  </Box>
)

export default Page
