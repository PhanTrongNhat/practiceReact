import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 96px 80px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-color: white;
`;

export const Content = styled.div`
  display: flex;
  gap: 6rem;
  position: absolute;
  top: 0px;
`;

const ImageAnimation1 = keyframes`
  0%{
    
    transform:  matrix(0.999391, -0.0348995, 0.0348995, 0.999391, 0, 0) translateX(0px);
  }

  50%{

    transform: rotate(2deg) translateX(20px);
  }
  
    100%{
      transform: matrix(0.999391, -0.0348995, 0.0348995, 0.999391, 0, 0) translateX(0px);
    }
`;

const ImageAnimation2 = keyframes`
  0%{

    transform: matrix(0.999391, 0.0348995, -0.0348995, 0.999391, 0, 0) translateX(0px);
  }

  50%{

    transform: rotate(2deg) translateX(20px);
  }
  
    100%{
      transform:  matrix(0.999391, 0.0348995, -0.0348995, 0.999391, 0, 0) translateX(0px);
    }
`;

const ImageAnimation3 = keyframes`
  0%{

    transform: matrix(1, 0, 0, 1, 0, 0) translateX(0px);
  }

  50%{

    transform: rotate(2deg) translateX(20px);
  }
  
    100%{
   
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 30vw;
`;

export const ImageWrapper = styled.div`
  flex: 10;
  position: relative;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 14;
  position: relative;
`;

export const Info = styled.div`
  width: 600px;
  padding-bottom: 6rem;
`;

export const Image = styled.img<{ index: number; active: boolean }>`
  width: 100%;
  height: 100%;
  transform-origin: 10% 90%;
  transform: rotate(0deg);
  z-index: ${p => (p.active ? 10 : 1)};
  position: relative;

  transform: ${p =>
    p.index == 0
      ? 'matrix(0.999391, -0.0348995, 0.0348995, 0.999391, 0, 0)'
      : p.index == 1
      ? ' transform:  matrix(0.999391, 0.0348995, -0.0348995, 0.999391, 0, 0);'
      : '  transform: matrix(1, 0, 0, 1, 0, 0);'};
  animation: ${p =>
      p.active == false && p.index == 0
        ? ImageAnimation1
        : p.index == 1
        ? ImageAnimation2
        : ImageAnimation3}
    linear 0.2s;
`;

const SmallTitleAnimation = keyframes`
  0%{
    
    opacity: 0;
  }
  100%{ opacity: 1;}
`;

export const SmallTitle = styled.h3<{ active: boolean }>`
  color: rgb(39, 39, 39);
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 25px;
  opacity: ${p => (p.active ? 1 : 0)};
  animation: ${p => p.active && SmallTitleAnimation} linear 0.5s;
`;

const TitleAnimation = keyframes`
  0%{
    
    opacity: 0;
    //transform: translateY(3rem) rotate(30deg);
    transform: translateY(3rem) rotate(5deg);
    
  }

  50%{

    opacity: 0;
    //transform: translateY(3rem) rotate(30deg);

  }
  100%{ opacity: 1;
    //transform: translateY(0px) rotate(0deg);
    transform: translateY(0px) rotate(0deg);
  }
`;

export const Title = styled.h1<{ active: boolean }>`
  color: rgb(39, 39, 39);
  font-size: 48px;
  line-height: 52px;
  font-weight: ${p => p.theme.font.weight.bold};
  transform-origin: 5% 50%;

  opacity: ${p => (p.active ? 1 : 0)};
  animation: ${p => p.active && TitleAnimation} linear 0.5s;
`;

export const Description = styled.p<{ active: boolean }>`
  margin-top: 2rem;
  color: rgb(39, 39, 39);
  opacity: 0.9;
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 25px;

  opacity: ${p => (p.active ? 1 : 0)};
  animation: ${p => p.active && SmallTitleAnimation} linear 0.5s;
`;

export const ButtonWrapper = styled.div<{ hidden: boolean }>`
  display: ${p => (p.hidden ? 'none' : 'flex')};
  gap: 1rem;
  position: absolute;
  bottom: 3rem;
  z-index: 10;
`;
