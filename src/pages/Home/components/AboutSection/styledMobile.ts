import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div<{ height?: number }>`
  // ${p => p.height && ` height: ${p.height}px;`}
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2.5rem 1.25rem;
`;

export const BackgroundImage = styled.img`
  height: 80vh;
  object-fit: cover;
  object-position: center;

  width: 100%;
`;

export const Content = styled.div`
  z-index: 1;
  padding: 0px var(--space-side);
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 35px;
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const Description = styled.p`
  font-size: ${p => p.theme.font.size.xs};
  line-height: 25px;
  font-weight: ${p => p.theme.font.weight.regular};

  margin-top: 20px;
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 14px 2rem;
  background-color: rgb(39, 39, 39);
  border: 2px solid transparent;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  cursor: pointer;
  color: white;

  &:hover {
    border-color: rgb(39, 39, 39);
    color: rgb(39, 39, 39);
    background-color: transparent;
  }
`;

const ButtonAnimation = keyframes`
  0%{
      transform: scale(1);
  }
  
  50%{
    transform: scale(1.3);
    }
  
  100%{
    transform: scale(1);
    }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const PlusButton = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    top: 20%;
    left: 48%;
  }

  &:nth-child(2) {
    top: 45%;
    left: 65%;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.12);
    min-width: 55px;
    height: 55px;
    border-radius: 50%;

    animation: ${ButtonAnimation} linear 3s infinite;
  }
`;
