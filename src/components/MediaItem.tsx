import React from 'react'
import { Link } from 'gatsby'
import { Box } from 'theme-ui'

interface MediaItemProps {
  media: any
}

const MediaItem: React.FC<MediaItemProps> = ({ media }) => (
  <Box>
    ({media.frontmatter.date})<Link to={media.frontmatter.link}>{media.frontmatter.title}</Link>
  </Box>
)
export default MediaItem
