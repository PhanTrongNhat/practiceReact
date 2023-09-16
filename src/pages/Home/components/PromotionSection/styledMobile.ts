import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  height: 48px;
  background-color: rgb(39, 39, 39);
  display: flex;
  justify-content: center;

  .button-right {
    transform: rotate(180deg);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: unset;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    fill: white;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 350px;
  justify-content: space-between;
`;

export const ItemAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(5px);
  }
  
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Item = styled.a<{ active: boolean }>`
  color: white;
  display: flex;
  align-items: center;
  visibility: ${p => (p.active ? 'visible' : 'hidden')};

  animation: ${p => p.active && ItemAnimation} ease-in-out 0.5s;
  position: absolute;

  p {
    font-size: ${p => p.theme.font.size.tiny};
    font-weight: ${p => p.theme.font.weight.bold};
    line-height: 18px;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 350px;
  justify-content: center;
  align-items: center;
`;
