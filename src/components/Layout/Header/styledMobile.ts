import styled from 'styled-components';

export const Wrapper = styled.div<{ isBackground: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  position: absolute;
  width: 100%;
  z-index: 1000;
  color: white;

  svg {
    fill: white;
  }

  ${p =>
    p.isBackground
      ? `
  background-color: #fff;
  color:#272727;
  top:0px;
  position: fixed;
    svg {
    fill: #272727 !important;
  }
  
  `
      : ''};
`;

export const LogoTile = styled.h1`
  font-size: ${p => p.theme.font.size.xl};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 45px;
  font-family: ${p => p.theme.font.familyTitle};
`;

export const LogoWrapper = styled.div`
  flex-basis: 100px;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 21px;
  width: 100px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 22px;

  ul:nth-child(3) {
    justify-content: flex-end;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;

  flex-wrap: wrap;
  padding-left: 0px;

  flex: 1;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.bold};
  cursor: pointer;
  line-height: 16px;
  //color: white;
  display: flex;

  svg {
    cursor: pointer;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 24px;

  svg {
    cursor: pointer;
  }
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

export const FlagWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
