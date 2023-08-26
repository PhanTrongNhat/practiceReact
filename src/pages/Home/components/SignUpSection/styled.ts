import styled from 'styled-components';
import exp from 'constants';

export const Wrapper = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  margin: 0px 48px 80px;
  background-color: rgb(166, 212, 221);
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  flex: 1;
  padding: 48px;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const TitleWrapper = styled.div``;

export const Description = styled.p`
  margin-top: 24px;
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 25px;
`;

export const Info = styled.div`
  max-width: 458px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p:first-child {
    width: 48px;
    height: 48px;
    font-size: 48px;
  }
`;

export const EmailWrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EmailInput = styled.input`
  padding: 0px 20px 0px;
  width: 252px;
  height: 60px;
  border: 1px solid #f1f1f1;
  background-color: transparent;

  &::placeholder {
    font: 1rem sans-serif;
    display: flex;
    align-items: flex-start;
  }
`;

export const Subscribe = styled.button`
  display: flex;
  align-items: center;
  padding: 17px 45px;
  gap: 0.75rem;
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 25px;
  color: white;
  background-color: black;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: transparent;
    border: 2px solid #000;
  }
`;

export const MoreInfo = styled.div`
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 20px;
  color: rgba(39, 39, 39, 0.8);
`;

export const Content = styled.div``;
