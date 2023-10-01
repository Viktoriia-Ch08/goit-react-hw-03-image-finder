import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
`;

const LoadButton = styled.button`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 15px;

  font-size: 16px;
  text-transform: uppercase;

  border: transparent;
  border-radius: 10px;
  background-color: rgba(235, 48, 234, 0.9);
  cursor: pointer;

  transition: background-color 400ms linear, box-shadow 400ms linear;

  &:hover,
  &:focus {
    background-color: rgba(190, 86, 250, 1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(255, 197, 236, 0.9);
    box-shadow: none;
  }
`;

export { ButtonContainer, LoadButton };
