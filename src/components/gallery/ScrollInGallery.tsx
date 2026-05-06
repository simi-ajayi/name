type ScrollInGalleryProps = {
  images: string[]
  title: string
}

export function ScrollInGallery({ images, title }: ScrollInGalleryProps) {
  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-10 w-[60vw] md:w-[60vw] mx-auto" aria-label={`${title} gallery`}>
      {images.map((image, index) => (
        <figure
          key={`${image}-${index}`}
          className="overflow-hidden border md:max-h-[50vh] max-h-[40vh] border-studio-muted/25 bg-white"
          data-animate={index % 2 === 0 ? 'left' : 'right'}
        >
          <img
            src={image}
            alt={`${title} photograph ${index + 1}`}
            loading={index < 3 ? 'eager' : 'lazy'}
            className="h-full object-cover w-full"
          />
        </figure>
      ))}
    </div>
  )
}
