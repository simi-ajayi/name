type ScrollInGalleryProps = {
  images: string[]
  title: string
}

export function ScrollInGallery({ images, title }: ScrollInGalleryProps) {
  return (
    <div className="grid gap-5" aria-label={`${title} gallery`}>
      {images.map((image, index) => (
        <figure
          key={`${image}-${index}`}
          className="overflow-hidden  bg-black"
          data-animate={index % 2 === 0 ? 'left' : 'right'}
        >
          <img
            src={image}
            alt={`${title} photograph ${index + 1}`}
            loading={index < 3 ? 'eager' : 'lazy'}
            className="h-auto w-full"
          />
        </figure>
      ))}
    </div>
  )
}
