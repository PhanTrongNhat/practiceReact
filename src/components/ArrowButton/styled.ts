import styled, { keyframes } from 'styled-components';

const ButtonAnimation = keyframes`
    0%{
   
      transform: translateX(5px);
      opacity: 0;
 
    }
  
  100%{
        transform: translateX(0px);
        opacity: 1;
  }
`;

const ButtonRightAnimation = keyframes`
    0%{
   
      transform: translateX(-5px);
      opacity: 0;
 
    }
  
  100%{
        transform: translateX(0px);
        opacity: 1;
  }
`;

export const Wrapper = styled.button<{
  noneEvent: boolean;
  isArrowRight: boolean;
  borderColor: string;
  width: string;
  color: string;
}>`

    background-color: transparent;
    border-radius: 50%;
    width: ${p => p.width};
    height: ${p => p.width};
    border: 2px solid ${p => p.borderColor};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
      fill: ${p => p.color};
      position: absolute;
    }
  
    svg:first-child{
      ${p => p.isArrowRight && ` transform: rotate(180deg);`}
    }

    svg:nth-child(2) {
      opacity: 0;
      transform: translateX(10px);
    }

    &:hover {
      svg:nth-child(2) {
        animation: ${p =>
          p.isArrowRight
            ? ButtonRightAnimation
            : ButtonAnimation} 0.5s ease-in-out;
        opacity: 1;
        transform: translateX(0px);
      }

      svg:nth-child(1) {
        opacity: 0;
      }
    }
  }

`;
