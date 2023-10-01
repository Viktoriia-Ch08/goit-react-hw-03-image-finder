import { Image, Item, List } from './ImageGallery.styled';

export const ImageGallery = ({ hits, onImageClick }) => {
  return (
    <List>
      {hits &&
        hits.map(element => (
          <Item key={element.id} onClick={() => onImageClick(element)}>
            <Image src={element.webformatURL} alt={element.tags} />
          </Item>
        ))}
    </List>
  );
};
