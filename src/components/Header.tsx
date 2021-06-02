/** @jsx jsx */
import { jsx, Box, BoxProps, Flex } from 'theme-ui'
import * as React from 'react'
import { Link } from 'gatsby'

interface HeaderProps extends BoxProps {
  title: string
  navItems?: {
    name: string
    link: string
  }[]
}

const Header: React.FC<HeaderProps> = ({ title, navItems, ...other }) => (
  <Flex
    as="header"
    role="banner"
    sx={{ px: 4, justifyContent: 'space-between', backgroundColor: 'muted', boxShadow: 'inset', ...other.sx }}
  >
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: -1, filter: 'blur(5px)' }}></Box>
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
  </Flex>
)

export default Header
