import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface IconButtonProps {
  src?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>)=>void;
  title?:string;
}

const StyledIconButton = styled.img`
  cursor: pointer;
  &:hover {
    border-width: medium;
    border-color: ${({theme}) => theme.img.hover.borderColor};;
  }
`;

export function IconButton(props: IconButtonProps) {
  return (
    <StyledIconButton {...props}/>
  );
}

export default IconButton;
