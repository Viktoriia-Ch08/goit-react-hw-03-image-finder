import styled from 'styled-components';

const GalleryItem = styled.li`
  width: calc((100% - 40px) / 3);
  height: 280px;
  border-radius: 10px;
  border: 2px solid rgba(127, 21, 208, 0.9);
  overflow: hidden;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: zoom-in;
`;

export { GalleryItem, GalleryImage };
