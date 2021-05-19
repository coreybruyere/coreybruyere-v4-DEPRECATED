import * as React from 'react'
/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { Link } from 'gatsby'

interface HeaderProps {
  title: string
  navItems?: {
    name: string
    link: string
  }[]
}

const Header: React.FC<HeaderProps> = ({ title, navItems }) => (
  <Box px={4} sx={{ backgroundColor: 'muted' }} as="header" role="banner">
    <Box
      p={4}
      sx={{
        // these use values from `theme.colors`
        color: 'background',
        backgroundColor: 'primary'
      }}
    >
      Logo
    </Box>
    <Box as="nav">
      <Flex
        as="ul"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          listStyle: 'none'
        }}
      >
        <Box as="li">
          <Link
            activeClassName="active"
            sx={{
              color: 'primary',
              '&.active': {
                color: 'primary'
              }
            }}
            to="/"
          >
            {title}
          </Link>
        </Box>
        {navItems &&
          navItems.map(({ name, link }) => {
            console.log(name)
            return (
              <Box as="li" key={`${title}-${link}`}>
                <Link
                  activeClassName="active"
                  sx={{
                    color: 'primary',
                    '&.active': {
                      color: 'primary'
                    }
                  }}
                  to={link}
                >
                  {name}
                </Link>
              </Box>
            )
          })}
      </Flex>
    </Box>
  </Box>
)

export default Header
