import styled, { keyframes } from 'styled-components';
import { devices } from 'utils';

export const ImageAnimation = keyframes`
  from{
    opacity: 0;
  }
  
  to{
    opacity: 1;
  }
`;

export const ButtonAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(10px);
  }
  
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 382px;
  height: 496px;

  cursor: pointer;

  img:nth-child(2) {
    opacity: 0;
  }

  .button-hover {
    opacity: 0;
    border: none;
    cursor: pointer;
  }

  &:hover {
    img:first-child {
      opacity: 0;
    }

    img:nth-child(2) {
      opacity: 1;
      animation: ${ImageAnimation} ease-in-out 0.5s;
    }

    .button-hover {
      opacity: 1;
      animation: ${ButtonAnimation} ease-in-out 0.1s;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 382px;
  position: relative;

  width: calc(min((100vw - 21px) - 3rem * 2, 1600) / 4 - (1.5rem / 4 * 3));
  max-width: calc(min((100vw - 21px) - 3rem * 2, 1600) / 4 - (1.5rem / 4 * 3));
`;

export const ContentWrapper = styled.div`
  padding-top: 24px;
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  position: absolute;
  width: 382px;
  height: 496px;

  @media only screen and ${devices.md} {
    max-width: 80vw;
    width: 100%;
    height: unset;
  }
`;

export const HoverImage = styled.img`
  position: absolute;
  width: 382px;
  height: 496px;

  @media only screen and ${devices.md} {
    max-width: 80vw;
    width: 100%;
    height: unset;
  }
`;

export const IsNew = styled.div`
  font-size: 0.75rem;
  color: white;
  background-color: rgb(60, 97, 158);
  width: fit-content;
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.bold};
  padding: 2px 8px;
`;

export const QuickAdd = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: white;
  background-color: rgb(39, 39, 39);
  width: fit-content;
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.bold};
  padding: 12px 24px;
  cursor: pointer;
`;

export const SoldOut = styled.div`
  font-size: 0.75rem;
  color: black;
  background-color: rgb(190, 189, 185);
  width: fit-content;
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.bold};
  padding: 2px 8px;
`;

export const Save = styled.div`
  font-size: 0.75rem;
  color: white;
  background-color: rgb(227, 79, 79);
  width: fit-content;
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.bold};
  padding: 2px 8px;
`;

export const BranchAndRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
`;

export const BranchName = styled.a`
  cursor: pointer;
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xxs};
`;

export const RattingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductName = styled.p`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  line-height: 24px;
`;

export const Price = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.sm};
  line-height: 26px;
  color: rgb(var(39, 39, 39) / 0.7);
`;

export const ColorsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Color = styled.div<{ color: string }>`
  width: 15px;
  height: 9px;
  border-bottom: 2px solid transparent;

  background-color: ${p => p.color};

  border-color: black;
`;
