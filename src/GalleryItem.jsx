export const GalleryItem = ({ image, onClick }) => {
  return (
    <li
      key={image.id}
      className="ImageGalleryItem"
      onClick={() => onClick(image)}
    >
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};
