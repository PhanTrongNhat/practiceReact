import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: var(--space-top) var(--space-side);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
`;

export const Title = styled.h2`
  line-height: 35px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 32px;
  margin-bottom: 2rem;
`;

const ProductAnimation = keyframes`
  from{opacity: 0}
  to{opacity: 1}
`;

export const ProductsWrapper = styled.div<{ active: boolean }>`
  //position: absolute;
  min-width: 80vw;
  gap: 0.5rem;

  &:first-child {
    margin-left: var(--space-side);
  }

  &:last-child {
    margin-right: var(--space-side);
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  overflow: scroll;
  width: 100vw;
  display: flex;
  grid-template-columns: 1fr 1fr;

  z-index: 10;
  gap: 0.5rem;
  left: -20px;
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
  margin-bottom: 1.25rem;
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
