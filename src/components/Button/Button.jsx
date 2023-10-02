import { StyledButton } from './Button.styled';

export const Button = ({ disabled, children, onClick, type }) => {
  return (
    <StyledButton disabled={disabled} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
