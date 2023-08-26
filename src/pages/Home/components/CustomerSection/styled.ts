import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px var(--space-side) var(--space-top);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 696px;
  gap: 2.5rem;
`;

export const ContentWrapper = styled.div`
  background-color: rgb(112, 138, 92);

  display: flex;
  justify-content: center;
  padding: 48px 56px;
`;

const DescriptionAnimation = keyframes`
    0%{
      opacity: 0;
    }
  
  99%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const DescriptionHiddenAnimation = keyframes`
  from{
    opacity: 1;
    
    transform: translateY(0px);
  }

  to{
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const Description = styled.p<{ active: boolean }>`
  text-align: center;
  font-size: ${p => p.theme.font.size.lg};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 38px;
  color: white;
  position: relative;

  animation: ${p =>
      p.active ? DescriptionAnimation : DescriptionHiddenAnimation}
    0.5s linear;
  // animation-delay: ${p => (p.active ? '1s' : '0s')};
  opacity: ${p => (p.active ? 1 : 0)};

  &:before {
    content: '';
    //background-color: #ffffff1a;
    width: 90px;
    height: 45px;

    z-index: 10;
    position: absolute;
    left: -90px;
    top: 0px;
    mask-size: 70px 45px;
    mask-repeat: no-repeat;

    background-image: url("data:image/svg+xml,<svg width='86' height='55' viewBox='0 0 86 55' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z' fill='%23f1f1f1'/></svg>%0A");
  }
`;

export const AvatarWrapper = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  opacity: ${p => (p.active ? 1 : 0)};
`;

export const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const Name = styled.p`
  color: #ffffffb3;
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.sm};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const DotButton = styled.div<{ active?: boolean }>`
  height: 6px;
  width: 6px;
  background-color: ${p =>
    p.active ? '#f1f1f1' : 'rgba(255, 255, 255, 0.12)'};
  border-radius: 50px;
`;

export const ItemsWrapper = styled.div`
  height: 256px;
  position: relative;
  width: 100%;
`;

export const Item = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  // opacity: ${p => (p.active ? 1 : 0)};
`;
