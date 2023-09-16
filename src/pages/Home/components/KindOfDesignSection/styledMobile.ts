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
  font-size: 195px;
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 195px;
  background: linear-gradient(
    45deg,
    rgba(60, 97, 158, 1) 4%,
    rgba(89, 128, 192, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
`;

export const Title = styled.h3`
  font-size: 26px;
  line-height: 33px;
  font-weight: ${p => p.theme.font.weight.bold};
  color: rgb(39, 39, 39);
`;

export const Description = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.sm};
  line-height: 25px;
  color: rgb(39, 39, 39);
  max-width: 760px;
  text-align: center;
`;
