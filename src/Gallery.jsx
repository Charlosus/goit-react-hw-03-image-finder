import { GalleryItem } from './GalleryItem';
export const Gallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((image) => {
          return <GalleryItem key={image.key} image={image}></GalleryItem>;
        })}
      </ul>
    </div>
  );
};
