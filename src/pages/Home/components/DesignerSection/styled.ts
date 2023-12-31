import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px var(--space-side) var(--space-top);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 780px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallTitle = styled.h2`
  color: rgb(39, 39, 39);
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 22px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 44px;
  color: rgb(39, 39, 39);
  margin-top: 16px;
`;

export const Description = styled.p`
  margin-top: 20px;
  color: rgba(39, 39, 39, o.12);
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  line-height: 22px;
  text-align: center;
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 16px 32px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.xs};
  line-height: 22px;
  color: rgb(39, 39, 39);
  border: 2px solid rgb(39, 39, 39);
  background-color: transparent;
  cursor: pointer;
`;
