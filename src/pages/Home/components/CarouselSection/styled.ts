import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 130px);
  width: 100%;
  position: relative;
  color: white;
`;

export const Slice = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 130px);
  z-index: ${p => (p.active ? 1 : 0)};
`;

const SliceImageAnimation = keyframes`
  from{
    transform: scale(1.1);
    opacity: 0;
  }

  to{
    transform: scale(1);
    opacity: 1;
  }
`;

export const SliceImage = styled.img<{ active: boolean }>`
  width: 100vw;
  height: 100%;

  animation: ${p => (p.active ? SliceImageAnimation : '')} ease-in-out 0.5s;
`;

const SmallTitleAnimation = keyframes`
  from{
    transform: translateY(-5px);
    opacity: 0;
  }
  
  to{
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const SmallTitle = styled.h3<{ active: boolean }>`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  visibility: ${p => (p.active ? 'visible' : 'hidden')};

  animation: ${p => (p.active ? SmallTitleAnimation : '')} ease-in-out 0.1s; 
  }
`;

const TitleAnimation = keyframes`
  from{
    transform: translateY(40px);
    opacity: 0;
  }
  
  to{
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Title = styled.h1<{ active: boolean }>`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 64px;
  line-height: 64px;
  margin-top: 32px;
  visibility: ${p => (p.active ? 'visible' : 'hidden')};
  animation: ${p => (p.active ? TitleAnimation : '')} 0.4s ease-in-out;
`;

export const SecondTitle = styled.h1<{ active: boolean }>`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 64px;
  line-height: 64px;
  visibility: ${p => (p.active ? 'visible' : 'hidden')};

  animation: ${p => (p.active ? TitleAnimation : '')} 0.4s ease-in-out;
  animation-delay: 0.1s;
`;

export const SliceContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  grid-area: 2 / 2 / auto / span 1;
`;

const ContentButtonAnimation = keyframes`
    from{
      opacity: 0;
      transform: scale(0.9);
    }
  
  to{
    transform: scale(1);
    opacity: 1;
  }
`;

export const ContentButton = styled.button<{ active: boolean }>`
  padding: 17px 40px;
  width: fit-content;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  border: transparent 2px solid;
  margin-top: 40px;
  opacity: ${p => (p.active ? 1 : 0)};
  animation: ${p => (p.active ? ContentButtonAnimation : '')} ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    border: white 2px solid;
    background-color: transparent;
    color: white;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-left: 48px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
`;

export const SliceImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0px;
  max-height: calc(100vh - 130px);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  bottom: 20px;
  right: 20px;
  position: absolute;
  gap: 1rem;
  z-index: 10;
`;
