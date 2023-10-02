import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  smallImg,
  bigImg,
  imgName,
  onImageClick,
}) => {
  return (
    <GalleryItem
      key={id}
      onClick={() => onImageClick({ id, smallImg, bigImg, imgName })}
    >
      <GalleryImage src={smallImg} alt={imgName} />
    </GalleryItem>
  );
};
