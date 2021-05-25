import React from 'react'
import { Link } from 'gatsby'
import { Box, BoxProps } from 'theme-ui'

interface MediaItemProps extends BoxProps {
  media: any
}

const MediaItem: React.FC<MediaItemProps> = ({ media, ...other }) => (
  <Box {...other}>
    ({media.frontmatter.date})<Link to={media.frontmatter.link}>{media.frontmatter.title}</Link>
  </Box>
)
export default MediaItem
