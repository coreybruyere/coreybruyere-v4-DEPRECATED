import * as React from 'react'
import styled from '@emotion/styled'
import { Box } from 'theme-ui'

interface SectionProps {
  heading: React.ReactNode
  subHeading?: React.ReactNode
}

const Wrap = styled(Box)``

const Section: React.FC<SectionProps> = ({ children, heading, subHeading }) => (
  <Wrap as="section">
    <div>{heading}</div>
    <div>{subHeading}</div>
    {children}
  </Wrap>
)

export default Section
