'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  fallbackSrc = ERROR_IMG_SRC,
  ...props 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image 
          src={fallbackSrc} 
          alt="Error loading image" 
          width={88}
          height={88}
          {...props}
        />
      </div>
    </div>
  ) : (
    <Image 
      src={src} 
      alt={alt} 
      className={className} 
      onError={handleError} 
      {...props}
    />
  )
}
