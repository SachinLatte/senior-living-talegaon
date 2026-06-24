import { useState, useEffect, useRef } from 'react'

const LazyImage = ({ src, alt, className, width, height, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={imgRef}
      src={isInView ? src : undefined}
      alt={alt}
      className={`lazy-img ${isLoaded ? 'loaded' : ''} ${className || ''}`}
      width={width}
      height={height}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  )
}

export default LazyImage
