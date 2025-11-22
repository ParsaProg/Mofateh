'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./SchoolMapInner'), {
  ssr: false, // disables SSR completely for this component
})

export default function SchoolMap() {
  return <Map />
}
