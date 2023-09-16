import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  height: 300vh;
  position: relative;
  background-color: transparent;
  z-index: 1000;
  width: 100%;
  //overflow: hidden;
`;

export const ScrollImage = styled.div<{
  scrollSticky: boolean;
  offsetHeight: number;
}>`
  display: flex;

  // top: ${p => (p.scrollSticky ? '0px' : `${p.offsetHeight}px`)};
  // position: ${p => (p.scrollSticky ? 'sticky;' : `absolute;`)};
  top: ${p => `${p.offsetHeight}px`};
  position: sticky;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: calc(100vh - 50px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Image = styled.img<{ scale: number }>`
  height: 100%;
  position: absolute;
  width: 100%;
  transform: scale(${p => p.scale});
`;

export const Title = styled.p`
  font-size: 80px;
  font-weight: ${p => p.theme.font.weight.bold};
  text-align: center;
  max-width: 85vw;
  width: 85vw;

  z-index: 10;
  position: absolute;
`;

export const WhiteTitle = styled.div<{ width: number }>`
  max-width: ${p => `${p.width}px`};
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    z-index: 11;
  }
`;

const TitleAnimation = keyframes`
 from {
   opacity: 0;
 }
  to {
    opacity: 1;
  }
  
`;

export const TitleWrapper = styled.div<{ scale: boolean }>`
  max-width: 85vw;
  width: 100%;
  height: 240px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${p => (p.scale ? 0 : 1)};
  animation: ${TitleAnimation} 0.5 linear;
`;
