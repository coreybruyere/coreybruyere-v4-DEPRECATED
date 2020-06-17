import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface Props {
  data: {
    allMarkdownRemark: any
  }
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}: any) => {
  const Posts = edges
    .filter((edge: any) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge: any) => <Link to={edge.node.frontmatter.path} key={edge.node.id} />)
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>

          <Posts />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
