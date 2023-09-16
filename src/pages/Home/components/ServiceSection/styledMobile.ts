import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px var(--space-side) var(--space-top);
`;

export const ListWrapper = styled.div`
  display: flex;
  overflow: scroll;
`;

export const Item = styled.div`
  display: flex;
  width: calc(100vw - 2 * var(--space-side));
  //width: 100vw;

  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const ItemWrapper = styled.div`
  width: calc(100vw - 2 * var(--space-side));
`;

export const InfoWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  line-height: 25px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  color: rgb(39, 39, 39);
`;

export const Description = styled.p`
  margin-top: 1rem;
  text-align: center;

  line-height: 25px;
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  color: rgb(39, 39, 39);
`;
