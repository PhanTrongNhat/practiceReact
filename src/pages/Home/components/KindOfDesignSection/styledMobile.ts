import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px var(--space-side) var(--space-top);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.h2`
  font-size: calc(min(20vw, 65px) * 1.1);
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 72px;
  background: linear-gradient(
    45deg,
    rgba(60, 97, 158, 1) 4%,
    rgba(89, 128, 192, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.2em;
`;

export const Title = styled.h3`
  font-size: 22px;
  line-height: 28px;
  font-weight: ${p => p.theme.font.weight.bold};
  color: rgb(39, 39, 39);
`;

export const Description = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  line-height: 22px;
  color: rgb(39, 39, 39);
  margin-top: 20px;
  text-align: center;
`;
