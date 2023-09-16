import styled, { keyframes } from 'styled-components';
import { devices } from '../../utils';

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
  //max-width: 382px;
  position: relative;
  display: flex;
  gap: 1rem;
  background-color: rgb(242, 242, 242);
  padding: 16px;
`;

export const ContentWrapper = styled.div`
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 64px;
`;

export const HoverImage = styled.img`
  position: absolute;
  width: 382px;
  height: 496px;
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
  background-color: rgba(39, 39, 39, 0.1);
  color: rgb(39, 39, 39);
  border: none;
  width: fit-content;
  font-size: ${p => p.theme.font.size.tiny};
  font-weight: ${p => p.theme.font.weight.bold};
  padding: 8px 20px;
  cursor: pointer;
  line-height: 18px;
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
  font-size: ${p => p.theme.font.size.xxs};
  line-height: 19px;
`;

export const Price = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xxs};
  line-height: 19px;
  color: rgba(39, 39, 39, 0.7);
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
