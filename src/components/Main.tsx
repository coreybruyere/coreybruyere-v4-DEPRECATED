import * as React from 'react'
import { Flex, FlexProps } from 'theme-ui'

interface MainProps extends FlexProps {
  className?: string
}

const Main: React.FC<MainProps> = ({ children, className, ...other }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      flex: 1
    }}
    as={'main'}
    className={className}
    {...other}
  >
    {children}
  </Flex>
)

export default Main
