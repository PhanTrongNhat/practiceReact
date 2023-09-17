import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 130px);
  width: 100vw;
  position: relative;
  color: white;
`;

export const Slice = styled.div<{ active: boolean }>`
  position: absolute;
  max-width: 100vw;
  height: 100%;
  max-height: calc(100vh - 130px);
  z-index: ${p => (p.active ? 1 : 0)};
  left: 0px;
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
  height: 100%;
  //width: 100%;
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
  font-size: ${p => p.theme.font.size.xs};
  visibility: ${p => (p.active ? 'visible' : 'hidden')};
line-height: 22px;
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
  font-size: 48px;
  line-height: 48px;
  margin-top: 16px;
  visibility: ${p => (p.active ? 'visible' : 'hidden')};
  animation: ${p => (p.active ? TitleAnimation : '')} 0.4s ease-in-out;
`;

export const SecondTitle = styled.h1<{ active: boolean }>`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 46px;
  line-height: 46px;
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
  padding: 16px 32px;
  width: fit-content;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.xs};
  border: transparent 2px solid;
  margin-top: 24px;
  opacity: ${p => (p.active ? 1 : 0)};
  animation: ${p => (p.active ? ContentButtonAnimation : '')} ease-in-out 0.2s;
  cursor: pointer;
  line-height: 22px;

  &:hover {
    border: white 2px solid;
    background-color: transparent;
    color: white;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-left: var(--space-side);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  //width: 92vw;
`;

export const SliceImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0px;
  width: 100vw;
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
