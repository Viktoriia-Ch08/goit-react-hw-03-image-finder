import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;

  pointer-events: initial;
  backdrop-filter: blur(6px);
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80vw;
  height: 80vh;
  overflow-y: auto;

  transform: translate(-50%, -50%) rotate(0) scale(1);

  background-color: black;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  transition: transform 300ms linear 200ms, opacity 300ms linear 200ms;
`;

const LargeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { Overlay, ModalWindow, LargeImg };
