import * as React from 'react'
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

interface MainProps {
  className?: string
}

const Main: React.FC<MainProps> = ({ children, className }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      flex: 1
    }}
    as={'main'}
    className={className}
  >
    {children}
  </Flex>
)

export default Main
