import * as React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { Flex, FlexProps } from 'theme-ui'

interface LayoutRootProps extends FlexProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className, ...other }) => (
  <>
    <Global styles={() => css(emotionNormalize)} />
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh'
      }}
      className={className}
      role="document"
      {...other}
    >
      {children}
    </Flex>
  </>
)

export default LayoutRoot
