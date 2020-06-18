import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import PostLink from '../components/PostLink'
import IndexLayout from '../layouts'

interface IndexPageProps {
  data: {
    allMarkdownRemark: any
  }
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}: IndexPageProps) => {
  const Posts = edges
    .filter((edge: any) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

  console.log(Array.isArray(edges.filter((edge: any) => edge.node.frontmatter.date)))
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>

          {Posts}
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
            slug
            title
          }
        }
      }
    }
  }
`
