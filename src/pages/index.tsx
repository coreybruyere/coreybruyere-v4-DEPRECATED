import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import PostLink from '../components/PostLink'
import Section from '../components/Section'
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
  const posts = edges
    .filter((edge: any) => edge.node.frontmatter.type === 'post') // Filter down to markdown files with a type of `post`.
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

  const works = edges
    .filter((edge: any) => edge.node.frontmatter.type === 'work') // Filter down to markdown files with a type of `work`.
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

  const media = edges
    .filter((edge: any) => edge.node.frontmatter.type === 'media') // Filter down to markdown files with a type of `media`.
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <IndexLayout>
      <Page>
        <Container>
          <Section heading={'Hi People'}>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
          </Section>
          <h1>Hi people</h1>

          <Link to="/page-2/">Go to page 2</Link>

          <h1>Blog posts</h1>
          {posts}

          <h1>Work items</h1>
          {works}

          <h1>Media items</h1>
          <p>Decide on displaying current read or just a list</p>
          {media}
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
