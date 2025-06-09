export const GalleryItem = ({ image }) => {
  return (
    <li key={image.id} className="gallery-item">
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};
