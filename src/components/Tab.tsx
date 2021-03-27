/** @jsx jsx */
import { jsx, Box, Flex, Button } from 'theme-ui'
import { useTabState, Tab as ReakitTab, TabList as ReakitTabList, TabPanel as ReakitTabPanel } from 'reakit/Tab'

/**
 *
 * Tab usage:
 * Use same API as Reakit. Import components and instantiate initial tab state by using `useTabState` from Reakit and passing tab state down from hook.
 */

export const TabList = ({ ...props }) => <ReakitTabList sx={{}} as={Flex} {...props} />

export const Tab = ({ ...props }) => (
  <ReakitTab
    sx={{
      border: 0,
      backgroundColor: 'secondary',
      p: 3
    }}
    as={Button}
    {...props}
  />
)

export const TabPanel = ({ ...props }) => <ReakitTabPanel sx={{}} as={Box} {...props} />

export { useTabState }
