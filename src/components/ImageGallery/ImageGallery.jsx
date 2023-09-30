export const ImageGallery = ({ hits, onImageClick }) => {
  return (
    <ul className="gallery">
      {hits &&
        hits.map(element => (
          <li key={element.id} onClick={() => onImageClick(element)}>
            <img src={element.webformatURL} alt={element.tags} />
          </li>
        ))}
    </ul>
  );
};
