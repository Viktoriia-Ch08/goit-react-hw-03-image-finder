import styled from 'styled-components';

const List = styled.ul`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;

  margin-bottom: 20px;
  padding: 0 20px;
`;

const Item = styled.li`
  width: calc((100% - 40px) / 3);
  border-radius: 10px;
  border: 2px solid rgba(127, 21, 208, 0.9);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export { List, Item, Image };
