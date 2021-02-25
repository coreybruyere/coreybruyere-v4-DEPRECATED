import * as React from 'react'
/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { Link } from 'gatsby'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Box px={4} sx={{ backgroundColor: 'muted' }}>
    <Box
      p={4}
      sx={{
        // these use values from `theme.colors`
        color: 'background',
        backgroundColor: 'primary'
      }}
    >
      hi
    </Box>
    <Flex
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Link
        activeClassName="active"
        sx={{
          color: 'inherit',
          '&.active': {
            color: 'primary'
          }
        }}
        to="/"
      >
        {title}
      </Link>
    </Flex>
  </Box>
)

export default Header
