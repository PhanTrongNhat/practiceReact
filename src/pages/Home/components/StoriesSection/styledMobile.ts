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
    font-size: ${p => p.theme.font.size.xs};
    font-weight: ${p => p.theme.font.weight.regular};
    line-height: 22px;
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
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const HeaderTitle = styled.h2`
  line-height: 35px;
  font-size: 32px;
  color: rgb(39, 39, 39);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 1.25rem;
`;

const ImageAnimation = keyframes`
    
    from{  transform: scale(1.1);}
  
  to{
    transform: scale(1.2);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(60, 97, 158);
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 100%;

  object-fit: cover;
  object-position: center;
`;

export const InfoWrapper = styled.div`
  padding: 20px;
`;

export const InfoContent = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
`;

export const SmallTitle = styled.h3`
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 19px;
  padding: 4px 12px;
  color: #fff;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.12);
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 35px;
  color: white;
`;

export const Description = styled.p`
  font-size: ${p => p.theme.font.size.md};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 28px;
  color: white;
  margin-bottom: 0.5rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  gap: 0.75rem;
`;

export const Date = styled.p`
  line-height: 19px;
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.regular};
  color: rgba(255, 255, 255, 0.3);
`;
