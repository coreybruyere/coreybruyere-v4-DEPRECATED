import * as React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { Flex, FlexProps } from 'theme-ui'

interface LayoutRootProps extends FlexProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(emotionNormalize)} />
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh'
      }}
      className={className}
      role="document"
    >
      {children}
    </Flex>
  </>
)

export default LayoutRoot
