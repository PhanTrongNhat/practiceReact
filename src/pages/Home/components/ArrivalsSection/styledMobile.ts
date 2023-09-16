import styled, { keyframes } from 'styled-components';
import { devices } from 'utils/constants';

export const Wrapper = styled.div`
  padding: var(--space-top) var(--space-side);
  display: flex;
  flex-direction: column;
  gap: 2rem 1.25rem;

  @media only screen and ${devices.xxl} {
    padding: 80px 48px;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 700px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 35px;
`;

export const Description = styled.p`
  margin-top: 20px;
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  line-height: 22px;
  color: rgb(39, 39, 39);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const ViewAll = styled.div`
  display: flex;
  gap: 0.75rem;

  p {
    color: rgb(39, 39, 39);
    font-size: ${p => p.theme.font.size.xs};
    line-height: 22px;
    font-weight: ${p => p.theme.font.weight.regular};
  }

  svg {
    transform: rotate(180deg);
  }
`;

export const MobileChevronMajorWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(39, 39, 39, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductWrapper = styled.div`
  max-width: 100vw;
  gap: 3rem 1.5rem;
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const StatusAndChangeCarousel = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const Status = styled.div<{ percent: number }>`
  width: 100%;
  height: 0.125rem;
  background: #f1f1f1;

  &:before {
    content: '';
    display: block;
    width: ${p => `${p.percent}%`};
    height: 0.125rem;
    background: #000;
  }
`;

export const NextButton = styled.button<{ noneEvent: boolean }>`
  cursor: pointer;

  ${p =>
    p.noneEvent &&
    `    opacity: .5;
    pointer-events: none;`}
`;

export const PreButton = styled.button<{ noneEvent: boolean }>`
  cursor: pointer;

  ${p =>
    p.noneEvent &&
    `    opacity: .5;
    pointer-events: none;`}
`;

const ButtonAnimation = keyframes`
    0%{
   
      transform: translateX(10px);
      opacity: 0;
 
    }
  
  100%{
        transform: translateX(0px);
        opacity: 1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  gap: 1rem;
  z-index: 10;

  button {
    background-color: transparent;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    border: 2px solid rgba(39, 39, 39, 0.12);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
      fill: #000;
      position: absolute;
    }

    svg:nth-child(2) {
      opacity: 0;
      transform: translateX(10px);
    }

    &:hover {
      svg:nth-child(2) {
        animation: ${ButtonAnimation} 0.5s ease-in-out;
        opacity: 1;
        transform: translateX(0px);
      }

      svg:nth-child(1) {
        opacity: 0;
      }
    }
  }

  .rotate {
    transform: rotate(180deg);
  }
`;
