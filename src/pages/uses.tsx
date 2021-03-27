import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { useTabState, Tab, TabList, TabPanel } from '../components/Tab'

const UsesTabs = () => {
  const tab = useTabState()
  return (
    <>
      <TabList {...tab} aria-label="My tabs">
        <Tab {...tab}>Software</Tab>
        <Tab {...tab}>Hardware</Tab>
        <Tab {...tab}>Site</Tab>
        <Tab {...tab}>Outdoor/Travel</Tab>
      </TabList>
      <TabPanel {...tab}>Software section</TabPanel>
      <TabPanel {...tab}>Hardware section</TabPanel>
      <TabPanel {...tab}>Site section</TabPanel>
      <TabPanel {...tab}>Outdoor/Travel section</TabPanel>
    </>
  )
}

const Uses = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <ul>
          <li>
            <Link to="/media/audionbook-1.md">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
        <UsesTabs />
      </Container>
    </Page>
  </IndexLayout>
)

export default Uses
