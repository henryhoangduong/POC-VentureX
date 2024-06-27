// <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
import type { FC } from 'react'

interface IconProps {
  size: number
  color: string
}

export const PlusIcon: FC<IconProps> = ({ size, color = 'black' }) => {
  const width = 24 * size
  const height = 24 * size
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="none" />
      <path
        d="M4 12H20M12 4V20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
