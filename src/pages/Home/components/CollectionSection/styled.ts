import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 48px;
  display: flex;
  gap: 3rem 4.5rem;
  flex-direction: column;
`;

export const ViewAll = styled.div`
  display: flex;
  gap: 0.75rem;
  cursor: pointer;

  p {
    color: rgb(39, 39, 39);
    font-size: ${p => p.theme.font.size.sm};
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

export const Title = styled.h2`
  font-size: 44px;
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const CollectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const ButtonCarouselAnimation = keyframes`
    0%{
   
      transform: translateX(10px);
      opacity: 0;
 
    }
  
  100%{
        transform: translateX(0px);
        opacity: 1;
  }
`;

export const CollectionWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  overflow: scroll;
  align-items: center;
  position: relative;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CollectionImageAnimation = keyframes`
  from{
    transform: scale(1);
  }
  
  to{
    transform: scale(1.2);
  }
  
`;

const TitleAnimation = keyframes`
  from {
    transform: translateX(15px);
  }

  to {
    transform: translateX(0px);
  }
`;

const ButtonAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const CollectionItemWrapper = styled.div`
  position: relative;
  background-color: rgb(241, 241, 241);
  padding: 40px;

  .show-more {
    opacity: 0;
  }

  &:hover {
    .show-more {
      animation: ${ButtonAnimation} linear 0.2s;
      opacity: 1;
    }

    .title-item {
      animation: ${TitleAnimation} 0.2s linear;
      transform: translateX(0px);
    }
  }

  &:hover {
    img {
      animation: ${CollectionImageAnimation} linear 0.5s;
      transform: scale(1.2);
    }
  }
`;

export const CollectionImage = styled.img`
  max-width: 220px;
`;

export const CollectionItem = styled.h2`
  z-index: 1;
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  cursor: pointer;

  transform: translateX(15px);
`;

export const ShowMoreButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: rgba(39, 39, 39, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transform: rotate(180deg);
  }
`;

export const NextButton = styled.div<{ noneEvent: boolean }>`
  position: absolute !important;
  right: 4rem;
  cursor: pointer;

  z-index: 10;

  ${p =>
    p.noneEvent &&
    `   display: none !important;
    `}
`;

export const PreButton = styled.div<{ noneEvent: boolean }>`
  position: absolute !important;
  left: 4rem;
  cursor: pointer;

  z-index: 10;

  ${p =>
    p.noneEvent &&
    `    display: none !important;
    `}
`;

export const CarouselWrapper = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;

  .carousel-button {
    background-color: white;
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
        animation: ${ButtonCarouselAnimation} 0.5s ease-in-out;
        opacity: 1;
        transform: translateX(0px);
      }

      svg:nth-child(1) {
        opacity: 0;
      }
    }
  }
`;
