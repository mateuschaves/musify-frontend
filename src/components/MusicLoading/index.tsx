import React from 'react'
import ContentLoader from 'react-content-loader'

import { lighten } from 'polished'

export default function MusicLoading() {
  return (
    <ContentLoader
      speed={2}
      width={920}
      height={56}
      backgroundColor='#282828'
      foregroundColor={lighten(0.05, '#282828')}
    >
      <rect x='0' y='16' rx='0' ry='0' width='920' height='56' />
    </ContentLoader>
  )
}
