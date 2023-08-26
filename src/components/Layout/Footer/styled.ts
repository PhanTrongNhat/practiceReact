import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 64px 48px;
`;

export const LogoImage = styled.img`
  height: 32px;
  width: 150px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  flex-basis: 33.3333%;
`;

export const Description = styled.h3`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 32px;
  line-height: 38px;
`;

export const EmailInput = styled.input`
  padding: 0px 20px 0px;
  width: 252px;
  height: 60px;
  border: 1px solid rgba(39, 39, 39, 0.12);
  background-color: transparent;

  &::placeholder {
    font: 1rem sans-serif;
    display: flex;
    align-items: flex-start;
  }
`;

export const EmailWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const ButtonEmailWrapper = styled.div`
  width: 24px;
  height: 24px;
  background-color: rgba(39, 39, 39, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;

  svg {
    transform: rotate(180deg);
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Item = styled.li`
  color: rgb(39, 39, 39);
  opacity: 0.7;
  font-size: ${p => p.theme.font.size.sm};
  line-height: 25px;
  font-weight: ${p => p.theme.font.weight.regular};

  a {
    text-decoration: underline;
    text-underline-offset: 4px;
    margin-right: 5px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.p`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  color: rgb(39, 39, 39);
`;

export const SocialWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  display: flex;
  height: 47px;
  width: 47px;
  justify-content: center;
  align-items: center;
`;

export const UnitAndSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

export const Flag = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  filter: drop-shadow(0px 2px 3px rgb(0 0 0 / 0.1));
  background: image-set(
      url('https://impact-theme-home.myshopify.com/cdn/shop/t/7/assets/country-flags.png?v=37230036826556269641671675041')
        1x,
      url('https://impact-theme-home.myshopify.com/cdn/shop/t/7/assets/country-flags-2x.png?v=119388446682176363021671675041')
        2x
    )
    no-repeat top left;
  background-position: -126px -315px;
`;

export const Select = styled.select`
  height: fit-content;
  border: none;
  background-color: transparent;
  box-sizing: unset;
`;

export const Option = styled.option`
  color: #272727;
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const CopyrightPaymentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const IconPaymentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Copyright = styled.p`
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 22px;
  color: rgba(39, 39, 39, 0.7);
`;
