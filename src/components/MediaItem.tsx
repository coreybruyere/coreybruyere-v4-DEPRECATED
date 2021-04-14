import React from 'react'
import { Box } from 'theme-ui'

interface MediaItemProps {
  media: any
}

const MediaItem: React.FC<MediaItemProps> = ({ media }) => (
  <Box>
    {media.frontmatter.title} ({media.frontmatter.date})
  </Box>
)
export default MediaItem
