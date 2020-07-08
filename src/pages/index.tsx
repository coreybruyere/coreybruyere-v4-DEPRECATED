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
    .filter((edge: any) => edge.node.frontmatter.type === 'post') // Filter down to markdown files with a type of `post`.
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

  const Works = edges
    .filter((edge: any) => edge.node.frontmatter.type === 'work') // Filter down to markdown files with a type of `work`.
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

  const Media = edges
    .filter((edge: any) => edge.node.frontmatter.type === 'media') // Filter down to markdown files with a type of `media`.
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

  {
    console.log(edges.filter((edge: any) => edge.node.frontmatter.type === 'media'))
  }

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>

          <h1>Blog posts</h1>
          {Posts}

          <h1>Work items</h1>
          {Works}

          <h1>Media items</h1>
          <p>Decide on displaying current read or just a list</p>
          {Media}
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
            type
          }
        }
      }
    }
  }
`
