import styled from 'styled-components';
import exp from 'constants';

export const Wrapper = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px var(--space-top);
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
  padding: 24px;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 35px;
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const TitleWrapper = styled.div``;

export const Description = styled.p`
  margin-top: 20px;
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 22px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p:first-child {
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 32px;
  }
`;

export const EmailWrapper = styled.div``;

export const EmailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmailInput = styled.input`
  padding: 0px 20px 0px;
  width: 100%;
  height: 52px;
  border: 1px solid rgba(39, 39, 39, 0.12);
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
  justify-content: center;
  padding: 16px 32px;
  gap: 0.75rem;
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 22px;
  color: white;
  background-color: black;
  border: 2px solid transparent;
  cursor: pointer;
`;

export const MoreInfo = styled.div`
  font-size: ${p => p.theme.font.size.tiny};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 18px;
  color: rgba(39, 39, 39, 0.8);
`;

export const Content = styled.div``;
