import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 45px;

  padding: 22px 0;

  background: linear-gradient(100deg, #402, #006);
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 55'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23fff' stroke-width='7' opacity='.1'%3E%3Cpath d='M-345 34.5s57.5-13.8 115-13.8 115 13.8 115 13.8S-57.5 48.3 0 48.3s115-13.8 115-13.8 57.5-13.8 115-13.8 115 13.8 115 13.8 57.5 13.8 115 13.8 115-13.8 115-13.8'/%3E%3Cpath d='M-345 20.7s57.5-13.8 115-13.8 115 13.8 115 13.8S-57.5 34.5 0 34.5s115-13.8 115-13.8S172.5 6.9 230 6.9s115 13.8 115 13.8 57.5 13.8 115 13.8 115-13.8 115-13.8m-920 27.6s57.5-13.8 115-13.8 115 13.8 115 13.8S-57.5 62.1 0 62.1s115-13.8 115-13.8 57.5-13.8 115-13.8 115 13.8 115 13.8 57.5 13.8 115 13.8 115-13.8 115-13.8'/%3E%3Cpath d='M-345 6.9s57.5-13.8 115-13.8S-115 6.9-115 6.9-57.5 20.7 0 20.7 115 6.9 115 6.9 172.5-6.9 230-6.9 345 6.9 345 6.9s57.5 13.8 115 13.8S575 6.9 575 6.9'/%3E%3Cpath d='M-345-6.9s57.5-13.8 115-13.8S-115-6.9-115-6.9-57.5 6.9 0 6.9 115-6.9 115-6.9s57.5-13.8 115-13.8S345-6.9 345-6.9 402.5 6.9 460 6.9 575-6.9 575-6.9m-920 69s57.5-13.8 115-13.8 115 13.8 115 13.8S-57.5 75.9 0 75.9s115-13.8 115-13.8 57.5-13.8 115-13.8 115 13.8 115 13.8 57.5 13.8 115 13.8 115-13.8 115-13.8'/%3E%3C/g%3E%3C/svg%3E%0A"),
    linear-gradient(80deg, rgba(127, 21, 208, 1), rgba(235, 48, 234, 0.9));
  background-position: 50% 50%;
  animation: background-move 10s linear infinite;
  background-size: 100vw auto, 100% 100%;
  background-size: unquote('max(100vw, 30em)') auto, 100% 100%;

  @keyframes background-move {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 100vw 0, 0 0;
      background-position: unquote('max(100vw, 40em)') 0, 0 0;
    }
  }
`;

const FormElement = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 200px;
  height: 45px;
  padding: 0 18px;

  box-shadow: none;
  border: transparent;
  border-radius: 10px;
  background-color: #fff;
  transition: box-shadow 400ms linear;
  font-family: 'Mooli', sans-serif;

  &:focus-visible {
    outline: none;
  }
`;

export { Header, FormElement, Input };
