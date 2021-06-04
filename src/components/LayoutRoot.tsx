/** @jsx jsx */
import { jsx, Flex, FlexProps } from 'theme-ui'
import * as React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

interface LayoutRootProps extends FlexProps {}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, ...other }) => (
  <React.Fragment>
    <Global styles={() => css(emotionNormalize)} />
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh'
      }}
      role="document"
      {...other}
    >
      {children}
    </Flex>
  </React.Fragment>
)

export default LayoutRoot
