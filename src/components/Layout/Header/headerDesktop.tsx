import {
  ActionWrapper,
  Flag,
  FlagWrapper,
  LogoImage,
  LogoWrapper,
  MenuItem,
  MenuList,
  MenuWrapper,
  Wrapper,
} from './styled';
import { DropDownIcon } from 'components';
import React from 'react';
import { CartMajor, CustomersMajor, SearchMajor } from '@shopify/polaris-icons';

const HeaderDesktop = () => {
  const [isBackground, setIsBackground] = React.useState(false);

  const controlTabBar = () => {
    if (typeof window !== 'undefined') {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > window.innerHeight * 0.5) {
        setIsBackground(true);
      } else {
        setIsBackground(false);
      }
    }
  };

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlTabBar);

      return () => {
        window.removeEventListener('scroll', controlTabBar);
      };
    }
  }, []);

  return (
    <Wrapper id={'header'} isBackground={isBackground}>
      <MenuWrapper>
        <MenuList>
          <MenuItem>
            Shop
            <DropDownIcon width={30} height={20} color={'#fff'}></DropDownIcon>
          </MenuItem>
          <MenuItem>
            Designer{' '}
            <DropDownIcon width={30} height={20} color={'#fff'}></DropDownIcon>
          </MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Theme Features</MenuItem>
        </MenuList>
        <LogoWrapper>
          <LogoImage
            src={
              isBackground
                ? 'https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact.png?v=1653297704&width=150'
                : 'https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact-white.png?v=1653297733&width=240'
            }
            alt={'logo image'}
          ></LogoImage>
        </LogoWrapper>

        <MenuList>
          <MenuItem>FAG</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>
            <FlagWrapper>
              <Flag></Flag>
            </FlagWrapper>
            <DropDownIcon width={30} height={20} color={'#fff'}></DropDownIcon>
          </MenuItem>
          <MenuItem>
            <ActionWrapper>
              <CartMajor width={24} height={24} color={'none'}></CartMajor>
              <SearchMajor width={24} height={24} color={'none'}></SearchMajor>
              <CustomersMajor
                width={24}
                height={24}
                color={'#fff'}
              ></CustomersMajor>
            </ActionWrapper>
          </MenuItem>
        </MenuList>
      </MenuWrapper>
    </Wrapper>
  );
};

export default HeaderDesktop;
