import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: var(--space-top) var(--space-side);
  width: 100%;
  height: calc(100vh + 1rem + 12px);
  position: absolute;
  bottom: 0px;
  background-color: white;
`;

export const Content = styled.div`
  display: grid;
  gap: 2rem;
  position: absolute;
  flex-direction: column;
  top: 0px;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh;
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
  height: 100%;
  //height: 30vw;
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex-basis: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 14;
  position: relative;
`;

export const Info = styled.div`
  text-align: center;
  min-height: 240px;
`;

export const Image = styled.img<{ index: number; active: boolean }>`
  width: 100%;
  object-position: center;
  object-fit: contain;
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
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 22px;
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
  font-size: 40px;
  line-height: 44px;
  font-weight: ${p => p.theme.font.weight.bold};
  transform-origin: 5% 50%;
  margin-top: 16px;

  opacity: ${p => (p.active ? 1 : 0)};
  animation: ${p => p.active && TitleAnimation} linear 0.5s;
`;

export const Description = styled.p<{ active: boolean }>`
  margin-top: 20px;
  color: rgb(39, 39, 39);
  opacity: 0.9;
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 22px;
  font-size: ${p => p.theme.font.size.xs};

  opacity: ${p => (p.active ? 1 : 0)};
  animation: ${p => p.active && SmallTitleAnimation} linear 0.5s;
`;

export const ButtonWrapper = styled.div<{ hidden: boolean }>`
  display: ${p => (p.hidden ? 'none' : 'flex')};
  position: absolute;
  bottom: -40px;
  justify-content: center;
  gap: 1rem;
  z-index: 10;
  width: 100%;
`;
