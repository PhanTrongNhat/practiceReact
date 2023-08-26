import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px var(--space-side) var(--space-top);
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

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const HeaderTitle = styled.h2`
  line-height: 52px;
  font-size: 48px;
  color: rgb(39, 39, 39);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem 5rem;
`;

const ImageAnimation = keyframes`
    
    from{  transform: scale(1.1);}
  
  to{
    transform: scale(1.2);
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: rgb(60, 97, 158);

  &:hover {
    .image {
      animation: ${ImageAnimation} linear 1s;
      transform: scale(1.2);
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 2;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 40vw;
  object-fit: cover;
  object-position: center;
  transform: scale(1.1);
`;

export const InfoWrapper = styled.div`
  flex: 1;
  padding: 48px;
`;

export const InfoContent = styled.div`
  gap: 1.25rem;
  display: flex;
  flex-direction: column;
`;

export const SmallTitle = styled.h3`
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 22px;
  padding: 2px 12px;
  color: #fff;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.12);
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 44px;
  color: white;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 32px;
  color: white;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  gap: 0.75rem;
`;

export const Date = styled.p`
  line-height: 22px;
  color: rgba(255, 255, 255, 0.3);
`;
