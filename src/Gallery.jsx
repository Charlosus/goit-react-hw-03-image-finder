export const Gallery = (images) => {
  return (
    <div>
      <ul>
        {images.map((image) => {
          return (
            <GalleryItem
              key={image.src}
              src={image.src}
              alt={image.alt}
            ></GalleryItem>
          );
        })}
      </ul>
    </div>
  );
};
