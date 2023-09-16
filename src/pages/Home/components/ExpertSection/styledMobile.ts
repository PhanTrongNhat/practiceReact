import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px var(--space-side) var(--space-top);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.625rem;
  grid-auto-rows: 25vw;
`;

export const Item = styled.div<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url(${p => p.background});
  object-fit: contain;
  object-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  &:first-child {
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

export const Title = styled.h3`
  line-height: 35px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 32px;
  color: white;
  position: absolute;
  z-index: 10;
`;

const ImageAnimation = keyframes`
  from{
    transform: scale(1);
  }
  
  to{   transform: scale(1.1);}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  // &:hover {
  //   animation: ${ImageAnimation} 0.5s linear;
  //   transform: scale(1.1);
  // }
`;
