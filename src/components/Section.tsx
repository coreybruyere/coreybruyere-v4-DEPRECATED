import * as React from 'react'
import { Box } from 'theme-ui'

interface SectionProps {
  heading: React.ReactNode
  subHeading?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children, heading, subHeading }) => (
  <Box as="section">
    <div>{heading}</div>
    <div>{subHeading}</div>
    {children}
  </Box>
)

export default Section
