import styled from 'styled-components';
// @ts-ignore
import TwentyTwenty from 'react-twentytwenty';

export const Wrapper = styled.div`
  padding: 80px 48px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem 4.5rem;
  align-items: center;

  div:nth-child(2) {
    width: calc(100vw - 150px) !important;
  }
`;

export const CTwentyTwenty = styled(TwentyTwenty)`
  height: 45vw;
  width: calc(100vw - 96px) !important;
`;

export const Slider = styled.div`
  position: relative;
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  //right: 16px;
  svg {
    position: relative;
    right: 15px;
  }

  &:before {
    content: '';
    height: 100%;
    width: 0.125rem;
    background: #fff;
    z-index: -1;
    position: absolute;
  }
`;

export const Image = styled.img`
  height: 45vw;
`;

export const ImageWrapper = styled.div`
  height: 45vw;

  //height: 100%;

  .title-right {
    right: 4rem !important;
  }

  .title-left {
    left: 4rem !important;
  }
`;

export const Title = styled.p`
  position: absolute;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 32px;
  color: white;
  top: 2rem;
`;

export const HeaderTitle = styled.div`
  font-size: 40px;
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 44px;
  color: rgb(39, 39, 39);
`;

export const Description = styled.p`
  margin-top: 32px;
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.regular};
  color: rgb(39, 39, 39);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
