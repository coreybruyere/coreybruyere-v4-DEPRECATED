/** @jsx jsx */
import { jsx, Flex, FlexProps } from 'theme-ui'
import * as React from 'react'

interface MainProps extends FlexProps {}

const Main: React.FC<MainProps> = ({ children, ...other }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      flex: 1
    }}
    as={'main'}
    {...other}
  >
    {children}
  </Flex>
)

export default Main
