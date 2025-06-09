import { GalleryItem } from './GalleryItem';
export const Gallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map((image) => {
          return (
            <GalleryItem
              key={image.id}
              image={image}
              onClick={onImageClick}
            ></GalleryItem>
          );
        })}
      </ul>
    </div>
  );
};
