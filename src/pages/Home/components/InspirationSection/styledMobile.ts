import styled from 'styled-components';
// @ts-ignore
import TwentyTwenty from 'react-twentytwenty';

export const Wrapper = styled.div`
  padding: var(--space-top) var(--space-side);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 1.25rem;
  align-items: center;

  div:nth-child(2) {
    width: calc(100vw - 60px) !important;
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

  .title-right {
    right: 2rem !important;
  }

  .title-left {
    left: 2rem !important;
  }
`;

export const Title = styled.p`
  position: absolute;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.md};
  line-height: 25px;
  color: white;
  top: 1rem;
`;

export const HeaderTitle = styled.div`
  font-size: 32px;
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 35px;
  color: rgb(39, 39, 39);
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 22px;
  color: rgb(39, 39, 39);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
