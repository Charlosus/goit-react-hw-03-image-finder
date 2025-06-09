export const GalleryItem = ({ image, onClick }) => {
  return (
    <li key={image.id} className="gallery-item" onClick={() => onClick(image)}>
      <img src={image.previewURL} alt={image.tags} />
    </li>
  );
};
