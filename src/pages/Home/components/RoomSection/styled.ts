import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px var(--space-side) var(--space-top);
  display: flex;
`;

const ProductAnimation = keyframes`
  from{opacity: 0}
  to{opacity: 1}
`;

export const ProductsWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  opacity: ${p => (p.active ? 1 : 0)};
  animation: ${p => (p.active ? ProductAnimation : '')} linear 0.5s;
`;

export const InfoWrapper = styled.div`
  position: relative;
  flex: 1;

  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  gap: 1rem;

  bottom: -3rem;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

const DotAnimation = keyframes`
  0%{
    transform: scale(1);
  }
  
  50%{ transform: scale(1.3);}
  
  100%{ transform: scale(1);}
`;

export const DotWrapper = styled.div<{ active: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 38%;
  right: 20%;

  &:nth-child(2) {
    top: 50%;
    left: 15%;
  }

  &:before {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.4);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 0;
    animation: ${p => (p.active ? DotAnimation : '')} linear 3s infinite;
  }
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  background-color: white;
  border-radius: 50%;
  z-index: 1;
`;
