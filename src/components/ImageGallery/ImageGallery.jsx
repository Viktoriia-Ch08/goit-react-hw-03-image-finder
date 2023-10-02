import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <List>
      {images.map(element => {
        const { id, webformatURL, largeImageURL, tags } = element;
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            smallImg={webformatURL}
            bigImg={largeImageURL}
            imgName={tags}
            onImageClick={onImageClick}
          />
        );
      })}
    </List>
  );
};
