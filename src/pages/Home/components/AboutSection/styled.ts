import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div<{ height: number }>`
  height: ${p => p.height}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BackgroundImage = styled.img`
  //height: calc(100vh - 128px);
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0px;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 330px;
  z-index: 1;

  position: absolute;
  top: 3rem;
  left: 3rem;
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 44px;
  font-weight: ${p => p.theme.font.weight.bold};
  color: white;
`;

export const Description = styled.p`
  font-size: ${p => p.theme.font.size.sm};
  line-height: 25px;
  font-weight: ${p => p.theme.font.weight.regular};
  color: rgb(255, 255, 255);
  margin-top: 2rem;
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 14px 2rem;
  background-color: white;
  border: 2px solid transparent;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  cursor: pointer;

  &:hover {
    border-color: white;
    color: white;
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

export const PlusButton = styled.div`
  position: relative;
  z-index: 2;
  background-color: white;
  width: 46px;
  height: 46px;
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
    top: -15%;
    left: 0%;
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
