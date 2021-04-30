import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import PostLink from '../components/PostLink'
import MediaItem from '../components/MediaItem'

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

  // const media = edges
  //   .filter((edge: any) => edge.node.frontmatter.type === 'media') // Filter down to markdown files with a type of `media`.
  //   .map((edge: any) => <MediaItem key={edge.node.id} media={edge.node} />)

  const media = edges.filter((edge: any) => edge.node.frontmatter.type === 'media') // Filter down to markdown files with a type of `media`.

  // Grab the latest audiobook
  const audiobook = media.filter((edge: any) => edge.node.frontmatter.format === 'audiobook')[0]

  // Grab the latest book
  const book = media.filter((edge: any) => edge.node.frontmatter.format === 'book')[0]

  console.log(book.node.frontmatter.title)

  return (
    <IndexLayout>
      <Page>
        <Section heading={'Hi People'}>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </Section>
        <h1>Site Map</h1>
        <ul>
          <li>
            Home
            <ul>
              <li>Latest Posts</li>
              <li>Selected Work</li>
              <li>Media (Digesting)</li>
            </ul>
          </li>
          <li>About</li>
          <li>Uses</li>
          <li>Posts (Paginated archive)</li>
          <li>Work (Paginated archive)</li>
        </ul>

        <Link to="/page-2/">Go to page 2</Link>

        <Section heading={<h1>Blog posts</h1>}>{posts}</Section>

        <Section heading={<h1>Work items</h1>}>{works}</Section>

        {/* <Section heading={<h1>Media items</h1>}>{media}</Section> */}

        <Section heading={<h1>Digesting</h1>}>
          <h2>Reading</h2>
          <MediaItem media={book.node} />

          <h2>Listening</h2>
          <MediaItem media={audiobook.node} />
        </Section>

        <p>Decide on displaying current read or just a list</p>
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
            link
            slug
            title
            type
            tags
            format
          }
        }
      }
    }
  }
`
